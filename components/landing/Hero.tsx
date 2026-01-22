'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

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
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-white pt-20 font-inter text-black">

      {/* Background - Clean White/Subtle Gray */}
      <div className="absolute inset-0 bg-white z-0" />

      {/* Curved Background Shape (Bottom) - Matches reference */}
      <div className="absolute bottom-0 left-0 right-0 h-[40vh] bg-gray-50/80 rounded-t-[100%] transform scale-x-150 z-0 pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {/* === Floating Elements (Absolute relative to container) === */}

        {/* Top Left: Candidate Progress Card */}
        <motion.div
          variants={float}
          initial="initial"
          animate="animate"
          className="absolute top-0 left-4 lg:left-0 hidden lg:block"
        >
          <div className="bg-white p-4 rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] w-72 text-left transform -rotate-6 hover:rotate-0 transition-transform duration-500 border border-gray-100">
            <div className="flex items-center gap-3 mb-4">
              {/* User Avatar */}
              <div className="w-10 h-10 rounded-full relative overflow-hidden">
                <Image src="/btbaj-logo.png" alt="OW" fill className="object-cover bg-gray-200" />
                <div className="absolute inset-0 bg-purple-500/20 flex items-center justify-center text-purple-700 font-bold text-xs">OW</div>
              </div>
              <div>
                <div className="text-gray-900 font-bold text-sm">Olivia Wauters</div>
                <div className="text-gray-400 text-xs">Product Designer</div>
              </div>
              <span className="ml-auto text-[10px] text-orange-500 bg-orange-50 px-2 py-1 rounded-full font-medium">In progress</span>
            </div>
            {/* Timeline Visual */}
            <div className="relative flex items-center justify-between px-2">
              <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-gray-100 -z-10" />
              <div className="flex flex-col items-center gap-1">
                <div className="w-3 h-3 rounded-full border-2 border-blue-500 bg-white" />
                <span className="text-[9px] text-gray-400">Created</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <div className="w-3 h-3 rounded-full bg-blue-500" />
                <span className="text-[9px] text-gray-400">Sent</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <div className="w-3 h-3 rounded-full bg-gray-200" />
                <span className="text-[9px] text-gray-400">Accepted</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <div className="w-3 h-3 rounded-full border-2 border-gray-200 bg-white" />
                <span className="text-[9px] text-gray-400">Onboarding</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Top Right: Recruiter Bubble */}
        <motion.div
          variants={floatDelayed}
          initial="initial"
          animate="animate"
          className="absolute top-10 right-4 lg:right-10 hidden lg:flex items-center gap-3"
        >
          <div className="relative">
            <div className="absolute -top-3 left-0 bg-red-500 text-white text-[9px] px-1.5 py-0.5 rounded font-bold uppercase tracking-wide transform -rotate-2">
              Recruiter
            </div>
            <div className="bg-[#FF6B6B] text-white px-4 py-3 rounded-2xl rounded-bl-sm shadow-xl font-medium text-sm text-left">
              <span className="font-bold block text-black/80 text-[10px] uppercase mb-0.5">Malik Grotesk</span>
              We need a Senior Dev ASAP!
            </div>
          </div>
          <div className="w-12 h-12 rounded-full border-4 border-white shadow-lg overflow-hidden relative bg-gray-100">
            <div className="w-full h-full bg-gray-300 flex items-center justify-center text-xl">🧔🏻</div>
          </div>
        </motion.div>

        {/* Bottom Left: Contractor Bubble */}
        <motion.div
          variants={floatDelayed}
          initial="initial"
          animate="animate"
          className="absolute bottom-40 left-10 lg:left-20 hidden lg:flex items-center gap-3"
        >
          {/* Message Bubble */}
          <div className="order-2 relative">
            <div className="bg-[#4CC9F0] text-black px-4 py-3 rounded-2xl rounded-br-sm shadow-xl font-medium text-sm text-left w-32">
              <span className="font-bold block text-white text-[10px] uppercase mb-0.5">Alex Jhordan</span>
              Contractor
            </div>
          </div>
          {/* Avatar */}
          <div className="order-1 w-12 h-12 rounded-full border-4 border-white shadow-lg overflow-hidden relative bg-gray-100">
            <div className="w-full h-full bg-gray-300 flex items-center justify-center text-xl">👨🏿‍💻</div>
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-white rounded-full flex items-center justify-center">
              <div className="w-2.5 h-2.5 bg-blue-500 rounded-full transform rotate-45" style={{ clipPath: 'polygon(0 0, 100% 0, 0 100%)' }}></div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Right: Referral Card */}
        <motion.div
          variants={float}
          initial="initial"
          animate="animate"
          className="absolute bottom-40 right-10 lg:right-20 hidden lg:block"
        >
          <div className="bg-white p-4 rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] w-60 text-left transform rotate-3 hover:rotate-0 transition-transform duration-500 border border-gray-100">
            <div className="flex gap-3">
              <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center overflow-hidden">
                <span className="text-xl">👩🏼</span>
              </div>
              <div>
                <h4 className="text-gray-900 font-bold text-sm">Natalie Monet</h4>
                <p className="text-gray-500 text-xs mt-0.5 leading-tight">Hey, we've got a hot referral for your sales team!</p>
                <p className="text-gray-300 text-[10px] mt-2 font-medium">11:26 AM</p>
              </div>
            </div>
          </div>
        </motion.div>


        {/* === Main Content === */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto mt-32 sm:mt-20 relative z-10"
        >
          <h1 className="text-6xl sm:text-7xl lg:text-[5.5rem] font-bold tracking-tight text-gray-900 mb-6 leading-[1.05]">
            Swift <span className="relative inline-block px-1">
              <span className="relative z-10 text-white">recruitment</span>
              {/* Purple Highlight box matching reference */}
              <span className="absolute inset-0 bg-[#6366F1] rounded-md z-0 transform -skew-x-2 scale-105"></span>
            </span> for <br />
            current pace of work
          </h1>

          <p className="text-lg sm:text-xl text-gray-600 mb-10 max-w-xl mx-auto leading-relaxed">
            An all-encompassing remote hiring solution to help modern businesses grow with Virtual Assistants.
          </p>

          <div className="flex justify-center items-center mb-24">
            <Link href="/auth/register">
              <button className="px-8 py-3.5 bg-black text-white text-base font-semibold rounded-full hover:bg-gray-800 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1">
                Get Started
              </button>
            </Link>
          </div>
        </motion.div>

        {/* === Dashboard Preview Cluster (Light Mode) === */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
          className="relative z-20 max-w-6xl mx-auto pb-20"
        >
          <div className="relative flex flex-col md:flex-row items-start justify-center gap-8">

            {/* 1. Main Profile Card */}
            <div className="relative">
              {/* Notification Bell Floating */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-6 -right-6 z-30 bg-white p-3 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.15)] border border-gray-100"
              >
                <div className="relative">
                  <svg className="w-6 h-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                  <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-orange-500 rounded-full border-2 border-white"></span>
                </div>
              </motion.div>

              <div className="bg-white rounded-3xl p-6 shadow-[0_30px_60px_rgba(0,0,0,0.08)] border border-gray-100 w-full max-w-xs text-left relative z-20">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-full bg-[#6366F1] flex items-center justify-center overflow-hidden border-2 border-white shadow-md">
                    <span className="text-white font-bold text-lg">OW</span>
                  </div>
                  <div>
                    <div className="text-gray-900 font-bold text-lg">Olivia Wauters</div>
                    <div className="text-gray-500 text-sm">Product Designer</div>
                  </div>
                </div>

                <div className="flex gap-2 mb-6 border-b border-gray-100 pb-4">
                  <span className="text-[10px] font-semibold text-gray-500 bg-gray-50 px-3 py-1.5 rounded-lg">Full Time</span>
                  <span className="text-[10px] font-semibold text-gray-500 bg-gray-50 px-3 py-1.5 rounded-lg">Senior Level</span>
                  <span className="text-[10px] font-semibold text-gray-500 bg-gray-50 px-3 py-1.5 rounded-lg">Montreal</span>
                </div>

                <div className="space-y-1">
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Description</p>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    As you are reviewing candidates for the open customer service position, we...
                  </p>
                </div>
              </div>
            </div>

            {/* 2. Middle Stack: Stats & Employees */}
            <div className="flex flex-col gap-6 pt-10">
              <div className="bg-white p-4 rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.08)] border border-gray-100 flex items-center gap-4 w-64">
                <div className="w-10 h-10 rounded-full bg-cyan-50 flex items-center justify-center text-cyan-600">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">164 <span className="text-xs font-normal text-gray-400">Employees</span></div>
                  <div className="text-[10px] font-medium text-cyan-500">+10 onboarding now</div>
                </div>
              </div>

              {/* Pie Chart Card (Department) */}
              <div className="bg-white p-5 rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.08)] border border-gray-100 w-48 mx-auto md:mx-0">
                <div className="text-xs font-bold text-gray-900 mb-3">Department</div>
                <div className="relative w-24 h-24 mx-auto">
                  <svg viewBox="0 0 36 36" className="w-full h-full transform -rotate-90">
                    {/* Background Circle */}
                    <path className="text-gray-100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="4" />
                    {/* Blue Slice */}
                    <path className="text-blue-500" strokeDasharray="60, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="4" />
                    {/* Orange Slice */}
                    <path className="text-orange-400" strokeDasharray="25, 100" strokeDashoffset="-60" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="4" />
                  </svg>
                </div>
              </div>
            </div>

            {/* 3. Right Stack: Payments & Reviews */}
            <div className="flex flex-col gap-6 pt-4">
              {/* Payments List */}
              <div className="bg-white rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.08)] border border-gray-100 w-72 overflow-hidden">
                <div className="px-5 py-4 border-b border-gray-50 flex justify-between items-center">
                  <h3 className="text-sm font-bold text-gray-900">payments</h3>
                  <button className="text-xs text-blue-600 font-medium">View all</button>
                </div>
                <div className="p-2">
                  {/* Item 1 */}
                  <div className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-xl transition-colors cursor-pointer">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-gray-900 text-white flex items-center justify-center text-xs font-bold">W</div>
                      <div>
                        <div className="text-gray-900 text-xs font-bold">Wouters</div>
                        <div className="text-gray-400 text-[10px]">Developer</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-gray-900 text-xs font-bold">$15,000</span>
                      <div className="bg-blue-500 rounded-full p-0.5"><svg className="w-2 h-2 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg></div>
                    </div>
                  </div>
                  {/* Item 2 */}
                  <div className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-xl transition-colors cursor-pointer">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center text-xs font-bold">P</div>
                      <div>
                        <div className="text-gray-900 text-xs font-bold">Patricia</div>
                        <div className="text-gray-400 text-[10px]">Copywriter</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-gray-900 text-xs font-bold">$70,000</span>
                      <div className="bg-blue-500 rounded-full p-0.5"><svg className="w-2 h-2 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Reviews */}
              <div className="bg-transparent pl-4 pt-2">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-3">
                    <div className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden"><Image src="/btbaj-logo.png" alt="u1" width={40} height={40} className="object-cover" /></div>
                    <div className="w-10 h-10 rounded-full border-2 border-white bg-gray-300 overflow-hidden"><Image src="/btbaj-logo.png" alt="u2" width={40} height={40} className="object-cover" /></div>
                    <div className="w-10 h-10 rounded-full border-2 border-white bg-gray-400 overflow-hidden"><Image src="/btbaj-logo.png" alt="u3" width={40} height={40} className="object-cover" /></div>
                  </div>
                  <div>
                    <div className="flex text-yellow-400 text-sm">★★★★★ <span className="text-gray-900 font-bold ml-1 text-sm">4.9</span></div>
                    <div className="text-xs text-gray-500">from 100+ reviews</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </motion.div>

        {/* === Trusted By Section === */}
        <div className="mt-10 pb-20 max-w-5xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-20">
            <span className="text-sm font-semibold text-gray-900">Trusted by the best</span>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-300">
              {/* Dark Logos for Light Mode */}
              <h3 className="text-xl font-bold text-black font-sans tracking-tight">loom</h3>
              <h3 className="text-xl font-bold text-black font-sans tracking-tight">HubSpot</h3>
              <h3 className="text-xl font-bold text-black font-sans tracking-tight">ramp</h3>
              <h3 className="text-xl font-bold text-black font-sans tracking-tight">Descript</h3>
              <h3 className="text-xl font-bold text-black font-sans tracking-tight">NETFLIX</h3>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
