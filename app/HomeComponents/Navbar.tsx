'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercentage = (window.scrollY / window.innerHeight) * 100;
      setScrolled(scrollPercentage > 10);
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

  return (
    <nav
      className={`fixed top-0 left-1/2 -translate-x-1/2 z-50 transition-all duration-700 ease-in-out ${
        scrolled
          ? 'w-[92%] max-w-6xl mt-4 bg-white shadow-xl rounded-2xl px-6 md:px-8 py-3'
          : 'w-[96%] md:w-[88%] max-w-7xl bg-white/5 px-6 md:px-12 py-4'
      }`}
    >
      <div className="flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className={`text-2xl w-10 h-10 font-bold transition-colors duration-300 ${
            scrolled ? 'text-gray-900' : 'text-zinc-800'
          }`}
        >
          <img src="/logo.avif" alt="" />
        </Link>
        
        {/* Navigation Links */}
        <ul className="hidden md:flex font-medium text-md  items-center gap-8">
          <li>
            <Link
              href="/"
              className={`relative  transition-colors duration-300 hover:opacity-80 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:transition-all after:duration-300 ${
                scrolled
                  ? 'text-gray-700 after:bg-zinc-600'
                  : 'text-zinc-800 after:bg-white'
              }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/case-studies"
              className={`relative  transition-colors duration-300 hover:opacity-80 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:transition-all after:duration-300 ${
                scrolled
                  ? 'text-gray-700 after:bg-zinc-600'
                  : 'text-zinc-800 after:bg-white'
              }`}
            >
              Case Studies
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className={`relative  transition-colors duration-300 hover:opacity-80 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:transition-all after:duration-300 ${
                scrolled
                  ? 'text-gray-700 after:bg-zinc-600'
                  : 'text-zinc-800 after:bg-white'
              }`}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/services"
              className={`relative  transition-colors duration-300 hover:opacity-80 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:transition-all after:duration-300 ${
                scrolled
                  ? 'text-gray-700 after:bg-zinc-600'
                  : 'text-zinc-800 after:bg-white'
              }`}
            >
              Services
            </Link>
          </li>
      
        </ul>
        <div>
            <Link
              href="/contact"
              className={`px-6 py-2.5 rounded-full border font-semibold transition-all duration-300 ${
                scrolled
                  ? 'bg-gradient-to-r from-zinc-100 to-white text-black hover:shadow-lg hover:scale-105'
                  : 'bg-white text-zinc-600 hover:bg-opacity-90 hover:scale-105'
              }`}
            >
              Contact Me
            </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`md:hidden flex flex-col gap-1.5 ${
            scrolled ? 'text-gray-900' : 'text-zinc-800'
          }`}
          aria-label="Menu"
        >
          <span className={`w-6 h-0.5 ${mobileMenuOpen ? 'bg-gray-900 rotate-45 translate-y-2' : (scrolled ? 'bg-gray-900' : 'bg-zinc-800')} transition-all duration-300`}></span>
          <span className={`w-6 h-0.5 ${mobileMenuOpen ? 'opacity-0' : (scrolled ? 'bg-gray-900' : 'bg-zinc-800')} transition-all duration-300`}></span>
          <span className={`w-6 h-0.5 ${mobileMenuOpen ? 'bg-gray-900 -rotate-45 -translate-y-2' : (scrolled ? 'bg-gray-900' : 'bg-zinc-800')} transition-all duration-300`}></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 right-0 h-screen w-full bg-white z-40 transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ paddingTop: '80px' }}
      >
        <ul className="flex flex-col items-center gap-8 py-8">
          <li>
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="text-2xl font-medium text-gray-800 hover:text-[#C4A47C] transition-colors"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/case-studies"
              onClick={() => setMobileMenuOpen(false)}
              className="text-2xl font-medium text-gray-800 hover:text-[#C4A47C] transition-colors"
            >
              Case Studies
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="text-2xl font-medium text-gray-800 hover:text-[#C4A47C] transition-colors"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/services"
              onClick={() => setMobileMenuOpen(false)}
              className="text-2xl font-medium text-gray-800 hover:text-[#C4A47C] transition-colors"
            >
              Services
            </Link>
          </li>
          <li className="mt-4">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="px-8 py-3 bg-gradient-to-r from-zinc-800 to-black text-white rounded-full font-semibold hover:shadow-lg transition-all"
            >
              Contact Me
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}