'use client';

import { useState } from 'react';
import { jsPDF } from 'jspdf';

export default function ReportsClient({ reports, monthlyReports }) {
    const [report] = useState(monthlyReports);

    const months = [
        'Januari',
        'Februari',
        'Maret',
        'April',
        'Mei',
        'Juni',
        'Juli',
        'Agustus',
        'September',
        'Oktober',
        'November',
        'Desember',
    ];

    const handleDownloadPDF = () => {
        if (!report) return alert('Belum ada laporan untuk diunduh.');

        const doc = new jsPDF();
        doc.text(
            `Laporan Keuangan Bulan ${months[report.month - 1]} ${report.year}`,
            10,
            10
        );
        doc.text(`Total Pemasukan: Rp ${report.incomeTotal}`, 10, 20);
        doc.text(`Total Pengeluaran: Rp ${report.expenseTotal}`, 10, 30);

        let y = 50;
        for (const [cat, val] of Object.entries(report.reportByCategory)) {
            doc.text(
                `${cat}: Income Rp${val.income} | Expense Rp${val.expense}`,
                10,
                y
            );
            y += 10;
        }

        doc.save(`Laporan-${report.year}-${report.month}.pdf`);
    };

    return (
        <div className="flex flex-col gap-6 p-8 bg-gray-50 min-h-screen">
            <h2 className="text-3xl font-semibold">📊 Laporan Keuangan</h2>

            <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold">
                    {months[report.month - 1]} {report.year}
                </h3>
                <button
                    onClick={handleDownloadPDF}
                    className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
                >
                    📄 Download PDF
                </button>
            </div>

            <div className="bg-white shadow rounded-lg p-6">
                <p className="text-green-600 font-semibold">
                    Pemasukan: Rp {report.incomeTotal.toLocaleString('id-ID')}
                </p>
                <p className="text-red-600 font-semibold">
                    Pengeluaran: Rp{' '}
                    {report.expenseTotal.toLocaleString('id-ID')}
                </p>

                <h4 className="mt-4 font-semibold">Rincian per Kategori:</h4>
                <ul className="list-disc ml-6 mt-2">
                    {Object.entries(report.reportByCategory).map(
                        ([cat, val]) => (
                            <li key={cat}>
                                {cat}: +Rp
                                {val.income.toLocaleString('id-ID')} / -Rp
                                {val.expense.toLocaleString('id-ID')}
                            </li>
                        )
                    )}
                </ul>
            </div>
        </div>
    );
}
