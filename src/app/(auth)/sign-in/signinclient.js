// ...existing code...
'use client';

import { useState } from 'react';

export default function SignInClient() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    console.log(email, password);

    return (
        <form className="flex flex-col gap-4 rounded-2xl bg-white shadow-xl p-10 w-100">
            <h1 className="font-bold text-center">Sign In</h1>
            <label className="flex flex-col gap-2">
                <span>Email</span>
                <input
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
                    type="password"
                    placeholder="Password"
                    className="p-2 border rounded-md"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </label>
            <button className="p-2 bg-green-600 text-white rounded-md">
                Sign In
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
