'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            scrolled ? 'bg-white shadow-md' : 'bg-transparent'
        }`}>
            <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center">
                        <span className="text-white text-lg font-bold">⚡</span>
                    </div>
                    <span className="text-xl font-bold text-dark">Pacewell</span>
                </div>
                
                <div className="hidden md:flex items-center gap-8">
                    <a href="#features" className="text-gray-600 hover:text-primary transition-colors font-medium">
                        Features
                    </a>
                    <a href="#how-it-works" className="text-gray-600 hover:text-primary transition-colors font-medium">
                        How It Works
                    </a>
                    <a href="#testimonials" className="text-gray-600 hover:text-primary transition-colors font-medium">
                        Reviews
                    </a>
                </div>
                
                <div className="hidden md:flex items-center gap-4">
                    <a href="#download" className="bg-primary text-white px-6 py-2.5 rounded-xl font-semibold hover:bg-primary-dark transition-colors">
                        Download App
                    </a>
                </div>
                
                <button
                    className="md:hidden text-dark"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <span className="text-2xl">{menuOpen ? '✕' : '☰'}</span>
                </button>
            </div>
            
            {menuOpen && (
                <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4">
                    <a href="#features" className="text-gray-600 font-medium" onClick={() => setMenuOpen(false)}>Features</a>
                    <a href="#how-it-works" className="text-gray-600 font-medium" onClick={() => setMenuOpen(false)}>How It Works</a>
                    <a href="#testimonials" className="text-gray-600 font-medium" onClick={() => setMenuOpen(false)}>Reviews</a>
                    <a
                        href="#download"
                        className="bg-primary text-white px-6 py-2.5 rounded-xl font-semibold text-center"
                        onClick={() => setMenuOpen(false)}
                    >
                        Download App
                    </a>
                </div>
            )}

        </nav>
    );
}