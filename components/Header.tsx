// Header component - MODERNIZED & REBRANDED to CekPaket
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { href: '/', label: 'Beranda' },
        { href: '/track', label: 'Lacak Paket' },
        { href: '/couriers', label: 'Kurir' },
        { href: '/features', label: 'Fitur' },
        { href: '/about', label: 'Tentang' },
        { href: '/faq', label: 'FAQ' },
        { href: '/contact', label: 'Kontak' },
    ];

    const isActive = (path: string) => pathname === path;

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? 'bg-slate-950/95 backdrop-blur-xl shadow-2xl border-b border-white/5'
                : 'bg-transparent'
                }`}
        >
            <nav className="container-custom">
                <div className="flex items-center justify-between h-20">
                    {/* Logo - ENLARGED, NO TEXT */}
                    <Link href="/" className="flex items-center group">
                        <div className="relative w-16 h-16 transform group-hover:scale-110 transition-all duration-300">
                            <Image
                                src="/logo web.png"
                                alt="CekPaket Logo"
                                fill
                                className="object-contain drop-shadow-2xl"
                                priority
                            />
                        </div>
                    </Link>

                    {/* Desktop Navigation - MODERN */}
                    <div className="hidden lg:flex items-center space-x-1">
                        {navLinks.map((link, index) => (
                            <div key={link.href} className="flex items-center">
                                <Link
                                    href={link.href}
                                    className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 group ${isActive(link.href)
                                        ? 'text-white bg-white/10'
                                        : 'text-slate-300 hover:text-white hover:bg-white/5'
                                        }`}
                                >
                                    {link.label}
                                    {isActive(link.href) && (
                                        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-0.5 bg-primary rounded-full"></span>
                                    )}
                                </Link>
                                {/* Add Separator if not the last item */}
                                {index < navLinks.length - 1 && (
                                    <span className="text-slate-600 mx-1 select-none">|</span>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* CTA Button - MODERN, NO ICON */}
                    <div className="hidden lg:block">
                        <Link
                            href="/track"
                            className="relative px-6 py-2.5 bg-white text-slate-900 rounded-lg font-bold text-sm hover:bg-slate-200 transition-all shadow-lg shadow-white/10"
                        >
                            Lacak Sekarang
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="lg:hidden p-2.5 rounded-xl hover:bg-white/10 transition-colors text-white"
                        aria-label="Toggle menu"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            {isMobileMenuOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="lg:hidden py-6 animate-slide-in-up border-t border-white/5 bg-slate-900 absolute left-0 right-0 px-4 shadow-2xl">
                        <div className="flex flex-col space-y-2">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={`px-4 py-3 rounded-xl font-medium transition-all duration-300 ${isActive(link.href)
                                        ? 'bg-white/10 text-white'
                                        : 'text-white/70 hover:text-white hover:bg-white/5'
                                        }`}
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <Link
                                href="/track"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="px-6 py-3 bg-gradient-to-r from-primary to-primary-dark text-white rounded-xl font-semibold text-center mt-4"
                            >
                                Lacak Sekarang
                            </Link>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
}
