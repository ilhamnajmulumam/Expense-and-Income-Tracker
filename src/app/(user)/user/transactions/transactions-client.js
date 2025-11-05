'use client';

import { Search } from 'lucide-react';
import { useState, useMemo } from 'react';

export default function TransactionsClient({ transactions }) {
    const [filterType, setFilterType] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');

    const formatCurrency = (value) =>
        // format ke Rupiah (IDR) tanpa desimal
        new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            maximumFractionDigits: 0,
        }).format(value);

    // Filter + Search logic
    const filteredTransactions = useMemo(() => {
        if (!transactions || !Array.isArray(transactions)) return [];

        return transactions.filter((t) => {
            // Filter berdasarkan tipe
            const matchType =
                filterType === 'all'
                    ? true
                    : t.type.toLowerCase() === filterType;

            // Filter berdasarkan pencarian
            const matchSearch =
                t.description
                    .toLowerCase()
                    .includes(searchQuery.toLowerCase()) ||
                t.category.toLowerCase().includes(searchQuery.toLowerCase());

            return matchType && matchSearch;
        });
    }, [transactions, filterType, searchQuery]);

    return (
        <div className="flex flex-col gap-6 md:p-20 h-[100vh]">
            <div>
                <h2 className="text-3xl font-bold">Transactions History</h2>
            </div>
            <div className="bg-white shadow-md p-4 rounded-2xl h-[100vh]">
                <div className="flex justify-between">
                    <div className="flex gap-2">
                        {['all', 'income', 'expense', 'saving'].map((type) => (
                            <button
                                key={type}
                                onClick={() => setFilterType(type)}
                                className={`w-24 h-10 border rounded-lg transition ${
                                    filterType === type
                                        ? 'bg-blue-600 text-white border-blue-600'
                                        : 'hover:bg-gray-100'
                                }`}
                            >
                                {type.charAt(0).toUpperCase() + type.slice(1)}
                            </button>
                        ))}
                    </div>
                    <div className="flex gap-2 items-center border p-2 rounded-xl">
                        <Search className="text-gray-500" />
                        <input
                            type="text"
                            placeholder="Search..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="outline-none w-40 md:w-60"
                        />
                    </div>
                </div>

                {/* Table */}
                <div className="mt-6 overflow-auto rounded-md border-t border-b">
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
                            {filteredTransactions.length > 0 ? (
                                filteredTransactions.map((t) => (
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
// ...existing code...
