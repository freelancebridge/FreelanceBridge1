import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-purple-950 text-white">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-sm font-bold tracking-wider text-orange-400 uppercase mb-4">For Builders</h3>
                        <ul className="space-y-4 text-sm text-purple-200">
                            <li><Link href="/how-to-hire" className="hover:text-white transition-colors">How to Hire</Link></li>
                            <li><Link href="/marketplace" className="hover:text-white transition-colors">Creator Marketplace</Link></li>
                            <li><Link href="/idea-catalog" className="hover:text-white transition-colors">Idea Catalog</Link></li>
                            <li><Link href="/hire-studio" className="hover:text-white transition-colors">Hire a Studio</Link></li>
                            <li><Link href="/enterprise" className="hover:text-white transition-colors">Enterprise Magic</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-sm font-bold tracking-wider text-orange-400 uppercase mb-4">For Creators</h3>
                        <ul className="space-y-4 text-sm text-purple-200">
                            <li><Link href="/how-to-find-gigs" className="hover:text-white transition-colors">How to Find Gigs</Link></li>
                            <li><Link href="/direct-collabs" className="hover:text-white transition-colors">Direct Collabs</Link></li>
                            <li><Link href="/remote-jobs" className="hover:text-white transition-colors">Find Remote Jobs</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-sm font-bold tracking-wider text-orange-400 uppercase mb-4">Resources</h3>
                        <ul className="space-y-4 text-sm text-purple-200">
                            <li><Link href="/help" className="hover:text-white transition-colors">Help &amp; Support</Link></li>
                            <li><Link href="/success-stories" className="hover:text-white transition-colors">Success Stories</Link></li>
                            <li><Link href="/reviews" className="hover:text-white transition-colors">Community Reviews</Link></li>
                            <li><Link href="/resources" className="hover:text-white transition-colors">Resources</Link></li>
                            <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-sm font-bold tracking-wider text-orange-400 uppercase mb-4">Company</h3>
                        <ul className="space-y-4 text-sm text-purple-200">
                            <li><Link href="/about" className="hover:text-white transition-colors">Who We Are</Link></li>
                            <li><Link href="/leadership" className="hover:text-white transition-colors">Leadership</Link></li>
                            <li><Link href="/careers" className="hover:text-white transition-colors">Careers</Link></li>
                            <li><Link href="/impact" className="hover:text-white transition-colors">Our Impact</Link></li>
                            <li><Link href="/press" className="hover:text-white transition-colors">Press</Link></li>
                            <li><Link href="/contact" className="hover:text-white transition-colors">Say Hello</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="mt-12 border-t border-purple-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-purple-300">
                    <p>&copy; {new Date().getFullYear()} FreelanceBridge Worldwide</p>
                    <div className="mt-4 md:mt-0 flex space-x-6">
                        <Link href="/terms-of-magic" className="hover:text-white transition-colors">Terms of Magic</Link>
                        <Link href="/privacy-vibes" className="hover:text-white transition-colors">Privacy Vibes</Link>
                        <Link href="/cookie-settings" className="hover:text-white transition-colors">Cookie Settings</Link>
                        <Link href="/accessibility" className="hover:text-white transition-colors">Accessibility</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
