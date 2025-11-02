import { headers } from 'next/headers';
import { auth } from '../../../../../lib/auth';
import TransactionsClient from './transactions-client';
import { getTransactions } from '../../../../../lib/action/transactions-action';
import { redirect } from 'next/navigation';

export default async function TransactionsPage() {
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    if (!session) {
        redirect('/sign-in');
    }

    const transactions = await getTransactions();

    // Format data agar cocok untuk tabel
    const formattedTransactions = transactions.map((t) => ({
        id: t.id,
        date: t.date.toISOString().split('T')[0],
        description: t.description,
        category: t.categoryId ? t.category.name : '', // bisa diubah ke nama kategori jika include category
        amount: t.amount,
        type: t.type,
    }));

    return (
        <div className="bg-gray-200">
            <TransactionsClient transactions={formattedTransactions} />
        </div>
    );
}
