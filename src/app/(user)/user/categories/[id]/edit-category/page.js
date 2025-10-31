import EditCategoryClient from './edit-category-client';
import { PrismaClient } from '../../../../../../../lib/generated/prisma';

const prisma = new PrismaClient();

export default async function EditCategoryPage({ params }) {
    const { id } = await params;

    const category = await prisma.category.findUnique({
        where: { id },
    });

    if (!category) throw new Error('Category not found');

    return (
        <div className="bg-gray-200">
            <EditCategoryClient category={category} />
        </div>
    );
}
