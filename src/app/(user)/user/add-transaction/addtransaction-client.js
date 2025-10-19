export default function AddTransactionClient() {
    return (
        <div className="flex flex-col  gap-6 md:p-20 h-[100vh]">
            <div className="text-3xl font-bold">
                <h1>Add Transaction</h1>
            </div>

            <div className="flex justify-center ">
                <form
                    action=""
                    className="flex flex-col gap-4 bg-white w-150 h[100vh] rounded-2xl p-10 "
                >
                    <div className="flex flex-col">
                        <span className="">Transaction Type</span>
                        <div className="flex gap-4">
                            <label className="flex gap-2">
                                <input
                                    type="radio"
                                    name="transactionType"
                                    className="border rounded-md"
                                />
                                <span className="text-green-600">Income</span>
                            </label>
                            <label className="flex gap-2">
                                <input
                                    type="radio"
                                    name="transactionType"
                                    className="border rounded-md"
                                />
                                <span className="text-red-600">Expense</span>
                            </label>
                        </div>
                    </div>
                    <div>
                        <label className="flex flex-col gap-2">
                            <span className="">Category</span>
                            <select
                                name="category"
                                className="border rounded-sm p-2"
                            >
                                <option value="Job">Job</option>
                                <option value="Salary">Salary</option>
                                <option value="Food">Food</option>
                                <option value="Entertainment">
                                    Entertainment
                                </option>
                                <option value="Transportation">
                                    Transportation
                                </option>
                                <option value="Others">Others</option>
                            </select>
                        </label>
                    </div>
                    <div>
                        <label className="flex flex-col gap-2">
                            <span className="text-gray-600">Amount</span>
                            <input
                                type="number"
                                className="border rounded-md p-2"
                                placeholder="10.000"
                            />
                        </label>
                    </div>
                    <div>
                        <label className="flex flex-col gap-2">
                            <span className="text-gray-600">Date</span>
                            <input
                                type="date"
                                className="border rounded-md p-2"
                            />
                        </label>
                    </div>
                    <div>
                        <label className="flex flex-col gap-2">
                            <span className="text-gray-600">Description</span>
                            <input
                                type="text"
                                className="border rounded-md p-2 "
                                placeholder="Buy groceries"
                            />
                        </label>
                    </div>
                    <button
                        type="submit"
                        className="bg-green-600 text-white p-2 rounded-md"
                    >
                        Add Transaction
                    </button>
                </form>
            </div>
        </div>
    );
}
