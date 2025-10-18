'use client';

import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend, Title);

export default function ExpenseBreakdownChart() {
    const data = {
        labels: ['Makanan', 'Transportasi', 'Tagihan', 'Hiburan', 'Lainnya'],
        datasets: [
            {
                label: 'Pengeluaran (Rp)',
                data: [500, 200, 300, 400, 100],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.7)',
                    'rgba(54, 162, 235, 0.7)',
                    'rgba(255, 206, 86, 0.7)',
                    'rgba(75, 192, 192, 0.7)',
                    'rgba(153, 102, 255, 0.7)',
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
                align: 'center', // legend horizontal di bawah
                labels: {
                    usePointStyle: true, // ganti kotak warna jadi bulatan
                    boxWidth: 12,
                    padding: 15,
                    color: '#374151',
                    font: { size: 14 },
                },
            },
        },
    };

    return (
        <div className="bg-white p-4 w-[300px] h-[300px]">
            <Pie data={data} options={options} />
        </div>
    );
}
