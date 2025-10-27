import { Search } from 'lucide-react';
import Link from 'next/link';

export default function CategoriesClient() {
    const categories = [
        {
            id: 1,
            category: 'Food',
            description: 'Groceries, dining out, etc.',
            createDate: new Date(),
            editDate: new Date(),
        },
        {
            id: 2,
            category: 'Entertainment',
            description: 'Movies, concerts, etc.',
            createDate: new Date(),
            editDate: new Date(),
        },
        {
            id: 3,
            category: 'Transportation',
            description: 'Gas, Uber, etc.',
            createDate: new Date(),
            editDate: new Date(),
        },
        {
            id: 4,
            category: 'Work',
            description: 'Office supplies, equipment, etc.',
            createDate: new Date(),
            editDate: new Date(),
        },
        {
            id: 5,
            category: 'Salary',
            description: 'Paycheck, bonuses, etc.',
            createDate: new Date(),
            editDate: new Date(),
        },
        {
            id: 6,
            category: 'Gifts',
            description: 'Gifts, presents, etc.',
            createDate: new Date(),
            editDate: new Date(),
        },
    ];

    return (
        <div className="flex flex-col gap-6 md:p-20 h-[100vh]">
            <h2 className="font-bold text-3xl">Categories</h2>

            <div className="p-4 bg-white rounded-md h-[100vh]">
                <div className="flex justify-between">
                    <label className=" px-4 py-2 flex items-center justify-center gap-3 border rounded-sm">
                        <Search />
                        <input type="text" placeholder="Search" />
                    </label>
                    <Link
                        href="categories/add-category"
                        className="border px-4 py-2 rounded-md"
                    >
                        Add Category
                    </Link>
                </div>
                <div className="mt-6 overflow-auto rounded-md border-t border-b">
                    <table className="min-w-full divide-y">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                                    No
                                </th>
                                <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                                    Category
                                </th>
                                <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                                    Description
                                </th>
                                <th className="px-4 py-2 text-center text-sm font-medium text-gray-600">
                                    Create Date
                                </th>
                                <th className="px-4 py-2 text-center text-sm font-medium text-gray-600">
                                    Edit Date
                                </th>
                                <th className="px-4 py-2 text-center text-sm font-medium text-gray-600">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y">
                            {categories.map((t) => (
                                <tr key={t.id} className="hover:bg-gray-50">
                                    <td className="px-4 py-3 text-sm text-gray-700">
                                        {t.id}
                                    </td>
                                    <td className="px-4 py-3 text-sm text-gray-700">
                                        {t.category}
                                    </td>
                                    <td className="px-4 py-3 text-sm text-gray-700">
                                        {t.description}
                                    </td>
                                    <td className="px-4 py-3 text-center text-sm text-gray-700">
                                        {t.createDate.toDateString()}
                                    </td>
                                    <td className="px-4 py-3 text-center text-sm text-gray-700">
                                        {t.editDate.toDateString()}
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
