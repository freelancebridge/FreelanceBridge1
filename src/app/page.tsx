"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Home() {
  const categories = [
    { name: 'Code & Magic', rating: '4.9/5', skills: 1850 },
    { name: 'Design & Vibes', rating: '4.8/5', skills: 950 },
    { name: 'Growth Hacking', rating: '4.8/5', skills: 400 },
    { name: 'Wordsmiths', rating: '4.9/5', skills: 500 },
    { name: 'Customer Love', rating: '4.7/5', skills: 500 },
    { name: 'Number Crunchers', rating: '4.8/5', skills: 200 },
    { name: 'Builders & Architects', rating: '4.9/5', skills: 650 },
    { name: 'Legal Eagles', rating: '4.9/5', skills: 130 },
  ];

  const featuredFreelancers = [
    { name: 'Sarah Jenkins', title: 'React Wizard', rate: '$65/hr', rating: '5.0', earned: '$100k+', skills: ['React', 'Node.js', 'TypeScript'] },
    { name: 'David Chen', title: 'UX/UI Virtuoso', rate: '$50/hr', rating: '4.9', earned: '$50k+', skills: ['Figma', 'Prototyping', 'Wireframing'] },
    { name: 'Maria Torres', title: 'SEO Ninja & Copywriter', rate: '$40/hr', rating: '4.8', earned: '$80k+', skills: ['SEO', 'Content Writing', 'Marketing'] },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-900 via-purple-800 to-orange-600">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6 leading-tight"
              >
                Bring your <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-300">wildest ideas</span> to life.
              </motion.h1>
              <p className="text-xl text-purple-100 mb-8 max-w-lg font-medium">
                Ditch the old corporate rules. Team up with the most brilliant minds on the internet, right now.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <motion.div whileHover={{ scale: 1.05 }}>
                  <Link href="/freelancers" className="w-full sm:w-auto inline-flex justify-center items-center px-8 py-4 border border-transparent text-lg font-bold rounded-full shadow-lg text-purple-900 bg-orange-400 hover:bg-orange-300 transition-colors">
                    Find a Wizard
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }}>
                  <Link href="/jobs/post" className="w-full sm:w-auto inline-flex justify-center items-center px-8 py-4 border-2 border-purple-300 text-lg font-bold rounded-full text-white hover:bg-purple-800 hover:border-purple-200 transition-colors">
                    Post a Gig
                  </Link>
                </motion.div>
              </div>
              <div className="mt-12">
                <p className="text-sm font-bold text-purple-300 mb-4 uppercase tracking-wider">Trusted by cool teams at</p>
                <div className="flex items-center space-x-8 text-white opacity-70">
                  <span className="font-bold text-2xl tracking-tighter">Stripe</span>
                  <span className="font-bold text-2xl tracking-tighter">Spotify</span>
                  <span className="font-bold text-2xl tracking-tighter">Vercel</span>
                </div>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden md:block relative h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500 group"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-orange-500 to-purple-600 flex flex-col items-center justify-center text-white p-8">

                {/* Animated Abstract Geometric Element */}
                <div className="relative w-48 h-48 mb-8 flex items-center justify-center">
                  {/* Glowing background blob */}
                  <div className="absolute inset-0 bg-yellow-300 rounded-full mix-blend-screen filter blur-2xl opacity-60 animate-blob-pulse will-change-transform"></div>

                  {/* Floating solid orb */}
                  <div className="absolute inset-0 m-auto w-20 h-20 rounded-full bg-[radial-gradient(circle_at_center,_#ffffff_0%,_#fffac9_30%,_#ffb703_100%)] shadow-[0_0_20px_10px_rgba(255,255,200,0.8),_0_0_60px_30px_rgba(255,200,50,0.5),_0_0_100px_60px_rgba(255,150,0,0.3)] animate-[sun-pulse_4s_ease-in-out_infinite] will-change-transform z-10"></div>
                </div>

                <div className="text-center translate-y-4 group-hover:-translate-y-2 transition-transform duration-500">
                  <h3 className="text-4xl font-extrabold mb-4 tracking-tight drop-shadow-md">Launch faster</h3>
                  <p className="text-xl text-purple-100 font-medium max-w-xs drop-shadow">Access top 1% creators curated just for you.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Category Section */}
      <section className="bg-gray-50 py-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Discover your people</h2>
            <p className="text-lg text-gray-600">Browse thousands of specialized creators ready to build.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Link key={category.name} href={`/categories/${category.name.toLowerCase().replace(/ & /g, '-').replace(/\s+/g, '-')}`} className="bg-gradient-to-b from-indigo-950 to-purple-950 rounded-2xl p-8 border border-purple-700/30 hover:border-orange-500/50 shadow-lg hover:shadow-[0_0_20px_rgba(249,115,22,0.2)] transition-all duration-500 group cursor-pointer relative overflow-hidden transform hover:-translate-y-1">
                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-600/20 rounded-full mix-blend-screen filter blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <h3 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors mb-3 relative z-10">{category.name}</h3>
                <div className="flex items-center text-sm text-gray-400 space-x-4 relative z-10">
                  <span className="flex items-center font-medium text-gray-300">
                    <span className="text-sm mr-2 font-bold text-orange-400">★</span>
                    {category.rating}
                  </span>
                  <span className="font-medium bg-purple-900/80 text-purple-200 px-2 py-0.5 rounded-full border border-purple-700/50">{category.skills} skills</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section >

      {/* Featured Freelancers Section */}
      < section className="py-24 bg-white relative" >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-extrabold text-gray-900 mb-3">Meet the superstars</h2>
              <p className="text-lg text-gray-600">The most highly rated creators on FreelanceBridge right now.</p>
            </div>
            <Link href="/freelancers" className="text-purple-600 font-bold hover:text-purple-800 transition-colors hidden sm:flex items-center">
              See everyone <span className="ml-2">→</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredFreelancers.map((freelancer) => (
              <div key={freelancer.name} className="bg-gradient-to-b from-indigo-950 to-purple-950 border border-purple-700/30 hover:border-orange-500/50 rounded-3xl p-8 shadow-lg hover:shadow-[0_0_30px_rgba(139,92,246,0.2)] transition-all duration-500 flex flex-col group relative overflow-hidden transform hover:-translate-y-2 cursor-pointer">
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-purple-900/30 rounded-full mix-blend-screen filter blur-3xl group-hover:bg-orange-500/20 transition-colors duration-500"></div>
                <div className="flex items-start justify-between mb-6 relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-800 to-indigo-900 rounded-full flex items-center justify-center text-2xl font-black text-white shadow-[0_0_15px_rgba(139,92,246,0.5)] border border-purple-500/30">
                    {freelancer.name.charAt(0)}
                  </div>
                  <div className="bg-purple-900 border border-purple-500/30 text-purple-300 px-3 py-1 rounded-full text-xs font-bold shadow-sm uppercase tracking-wider group-hover:border-orange-500/50 group-hover:text-orange-400 transition-colors">
                    Top Creator
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors cursor-pointer relative z-10">{freelancer.name}</h3>
                <p className="text-purple-400 font-medium mb-6 relative z-10">{freelancer.title}</p>
                <div className="flex items-center text-sm text-purple-200 mb-6 space-x-4 bg-purple-900/60 border border-purple-700/50 p-3 rounded-xl relative z-10">
                  <span className="font-bold text-white">{freelancer.rate}</span>
                  <span className="flex items-center text-orange-400 font-bold">★ {freelancer.rating}</span>
                  <span className="font-medium">{freelancer.earned} earned</span>
                </div>
                <div className="flex flex-wrap gap-2 mt-auto relative z-10">
                  {freelancer.skills.map(skill => (
                    <span key={skill} className="bg-purple-900/40 text-purple-300 border border-purple-700/50 text-xs px-3 py-1.5 rounded-full font-semibold group-hover:border-purple-500/50 transition-colors">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center sm:hidden">
            <Link href="/freelancers" className="text-purple-600 font-bold hover:text-purple-800 transition-colors">See everyone →</Link>
          </div>
        </div>
      </section >

      {/* Why Choose Us */}
      < section className="py-24 bg-gray-50" >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-b from-indigo-950 to-purple-950 rounded-[3rem] overflow-hidden flex flex-col md:flex-row shadow-2xl relative">
            {/* Decorative blob */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>

            <div className="p-12 md:p-20 md:w-1/2 text-white relative z-10">
              <h2 className="text-5xl font-extrabold mb-10 leading-tight">Why we rock</h2>
              <div className="space-y-6">
                <div className="bg-purple-950/40 backdrop-blur-xl rounded-2xl p-8 border border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:border-orange-500/30 transition-all duration-300 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full mix-blend-screen filter blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-blob-pulse"></div>
                  <h3 className="text-2xl font-bold mb-4 flex items-center relative z-10">
                    <span className="text-5xl font-black mr-6 text-transparent bg-clip-text bg-gradient-to-br from-purple-400 to-orange-400 opacity-80">01</span>
                    Top-tier vibes only
                  </h3>
                  <p className="text-purple-200 pl-16 text-lg relative z-10 leading-relaxed">Check out real portfolios, unedited reviews, and verified identities before you say hello.</p>
                </div>

                <div className="bg-purple-950/40 backdrop-blur-xl rounded-2xl p-8 border border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:border-orange-500/30 transition-all duration-300 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full mix-blend-screen filter blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-blob-pulse"></div>
                  <h3 className="text-2xl font-bold mb-4 flex items-center relative z-10">
                    <span className="text-5xl font-black mr-6 text-transparent bg-clip-text bg-gradient-to-br from-purple-400 to-orange-400 opacity-80">02</span>
                    Pay for what you love
                  </h3>
                  <p className="text-purple-200 pl-16 text-lg relative z-10 leading-relaxed">Chat with creators, align on scopes, and only part with your cash when you're 100% hyped about the result.</p>
                </div>

                <div className="bg-purple-950/40 backdrop-blur-xl rounded-2xl p-8 border border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:border-orange-500/30 transition-all duration-300 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full mix-blend-screen filter blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-blob-pulse"></div>
                  <h3 className="text-2xl font-bold mb-4 flex items-center relative z-10">
                    <span className="text-5xl font-black mr-6 text-transparent bg-clip-text bg-gradient-to-br from-purple-400 to-orange-400 opacity-80">03</span>
                    Safe as houses
                  </h3>
                  <p className="text-purple-200 pl-16 text-lg relative z-10 leading-relaxed">Focus on building the next big thing. We'll handle the boring bits like security, payments, and 24/7 support.</p>
                </div>
              </div>
            </div>
            <div className="hidden md:block md:w-1/2 relative bg-purple-800">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')] bg-cover bg-center mix-blend-overlay opacity-80" />
            </div>
          </div>
        </div>
      </section >
    </div >
  );
}
