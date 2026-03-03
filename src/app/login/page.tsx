"use client";
import Link from 'next/link';
import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function Login() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            const res = await signIn('credentials', {
                email,
                password,
                redirect: false,
            });

            if (res?.error) {
                setError(res.error);
                setLoading(false);
            } else {
                router.push('/');
                router.refresh();
            }
        } catch (err) {
            setError('An error occurred during login');
            setLoading(false);
        }
    };

    return (
        <div className="min-h-[calc(100vh-64px)] bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <h2 className="text-center text-4xl font-extrabold text-purple-950 border-b border-purple-200 pb-6">
                    Welcome Back
                </h2>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md relative">
                <div className="absolute top-0 -left-10 w-40 h-40 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 z-0"></div>
                <div className="absolute top-0 -right-10 w-40 h-40 bg-orange-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 z-0"></div>

                <div className="bg-white py-10 px-4 shadow-xl sm:rounded-3xl sm:px-10 border border-purple-100 relative z-10">
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        {error && (
                            <div className="bg-red-50 text-red-600 p-4 rounded-xl text-sm font-bold border border-red-100">
                                {error}
                            </div>
                        )}
                        <div>
                            <label htmlFor="email" className="block text-sm font-bold text-gray-700">Email address</label>
                            <div className="mt-1">
                                <input id="email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} className="appearance-none block w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-purple-500 text-gray-900" />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-bold text-gray-700">Password</label>
                            <div className="mt-1">
                                <input id="password" type="password" required value={password} onChange={(e) => setPassword(e.target.value)} className="appearance-none block w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-purple-500 text-gray-900" />
                            </div>
                        </div>

                        <div className="pt-2">
                            <button type="submit" disabled={loading} className="w-full flex justify-center py-4 px-4 rounded-full shadow-lg text-lg font-bold text-white bg-gradient-to-r from-purple-600 to-orange-500 hover:from-purple-500 focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 disabled:opacity-70 transition-all">
                                {loading ? 'Entering...' : 'Log In'}
                            </button>
                        </div>
                    </form>

                    <div className="mt-6 text-center">
                        <p className="text-base font-medium text-gray-600">
                            New here?{' '}
                            <Link href="/register" className="text-purple-700 font-bold hover:text-purple-900 hover:underline">
                                Join the Rebellion
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
