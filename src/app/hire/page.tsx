"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState, Suspense } from "react";
import { useSession } from "next-auth/react";

function HireContent() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const { data: session } = useSession();

    const jobId = searchParams.get('jobId');
    const freelancerId = searchParams.get('freelancerId');

    const [amount, setAmount] = useState(100);
    const [processing, setProcessing] = useState(false);
    const [error, setError] = useState('');

    if (!session) return <div className="p-20 text-center font-bold">Please log in to hire a creator.</div>;
    if (!jobId || !freelancerId) return <div className="p-20 text-center font-bold text-red-500">Missing Job ID or Creator ID.</div>;

    const handleMockCheckout = async () => {
        setProcessing(true);
        setError('');
        try {
            const res = await fetch('/api/payments/checkout', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ jobId, freelancerId, amount })
            });

            const data = await res.json();
            if (!res.ok) throw new Error(data.error || 'Payment failed');

            alert('Mock Stripe Checkout Successful! Funds are now in Escrow.');
            router.push('/dashboard'); // or back to the job
        } catch (err: any) {
            setError(err.message);
        } finally {
            setProcessing(false);
        }
    };

    return (
        <div className="bg-indigo-50 min-h-[calc(100vh-64px)] py-10 flex items-center justify-center">
            <div className="bg-white max-w-lg w-full rounded-3xl shadow-xl border border-purple-100 p-10">
                <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl shadow-inner">
                        🔒
                    </div>
                    <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">Secure Escrow</h1>
                    <p className="text-gray-500 font-medium mt-2">Fund your project before work begins. We release funds only when you approve the work.</p>
                </div>

                {error && <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm font-bold mb-6 text-center border border-red-100">{error}</div>}

                <div className="space-y-6">
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Fund Amount (USD)</label>
                        <div className="relative">
                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-bold">$</span>
                            <input
                                type="number"
                                value={amount}
                                onChange={(e) => setAmount(Number(e.target.value))}
                                className="w-full border border-gray-200 rounded-xl pl-8 pr-4 py-3 focus:outline-none focus:ring-1 focus:ring-purple-500 focus:border-purple-500 font-bold text-gray-900"
                            />
                        </div>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 flex items-center justify-between">
                        <span className="text-sm font-bold text-gray-600">Platform Fee (20%)</span>
                        <span className="text-sm font-black text-gray-900">${(amount * 0.20).toFixed(2)}</span>
                    </div>

                    <div className="flex items-center justify-between border-t border-gray-100 pt-4 mb-8">
                        <span className="text-lg font-bold text-gray-900">Total</span>
                        <span className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-orange-500">${(amount * 1.20).toFixed(2)}</span>
                    </div>

                    <button
                        onClick={handleMockCheckout}
                        disabled={processing}
                        className="w-full bg-gradient-to-r from-purple-700 to-orange-500 hover:from-purple-800 hover:to-orange-600 text-white py-4 rounded-xl font-bold shadow-lg transition-transform transform hover:-translate-y-0.5 flex justify-center items-center gap-2"
                    >
                        {processing ? 'Processing securely...' : 'Pay securely with Mock Stripe'}
                        {!processing && (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                        )}
                    </button>

                    <p className="text-center text-xs font-bold text-gray-400 uppercase tracking-widest mt-4">
                        Powered by Stubbed Payments
                    </p>
                </div>
            </div>
        </div>
    );
}

export default function HirePage() {
    return (
        <Suspense fallback={<div className="p-20 text-center font-bold text-purple-600 animate-pulse">Loading Secure Checkout...</div>}>
            <HireContent />
        </Suspense>
    );
}
