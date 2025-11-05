'use client';
import { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export default function IncomeExpenseChart({ dataServer }) {
    const [selectedMonth, setSelectedMonth] = useState(
        dataServer?.labels?.[0] || ''
    );

    if (!dataServer || !dataServer.labels) {
        return <p className="text-gray-400 text-center">No data available</p>;
    }

    const monthIndex = dataServer.labels.indexOf(selectedMonth);

    const data = {
        labels: [selectedMonth],
        datasets: [
            {
                label: 'Income',
                data: [dataServer.income[monthIndex]],
                backgroundColor: 'rgba(10, 245, 47, 0.8)',
            },
            {
                label: 'Expenses',
                data: [dataServer.expense[monthIndex]],
                backgroundColor: 'rgba(230, 29, 29, 0.8)',
            },
        ],
    };

    const options = {
        plugins: { legend: { position: 'bottom' } },
        responsive: true,
        scales: {
            y: { beginAtZero: true },
        },
    };

    return (
        <div className="bg-white w-full m-4 p-4 flex flex-col gap-4">
            {/* Dropdown Pilih Bulan */}
            <div className="flex justify-end">
                <select
                    value={selectedMonth}
                    onChange={(e) => setSelectedMonth(e.target.value)}
                    className="border border-gray-300 rounded-md px-3 py-1 text-sm"
                >
                    {dataServer.labels.map((month) => (
                        <option key={month} value={month}>
                            {month}
                        </option>
                    ))}
                </select>
            </div>

            {/* Chart */}
            <Bar data={data} options={options} />
        </div>
    );
}
