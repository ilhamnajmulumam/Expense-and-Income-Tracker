'use client';

import { useState, useTransition } from 'react';
import { addTransaction } from '../../../../../lib/action/transactions-action';

export default function AddTransactionClient({ categories }) {
    const [isPending, startTransition] = useTransition();
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);

        startTransition(async () => {
            try {
                await addTransaction(formData);
                setMessage('✅ Transaction added successfully!');
                e.target.reset(); // reset form setelah berhasil
            } catch (error) {
                console.error(error);
                setMessage('❌ Failed to add transaction.');
            }
        });
    };

    return (
        <div className="flex flex-col gap-6 md:p-20 h-[100vh]">
            <div className="text-3xl font-bold">
                <h1>Add Transaction</h1>
            </div>

            <div className="flex justify-center">
                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-4 bg-white w-150 rounded-2xl p-10"
                >
                    {/* Transaction Type */}
                    <div className="flex flex-col">
                        <span className="font-medium text-gray-700 mb-1">
                            Transaction Type
                        </span>
                        <div className="flex gap-6">
                            {[
                                { value: 'INCOME', color: 'text-green-600' },
                                { value: 'EXPENSE', color: 'text-red-600' },
                                { value: 'SAVING', color: 'text-blue-600' },
                            ].map((item) => (
                                <label
                                    key={item.value}
                                    className="flex items-center gap-2 cursor-pointer"
                                >
                                    <input
                                        type="radio"
                                        name="transactionType"
                                        value={item.value}
                                        className={`accent-${
                                            item.color.split('-')[1]
                                        }-600`}
                                        required
                                    />
                                    <span className={item.color}>
                                        {item.value.charAt(0) +
                                            item.value.slice(1).toLowerCase()}
                                    </span>
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* Category */}
                    <div>
                        <label className="flex flex-col gap-2">
                            <span>Category</span>
                            <select
                                name="category"
                                className="border rounded-sm p-2"
                            >
                                {categories && categories.length > 0 ? (
                                    categories.map((category) => (
                                        <option
                                            key={category.id}
                                            value={category.id}
                                        >
                                            {category.name}
                                        </option>
                                    ))
                                ) : (
                                    <option disabled>Category not found</option>
                                )}
                            </select>
                        </label>
                    </div>

                    {/* Amount, Date, Description */}
                    <div>
                        <label className="flex flex-col gap-2">
                            <span className="text-gray-600">Amount</span>
                            <input
                                type="number"
                                name="amount"
                                className="border rounded-md p-2"
                                placeholder="10.000"
                                required
                            />
                        </label>
                    </div>
                    <div>
                        <label className="flex flex-col gap-2">
                            <span className="text-gray-600">Date</span>
                            <input
                                type="date"
                                name="date"
                                className="border rounded-md p-2"
                                required
                            />
                        </label>
                    </div>
                    <div>
                        <label className="flex flex-col gap-2">
                            <span className="text-gray-600">Description</span>
                            <input
                                type="text"
                                name="description"
                                className="border rounded-md p-2"
                                placeholder="Buy groceries"
                                required
                            />
                        </label>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={isPending}
                        className="bg-green-600 text-white p-2 rounded-md hover:bg-green-700 transition"
                    >
                        {isPending ? 'Saving...' : 'Add Transaction'}
                    </button>

                    {/* Notifikasi */}
                    {message && (
                        <div
                            className={`text-center mt-2 ${
                                message.startsWith('✅')
                                    ? 'text-green-600'
                                    : 'text-red-600'
                            }`}
                        >
                            {message}
                        </div>
                    )}
                </form>
            </div>
        </div>
    );
}
