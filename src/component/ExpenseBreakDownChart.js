'use client';

import { useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend, Title);

export default function ExpenseBreakdownChart({
    breakdownData,
    availableMonths,
}) {
    const [selectedMonth, setSelectedMonth] = useState(
        availableMonths?.[0] || ''
    );

    if (!breakdownData || !breakdownData[selectedMonth]) {
        return <p className="text-gray-400 text-center">No data available</p>;
    }

    const monthData = breakdownData[selectedMonth];

    const data = {
        labels: monthData.labels,
        datasets: [
            {
                label: 'Pengeluaran (Rp)',
                data: monthData.values,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.7)',
                    'rgba(54, 162, 235, 0.7)',
                    'rgba(255, 206, 86, 0.7)',
                    'rgba(75, 192, 192, 0.7)',
                    'rgba(153, 102, 255, 0.7)',
                    'rgba(255, 159, 64, 0.7)',
                ],
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'bottom',
                align: 'center',
                labels: {
                    usePointStyle: true,
                    boxWidth: 12,
                    padding: 15,
                    color: '#374151',
                    font: { size: 14 },
                },
            },
        },
    };

    return (
        <div className="bg-white p-4 w-[350px] h-[350px] flex flex-col gap-4">
            {/* Dropdown Pilih Bulan */}
            <div className="flex justify-end">
                <select
                    value={selectedMonth}
                    onChange={(e) => setSelectedMonth(e.target.value)}
                    className="border border-gray-300 rounded-md px-3 py-1 text-sm"
                >
                    {availableMonths.map((month) => (
                        <option key={month} value={month}>
                            {month}
                        </option>
                    ))}
                </select>
            </div>

            {/* Chart */}
            <div className="flex-grow">
                <Pie data={data} options={options} />
            </div>
        </div>
    );
}
