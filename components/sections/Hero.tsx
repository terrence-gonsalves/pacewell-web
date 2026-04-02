'use client';

import { motion } from 'framer-motion';

export default function Hero() {
    return (
        <section className="min-h-screen bg-background flex items-center pt-20">
            <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="inline-flex items-center gap-2 bg-primary-light text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
                        <span>⚡</span>
                        <span>AI-Powered Recovery Tracking</span>
                    </div>

                    <h1 className="text-5xl md:text-6xl font-bold text-dark leading-tight mb-6">
                        Recovery Tracking
                        <span className="text-primary block">Powered by AI</span>
                    </h1>

                    <p className="text-xl text-gray-500 leading-relaxed mb-8 max-w-lg">
                        The wellness companion built for active adults 50+. Daily check-ins, personalised insights, and pattern recognition that helps you stay ahead of injury.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <a
                            href="#download"
                            className="bg-primary text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-primary-dark transition-colors flex items-center justify-center gap-2"
                        >
                            <span>🍎</span> Download on App Store
                        </a>
                        <a
                            href="#download"
                            className="border-2 border-primary text-primary px-8 py-4 rounded-xl font-semibold text-lg hover:bg-primary-light transition-colors flex items-center justify-center gap-2"
                        >
                            <span>🤖</span> Get it on Google Play
                        </a>
                    </div>

                    <p className="text-sm text-gray-400 mt-4">
                        Free to download · No subscription required
                    </p>
                </motion.div>
                
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex justify-center"
                >
                    <div className="relative">
                        <div className="w-72 h-[580px] bg-dark rounded-[3rem] shadow-2xl flex items-center justify-center border-4 border-gray-800">
                            <div className="w-64 h-[540px] bg-background rounded-[2.5rem] overflow-hidden flex flex-col p-4">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="w-8 h-8 bg-primary rounded-xl flex items-center justify-center">
                                        <span className="text-white text-sm">⚡</span>
                                    </div>
                                    <div className="w-8 h-8 bg-gray-200 rounded-full" />
                                </div>
                                <div className="h-px bg-gray-200 mb-4" />

                                <p className="text-xs text-gray-500">Good Morning,</p>
                                <p className="text-lg font-bold text-primary mb-4">Terrence</p>
                                <div className="bg-primary-light border border-primary rounded-2xl p-3 mb-3">
                                    <p className="text-xs text-primary font-bold">CURRENT STREAK</p>
                                    <p className="text-2xl font-bold text-dark">
                                        7 <span className="text-base">Days</span>
                                    </p>
                                </div>
                                <div className="bg-white rounded-2xl p-3 mb-3 border border-gray-100">
                                    <p className="text-xs font-semibold text-dark mb-1">Today&apos;s Check-in</p>
                                    <p className="text-xs text-gray-400">Takes less than 1 minute</p>
                                </div>
                                <div className="grid grid-cols-3 gap-2 mb-3">

                                    {['😊', '⚡', '😴'].map((emoji, i) => (
                                    <div key={i} className="bg-white rounded-xl p-2 text-center border border-gray-100">
                                        <p className="text-lg">{emoji}</p>
                                        <p className="text-xs font-semibold text-dark">Good</p>
                                        <p className="text-xs text-gray-400">{['Mood', 'Energy', 'Sleep'][i]}</p>
                                    </div>
                                    ))}

                                </div>
                                <div className="bg-white rounded-2xl p-3 border border-gray-100">
                                    <div className="flex items-center gap-1 mb-1">
                                        <span className="text-xs bg-primary-light text-primary px-2 py-0.5 rounded-full font-semibold">AI Insight</span>
                                    </div>
                                    <p className="text-xs text-gray-600 leading-relaxed">Your energy peaks after morning activity...</p>
                                    <p className="text-xs text-primary font-semibold mt-1">Learn more →</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary-light rounded-full opacity-60" />
                        <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-primary rounded-full opacity-30" />
                    </div>
                </motion.div>

            </div>
        </section>
    );
}