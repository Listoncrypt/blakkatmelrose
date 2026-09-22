import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Music', href: '#music' },
    { label: 'Travel', href: '#travel' },
    { label: 'About', href: '#about' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Type Beats', href: '#type-beats' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        id="main-navigation"
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/90 backdrop-blur-sm py-4 border-b border-neutral-100'
            : 'bg-transparent py-6 sm:py-8'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 flex items-center justify-between">
          <a
            href="#"
            className="flex items-center justify-center w-7 h-7 rounded-full border border-neutral-900 text-neutral-950 text-[11px] font-medium tracking-tighter hover:bg-neutral-950 hover:text-white transition-colors select-none"
            aria-label="BlakKat Melrose Home"
          >
            bm
          </a>

          <nav className="hidden md:flex items-center space-x-8 lg:space-x-10">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-[13px] text-neutral-800 hover:text-black font-normal transition-opacity hover:opacity-60"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            className="md:hidden text-neutral-900 p-1 hover:opacity-60 transition-opacity cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white flex flex-col justify-between px-8 py-10 md:hidden animate-in fade-in duration-200">
          <div className="flex items-center justify-between">
            <span className="flex items-center justify-center w-7 h-7 rounded-full border border-neutral-900 text-neutral-950 text-[11px] font-medium">
              bm
            </span>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="text-neutral-900 p-1 cursor-pointer"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <nav className="flex flex-col space-y-6 my-auto">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-4xl font-display font-medium tracking-tight text-neutral-900 hover:opacity-60 transition-opacity"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="text-[11px] tracking-widest uppercase text-neutral-400 font-mono">
            BlakKat Melrose
          </div>
        </div>
      )}
    </>
  );
};
