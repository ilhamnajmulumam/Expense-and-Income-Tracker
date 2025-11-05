'use client';
import {
    BanknoteArrowUp,
    Wallet,
    BanknoteArrowDown,
    PiggyBank,
} from 'lucide-react';
import Link from 'next/link';

export default function UserPageClient({ session, summary, transactions }) {
    const user = session.user;
    const { balance, totalIncome, totalExpense, totalSaving } = summary;

    const formatCurrency = (value) =>
        // format ke Rupiah (IDR) tanpa desimal
        new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            maximumFractionDigits: 0,
        }).format(value);

    return (
        <div>
            <div>
                <h2 className="text-3xl font-bold">Welcome {user.name}</h2>
            </div>

            {/* Empat Kartu Statistik */}
            <div className="flex flex-wrap gap-4">
                <div className="flex-1 min-w-[200px] p-4 rounded-md bg-white shadow-xl flex justify-between items-center">
                    <div>
                        <h3 className="font-semibold text-gray-600">
                            Total Balance
                        </h3>
                        <p className="text-xl font-bold text-gray-800">
                            {(balance ?? 0).toLocaleString()}
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
                            {(totalIncome ?? 0).toLocaleString()}
                        </p>
                    </div>
                    <BanknoteArrowUp size={30} />
                </div>

                <div className="flex-1 min-w-[200px] p-4 rounded-md bg-white shadow-xl flex justify-between items-center">
                    <div>
                        <h3 className="font-semibold text-gray-600">
                            Total Expenses
                        </h3>
                        <p className="text-xl font-bold text-red-600">
                            {(totalExpense ?? 0).toLocaleString()}
                        </p>
                    </div>
                    <BanknoteArrowDown size={30} />
                </div>

                <div className="flex-1 min-w-[200px] p-4 rounded-md bg-white shadow-xl flex justify-between items-center">
                    <div>
                        <h3 className="font-semibold text-gray-600">
                            Savings Rate
                        </h3>
                        <p className="text-xl font-bold text-blue-600">
                            {(totalSaving ?? 0).toLocaleString()}
                        </p>
                    </div>
                    <PiggyBank size={30} />
                </div>
            </div>

            {/* Bagian Bawah */}
            <div className="bg-white shadow-md rounded-md p-6 flex flex-col gap-3">
                <div className="flex justify-between">
                    <h3 className="font-semibold mb-2">Recent Transactions</h3>
                    <Link
                        href="user/transactions"
                        className="font-semibold  px-4 py-2 rounded-md bg-blue-200"
                    >
                        Click To View More
                    </Link>
                </div>

                <div className="h-48 flex items-center justify-center text-gray-400">
                    <table className="min-w-full divide-y">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                                    Date
                                </th>
                                <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                                    Description
                                </th>
                                <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                                    Category
                                </th>
                                <th className="px-4 py-2 text-center text-sm font-medium text-gray-600">
                                    Amount
                                </th>
                                <th className="px-4 py-2 text-center text-sm font-medium text-gray-600">
                                    Type
                                </th>
                                <th className="px-4 py-2 text-center text-sm font-medium text-gray-600">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y">
                            {transactions.length > 0 ? (
                                transactions.map((t) => (
                                    <tr key={t.id} className="hover:bg-gray-50">
                                        <td className="px-4 py-3 text-sm text-gray-700">
                                            {t.date}
                                        </td>
                                        <td className="px-4 py-3 text-sm text-gray-700">
                                            {t.description}
                                        </td>
                                        <td className="px-4 py-3 text-sm text-gray-700">
                                            {t.category}
                                        </td>
                                        <td
                                            className={`px-4 py-3 text-sm font-medium text-center ${
                                                t.type === 'INCOME'
                                                    ? 'text-green-600'
                                                    : 'text-red-600'
                                            }`}
                                        >
                                            {formatCurrency(Math.abs(t.amount))}
                                        </td>
                                        <td className="px-4 py-3 text-center text-sm text-gray-700">
                                            {t.type}
                                        </td>
                                        <td className="px-4 py-3 text-center">
                                            <button className="text-sm text-blue-600 hover:underline mr-2">
                                                Edit
                                            </button>
                                            <button className="text-sm text-red-600 hover:underline">
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td
                                        colSpan={6}
                                        className="text-center py-4 text-gray-500 text-sm"
                                    >
                                        No transactions found.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
