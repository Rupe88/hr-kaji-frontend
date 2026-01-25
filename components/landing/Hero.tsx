'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { TypingAnimation } from '@/components/ui/TypingAnimation';

export const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/50 to-black" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-teal-500/10 rounded-full blur-[100px]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[80px]" />
            </div>

            <div className="container mx-auto px-4 z-10 relative">
                <div className="max-w-5xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="mb-8"
                    >


                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight" style={{ fontFamily: 'var(--font-poppins)' }}>
                            Find Your Dream <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-purple-500 to-pink-500">
                                Career Opportunity.
                            </span>
                        </h1>

                        <div className="h-20 md:h-24 mb-6 flex items-center justify-center">
                            <TypingAnimation
                                texts={[
                                    "Nepal's Ultimate Human Resource Platform.",
                                    "Connecting Talent with Top Companies.",
                                    "Streamlining Recruitment Processes."
                                ]}
                                className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto font-light"
                            />
                        </div>

                        <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                            BTBAJ is the complete HR solution for job seekers and employers in Nepal. Post jobs, manage applications, and find correctly matched candidates efficiently.
                        </p>

                        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mt-8">
                            <motion.div
                                whileHover={{ scale: 1.05, y: -5 }}
                                className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-all cursor-pointer group"
                            >
                                <div className="p-2 rounded-full bg-teal-500/20 text-teal-400 group-hover:bg-teal-500 group-hover:text-white transition-colors">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <div className="text-left">
                                    <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">Location</p>
                                    <p className="text-sm font-semibold text-white">Search Jobs in Nepal</p>
                                </div>
                            </motion.div>

                            <motion.div
                                whileHover={{ scale: 1.05, y: -5 }}
                                className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-all cursor-pointer group"
                            >
                                <div className="p-2 rounded-full bg-purple-500/20 text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-colors">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                </div>
                                <div className="text-left">
                                    <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">Profile</p>
                                    <p className="text-sm font-semibold text-white">Job Seeker / Employer</p>
                                </div>
                            </motion.div>

                            <motion.div
                                whileHover={{ scale: 1.05, y: -5 }}
                                className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-all cursor-pointer group"
                            >
                                <div className="p-2 rounded-full bg-pink-500/20 text-pink-400 group-hover:bg-pink-500 group-hover:text-white transition-colors">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                                    </svg>
                                </div>
                                <div className="text-left">
                                    <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">Updates</p>
                                    <p className="text-sm font-semibold text-white">Get Job Alerts</p>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* KPI Stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 border-t border-gray-800 pt-10"
                    >
                        {[
                            { label: 'Active Users', value: '10K+', color: 'text-teal-400' },
                            { label: 'Jobs Posted', value: '500+', color: 'text-purple-400' },
                            { label: 'Verified Skills', value: '50K+', color: 'text-pink-400' },
                            { label: 'Trust Score', value: '99%', color: 'text-blue-400' },
                        ].map((stat, idx) => (
                            <div key={idx} className="text-center">
                                <div className={`text-3xl font-bold ${stat.color} mb-1`}>{stat.value}</div>
                                <div className="text-sm text-gray-500 uppercase tracking-wider">{stat.label}</div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-teal-500/50 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
        </section>
    );
};
