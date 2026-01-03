'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { useTheme } from './ThemeProvider';
import { FaSun, FaMoon } from 'react-icons/fa';

export default function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <motion.nav
      variants={{
        initial: { 
          backgroundColor: theme === 'dark' ? "rgba(10, 10, 10, 0)" : "rgba(255, 255, 255, 0)",
          backdropFilter: "blur(0px)" 
        },
        scrolled: { 
          backgroundColor: theme === 'dark' ? "rgba(10, 10, 10, 0.95)" : "rgba(255, 255, 255, 0.95)",
          backdropFilter: "blur(20px)" 
        }
      }}
      initial="initial"
      animate={isScrolled ? "scrolled" : "initial"}
      transition={{ duration: 0.3 }}
      className={`fixed w-full z-50 top-0 border-b ${
        theme === 'dark' ? 'border-white/10' : 'border-gray-200/50'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link 
          href="/" 
          className={`text-2xl font-bold tracking-tighter hover:scale-105 transition-transform duration-300 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}
        >
          LUMA<span className="text-blue-500">.</span>
        </Link>
        <div className="hidden md:flex items-center space-x-8">
          <div className="flex space-x-8 text-sm font-medium uppercase tracking-wider">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href === '/' && pathname === '/');
              return (
                <Link 
                  key={link.href}
                  href={link.href} 
                  className={`relative transition-colors duration-300 ${
                    theme === 'dark' 
                      ? `hover:text-blue-400 ${isActive ? 'text-blue-400' : 'text-gray-300'}`
                      : `hover:text-blue-600 ${isActive ? 'text-blue-600' : 'text-gray-700'}`
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className={`absolute -bottom-1 left-0 right-0 h-0.5 ${
                        theme === 'dark' ? 'bg-blue-400' : 'bg-blue-600'
                      }`}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>
          {/* Theme Toggle Button */}
          <motion.button
            onClick={toggleTheme}
            className={`p-2 rounded-full transition-colors duration-300 ${
              theme === 'dark'
                ? 'bg-white/10 hover:bg-white/20 text-yellow-400'
                : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
            }`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <FaSun className="w-5 h-5" />
            ) : (
              <FaMoon className="w-5 h-5" />
            )}
          </motion.button>
        </div>
        {/* Mobile menu button */}
        <div className="md:hidden flex items-center gap-4">
          <motion.button
            onClick={toggleTheme}
            className={`p-2 rounded-full ${
              theme === 'dark'
                ? 'bg-white/10 text-yellow-400'
                : 'bg-gray-200 text-gray-700'
            }`}
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <FaSun className="w-5 h-5" />
            ) : (
              <FaMoon className="w-5 h-5" />
            )}
          </motion.button>
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={theme === 'dark' ? 'text-white' : 'text-gray-900'}
            aria-label="Toggle mobile menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className={`md:hidden border-t ${
              theme === 'dark' ? 'border-white/10 bg-[#0a0a0a]' : 'border-gray-200/50 bg-white'
            }`}
          >
            <div className="max-w-7xl mx-auto px-6 py-4 space-y-4">
              {navLinks.map((link) => {
                const isActive = pathname === link.href || (link.href === '/' && pathname === '/');
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block text-lg font-medium transition-colors duration-300 ${
                      theme === 'dark'
                        ? `hover:text-blue-400 ${isActive ? 'text-blue-400' : 'text-gray-300'}`
                        : `hover:text-blue-600 ${isActive ? 'text-blue-600' : 'text-gray-700'}`
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}