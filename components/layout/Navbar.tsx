'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/Button';
import { motion } from 'framer-motion';

export const Navbar: React.FC = () => {
  const { isAuthenticated, user, logout } = useAuth();

  return (
    <nav className="relative z-50 flex items-center justify-between p-4 sm:p-6">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        className="flex items-center gap-2 sm:gap-3"
      >
        <Link href="/" className="flex items-center gap-2 sm:gap-3 group">
          <div className="flex items-center gap-1 group">
            <span className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-teal-400 via-purple-500 to-pink-500 bg-clip-text text-transparent" style={{ fontFamily: 'var(--font-poppins)' }}>
              BTBAJ
            </span>
            <span className="hidden sm:block text-xs font-medium text-gray-400 tracking-widest uppercase ml-2 pt-2 border-l border-gray-700 pl-2">
              HR Platform
            </span>
          </div>
        </Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        className="flex items-center gap-2 sm:gap-4"
      >
        {isAuthenticated ? (
          <>
            <div className="hidden md:flex items-center gap-4 lg:gap-6">
              <Link
                href="/jobs"
                className="text-gray-300 hover:text-white transition-colors text-sm lg:text-base"
              >
                Jobs
              </Link>
              <Link
                href="/dashboard"
                className="text-gray-300 hover:text-white transition-colors text-sm lg:text-base"
              >
                Dashboard
              </Link>
              {user && (
                <span className="text-gray-300 text-sm lg:text-base">
                  {user.firstName} {user.lastName}
                </span>
              )}
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={logout}
              className="text-xs sm:text-sm"
            >
              Logout
            </Button>
          </>
        ) : (
          <>
            <Link href="/auth/login">
              <Button
                variant="outline"
                size="sm"
                className="text-xs sm:text-sm px-4 sm:px-5 py-2 border-2 hover:bg-teal-400/10"
              >
                LOGIN
              </Button>
            </Link>
            <Link href="/auth/register">
              <Button
                variant="primary"
                size="sm"
                className="text-xs sm:text-sm px-4 sm:px-5 py-2"
              >
                REGISTER
              </Button>
            </Link>
          </>
        )}
      </motion.div>
    </nav>
  );
};
