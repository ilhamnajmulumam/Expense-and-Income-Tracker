'use client';

import { useState } from 'react';
import { signUp } from '../../../../lib/action/auth-action';

export default function SignUpClient() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSignUp = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');

        if (password !== confirmPassword) {
            setError('Passwords do not match');
            setIsLoading(false);
            return;
        }

        if (!/\S+@\S+\.\S+/.test(email)) {
            setError('Invalid email format');
            setIsLoading(false);
            return;
        }

        try {
            const result = await signUp(email, password, name);
            if (!result.user) {
                setError(result.error || 'Something went wrong');
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
            onSubmit={handleSignUp}
            className="flex flex-col gap-4 rounded-2xl bg-white shadow-xl p-10 w-100"
        >
            <h1 className="font-bold text-center">Sign Up</h1>
            <label className="flex flex-col gap-2">
                <span>Full Name</span>
                <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Full Name"
                    className="p-2 border rounded-md"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </label>
            <label className="flex flex-col gap-2">
                <span>Email</span>
                <input
                    id="email"
                    name="email"
                    type="text"
                    placeholder="Email"
                    className="p-2 border rounded-md"
                    required
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
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </label>
            <label className="flex flex-col gap-2">
                <span>Confirm Password</span>
                <input
                    type="password"
                    placeholder="Password"
                    className="p-2 border rounded-md"
                    required
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
            </label>
            <button
                type="submit"
                disabled={isLoading}
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
            >
                {isLoading ? (
                    <div className="flex items-center">
                        <svg
                            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                            ></circle>
                            <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                        </svg>
                        Creating account...
                    </div>
                ) : (
                    'Create Account'
                )}
            </button>

            {error && <p className="text-red-600 text-center">{error}</p>}

            <p className="text-center">
                Already have an account?{' '}
                <a href="/sign-in" className="text-blue-600">
                    Sign In
                </a>
            </p>
        </form>
    );
}
