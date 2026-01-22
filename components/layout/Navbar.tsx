'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/Button';
import { motion } from 'framer-motion';

export const Navbar: React.FC = () => {
  const { isAuthenticated, user, logout } = useAuth();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'How it works', href: '/#features' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Careers', href: '/careers' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-black/50 backdrop-blur-lg border-b border-white/5">
      {/* 1. Logo Section (Left) */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="flex-shrink-0 z-20"
      >
        <Link href="/" className="block">
          <Image
            src="/btbaj-logo.png"
            alt="Btbaj Logo"
            width={140}
            height={50}
            className="object-contain h-10 w-auto"
            priority
          />
        </Link>
      </motion.div>

      {/* 2. Navigation Links (Center) */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="hidden md:flex items-center gap-8 absolute left-1/2 transform -translate-x-1/2"
      >
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200"
          >
            {link.name}
          </Link>
        ))}
      </motion.div>

      {/* 3. Auth Actions (Right) */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="flex items-center gap-4 z-20"
      >
        {isAuthenticated ? (
          <>
            <Link
              href="/dashboard"
              className="hidden md:block text-sm font-medium text-gray-300 hover:text-white transition-colors"
            >
              Dashboard
            </Link>
            <div className="flex items-center gap-2">
              <span className="text-gray-400 text-xs hidden lg:inline">
                {user?.firstName}
              </span>
              <Button
                variant="outline"
                size="sm"
                onClick={logout}
                className="text-xs sm:text-sm border-gray-700 hover:bg-gray-800"
              >
                Logout
              </Button>
            </div>
          </>
        ) : (
          <>
            <Link href="/auth/login" className="hidden sm:block">
              <span className="text-sm font-medium text-gray-300 hover:text-white transition-colors px-3 py-2 cursor-pointer">
                Sign In
              </span>
            </Link>
            <Link href="/auth/register">
              <Button
                variant="primary"
                size="sm"
                className="rounded-full px-6 py-2.5 text-sm font-semibold bg-white text-black hover:bg-gray-200 border-none shadow-[0_0_15px_rgba(255,255,255,0.2)] transition-all duration-300"
              >
                Book a Demo
              </Button>
            </Link>
          </>
        )}
      </motion.div>
    </nav>
  );
};
