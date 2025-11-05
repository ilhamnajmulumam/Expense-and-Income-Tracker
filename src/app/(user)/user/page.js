import { headers } from 'next/headers';
import { auth } from '../../../../lib/auth';
import UserPageClient from './user-client';
import { redirect } from 'next/navigation';
import {
    getAvailableMonthsServer,
    getExpenseBreakdownServer,
    getFinancialSummary,
    getFourTransactions,
    getMonthlySummaryServer,
} from '../../../../lib/action/transactions-action';
import IncomeExpenseChart from '@/component/IncomeExpenseChart';
import ExpenseBreakdownChart from '@/component/ExpenseBreakDownChart';

export default async function UserPage() {
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    if (!session) {
        redirect('/sign-in');
    }

    const summary = await getFinancialSummary();
    const transactions = await getFourTransactions();
    const dataServer = await getMonthlySummaryServer();
    const availableMonths = await getAvailableMonthsServer();

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

    const breakdownData = {};
    for (const label of availableMonths) {
        const [monthName, yearStr] = label.split(' ');
        const month = monthNames.indexOf(monthName) + 1;
        const year = Number(yearStr);

        const data = await getExpenseBreakdownServer(month, year);
        breakdownData[label] = data;
    }

    // Format data agar cocok untuk tabel
    const formattedTransactions = transactions.map((t) => ({
        id: t.id,
        date: t.date.toISOString().split('T')[0],
        description: t.description,
        category: t.categoryId ? t.category.name : '', // bisa diubah ke nama kategori jika include category
        amount: t.amount,
        type: t.type,
    }));

    return (
        <div className="bg-gray-200">
            <div className="flex flex-col gap-6 md:p-20 h-[100vh]">
                <UserPageClient
                    session={session}
                    summary={summary}
                    transactions={formattedTransactions}
                />
                {/* Dua Bagian Tengah */}
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1 bg-white shadow-md rounded-md p-6">
                        <h3 className="font-semibold mb-2">
                            Income vs Expenses
                        </h3>
                        <div className="h-80 flex text-gray-400">
                            <IncomeExpenseChart dataServer={dataServer} />
                        </div>
                    </div>

                    <div className="flex-1 bg-white shadow-md rounded-md p-6">
                        <h3 className="font-semibold mb-2">
                            Expenses Breakdown
                        </h3>
                        <div className="h-80 flex items-center justify-center text-gray-400">
                            <ExpenseBreakdownChart
                                breakdownData={breakdownData}
                                availableMonths={availableMonths}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
