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
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black pt-20 font-inter">

      {/* Background Gradients - Subtle Neon Glow */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[1200px] h-[600px] bg-purple-900/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[1000px] h-[800px] bg-teal-900/20 blur-[130px] rounded-full pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {/* === Floating Elements === */}

        {/* Top Left: Candidate Card */}
        <motion.div
          variants={float}
          initial="initial"
          animate="animate"
          className="absolute top-0 left-4 lg:left-10 xl:left-20 hidden lg:block"
        >
          <div className="bg-[#111111]/90 backdrop-blur-md border border-[#222] p-4 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.5)] w-60 text-left transform -rotate-3 hover:rotate-0 transition-transform duration-500">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center text-white text-xs font-bold">OW</div>
              <div>
                <div className="text-white text-sm font-semibold">Olivia Wauters</div>
                <div className="text-gray-500 text-xs">Product Designer</div>
              </div>
            </div>
            <div className="flex justify-between items-center mt-3">
              <div className="h-1.5 w-full bg-gray-800 rounded-full overflow-hidden mr-3">
                <div className="h-full w-2/3 bg-teal-500 rounded-full"></div>
              </div>
              <span className="text-[10px] text-teal-400 font-medium whitespace-nowrap">In Progress</span>
            </div>
          </div>
        </motion.div>

        {/* Top Right: Recruiter Bubble */}
        <motion.div
          variants={floatDelayed}
          initial="initial"
          animate="animate"
          className="absolute top-12 right-4 lg:right-10 xl:right-32 hidden lg:flex items-center gap-3"
        >
          <div className="bg-[#FF4D4D] text-white px-4 py-2.5 rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl shadow-lg font-medium text-sm">
            We need a Senior Dev ASAP! 🔥
          </div>
          <div className="w-11 h-11 rounded-full border-2 border-[#111] overflow-hidden flex items-center justify-center bg-gray-800">
            <span className="text-lg">🧔🏻</span>
          </div>
          <div className="absolute -top-6 right-0 bg-red-500 text-white text-[10px] px-2 py-0.5 rounded-full font-bold">
            Recruiter
          </div>
        </motion.div>

        {/* Bottom Left: Contractor Message */}
        <motion.div
          variants={floatDelayed}
          initial="initial"
          animate="animate"
          className="absolute bottom-40 left-10 lg:left-24 xl:left-48 hidden lg:flex items-center gap-3"
        >
          <div className="w-11 h-11 rounded-full border-2 border-[#111] overflow-hidden flex items-center justify-center bg-blue-600">
            <span className="text-lg">👨🏿‍💻</span>
          </div>
          <div className="bg-[#0EA5E9] text-white px-4 py-2.5 rounded-tr-2xl rounded-br-2xl rounded-bl-2xl shadow-lg font-medium text-sm">
            Alex just applied via Btbaj
          </div>
          <div className="absolute -top-6 left-0 bg-blue-500 text-white text-[10px] px-2 py-0.5 rounded-full font-bold">
            Contractor
          </div>
        </motion.div>

        {/* Bottom Right: Referral Card */}
        <motion.div
          variants={float}
          initial="initial"
          animate="animate"
          className="absolute bottom-48 right-10 lg:right-20 xl:right-40 hidden lg:block"
        >
          <div className="bg-[#111111]/90 backdrop-blur-md border border-[#222] p-4 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.5)] max-w-xs text-left transform rotate-2 hover:rotate-0 transition-transform duration-500">
            <div className="flex gap-3">
              <div className="w-10 h-10 rounded-full bg-indigo-500 flex items-center justify-center text-white font-bold text-xs">NM</div>
              <div>
                <h4 className="text-white font-semibold text-sm">Natalie Monet</h4>
                <p className="text-gray-400 text-xs mt-0.5">"Hey, we've got a hot referral for your sales team!"</p>
                <p className="text-gray-600 text-[10px] mt-2">11:26 AM</p>
              </div>
            </div>
          </div>
        </motion.div>


        {/* === Main Content === */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto mt-24 sm:mt-12"
        >
          <h1 className="text-6xl sm:text-7xl lg:text-[5.5rem] font-bold tracking-tight text-white mb-8 leading-[1.05]">
            Swift <span className="relative inline-block px-1 mx-1">
              <span className="relative z-10 text-white">recruitment</span>
              <span className="absolute inset-0 bg-[#4F46E5] transform -skew-x-3 rounded-lg z-0"></span>
            </span> for <br />
            current pace of work
          </h1>

          <p className="text-xl sm:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
            An all-encompassing remote hiring solution to help modern businesses grow with <span className="text-white font-medium">Btbaj</span>.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
            <Link href="/auth/register">
              <button className="px-10 py-4 bg-white text-black text-lg font-bold rounded-full hover:bg-gray-200 transition-all duration-300 shadow-[0_0_25px_rgba(255,255,255,0.4)]">
                Get Started
              </button>
            </Link>
          </div>

          {/* === Dashboard Preview Cluster === */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1, ease: "easeOut" }}
            className="relative z-10 mt-16 max-w-5xl mx-auto"
          >
            {/* Main Cluster Container - Use CSS Grid/Flex for offset layout */}
            <div className="relative flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8">

              {/* 1. Main Profile Card (Center-Left) */}
              <motion.div
                whileHover={{ y: -5 }}
                className="relative bg-[#111111] rounded-3xl p-6 border border-[#222] shadow-2xl w-full max-w-sm z-20"
              >
                {/* Notification Badge */}
                <div className="absolute -top-4 -right-4 bg-white text-black p-2 rounded-full shadow-lg z-30 animate-bounce">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                </div>

                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-[#4F46E5] flex items-center justify-center text-white text-2xl font-bold border-4 border-[#111]">OW</div>
                  <div className="text-left">
                    <div className="text-white font-bold text-xl">Olivia Wauters</div>
                    <div className="text-gray-500 text-sm">Product Designer</div>
                  </div>
                  <div className="ml-auto flex flex-col items-end">
                    <div className="text-[10px] text-orange-500 font-bold uppercase tracking-wider mb-1">Referral</div>
                    <div className="text-[10px] text-blue-400">from Remote</div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 border-t border-[#222] pt-6">
                  <div className="text-left">
                    <div className="text-gray-500 text-xs mb-1">Full Time</div>
                    <div className="h-1.5 w-full bg-gray-800 rounded-full mt-2">
                      <div className="h-full w-full bg-purple-500 rounded-full"></div>
                    </div>
                  </div>
                  <div className="text-left">
                    <div className="text-gray-500 text-xs mb-1">Senior Level</div>
                    <div className="h-1.5 w-full bg-gray-800 rounded-full mt-2">
                      <div className="h-full w-3/4 bg-teal-500 rounded-full"></div>
                    </div>
                  </div>
                  <div className="text-left">
                    <div className="text-gray-500 text-xs mb-1">Montreal</div>
                    <div className="h-1.5 w-full bg-gray-800 rounded-full mt-2">
                      <div className="h-full w-1/2 bg-blue-500 rounded-full"></div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 bg-[#1A1A1A] p-4 rounded-xl text-left border border-[#222]">
                  <div className="text-gray-400 text-xs font-medium mb-1">Description</div>
                  <p className="text-gray-500 text-xs leading-relaxed">
                    As you are reviewing candidates for the open customer service position, we...
                  </p>
                </div>
              </motion.div>

              {/* 2. Stats & Payments Stack (Right Side) */}
              <div className="flex flex-col gap-6 w-full max-w-xs z-10">
                {/* Stats Card */}
                <motion.div
                  whileHover={{ x: 5 }}
                  className="bg-white text-black rounded-2xl p-5 shadow-xl flex items-center gap-4"
                >
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-xl">
                    👥
                  </div>
                  <div className="text-left">
                    <div className="text-3xl font-bold">164</div>
                    <div className="text-gray-600 text-xs font-medium">Employees <span className="text-emerald-600 ml-1">+10 onboarding</span></div>
                  </div>
                </motion.div>

                {/* Payments Card */}
                <motion.div
                  whileHover={{ x: 5 }}
                  className="bg-[#111111] rounded-2xl p-0 border border-[#222] shadow-xl overflow-hidden"
                >
                  <div className="px-5 py-3 border-b border-[#222] flex justify-between items-center">
                    <span className="text-sm font-bold text-white">payments</span>
                    <span className="text-xs text-blue-500 cursor-pointer">View all</span>
                  </div>
                  <div className="p-2">
                    <div className="flex items-center justify-between p-3 hover:bg-[#1A1A1A] rounded-xl transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-orange-500/20 text-orange-500 flex items-center justify-center text-xs font-bold">M</div>
                        <div className="text-left">
                          <div className="text-white text-xs font-medium">Mark Wouters</div>
                          <div className="text-gray-500 text-[10px]">Developer</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-white text-sm font-mono">$15,000</span>
                        <div className="w-4 h-4 rounded-full bg-blue-600 flex items-center justify-center text-[10px]">✓</div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-3 hover:bg-[#1A1A1A] rounded-xl transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-purple-500/20 text-purple-500 flex items-center justify-center text-xs font-bold">P</div>
                        <div className="text-left">
                          <div className="text-white text-xs font-medium">Patricia Costa</div>
                          <div className="text-gray-500 text-[10px]">Copywriter</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-white text-sm font-mono">$70,000</span>
                        <div className="w-4 h-4 rounded-full bg-blue-600 flex items-center justify-center text-[10px]">✓</div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-3 hover:bg-[#1A1A1A] rounded-xl transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-teal-500/20 text-teal-500 flex items-center justify-center text-xs font-bold">S</div>
                        <div className="text-left">
                          <div className="text-white text-xs font-medium">Sarah Fox</div>
                          <div className="text-gray-500 text-[10px]">Marketing</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-white text-sm font-mono">$30,000</span>
                        <div className="w-4 h-4 rounded-full bg-blue-600 flex items-center justify-center text-[10px]">✓</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* 3. Department Chart (Bottom Center - subtly positioned) */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-white rounded-2xl p-4 shadow-2xl border border-gray-100 w-48 hidden md:block"
              >
                <div className="text-gray-500 text-xs font-medium mb-2 text-left">Department</div>
                <div className="relative w-24 h-24 mx-auto">
                  <div className="absolute inset-0 rounded-full border-8 border-blue-500 border-r-transparent rotate-45"></div>
                  <div className="absolute inset-0 rounded-full border-8 border-orange-400 border-l-transparent border-b-transparent -rotate-12 scale-90"></div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* === Trusted By Section === */}
        <div className="mt-10 pb-20">
          <p className="text-gray-500 text-xs font-semibold uppercase tracking-[0.2em] mb-8">Trusted by the best</p>
          <div className="flex flex-wrap justify-center gap-12 sm:gap-20 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Logos (Using Text for now or SVGs if available, text for simplicity) */}
            <h3 className="text-2xl font-bold text-white font-sans tracking-tight">loom</h3>
            <h3 className="text-2xl font-bold text-white font-sans tracking-tight">HubSpot</h3>
            <h3 className="text-2xl font-bold text-white font-sans tracking-tight">ramp</h3>
            <h3 className="text-2xl font-bold text-white font-sans tracking-tight">Descript</h3>
            <h3 className="text-2xl font-bold text-white font-sans tracking-tight">NETFLIX</h3>
          </div>
        </div>
      </div>
    </div>
  );
};
