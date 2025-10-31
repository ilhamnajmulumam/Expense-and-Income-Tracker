'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { updateCategory } from '../../../../../../../lib/action/category-action';
import { useState } from 'react';

export default function EditCategoryClient({ category }) {
    const updateCategoryWithId = updateCategory.bind(null, category.id);

    const [form, setForm] = useState({
        name: category.name || '',
        description: category.description || '',
        type: category.type || 'EXPENSE',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setForm((prevForm) => ({ ...prevForm, [name]: value }));
    };

    return (
        <div className="flex flex-col gap-6 md:p-20 h-[100vh]">
            <div className="flex">
                <Link
                    href="/user/categories"
                    className="flex gap-3 text-xl items-center"
                >
                    <ArrowLeft /> Back
                </Link>
            </div>

            <h1 className="font-bold text-3xl">Add Category</h1>
            <div className="flex justify-center h-[100vh] items-center">
                <form
                    action={updateCategoryWithId}
                    className="flex flex-col gap-4 bg-white w-150 rounded-2xl p-10"
                >
                    <label className="flex flex-col gap-2">
                        <span>Category</span>
                        <input
                            name="name"
                            className="border rounded-md p-4"
                            type="text"
                            value={form.name}
                            onChange={handleChange}
                        />
                    </label>
                    <label className="flex flex-col gap-2">
                        <span>Description</span>
                        <textarea
                            name="description"
                            className="border rounded-md h-30 p-4"
                            type="text"
                            value={form.description || ''}
                            onChange={handleChange}
                        />
                    </label>
                    <label className="flex flex-col gap-2">
                        <span>Type</span>
                        <select
                            name="type"
                            className="border rounded-md p-3"
                            value={form.type}
                            onChange={handleChange}
                        >
                            <option value="EXPENSE">Expense</option>
                            <option value="INCOME">Income</option>
                            <option value="SAVING">Saving</option>
                        </select>
                    </label>
                    <button
                        type="submit"
                        className="bg-blue-600 text-white rounded-md p-2 hover:bg-blue-700 transition"
                    >
                        Save
                    </button>
                </form>
            </div>
        </div>
    );
}
