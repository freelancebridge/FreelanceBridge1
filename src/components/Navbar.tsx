"use client";

import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';
import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then(r => r.json());

export default function Navbar() {
  const { data: session, status } = useSession();
  const { data: notifs } = useSWR(session ? '/api/notifications' : null, fetcher, { refreshInterval: 10000 });
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-800 to-orange-500">FreelanceBridge</span>
            </Link>
            <div className="hidden sm:ml-8 sm:flex sm:space-x-8">
              <Link href="/freelancers" className="border-transparent text-gray-700 hover:text-purple-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors">
                Find Wizards
              </Link>
              <Link href="/jobs" className="border-transparent text-gray-700 hover:text-purple-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors">
                Find Gigs
              </Link>
              <Link href="/about" className="border-transparent text-gray-700 hover:text-purple-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors">
                Why Us?
              </Link>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <form className="hidden lg:flex max-w-sm w-full mx-4">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Search creators & projects..."
                  className="block w-full px-4 py-2 border border-gray-200 rounded-full bg-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-purple-500 focus:border-purple-500 text-sm shadow-sm transition-shadow"
                />
              </div>
            </form>
            {status === 'loading' ? (
              <div className="w-16 h-8 bg-gray-200 animate-pulse rounded-full"></div>
            ) : session ? (
              <div className="flex items-center space-x-6">
                <Link href="/messages" className="relative text-gray-500 hover:text-purple-600 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                  {notifs?.unreadCount > 0 && (
                    <span className="absolute -top-1 -right-1 flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-orange-500 border-2 border-white"></span>
                    </span>
                  )}
                </Link>
                <div className="flex items-center space-x-3 border-l border-gray-200 pl-6">
                  <span className="text-sm font-bold text-gray-900">{session.user.name}</span>
                  <span className="bg-purple-100 text-purple-800 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">{session.user.role}</span>
                  <button onClick={() => signOut()} className="text-gray-500 hover:text-red-600 text-sm font-medium transition-colors ml-4">
                    Log Out
                  </button>
                </div>
              </div>
            ) : (
              <>
                <Link href="/login" className="text-gray-700 hover:text-purple-800 text-sm font-medium transition-colors">
                  Hop In
                </Link>
                <Link href="/register" className="bg-gradient-to-r from-purple-700 to-orange-500 hover:from-purple-800 hover:to-orange-600 text-white px-5 py-2.5 rounded-full text-sm font-bold shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5">
                  Join the Crew
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
