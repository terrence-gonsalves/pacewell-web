'use client';

import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 40);

        window.addEventListener('scroll', handleScroll);
        
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
                scrolled
                ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-border'
                : 'bg-transparent'
            }`}
        >
            <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
                <a href="#" className="flex items-center gap-2.5 group">
                    <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center shadow-green transition-transform group-hover:scale-105">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                            <path d="M13 2L4.5 13.5H12L11 22L19.5 10.5H12L13 2Z" fill="white" strokeLinejoin="round"/>
                        </svg>
                    </div>
                    <span className="font-display text-xl font-semibold text-dark tracking-tight">Pacewell</span>
                </a>

                {/* desktop nav */}
                <div className="hidden md:flex items-center gap-8">

                    {['Features', 'How It Works', 'Reviews'].map((item) => (
                    <a
                        key={item}
                        href={`#${item.toLowerCase().replace(/ /g, '-')}`}
                        className="text-subtle hover:text-primary transition-colors text-sm font-medium animated-underline"
                    >
                        {item}
                    </a>
                    ))}

                </div>
                
                <div className="hidden md:flex items-center gap-3">
                    <a
                        href="#download"
                        className="bg-primary text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-primary-dark transition-all hover:shadow-green hover:-translate-y-0.5 active:translate-y-0"
                    >
                        Download Free
                    </a>
                </div>

                {/* mobile hamburger */}
                <button
                    className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    <span className={`block h-0.5 bg-dark transition-all duration-300 ${menuOpen ? 'w-6 rotate-45 translate-y-2' : 'w-6'}`} />
                    <span className={`block h-0.5 bg-dark transition-all duration-300 ${menuOpen ? 'w-0 opacity-0' : 'w-5'}`} />
                    <span className={`block h-0.5 bg-dark transition-all duration-300 ${menuOpen ? 'w-6 -rotate-45 -translate-y-2' : 'w-6'}`} />
                </button>
            </div>

            {/* mobile menu */}
            <div className={`md:hidden transition-all duration-300 overflow-hidden ${menuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="bg-white border-t border-border px-6 py-5 flex flex-col gap-4">

                    {['Features', 'How It Works', 'Reviews'].map((item) => (
                    <a
                        key={item}
                        href={`#${item.toLowerCase().replace(/ /g, '-')}`}
                        className="text-body font-medium py-1"
                        onClick={() => setMenuOpen(false)}
                    >
                        {item}
                    </a>
                    ))}
                    
                    <a
                        href="#download"
                        className="bg-primary text-white px-6 py-3 rounded-xl font-semibold text-center mt-2"
                        onClick={() => setMenuOpen(false)}
                    >
                        Download Free
                    </a>
                </div>
            </div>
        </nav>
    );
}