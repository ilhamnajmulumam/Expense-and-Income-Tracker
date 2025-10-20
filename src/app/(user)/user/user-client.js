'use client';
import ExpenseBreakdownChart from '@/component/ExpenseBreakDownChart';
import IncomeExpenseChart from '@/component/IncomeExpenseChart';
import {
    BanknoteArrowUp,
    Wallet,
    BanknoteArrowDown,
    PiggyBank,
} from 'lucide-react';

export default function UserPageClient({ session }) {
    const user = session.user;

    return (
        <div className="flex flex-col gap-6 md:p-20 h-[100vh]">
            <div>
                <h2 className="text-3xl font-bold">
                    Financial Dashboard {user.name}
                </h2>
            </div>

            {/* Empat Kartu Statistik */}
            <div className="flex flex-wrap gap-4">
                <div className="flex-1 min-w-[200px] p-4 rounded-md bg-white shadow-xl flex justify-between items-center">
                    <div>
                        <h3 className="font-semibold text-gray-600">
                            Total Balance
                        </h3>
                        <p className="text-xl font-bold text-gray-800">
                            $10,000
                        </p>
                    </div>
                    <Wallet size={30} />
                </div>

                <div className="flex-1 min-w-[200px] p-4 rounded-md bg-white shadow-xl flex justify-between items-center">
                    <div>
                        <h3 className="font-semibold text-gray-600">
                            Total Income
                        </h3>
                        <p className="text-xl font-bold text-green-600">
                            $1,000
                        </p>
                    </div>
                    <BanknoteArrowUp size={30} />
                </div>

                <div className="flex-1 min-w-[200px] p-4 rounded-md bg-white shadow-xl flex justify-between items-center">
                    <div>
                        <h3 className="font-semibold text-gray-600">
                            Total Expenses
                        </h3>
                        <p className="text-xl font-bold text-red-600">$2,000</p>
                    </div>
                    <BanknoteArrowDown size={30} />
                </div>

                <div className="flex-1 min-w-[200px] p-4 rounded-md bg-white shadow-xl flex justify-between items-center">
                    <div>
                        <h3 className="font-semibold text-gray-600">
                            Savings Rate
                        </h3>
                        <p className="text-xl font-bold text-blue-600">
                            $2,000
                        </p>
                    </div>
                    <PiggyBank size={30} />
                </div>
            </div>

            {/* Dua Bagian Tengah */}
            <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 bg-white shadow-md rounded-md p-6">
                    <h3 className="font-semibold mb-2">Income vs Expenses</h3>
                    <div className="h-80 flex items-center justify-center text-gray-400">
                        <IncomeExpenseChart />
                    </div>
                </div>

                <div className="flex-1 bg-white shadow-md rounded-md p-6">
                    <h3 className="font-semibold mb-2">Expenses Breakdown</h3>
                    <div className="h-80 flex items-center justify-center text-gray-400">
                        <ExpenseBreakdownChart />
                    </div>
                </div>
            </div>

            {/* Bagian Bawah */}
            <div className="bg-white shadow-md rounded-md p-6">
                <h3 className="font-semibold mb-2">Recent Transactions</h3>
                <div className="h-48 flex items-center justify-center text-gray-400">
                    (Table Placeholder)
                </div>
            </div>
        </div>
    );
}
