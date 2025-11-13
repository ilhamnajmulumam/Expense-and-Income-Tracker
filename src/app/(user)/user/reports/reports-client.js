'use client';

import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

export default function ReportsClient({ reports }) {
    const downloadPDF = () => {
        const doc = new jsPDF();
        doc.setFontSize(16);
        doc.text('Yearly Financial Report', 14, 15);

        const tableData = reports.map((item) => [
            item.month,
            `Rp ${item.income.toLocaleString('id-ID')}`,
            `Rp ${item.expense.toLocaleString('id-ID')}`,
            `Rp ${item.saving.toLocaleString('id-ID')}`,
            `Rp ${(item.income - item.expense).toLocaleString('id-ID')}`,
        ]);

        autoTable(doc, {
            head: [['Bulan', 'INCOME', 'EXPENSE', 'SAVING', 'TOTAL']],
            body: tableData,
            startY: 25,
        });

        doc.save('yearly_report.pdf');
    };

    return (
        <div className="flex flex-col gap-6 md:p-20 h-[100vh]">
            <h1 className="text-3xl font-bold mb-4">Laporan Keuangan</h1>
            <div className="p-4 bg-white rounded-md h-[100vh] overflow-auto">
                <table className="min-w-full divide-y">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-4 py-2 text-center">No</th>
                            <th className="px-4 py-2 text-center">Bulan</th>
                            <th className="px-4 py-2 text-center">INCOME</th>
                            <th className="px-4 py-2 text-center">EXPENSE</th>
                            <th className="px-4 py-2 text-center">SAVING</th>
                            <th className="px-4 py-2 text-center">TOTAL</th>
                        </tr>
                    </thead>
                    <tbody>
                        {reports.map((report, index) => (
                            <tr key={index} className="bg-white">
                                <td className="px-4 py-3 text-center">
                                    {index + 1}
                                </td>
                                <td className="px-4 py-3 text-left">
                                    {report.month}
                                </td>
                                <td className="px-4 py-3 text-green-600 text-center">
                                    Rp {report.income.toLocaleString('id-ID')}
                                </td>
                                <td className="px-4 py-3 text-red-600 text-center">
                                    Rp {report.expense.toLocaleString('id-ID')}
                                </td>
                                <td className="px-4 py-3 text-blue-600 text-center">
                                    Rp {report.saving.toLocaleString('id-ID')}
                                </td>
                                <td className="px-4 py-3 text-center">
                                    Rp{' '}
                                    {(
                                        report.income - report.expense
                                    ).toLocaleString('id-ID')}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <button
                    onClick={downloadPDF}
                    className="px-4 py-2 bg-blue-600 text-white rounded mt-4"
                >
                    Download PDF
                </button>
            </div>
        </div>
    );
}
