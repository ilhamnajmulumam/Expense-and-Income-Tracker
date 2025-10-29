'use server';

import { redirect } from 'next/navigation';
import { PrismaClient } from '../generated/prisma';
import { auth } from '../auth';
import { headers } from 'next/headers'; // ✅ perlu import ini untuk ambil headers

const prisma = new PrismaClient();

export async function addCategory(formData) {
    // ✅ Ambil sesi user login dari Better Auth
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    const userId = session?.user?.id; // ✅ ambil id user dari sesi

    if (!userId) {
        throw new Error('User not authenticated');
    }

    const name = formData.get('name');
    const description = formData.get('description');
    const type = formData.get('type');

    if (!name) {
        throw new Error('Category name is required');
    }

    if (!type) {
        throw new Error('Category type is required');
    }

    // ✅ Tambahkan data dengan relasi ke user
    await prisma.category.create({
        data: {
            name,
            description,
            type,
            user: {
                connect: { id: userId },
            },
        },
    });

    // ✅ Redirect setelah sukses
    redirect('/user/categories');
}
