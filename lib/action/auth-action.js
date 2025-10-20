'use server';

import { auth } from '../auth';
import { headers } from 'next/headers';

export async function signUp(email, password, name) {
    return await auth.api.signUpEmail({
        body: { email, password, name },
    });
}

export async function signIn(email, password) {
    return await auth.api.signInEmail({
        body: { email, password },
    });
}

export async function signOut() {
    const result = await auth.api.signOut({
        headers: headers(),
    });

    return result;
}
