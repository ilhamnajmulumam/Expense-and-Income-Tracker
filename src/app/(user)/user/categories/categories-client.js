'use client';

import { Search } from 'lucide-react';
import Link from 'next/link';
import { useTransition, useState, useMemo } from 'react';
import { deleteCategory } from '../../../../../lib/action/category-action'; // 🔥 pastikan path ini benar

export default function CategoriesClient({ categories }) {
    const [isPending, startTransition] = useTransition();
    const [searchTerm, setSearchTerm] = useState('');

    const handleDelete = async (id) => {
        const confirmDelete = confirm('Yakin ingin menghapus kategori ini?');
        if (!confirmDelete) return;

        startTransition(async () => {
            try {
                const res = await deleteCategory(id);
                if (res?.success) {
                    alert('Berhasil menghapus kategori!');
                    window.location.reload(); // Refresh halaman agar data terbaru tampil
                } else {
                    alert('Gagal menghapus kategori.');
                }
            } catch (err) {
                console.error(err);
                alert('Terjadi kesalahan saat menghapus kategori.');
            }
        });
    };

    // 🔍 Filter kategori sesuai pencarian (nama atau deskripsi)
    const filteredCategories = useMemo(() => {
        return categories.filter((t) => {
            const lowerSearch = searchTerm.toLowerCase();
            return (
                t.name.toLowerCase().includes(lowerSearch) ||
                (t.description?.toLowerCase() || '').includes(lowerSearch)
            );
        });
    }, [categories, searchTerm]);

    return (
        <div className="flex flex-col gap-6 md:p-20 h-[100vh]">
            <h2 className="font-bold text-3xl">Categories</h2>

            <div className="p-4 bg-white rounded-md h-[100vh]">
                <div className="flex justify-between items-center">
                    <label className="px-4 py-2 flex items-center gap-3 border rounded-md w-full max-w-sm">
                        <Search className="text-gray-500" />
                        <input
                            type="text"
                            placeholder="Search category..."
                            className="outline-none w-full"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </label>

                    <Link
                        href="categories/add-category"
                        className="border px-4 py-2 rounded-md hover:bg-blue-600 hover:text-white transition"
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
                                    Type
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
                            {filteredCategories.length > 0 ? (
                                filteredCategories.map((t, index) => (
                                    <tr
                                        key={t.id}
                                        className="hover:bg-gray-50 transition"
                                    >
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
                                            {t.type}
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
                                        <td className="px-4 py-3 text-center flex gap-2 justify-center">
                                            <Link
                                                href={`categories/${t.id}/edit-category`}
                                                className="text-sm text-blue-600 hover:underline"
                                            >
                                                Edit
                                            </Link>

                                            <button
                                                onClick={() =>
                                                    handleDelete(t.id)
                                                }
                                                disabled={isPending}
                                                className="text-sm text-red-600 hover:underline disabled:opacity-50"
                                            >
                                                {isPending
                                                    ? 'Deleting...'
                                                    : 'Delete'}
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td
                                        colSpan="7"
                                        className="text-center text-gray-500 py-6"
                                    >
                                        Tidak ada kategori yang cocok dengan
                                        pencarian.
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
