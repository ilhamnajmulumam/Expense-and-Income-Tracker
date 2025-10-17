// src/component/NavbarDashboard.js
'use client';
import Link from 'next/link';

export default function NavigationBarUserDashboard() {
    return (
        <nav className="flex justify-between p-4 bg-gray-900 text-white">
            <h1 className="font-bold">Dashboard</h1>
            <div className="space-x-4">
                <Link href="/user">Overview</Link>
                <Link href="/user/transactions">Transactions</Link>
                <Link href="/user/settings">Settings</Link>
            </div>
        </nav>
    );
}
