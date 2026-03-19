import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-purple-950 text-white">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {/* FOR BUILDERS */}
                    <div>
                        <h3 className="text-sm font-bold tracking-wider text-orange-400 uppercase mb-4">For Builders</h3>
                        <ul className="space-y-3 text-sm text-purple-200">
                            <li><Link href="/jobs" className="hover:text-white transition-colors">Browse Gigs</Link></li>
                            <li><Link href="/jobs/post" className="hover:text-white transition-colors">Post a Project</Link></li>
                            <li><Link href="/how-to-hire" className="hover:text-white transition-colors">How to Hire</Link></li>
                            <li><Link href="/enterprise" className="hover:text-white transition-colors">Enterprise</Link></li>
                        </ul>
                    </div>

                    {/* FOR CREATORS */}
                    <div>
                        <h3 className="text-sm font-bold tracking-wider text-orange-400 uppercase mb-4">For Creators</h3>
                        <ul className="space-y-3 text-sm text-purple-200">
                            <li><Link href="/freelancers" className="hover:text-white transition-colors">Find Work</Link></li>
                            <li><Link href="/register" className="hover:text-white transition-colors">Create Profile</Link></li>
                            <li><Link href="/skills" className="hover:text-white transition-colors">Skills & Tools</Link></li>
                            <li><Link href="/community" className="hover:text-white transition-colors">Community</Link></li>
                        </ul>
                    </div>

                    {/* RESOURCES */}
                    <div>
                        <h3 className="text-sm font-bold tracking-wider text-orange-400 uppercase mb-4">Resources</h3>
                        <ul className="space-y-3 text-sm text-purple-200">
                            <li><Link href="/help" className="hover:text-white transition-colors">Help & Support</Link></li>
                            <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
                            <li><Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
                            <li><Link href="/accessibility" className="hover:text-white transition-colors">Accessibility</Link></li>
                        </ul>
                    </div>

                    {/* COMPANY */}
                    <div>
                        <h3 className="text-sm font-bold tracking-wider text-orange-400 uppercase mb-4">Company</h3>
                        <ul className="space-y-3 text-sm text-purple-200">
                            <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                            <li><Link href="/leadership" className="hover:text-white transition-colors">Leadership</Link></li>
                            <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                            <li><Link href="/careers" className="hover:text-white transition-colors">Careers</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 border-t border-purple-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-purple-300">
                    <div className="flex items-center gap-3 mb-4 md:mb-0">
                        <span className="text-orange-400 font-bold text-base">FreelanceBridge</span>
                        <p>&copy; {new Date().getFullYear()} FreelanceBridge Worldwide. All rights reserved.</p>
                    </div>
                    <div className="flex flex-wrap gap-4 justify-center md:justify-end">
                        <Link href="/terms-of-magic" className="hover:text-white transition-colors">Terms of Magic</Link>
                        <Link href="/privacy-vibes" className="hover:text-white transition-colors">Privacy Vibes</Link>
                        <Link href="/cookie-settings" className="hover:text-white transition-colors">Cookie Settings</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
