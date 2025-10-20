import { headers } from 'next/headers';
import { auth } from '../../../../lib/auth';
import UserPageClient from './user-client';
import { redirect } from 'next/navigation';

export default async function UserPage() {
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    if (!session) {
        redirect('/sign-in');
    }

    return (
        <div className="bg-gray-200">
            <UserPageClient session={session} />
        </div>
    );
}
