'use client';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

// register komponen ChartJS yang dipakai
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export default function IncomeExpenseChart() {
    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        datasets: [
            {
                label: 'Income',
                data: [3000, 4000, 3500, 5000, 4800],
                backgroundColor: 'rgba(10, 245, 47, 0.8)',
            },
            {
                label: 'Expenses',
                data: [2500, 2000, 3000, 2700, 3500],
                backgroundColor: 'rgba(230, 29, 29, 0.8)',
            },
        ],
    };

    const options = {
        plugins: {
            legend: {
                display: true,
                position: 'bottom', // bisa 'top', 'bottom', 'left', 'right'
                labels: {
                    color: '#000', // warna teks legend
                    font: {
                        size: 14,
                        family: 'Arial',
                    },
                    boxWidth: 20, // ukuran kotak warna
                    padding: 10,
                },
            },
        },
    };

    return (
        <div className="bg-white p-4">
            <Bar data={data} options={options} />
        </div>
    );
}
