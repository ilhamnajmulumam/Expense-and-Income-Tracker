export default function ReportsClient({ reports }) {
    return (
        <div className="flex flex-col gap-6 md:p-20 h-[100vh]">
            <h1 className="text-3xl font-bold mb-4">Laporan Keuangan</h1>
            <div className="p-4 bg-white rounded-md h-[100vh]">
                <table className="min-w-full divide-y">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-4 py-2 text-center text-sm font-medium text-gray-600">
                                No
                            </th>
                            <th className="px-4 py-2 text-center text-sm font-medium text-gray-600">
                                Bulan
                            </th>
                            <th className="px-4 py-2 text-center text-sm font-medium text-gray-600">
                                INCOME
                            </th>
                            <th className="px-4 py-2 text-center text-sm font-medium text-gray-600">
                                EXPENSE
                            </th>
                            <th className="px-4 py-2 text-center text-sm font-medium text-gray-600">
                                SAVING
                            </th>
                            <th className="px-4 py-2 text-center text-sm font-medium text-gray-600">
                                TOTAL
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {reports.map((report, index) => (
                            <tr key={index} className="bg-white">
                                <td className="px-4 py-3 text-sm text-center text-gray-700">
                                    {index + 1}
                                </td>
                                <td className="px-4 py-3 text-sm text-left text-gray-700">
                                    {report.month}
                                </td>
                                <td className="px-4 py-3 text-sm text-green-600 text-center">
                                    Rp {report.income.toLocaleString('id-ID')}
                                </td>
                                <td className="px-4 py-3 text-sm text-red-600 text-center">
                                    Rp {report.expense.toLocaleString('id-ID')}
                                </td>
                                <td className="px-4 py-3 text-sm text-center text-blue-600">
                                    Rp {report.saving.toLocaleString('id-ID')}
                                </td>
                                <td className="px-4 py-3 text-sm text-center text-gray-700">
                                    Rp{' '}
                                    {(
                                        report.income - report.expense
                                    ).toLocaleString('id-ID')}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
