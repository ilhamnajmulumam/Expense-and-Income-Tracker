'use client';

import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { useFormStatus } from 'react-dom';
import { addCategory } from '../../../../../../lib/action/category-action';

function SubmitButton() {
    const { pending } = useFormStatus();
    return (
        <button
            type="submit"
            disabled={pending}
            className="bg-blue-600 text-white rounded-md p-2"
        >
            {pending ? 'Saving...' : 'Save'}
        </button>
    );
}

export default function AddCategoryClient() {
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
                    action={addCategory}
                    className="flex flex-col gap-4 bg-white w-150 rounded-2xl p-10"
                >
                    <label className="flex flex-col gap-2">
                        <span>Category</span>
                        <input
                            name="name"
                            className="border rounded-md p-4"
                            type="text"
                        />
                    </label>
                    <label className="flex flex-col gap-2">
                        <span>Description</span>
                        <textarea
                            name="description"
                            className="border rounded-md h-30 p-4"
                            type="text"
                        />
                    </label>
                    <label className="flex flex-col gap-2">
                        <span>Type</span>
                        <select name="type" className="border rounded-md p-3">
                            <option value="EXPENSE">Expense</option>
                            <option value="INCOME">Income</option>
                            <option value="SAVING">Saving</option>
                        </select>
                    </label>
                    <SubmitButton />
                </form>
            </div>
        </div>
    );
}
