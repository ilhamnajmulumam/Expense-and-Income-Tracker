// prisma/seed.js

const { PrismaClient } = require('../lib/generated/prisma');
const prisma = new PrismaClient();

// 🏷️ Kategori default (dikelompokkan per tipe)
const defaultCategories = [
    // INCOME
    { name: 'Gaji', type: 'INCOME', icon: '💰' },
    { name: 'Bonus', type: 'INCOME', icon: '🎁' },
    { name: 'Hadiah', type: 'INCOME', icon: '🏆' },

    // EXPENSE
    { name: 'Makan', type: 'EXPENSE', icon: '🍽️' },
    { name: 'Transportasi', type: 'EXPENSE', icon: '🚌' },
    { name: 'Hiburan', type: 'EXPENSE', icon: '🎬' },
    { name: 'Kebutuhan Rumah', type: 'EXPENSE', icon: '🏠' },
    { name: 'Pendidikan', type: 'EXPENSE', icon: '📚' },

    // SAVING
    { name: 'Tabungan', type: 'SAVING', icon: '🏦' },
    { name: 'Investasi', type: 'SAVING', icon: '📈' },
];

// 🧩 Fungsi untuk menambahkan kategori default ke user baru
async function createDefaultCategoriesForUser(userId) {
    const existing = await prisma.category.findMany({ where: { userId } });
    if (existing.length > 0) {
        console.log(`✅ User ${userId} sudah memiliki kategori, skip seeding.`);
        return;
    }

    for (const cat of defaultCategories) {
        await prisma.category.create({
            data: {
                ...cat,
                userId,
            },
        });
    }
    console.log(`✨ Kategori default berhasil dibuat untuk user ${userId}`);
}

async function main() {
    const users = await prisma.user.findMany();

    if (users.length === 0) {
        console.log(
            '⚠️ Tidak ada user di database. Jalankan seeding setelah user pertama dibuat.'
        );
        return;
    }

    for (const user of users) {
        await createDefaultCategoriesForUser(user.id);
    }

    console.log('✅ Seeding selesai!');
}

main()
    .catch((e) => {
        console.error('❌ Error saat seeding:', e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
