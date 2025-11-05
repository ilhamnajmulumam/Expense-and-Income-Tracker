'use server';

import { headers } from 'next/headers';
import { auth } from '../auth';
import { PrismaClient } from '../generated/prisma';

const prisma = new PrismaClient();

export async function getTransactions() {
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    const userId = session?.user?.id;
    if (!userId) {
        throw new Error('User not authenticated');
    }

    const transactions = await prisma.transaction.findMany({
        where: { userId },
        include: { category: true },
        orderBy: { date: 'desc' },
    });

    return transactions;
}

export async function getFourTransactions() {
    try {
        const transactions = await prisma.transaction.findMany({
            orderBy: { date: 'desc' }, // Urutkan dari yang terbaru
            take: 3, // Ambil hanya 4 data terbaru
            include: {
                category: true, // supaya bisa akses nama kategori
            },
        });

        return transactions;
    } catch (error) {
        console.error('Error fetching transactions:', error);
        return [];
    }
}

export async function addTransaction(formData) {
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    const userId = session?.user?.id;
    if (!userId) {
        throw new Error('User not authenticated');
    }

    const transactionType = formData.get('transactionType');
    const categoryId = formData.get('category') || null; // bisa null
    const amount = parseFloat(formData.get('amount'));
    const dateStr = formData.get('date');
    const description = formData.get('description') || '';

    if (!transactionType || !amount || !dateStr) {
        throw new Error('Transaction type, amount, and date are required');
    }

    const date = new Date(dateStr);
    const month = date.getMonth() + 1; // getMonth() mulai dari 0
    const year = date.getFullYear();

    const transaction = await prisma.transaction.create({
        data: {
            type: transactionType,
            amount,
            description,
            date,
            month,
            year,
            user: { connect: { id: userId } },
            ...(categoryId && { category: { connect: { id: categoryId } } }),
        },
    });

    return transaction;
}

export async function getFinancialSummary() {
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    const userId = session?.user?.id;
    if (!userId) {
        throw new Error('User not authenticated');
    }

    // Hitung total income dan expense
    const transactions = await prisma.transaction.findMany({
        where: { userId },
        select: { amount: true, type: true },
    });

    const totalIncome = transactions
        .filter((t) => t.type === 'INCOME')
        .reduce((sum, t) => sum + t.amount, 0);

    const totalExpense = transactions
        .filter((t) => t.type === 'EXPENSE')
        .reduce((sum, t) => sum + t.amount, 0);

    const totalSaving = transactions
        .filter((t) => t.type === 'SAVING')
        .reduce((sum, t) => sum + t.amount, 0);

    // Rumus: balance = income - expense + saving
    const balance = totalIncome - totalExpense + totalSaving;

    return {
        totalIncome,
        totalExpense,
        totalSaving,
        balance,
    };
}

export async function getMonthlySummaryServer() {
    const session = await auth.api.getSession({
        headers: await headers(),
    });
    const userId = session?.user?.id;
    if (!userId) return null;

    // Group transaksi berdasarkan bulan dan tahun
    const transactions = await prisma.transaction.groupBy({
        by: ['month', 'year', 'type'],
        _sum: { amount: true },
        where: {
            userId,
            type: { in: ['INCOME', 'EXPENSE'] },
        },
        orderBy: [{ year: 'asc' }, { month: 'asc' }],
    });

    // Nama-nama bulan
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

    // Buat struktur data untuk chart
    const labels = [];
    const income = [];
    const expense = [];

    // Gabungkan income & expense per bulan
    const grouped = {};

    for (const t of transactions) {
        const label = `${monthNames[t.month - 1]} ${t.year}`;
        if (!grouped[label]) grouped[label] = { income: 0, expense: 0 };

        if (t.type === 'INCOME') grouped[label].income += t._sum.amount || 0;
        else if (t.type === 'EXPENSE')
            grouped[label].expense += t._sum.amount || 0;
    }

    // Ubah ke array
    for (const [label, values] of Object.entries(grouped)) {
        labels.push(label);
        income.push(values.income);
        expense.push(values.expense);
    }

    return { labels, income, expense };
}

export async function getExpenseBreakdownServer(month, year) {
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    const userId = session?.user?.id;
    if (!userId) return null;

    const expenses = await prisma.transaction.findMany({
        where: {
            userId,
            type: 'EXPENSE',
            month,
            year,
        },
        include: { category: true },
    });

    const categoryTotals = {};
    for (const exp of expenses) {
        const category = exp.category?.name || 'Lainnya';
        categoryTotals[category] = (categoryTotals[category] || 0) + exp.amount;
    }

    const labels = Object.keys(categoryTotals);
    const values = Object.values(categoryTotals);

    return { labels, values };
}

export async function getAvailableMonthsServer() {
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    const userId = session?.user?.id;
    if (!userId) return [];

    const transactions = await prisma.transaction.findMany({
        where: { userId, type: 'EXPENSE' },
        select: { month: true, year: true },
        orderBy: [{ year: 'desc' }, { month: 'desc' }],
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

    const uniqueMonths = new Set();
    for (const t of transactions) {
        uniqueMonths.add(`${monthNames[t.month - 1]} ${t.year}`);
    }

    return Array.from(uniqueMonths);
}
