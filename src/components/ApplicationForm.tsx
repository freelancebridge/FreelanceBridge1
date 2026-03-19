"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function ApplicationForm({ jobId }: { jobId: string }) {
    const router = useRouter();
    const [formData, setFormData] = useState({ bidAmount: '', coverLetter: '' });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        
        try {
            const res = await fetch('/api/applications', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    jobId,
                    coverLetter: formData.coverLetter,
                    bidAmount: formData.bidAmount
                })
            });

            if (!res.ok) {
                const data = await res.json();
                setError(data.error || 'Failed to submit application');
                setLoading(false);
                return;
            }

            setSuccess(true);
            setLoading(false);
            router.refresh();
        } catch (err) {
            setError('An error occurred. Please try again.');
            setLoading(false);
        }
    };

    if (success) {
        return (
            <div className="bg-green-50 p-6 rounded-2xl border border-green-100 text-center mt-8">
                <h3 className="text-xl font-bold text-green-800 mb-2">Application Submitted!</h3>
                <p className="text-green-600">The client will review your proposal shortly.</p>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="bg-gray-50 p-6 rounded-2xl border border-gray-100 mt-8 space-y-4">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Apply for this Gig</h3>
            
            {error && <div className="bg-red-50 text-red-600 p-3 rounded-xl text-sm font-bold">{error}</div>}
            
            <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Your Bid ($)</label>
                <input 
                    type="number" 
                    required 
                    min="1"
                    value={formData.bidAmount}
                    onChange={(e) => setFormData({...formData, bidAmount: e.target.value})}
                    className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-900"
                    placeholder="e.g. 500"
                />
            </div>
            
            <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Cover Letter</label>
                <textarea 
                    required 
                    rows={4}
                    value={formData.coverLetter}
                    onChange={(e) => setFormData({...formData, coverLetter: e.target.value})}
                    className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-900"
                    placeholder="Tell the client why you're the best fit..."
                ></textarea>
            </div>

            <button type="submit" disabled={loading} className="w-full mt-4 bg-gradient-to-r from-purple-700 to-orange-500 hover:from-purple-800 hover:to-orange-600 text-white px-8 py-3 rounded-full font-bold shadow-md transition-all disabled:opacity-70">
                {loading ? 'Submitting...' : 'Submit Application'}
            </button>
        </form>
    );
}
