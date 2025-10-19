'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
    LayoutDashboard,
    ArrowLeftRight,
    CirclePlus,
    ChartColumnBig,
    Settings,
    LogOut,
} from 'lucide-react';

export default function NavigationBarUserDashboard() {
    const pathname = usePathname();

    // daftar menu
    const menus = [
        { name: 'Dashboard', href: '/user', icon: <LayoutDashboard /> },
        {
            name: 'Transactions',
            href: '/user/transactions',
            icon: <ArrowLeftRight />,
        },
        {
            name: 'Add Transactions',
            href: '/user/add-transaction',
            icon: <CirclePlus />,
        },
        { name: 'Categories', href: '/user/categories', icon: <CirclePlus /> },
        { name: 'Reports', href: '/user/reports', icon: <ChartColumnBig /> },
        { name: 'Settings', href: '/user/settings', icon: <Settings /> },
        { name: 'Logout', href: '/', icon: <LogOut /> },
    ];

    return (
        <nav className="flex flex-col md:w-80 h-[100vh] text-black bg-white shadow-md gap-4">
            <h1 className="font-bold text-2xl md:px-4 md:py-4 border-b-2 text-blue-500">
                Financial Dashboard
            </h1>

            <div className="flex flex-col gap-1">
                {menus.map((menu) => {
                    const isActive = pathname === menu.href;

                    return (
                        <Link
                            key={menu.name}
                            href={menu.href}
                            className={`flex items-center gap-2 p-4  transition-all ${
                                isActive
                                    ? 'bg-blue-100 text-blue-600 border-r-4 border-blue-600 font-semibold'
                                    : 'hover:bg-gray-100 text-gray-700'
                            }`}
                        >
                            {menu.icon}
                            <span>{menu.name}</span>
                        </Link>
                    );
                })}
            </div>
        </nav>
    );
}
