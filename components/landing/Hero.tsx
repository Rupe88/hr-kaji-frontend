'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

// Animations for floating elements
const floatAnimation = {
  y: [-10, 10, -10],
  transition: {
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut"
  }
};

const floatAnimationDelayed = {
  y: [10, -10, 10],
  transition: {
    duration: 5,
    repeat: Infinity,
    ease: "easeInOut",
    delay: 1
  }
};

export const Hero: React.FC = () => {
  return (
    <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-black/40">

      {/* Background Glows (Neon Theme) */}
      <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[100px]" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-teal-500/20 rounded-full blur-[100px]" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {/* Floating Element 1: Profile Card (Left Top) */}
        <motion.div
          animate={floatAnimation}
          className="absolute top-20 left-10 lg:left-32 hidden md:block bg-gray-900/80 backdrop-blur-md p-4 rounded-2xl border border-gray-800 shadow-xl max-w-[200px] text-left"
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-teal-400 to-blue-500" />
            <div>
              <div className="h-2 w-20 bg-gray-700 rounded mb-1"></div>
              <div className="h-2 w-12 bg-gray-800 rounded"></div>
            </div>
          </div>
          <div className="space-y-2">
            <div className="h-1.5 w-full bg-gray-800 rounded"></div>
            <div className="flex gap-1">
              <div className="h-1.5 w-4 bg-teal-500 rounded"></div>
              <div className="h-1.5 w-12 bg-gray-800 rounded"></div>
              <div className="h-1.5 w-4 bg-gray-800 rounded"></div>
            </div>
          </div>
        </motion.div>

        {/* Floating Element 2: Chat Bubble (Right Top) */}
        <motion.div
          animate={floatAnimationDelayed}
          className="absolute top-32 right-10 lg:right-40 hidden md:flex items-center gap-3 bg-gray-900/80 backdrop-blur-md px-4 py-3 rounded-full border border-gray-800 shadow-xl"
        >
          <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center text-xs font-bold text-white">MK</div>
          <div className="text-sm text-gray-300">New candidate applied! 🚀</div>
        </motion.div>

        {/* Floating Element 3: Stats Card (Left Bottom) */}
        <motion.div
          animate={floatAnimationDelayed}
          className="absolute bottom-20 left-20 lg:left-40 hidden lg:block bg-gray-900/80 backdrop-blur-md p-5 rounded-2xl border border-gray-800 shadow-xl max-w-[220px]"
        >
          <div className="flex justify-between items-center mb-3">
            <div className="text-sm text-gray-400">Total Hires</div>
            <div className="text-teal-400 text-xs font-bold">+12%</div>
          </div>
          <div className="text-3xl font-bold text-white mb-1">1,240</div>
          <div className="text-xs text-gray-500">Candidates placed this month</div>
        </motion.div>

        {/* Floating Element 4: Notification (Right Bottom) */}
        <motion.div
          animate={floatAnimation}
          className="absolute bottom-32 right-10 lg:right-20 hidden md:block"
        >
          <div className="bg-gray-900/90 backdrop-blur-md p-3 rounded-xl border border-gray-800 shadow-lg flex items-center gap-3">
            <span className="text-2xl">🔔</span>
            <div>
              <p className="text-sm font-semibold text-white">Interview Scheduled</p>
              <p className="text-xs text-gray-400">Tomorrow, 10:00 AM</p>
            </div>
          </div>
        </motion.div>


        {/* Main Headings */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl sm:text-6xl lg:text-8xl font-bold tracking-tight mb-8"
        >
          Smart <span className="relative inline-block">
            <span className="relative z-10 px-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-500">recruitment</span>
            <span className="absolute inset-0 bg-purple-500/10 -skew-y-2 rounded transform scale-105 z-0"></span>
          </span> for <br className="hidden sm:block" />
          current pace of work
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg sm:text-xl lg:text-2xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          An all-encompassing location-based hiring solution to help modern businesses grow with <span className="text-gray-200 font-medium">Btbaj</span>.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center"
        >
          <Link href="/auth/register">
            <button className="px-10 py-4 bg-white text-black font-semibold rounded-full text-lg hover:bg-gray-200 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3)]">
              Get Started
            </button>
          </Link>
        </motion.div>

        {/* Trusted By Section (Optional / Minimal) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mt-24 pt-10 border-t border-gray-800/50"
        >
          <p className="text-gray-500 text-sm uppercase tracking-widest mb-6">Trusted by the best</p>
          <div className="flex flex-wrap justify-center gap-10 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Simple Text Placeholders for Logos to keep it clean, or use icons */}
            <span className="text-xl font-bold text-gray-400">Loom</span>
            <span className="text-xl font-bold text-gray-400">HubSpot</span>
            <span className="text-xl font-bold text-gray-400">Ramp</span>
            <span className="text-xl font-bold text-gray-400">Descript</span>
          </div>
        </motion.div>

      </div>
    </div>
  );
};
