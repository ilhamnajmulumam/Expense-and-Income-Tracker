import { getCategories } from '../../../../../lib/action/category-action';
import AddTransactionClient from './addtransaction-client';

export default async function AddTransactionPage() {
    const categories = await getCategories();

    return (
        <div className="bg-gray-200">
            <AddTransactionClient categories={categories} />
        </div>
    );
}
