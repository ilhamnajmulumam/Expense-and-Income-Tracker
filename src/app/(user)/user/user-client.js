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
        new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            maximumFractionDigits: 0,
        }).format(value);

    return (
        <div className="flex flex-col gap-6  w-full">
            {/* Header welcome */}
            <div>
                <h2 className="text-2xl md:text-3xl font-bold">
                    Welcome {user.name}
                </h2>
            </div>

            {/* Statistik Responsif */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Total Balance */}
                <div className="p-4 rounded-md bg-white shadow-xl flex justify-between items-center">
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

                {/* Income */}
                <div className="p-4 rounded-md bg-white shadow-xl flex justify-between items-center">
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

                {/* Expenses */}
                <div className="p-4 rounded-md bg-white shadow-xl flex justify-between items-center">
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

                {/* Savings */}
                <div className="p-4 rounded-md bg-white shadow-xl flex justify-between items-center">
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

            {/* Recent Transactions */}
            <div className="bg-white shadow-md rounded-md p-4 md:p-6 flex flex-col gap-3">
                <div className="flex justify-between flex-wrap gap-2">
                    <h3 className="font-semibold mb-2 text-lg">
                        Recent Transactions
                    </h3>
                    <Link
                        href="/user/transactions"
                        className="font-semibold px-4 py-2 rounded-md bg-blue-200"
                    >
                        Click To View More
                    </Link>
                </div>

                {/* Table with horizontal scroll on mobile */}
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y text-sm">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-4 py-2 text-left font-medium text-gray-600">
                                    Date
                                </th>
                                <th className="px-4 py-2 text-left font-medium text-gray-600">
                                    Description
                                </th>
                                <th className="px-4 py-2 text-left font-medium text-gray-600">
                                    Category
                                </th>
                                <th className="px-4 py-2 text-center font-medium text-gray-600">
                                    Amount
                                </th>
                                <th className="px-4 py-2 text-center font-medium text-gray-600">
                                    Type
                                </th>
                                <th className="px-4 py-2 text-center font-medium text-gray-600">
                                    Actions
                                </th>
                            </tr>
                        </thead>

                        <tbody className="bg-white divide-y">
                            {transactions.length > 0 ? (
                                transactions.map((t) => (
                                    <tr
                                        key={t.id}
                                        className="hover:bg-gray-50 whitespace-nowrap"
                                    >
                                        <td className="px-4 py-3 text-gray-700">
                                            {t.date}
                                        </td>
                                        <td className="px-4 py-3 text-gray-700">
                                            {t.description}
                                        </td>
                                        <td className="px-4 py-3 text-gray-700">
                                            {t.category}
                                        </td>
                                        <td
                                            className={`px-4 py-3 font-medium text-center ${
                                                t.type === 'INCOME'
                                                    ? 'text-green-600'
                                                    : 'text-red-600'
                                            }`}
                                        >
                                            {formatCurrency(Math.abs(t.amount))}
                                        </td>
                                        <td className="px-4 py-3 text-center text-gray-700">
                                            {t.type}
                                        </td>
                                        <td className="px-4 py-3 text-center">
                                            <button className="text-blue-600 hover:underline mr-2">
                                                Edit
                                            </button>
                                            <button className="text-red-600 hover:underline">
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td
                                        colSpan={6}
                                        className="text-center py-4 text-gray-500"
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
