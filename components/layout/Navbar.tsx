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
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-5 bg-black/80 backdrop-blur-md border-b border-white/5 font-inter">
      <div className="max-w-7xl mx-auto flex items-center justify-between relative">

        {/* 1. Logo Section (Left) */}
        <div className="flex-shrink-0 z-20">
          <Link href="/" className="block relative h-10 w-44">
            {/* Using the logo provided */}
            <Image
              src="/btbaj-logo.png"
              alt="Btbaj Logo"
              fill
              className="object-contain object-left"
              priority
            />
          </Link>
        </div>

        {/* 2. Navigation Links (Center - Absolute for perfect centering) */}
        <div className="hidden md:flex items-center gap-10 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-400 hover:text-white transition-colors duration-200"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* 3. Auth Actions (Right) */}
        <div className="flex items-center gap-6 z-20">
          {isAuthenticated ? (
            <>
              <Link
                href="/dashboard"
                className="hidden md:block text-sm font-medium text-gray-300 hover:text-white transition-colors"
              >
                Dashboard
              </Link>
              <div className="flex items-center gap-3">
                <div className="hidden lg:block text-right">
                  <p className="text-xs text-gray-400">{user?.role}</p>
                  <p className="text-sm text-white font-medium">{user?.firstName}</p>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={logout}
                  className="text-xs border-gray-700 hover:bg-gray-800 text-white"
                >
                  Logout
                </Button>
              </div>
            </>
          ) : (
            <>
              <Link href="/auth/login" className="hidden sm:block">
                <span className="text-sm font-semibold text-gray-300 hover:text-white transition-colors cursor-pointer">
                  Sign In
                </span>
              </Link>
              <Link href="/auth/register">
                <button className="px-5 py-2.5 bg-white text-black text-sm font-bold rounded-full hover:bg-gray-200 transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.15)]">
                  Book a Demo
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};
