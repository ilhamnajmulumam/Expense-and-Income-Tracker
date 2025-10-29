'use client';

import { Search } from 'lucide-react';
import Link from 'next/link';

export default function CategoriesClient({ categories }) {
    return (
        <div className="flex flex-col gap-6 md:p-20 h-[100vh]">
            <h2 className="font-bold text-3xl">Categories</h2>

            <div className="p-4 bg-white rounded-md h-[100vh]">
                <div className="flex justify-between">
                    <label className="px-4 py-2 flex items-center justify-center gap-3 border rounded-sm">
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
                                    Created
                                </th>
                                <th className="px-4 py-2 text-center text-sm font-medium text-gray-600">
                                    Updated
                                </th>
                                <th className="px-4 py-2 text-center text-sm font-medium text-gray-600">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y">
                            {categories.map((t, index) => (
                                <tr key={t.id} className="hover:bg-gray-50">
                                    <td className="px-4 py-3 text-sm text-gray-700">
                                        {index + 1}
                                    </td>
                                    <td className="px-4 py-3 text-sm text-gray-700">
                                        {t.name}
                                    </td>
                                    <td className="px-4 py-3 text-sm text-gray-700">
                                        {t.description ?? '-'}
                                    </td>
                                    <td className="px-4 py-3 text-center text-sm text-gray-700">
                                        {new Date(
                                            t.createdAt
                                        ).toLocaleDateString()}
                                    </td>
                                    <td className="px-4 py-3 text-center text-sm text-gray-700">
                                        {new Date(
                                            t.updatedAt
                                        ).toLocaleDateString()}
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

                    {categories.length === 0 && (
                        <p className="text-center text-gray-500 mt-6">
                            Belum ada kategori.
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}
