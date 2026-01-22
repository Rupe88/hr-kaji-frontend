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

          {/* === Dashboard Preview === */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1, ease: "easeOut" }}
            className="relative z-10 mt-10 perspective-1000"
          >
            <div className="relative rounded-t-[2.5rem] border-t border-l border-r border-[#333] bg-[#0A0A0A] p-1 mx-auto max-w-6xl shadow-[0_-20px_80px_rgba(0,0,0,0.8)] overflow-hidden h-[450px]">

              {/* Inner Window */}
              <div className="bg-[#111] rounded-t-[2.2rem] h-full w-full overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#000]/50 to-[#000] z-20 pointer-events-none"></div>

                {/* Header */}
                <div className="border-b border-[#222] p-6 flex items-center justify-between">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                    <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                    <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
                  </div>
                  <div className="h-2 w-48 bg-[#222] rounded-full" />
                  <div className="w-8 h-8 rounded-full bg-[#222]" />
                </div>

                {/* Dashboard Grid */}
                <div className="p-8 grid grid-cols-1 md:grid-cols-12 gap-6">

                  {/* Left Col: Profile */}
                  <div className="md:col-span-4 bg-[#1A1A1A] rounded-2xl p-6 border border-[#2A2A2A]">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 rounded-full bg-[#4F46E5] flex items-center justify-center text-white text-xl font-bold">OW</div>
                      <div>
                        <div className="text-white font-semibold text-lg">Olivia Wauters</div>
                        <div className="text-gray-500 text-sm">Product Designer</div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex justify-between text-sm py-2 border-b border-[#333]">
                        <span className="text-gray-400">Status</span>
                        <span className="text-teal-400 bg-teal-400/10 px-2 py-0.5 rounded-full text-xs">Referral from Remote</span>
                      </div>
                      <div className="flex justify-between text-sm py-2 border-b border-[#333]">
                        <span className="text-gray-400">Experience</span>
                        <span className="text-white">5 Years</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Location</span>
                        <span className="text-white">Montreal</span>
                      </div>
                    </div>
                  </div>

                  {/* Right Col: Stats & List */}
                  <div className="md:col-span-8 flex flex-col gap-6">
                    <div className="flex gap-6">
                      <div className="flex-1 bg-[#1A1A1A] rounded-2xl p-6 border border-[#2A2A2A] flex justify-between items-center">
                        <div>
                          <div className="text-gray-400 text-xs uppercase tracking-wider mb-2">Total Hires (YTD)</div>
                          <div className="text-4xl font-bold text-white">164</div>
                          <div className="text-emerald-500 text-xs mt-2 font-medium">+10 onboarding now</div>
                        </div>
                        <div className="w-12 h-12 rounded-full bg-[#222] flex items-center justify-center text-xl">👥</div>
                      </div>
                      <div className="flex-1 bg-[#1A1A1A] rounded-2xl p-6 border border-[#2A2A2A]">
                        <div className="flex justify-between items-center mb-2">
                          <div className="text-gray-400 text-xs uppercase tracking-wider">Interview</div>
                          <div className="text-[#4F46E5] text-xs">View all</div>
                        </div>
                        <div className="flex -space-x-2 mt-4">
                          <div className="w-8 h-8 rounded-full border-2 border-[#1A1A1A] bg-gray-500"></div>
                          <div className="w-8 h-8 rounded-full border-2 border-[#1A1A1A] bg-gray-600"></div>
                          <div className="w-8 h-8 rounded-full border-2 border-[#1A1A1A] bg-gray-700"></div>
                        </div>
                      </div>
                    </div>

                    {/* List Mockup */}
                    <div className="bg-[#1A1A1A] rounded-2xl p-0 border border-[#2A2A2A] overflow-hidden flex-1">
                      <div className="px-6 py-4 border-b border-[#333] flex justify-between">
                        <span className="text-sm font-medium text-white">Recent Payments</span>
                        <span className="text-xs text-[#4F46E5]">View all</span>
                      </div>
                      <div className="p-4 space-y-3">
                        <div className="flex items-center justify-between text-sm p-2 hover:bg-[#222] rounded-lg transition-colors cursor-pointer">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-orange-500/20 text-orange-500 flex items-center justify-center text-xs">PC</div>
                            <span className="text-gray-300">Patricia Costa</span>
                          </div>
                          <span className="text-white font-mono">$70,000</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
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
