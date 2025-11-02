'use server';

import { headers } from 'next/headers';
import { auth } from '../auth';
import { PrismaClient } from '../generated/prisma';

const prisma = new PrismaClient();

export async function getTransactions() {
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    const userId = session?.user?.id;
    if (!userId) {
        throw new Error('User not authenticated');
    }

    const transactions = await prisma.transaction.findMany({
        where: { userId },
        include: { category: true },
        orderBy: { date: 'desc' },
    });

    return transactions;
}

export async function getFourTransactions() {
    try {
        const transactions = await prisma.transaction.findMany({
            orderBy: { date: 'desc' }, // Urutkan dari yang terbaru
            take: 3, // Ambil hanya 4 data terbaru
            include: {
                category: true, // supaya bisa akses nama kategori
            },
        });

        return transactions;
    } catch (error) {
        console.error('Error fetching transactions:', error);
        return [];
    }
}

export async function addTransaction(formData) {
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    const userId = session?.user?.id;
    if (!userId) {
        throw new Error('User not authenticated');
    }

    const transactionType = formData.get('transactionType');
    const categoryId = formData.get('category') || null; // bisa null
    const amount = parseFloat(formData.get('amount'));
    const dateStr = formData.get('date');
    const description = formData.get('description') || '';

    if (!transactionType || !amount || !dateStr) {
        throw new Error('Transaction type, amount, and date are required');
    }

    const date = new Date(dateStr);
    const month = date.getMonth() + 1; // getMonth() mulai dari 0
    const year = date.getFullYear();

    const transaction = await prisma.transaction.create({
        data: {
            type: transactionType,
            amount,
            description,
            date,
            month,
            year,
            user: { connect: { id: userId } },
            ...(categoryId && { category: { connect: { id: categoryId } } }),
        },
    });

    return transaction;
}

export async function getFinancialSummary() {
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    const userId = session?.user?.id;
    if (!userId) {
        throw new Error('User not authenticated');
    }

    // Hitung total income dan expense
    const transactions = await prisma.transaction.findMany({
        where: { userId },
        select: { amount: true, type: true },
    });

    const totalIncome = transactions
        .filter((t) => t.type === 'INCOME')
        .reduce((sum, t) => sum + t.amount, 0);

    const totalExpense = transactions
        .filter((t) => t.type === 'EXPENSE')
        .reduce((sum, t) => sum + t.amount, 0);

    const totalSaving = transactions
        .filter((t) => t.type === 'SAVING')
        .reduce((sum, t) => sum + t.amount, 0);

    // Rumus: balance = income - expense + saving
    const balance = totalIncome - totalExpense + totalSaving;

    return {
        totalIncome,
        totalExpense,
        totalSaving,
        balance,
    };
}

export async function getMonthlySummaryServer(month, year) {
    const session = await auth.api.getSession({
        headers: await headers(),
    });
    const userId = session?.user?.id;
    if (!userId) return null;

    const transactions = await prisma.transaction.findMany({
        where: { userId, month, year, type: { in: ['INCOME', 'EXPENSE'] } },
        select: { type: true, amount: true, date: true },
    });

    const weeks = [1, 2, 3, 4, 5];
    const income = [0, 0, 0, 0, 0];
    const expense = [0, 0, 0, 0, 0];

    for (const t of transactions) {
        const week = Math.ceil(new Date(t.date).getDate() / 7);
        if (t.type === 'INCOME') income[week - 1] += t.amount;
        if (t.type === 'EXPENSE') expense[week - 1] += t.amount;
    }

    return {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
        income,
        expense,
    };
}
