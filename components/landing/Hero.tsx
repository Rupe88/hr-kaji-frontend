'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

// Floating animation variants
const float = {
  initial: { y: 0 },
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut" as const
    }
  }
};

const floatDelayed = {
  initial: { y: 0 },
  animate: {
    y: [10, -10, 10],
    transition: {
      duration: 7,
      repeat: Infinity,
      ease: "easeInOut" as const,
      delay: 1.5
    }
  }
};

export const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black pt-20">

      {/* Background Gradients */}
      <div className="absolute top-0 transform -translate-x-1/2 left-1/2 w-[1000px] h-[500px] bg-purple-600/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-teal-500/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {/* Floating Elements (Absolute positioned relative to container) */}

        {/* Left Top: Candidate Card */}
        <motion.div
          variants={float}
          initial="initial"
          animate="animate"
          className="absolute top-0 left-4 lg:left-20 hidden lg:block"
        >
          <div className="bg-gray-900/80 backdrop-blur-md border border-gray-800 p-4 rounded-xl shadow-2xl w-64 text-left transform -rotate-6 hover:rotate-0 transition-transform duration-500">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-400 to-purple-600" />
              <div>
                <div className="h-2 w-24 bg-gray-700 rounded mb-1"></div>
                <div className="h-2 w-16 bg-gray-800 rounded"></div>
              </div>
            </div>
            <div className="flex justify-between items-center text-xs text-gray-500">
              <span className="px-2 py-1 bg-gray-800 rounded-full text-gray-300">Product Designer</span>
              <span className="text-teal-400">In Progress</span>
            </div>
          </div>
        </motion.div>

        {/* Right Top: Recruiter Bubble */}
        <motion.div
          variants={floatDelayed}
          initial="initial"
          animate="animate"
          className="absolute top-10 right-4 lg:right-32 hidden lg:flex items-center gap-2"
        >
          <div className="bg-white text-black px-4 py-2 rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl shadow-lg font-medium text-sm">
            We need a Senior Dev ASAP! 🔥
          </div>
          <div className="w-10 h-10 rounded-full bg-blue-500 border-2 border-black" />
        </motion.div>

        {/* Left Bottom: Contractor/Message */}
        <motion.div
          variants={floatDelayed}
          initial="initial"
          animate="animate"
          className="absolute bottom-20 left-10 lg:left-40 hidden lg:flex items-center gap-2"
        >
          <div className="w-10 h-10 rounded-full bg-teal-500 border-2 border-black" />
          <div className="bg-teal-500 text-white px-4 py-2 rounded-tr-2xl rounded-br-2xl rounded-bl-2xl shadow-lg font-medium text-sm">
            Alex just applied via Btbaj
          </div>
        </motion.div>

        {/* Right Bottom: Referral Card */}
        <motion.div
          variants={float}
          initial="initial"
          animate="animate"
          className="absolute bottom-32 right-10 lg:right-40 hidden lg:block"
        >
          <div className="bg-gray-900/80 backdrop-blur-md border border-gray-800 p-4 rounded-xl shadow-2xl max-w-xs text-left transform rotate-3 hover:rotate-0 transition-transform duration-500">
            <div className="flex gap-3">
              <div className="w-10 h-10 rounded-full bg-indigo-500" />
              <div>
                <h4 className="text-white font-medium text-sm">Natalie Monet</h4>
                <p className="text-gray-400 text-xs">"Hey, Btbaj matched me instantly!"</p>
              </div>
            </div>
          </div>
        </motion.div>


        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto mt-20 sm:mt-0"
        >
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-8 leading-[1.1]">
            Swift <span className="relative inline-block px-2">
              <span className="relative z-10 text-white">recruitment</span>
              <span className="absolute inset-0 bg-blue-600/80 transform -skew-x-6 rounded-md z-0"></span>
            </span> for <br />
            current pace of work
          </h1>

          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            An all-encompassing remote hiring solution to help modern businesses grow with <span className="text-white font-medium">Btbaj</span>.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/auth/register">
              <button className="px-10 py-4 bg-white text-black text-lg font-semibold rounded-full hover:bg-gray-200 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                Get Started
              </button>
            </Link>
          </div>

          {/* Dashboard Preview Peek */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mt-20 relative z-10"
          >
            <div className="relative rounded-t-3xl border-t border-l border-r border-gray-800 bg-gray-900/50 backdrop-blur-xl p-4 pb-0 mx-auto max-w-5xl shadow-2xl overflow-hidden h-[400px]">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black z-20"></div>

              {/* Mock UI Header */}
              <div className="flex items-center justify-between mb-8 px-4">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="h-2 w-32 bg-gray-800 rounded-full" />
              </div>

              {/* Mock Content */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
                {/* Card 1 */}
                <div className="col-span-1 bg-gray-800/50 rounded-xl p-4 border border-gray-700">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 font-bold">OW</div>
                    <div>
                      <div className="text-white font-medium">Olivia Wauters</div>
                      <div className="text-gray-500 text-xs">Product Designer</div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm text-gray-400">
                      <span>Experience</span>
                      <span className="text-white">5 Years</span>
                    </div>
                    <div className="flex justify-between text-sm text-gray-400">
                      <span>Location</span>
                      <span className="text-white">Montreal</span>
                    </div>
                  </div>
                </div>

                {/* Card 2 (Stats) */}
                <div className="col-span-1 md:col-span-2 bg-gray-800/50 rounded-xl p-4 border border-gray-700 flex items-center justify-between">
                  <div>
                    <div className="text-gray-400 text-sm mb-1">Total Hires (YTD)</div>
                    <div className="text-3xl font-bold text-white">164</div>
                    <div className="text-teal-400 text-xs mt-1">+12% vs last month</div>
                  </div>
                  <div className="h-16 w-32 bg-gradient-to-r from-teal-500/20 to-blue-500/20 rounded-lg"></div>
                </div>

                {/* More mock rows */}
                <div className="col-span-3 h-20 bg-gray-800/30 rounded-xl border border-gray-700/50"></div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Trusted By Section */}
        <div className="mt-10 pb-10">
          <p className="text-gray-500 text-sm uppercase tracking-widest mb-6">Trusted by the best</p>
          <div className="flex flex-wrap justify-center gap-12 opacity-50">
            <span className="text-xl font-bold text-gray-400 font-mono">LOOM</span>
            <span className="text-xl font-bold text-gray-400 font-mono">HUBSPOT</span>
            <span className="text-xl font-bold text-gray-400 font-mono">RAMP</span>
            <span className="text-xl font-bold text-gray-400 font-mono">DESCRIPT</span>
            <span className="text-xl font-bold text-gray-400 font-mono">NETFLIX</span>
          </div>
        </div>
      </div>
    </div>
  );
};
