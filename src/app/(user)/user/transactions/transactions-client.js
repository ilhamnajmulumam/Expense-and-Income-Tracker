// ...existing code...
import { Search } from 'lucide-react';

export default function TransactionsClient() {
    const transactions = [
        {
            id: 1,
            date: '2025-10-01',
            description: 'Freelance project',
            category: 'Work',
            amount: 15000000,
            type: 'Income',
        },
        {
            id: 2,
            date: '2025-10-05',
            description: 'Groceries',
            category: 'Food',
            amount: -10000,
            type: 'Expense',
        },
        {
            id: 3,
            date: '2025-10-08',
            description: 'Salary',
            category: 'Salary',
            amount: 32000000,
            type: 'Income',
        },
        {
            id: 4,
            date: '2025-10-10',
            description: 'Electric bill',
            category: 'Utilities',
            amount: -100000,
            type: 'Expense',
        },
    ];
    // ...existing code...
    const formatCurrency = (value) =>
        // format ke Rupiah (IDR) tanpa desimal
        new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            maximumFractionDigits: 0,
        }).format(value);
    // ...existing code...

    return (
        <div className="flex flex-col gap-6 md:p-20 h-[100vh]">
            <div>
                <h2 className="text-3xl font-bold">Transactions History</h2>
            </div>
            <div className="bg-white shadow-md p-4 rounded-2xl h-[100vh]">
                <div className="flex justify-between">
                    <div className="flex gap-2">
                        <button className="w-20 h-10 border rounded-lg">
                            All
                        </button>
                        <button className="w-20 h-10 border rounded-lg">
                            Income
                        </button>
                        <button className="w-20 h-10 border rounded-lg">
                            Expense
                        </button>
                    </div>
                    <div className="flex gap-2 items-center border p-2 rounded-xl">
                        <Search />
                        <input
                            type="text"
                            placeholder="Search"
                            className="outline-none"
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
                                <th className="px-4 py-2 text-right text-sm font-medium text-gray-600">
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
                            {transactions.map((t) => (
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
                                        className={`px-4 py-3 text-sm font-medium ${
                                            t.amount >= 0
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
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
// ...existing code...
