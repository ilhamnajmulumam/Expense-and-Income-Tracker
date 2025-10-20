// ...existing code...
'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { signIn } from '../../../../lib/action/auth-action';

export default function SignInClient() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const searchParams = useSearchParams();
    const router = useRouter();

    const handleSignIn = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');

        try {
            const result = await signIn(email, password);
            if (!result.user) {
                setError(result.error || 'Failed to sign in');
            } else {
                const callBackUrl = searchParams.get('callbackUrl') || '/user';
                router.push(callBackUrl);
            }
        } catch (err) {
            setError(
                `Authentication error: ${
                    err instanceof Error ? err.message : 'Unknown error'
                }`
            );
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <form
            onSubmit={handleSignIn}
            className="flex flex-col gap-4 rounded-2xl bg-white shadow-xl p-10 w-100"
        >
            <h1 className="font-bold text-center">Sign In</h1>
            {error && (
                <div className="text-red-600 text-sm text-center">{error}</div>
            )}
            <label className="flex flex-col gap-2">
                <span>Email</span>
                <input
                    id="email"
                    name="email"
                    type="text"
                    placeholder="Email"
                    className="p-2 border rounded-md"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </label>
            <label className="flex flex-col gap-2">
                <span>Password</span>
                <input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Password"
                    className="p-2 border rounded-md"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </label>
            <button
                type="submit"
                disabled={isLoading}
                className={`p-2 rounded-md text-white ${
                    isLoading
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-green-600 hover:bg-green-700'
                }`}
            >
                {isLoading ? 'Signing in...' : 'Sign In'}
            </button>
            <p className="text-center">
                Don&apos;t have an account?{' '}
                <a href="/sign-up" className="text-blue-600">
                    Sign Up
                </a>
            </p>
        </form>
    );
}
