'use client';

import { useState } from 'react';

export default function SignUpClient() {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    return (
        <div className="flex flex-col gap-4 rounded-2xl bg-white shadow-xl p-10 w-100">
            <h1 className="font-bold text-center">Sign Up</h1>
            <label className="flex flex-col gap-2">
                <span>Full Name</span>
                <input
                    type="text"
                    placeholder="Full Name"
                    className="p-2 border rounded-md"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                />
            </label>
            <label className="flex flex-col gap-2">
                <span>Email</span>
                <input
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
                    type="password"
                    placeholder="Password"
                    className="p-2 border rounded-md"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </label>
            <label className="flex flex-col gap-2">
                <span>Canfirm Password</span>
                <input
                    type="password"
                    placeholder="Password"
                    className="p-2 border rounded-md"
                    required
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
            </label>
            <button className="p-2 bg-green-600 text-white rounded-md">
                Sign Up
            </button>
            <p className="text-center">
                Already have an account?{' '}
                <a href="/sign-in" className="text-blue-600">
                    Sign In
                </a>
            </p>
        </div>
    );
}
