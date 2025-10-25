'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercentage = (window.scrollY / window.innerHeight) * 100;
      setScrolled(scrollPercentage > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-out ${
        scrolled
          ? 'w-[90%] max-w-7xl mt-4 bg-white/95 backdrop-blur-lg shadow-2xl rounded-2xl px-8 py-4'
          : 'w-[80%] max-w-8xl bg-transparent px-12 py-5'
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
        <ul className="hidden md:flex font-medium text-xl  items-center gap-8">
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
          className={`md:hidden flex flex-col gap-1.5 ${
            scrolled ? 'text-gray-900' : 'text-zinc-800'
          }`}
          aria-label="Menu"
        >
          <span className={`w-6 h-0.5 ${scrolled ? 'bg-gray-900' : 'bg-white'} transition-colors`}></span>
          <span className={`w-6 h-0.5 ${scrolled ? 'bg-gray-900' : 'bg-white'} transition-colors`}></span>
          <span className={`w-6 h-0.5 ${scrolled ? 'bg-gray-900' : 'bg-white'} transition-colors`}></span>
        </button>
      </div>
    </nav>
  );
}