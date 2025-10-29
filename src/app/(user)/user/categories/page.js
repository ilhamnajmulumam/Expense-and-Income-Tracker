import { headers } from 'next/headers';
import { auth } from '../../../../../lib/auth';
import CategoriesClient from './categories-client';
import { PrismaClient } from '../../../../../lib/generated/prisma';

const prisma = new PrismaClient();

export default async function CategoriesPage() {
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    if (!session) {
        redirect('/sign-in');
    }

    const userId = session.user.id;

    const categories = await prisma.category.findMany({
        where: { userId },
        orderBy: { name: 'desc' },
    });

    return (
        <div className="bg-gray-200">
            <CategoriesClient categories={categories} />
        </div>
    );
}
