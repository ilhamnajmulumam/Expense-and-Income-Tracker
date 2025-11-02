'use client';
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
    if (!dataServer) {
        return <p className="text-gray-400 text-center">No data available</p>;
    }

    const data = {
        labels: dataServer.labels,
        datasets: [
            {
                label: 'Income',
                data: dataServer.income,
                backgroundColor: 'rgba(10, 245, 47, 0.8)',
            },
            {
                label: 'Expenses',
                data: dataServer.expense,
                backgroundColor: 'rgba(230, 29, 29, 0.8)',
            },
        ],
    };

    const options = {
        plugins: { legend: { position: 'bottom' } },
        responsive: true,
    };

    return (
        <div className="bg-white p-4 flex flex-col gap-4">
            <Bar data={data} options={options} />
        </div>
    );
}
