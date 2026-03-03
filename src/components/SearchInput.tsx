"use client";

import { useRouter, useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import { useDebounce } from 'use-debounce';

export default function SearchInput({ placeholder }: { placeholder: string }) {
    const router = useRouter();
    const searchParams = useSearchParams();
    const initialQuery = searchParams.get('q') || '';

    const [text, setText] = useState(initialQuery);
    const [query] = useDebounce(text, 500);

    useEffect(() => {
        const params = new URLSearchParams(searchParams.toString());
        if (query) {
            params.set('q', query);
        } else {
            params.delete('q');
        }
        router.push(`?${params.toString()}`);
    }, [query, router, searchParams]);

    return (
        <input
            type="text"
            className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-1 focus:ring-purple-500 focus:border-purple-500 text-gray-900 transition-all font-medium text-sm shadow-sm"
            placeholder={placeholder}
            value={text}
            onChange={(e) => setText(e.target.value)}
        />
    );
}
