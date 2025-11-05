import { headers } from 'next/headers';
import { auth } from '../auth';
import { PrismaClient } from '../generated/prisma';

const prisma = new PrismaClient();

export async function getYearlyReport() {
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    const userId = session?.user?.id;
    if (!userId) throw new Error('User not authenticated');

    const transactions = await prisma.transaction.groupBy({
        by: ['month', 'year', 'type'],
        _sum: { amount: true },
        where: {
            userId,
            type: { in: ['INCOME', 'EXPENSE', 'SAVING'] },
        },
        orderBy: [{ year: 'asc' }, { month: 'asc' }],
    });

    const monthNames = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ];

    const grouped = {};

    for (const t of transactions) {
        const label = `${monthNames[t.month - 1]} ${t.year}`;
        if (!grouped[label])
            grouped[label] = { income: 0, expense: 0, saving: 0 };

        if (t.type === 'INCOME') grouped[label].income += t._sum.amount || 0;
        else if (t.type === 'EXPENSE')
            grouped[label].expense += t._sum.amount || 0;
        else if (t.type === 'SAVING')
            grouped[label].saving += t._sum.amount || 0;
    }

    const result = Object.entries(grouped).map(([month, values]) => ({
        month,
        income: values.income,
        expense: values.expense,
        saving: values.saving,
    }));

    return result;
}

export async function getMonthlyReport(year, month) {
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    const userId = session?.user?.id;
    if (!userId) throw new Error('User not authenticated');

    const startDate = new Date(year, month - 1, 1);
    const endDate = new Date(year, month, 0, 23, 59, 59, 999);

    const transactions = await prisma.transaction.findMany({
        where: {
            userId,
            date: {
                gte: startDate,
                lte: endDate,
            },
        },
        include: { category: true },
        orderBy: { date: 'asc' },
    });

    let incomeTotal = 0;
    let expenseTotal = 0;
    const reportByCategory = {};

    transactions.forEach((t) => {
        if (t.type === 'INCOME') incomeTotal += t.amount;
        if (t.type === 'EXPENSE') expenseTotal += t.amount;

        const cat = t.category.name;
        if (!reportByCategory[cat])
            reportByCategory[cat] = { income: 0, expense: 0 };
        if (t.type === 'INCOME') reportByCategory[cat].income += t.amount;
        if (t.type === 'EXPENSE') reportByCategory[cat].expense += t.amount;
    });

    return { month, year, incomeTotal, expenseTotal, reportByCategory };
}
