'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
    LayoutDashboard,
    ArrowLeftRight,
    CirclePlus,
    ChartColumnBig,
    LogOut,
    SlidersVertical,
} from 'lucide-react';
import { signOut } from '../../lib/action/auth-action';
import { useRouter } from 'next/navigation';

export default function NavigationBarUserDashboard() {
    const pathname = usePathname();
    const router = useRouter();

    const handleSignOut = async () => {
        try {
            await signOut();
            router.push('/sign-in');
        } catch (error) {
            console.error('Error signing out:', error);
        }
    };

    // daftar menu
    const menus = [
        {
            name: 'Dashboard',
            href: '/user',
            icon: <LayoutDashboard size={24} />,
        },
        {
            name: 'Transactions',
            href: '/user/transactions',
            icon: <ArrowLeftRight size={24} />,
        },
        {
            name: 'Add Transactions',
            href: '/user/add-transaction',
            icon: <CirclePlus size={24} />,
        },
        {
            name: 'Categories',
            href: '/user/categories',
            icon: <SlidersVertical size={24} />,
        },
        {
            name: 'Reports',
            href: '/user/reports',
            icon: <ChartColumnBig size={24} />,
        },
    ];

    return (
        <nav className="flex flex-col w-[20%] md:w-80 h-[100vh] text-black bg-white shadow-md gap-4 transition-all duration-300">
            {/* Logo Text -> tampil hanya di desktop */}
            <h1 className="hidden md:block font-bold text-2xl px-4 py-4 border-b-2 text-blue-500">
                Financial Dashboard
            </h1>

            {/* Logo Saja untuk Mobile */}
            <div className="md:hidden flex justify-center py-4 border-b">
                <LayoutDashboard size={32} className="text-blue-500" />
            </div>

            {/* Menu */}
            <div className="flex flex-col gap-1">
                {menus.map((menu) => {
                    const isActive = pathname === menu.href;

                    return (
                        <Link
                            key={menu.name}
                            href={menu.href}
                            className={`flex items-center gap-2 p-4 transition-all justify-center md:justify-start ${
                                isActive
                                    ? 'bg-blue-100 text-blue-600 border-r-4 border-blue-600 font-semibold'
                                    : 'hover:bg-gray-100 text-gray-700'
                            }`}
                        >
                            {menu.icon}
                            {/* Hide text in mobile */}
                            <span className="hidden md:inline">
                                {menu.name}
                            </span>
                        </Link>
                    );
                })}
            </div>

            {/* Logout Button */}
            <button
                onClick={handleSignOut}
                className="flex items-center gap-2 p-4 mt-auto text-red-600 hover:bg-red-50 border-t border-gray-200 justify-center md:justify-start"
            >
                <LogOut size={24} />
                <span className="hidden md:inline">Logout</span>
            </button>
        </nav>
    );
}
