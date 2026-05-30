'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-bg/85 backdrop-blur-md border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2 font-mono text-sm">
          <span className="w-2 h-2 rounded-full bg-neon-green animate-pulse" />
          <span className="text-text-secondary">prit@yagnik</span>
          <span className="text-neon-teal">:~$</span>
        </div>

        <div className="hidden md:flex gap-6 lg:gap-8 font-mono text-sm text-text-secondary">
          <a href="#about" className="hover:text-neon-teal transition">./about</a>
          <a href="#apps" className="hover:text-neon-teal transition">./projects</a>
          <a href="#stack" className="hover:text-neon-teal transition">./stack</a>
          <a href="#education" className="hover:text-neon-teal transition">./education</a>
          <a href="#contact" className="hover:text-neon-teal transition">./contact</a>
        </div>

        <a
          href="https://www.upwork.com/freelancers/~010bc8ad5cff34b360?mp_source=share"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary text-sm"
        >
          Hire me
        </a>
      </div>
    </motion.nav>
  );
}
