'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
    return (
        <section className="relative min-h-screen bg-background flex items-center overflow-hidden pt-20">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-primary-light rounded-full opacity-40 blur-3xl translate-x-1/3" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary-light rounded-full opacity-30 blur-3xl -translate-x-1/2" />
                <div className="absolute inset-0 opacity-[0.02]"
                    style={{
                        backgroundImage: 'linear-gradient(#2E7D52 1px, transparent 1px), linear-gradient(90deg, #2E7D52 1px, transparent 1px)',
                        backgroundSize: '60px 60px'
                    }}
                />
            </div>

            <div className="relative max-w-6xl mx-auto px-6 py-20 w-full">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 32 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="inline-flex items-center gap-2 bg-white border border-border text-primary px-4 py-2 rounded-full text-sm font-medium mb-8 shadow-sm"
                        >
                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse-green" />
                            <span>AI-Powered Wellness Tracking</span>
                        </motion.div>
                        
                        <h1 className="font-display text-[3.5rem] md:text-[4.5rem] font-bold text-dark leading-[1.08] mb-6 tracking-tight">
                            Recovery<br />
                            tracking,{' '}
                            <em className="not-italic text-primary">powered</em>
                            <br />by AI
                        </h1>

                        <p className="text-lg text-subtle leading-relaxed mb-10 max-w-md font-sans">
                            The wellness companion built for active adults 50+. Daily check-ins, 
                            personalised AI insights, and pattern recognition that keeps you 
                            ahead of injury.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-3 mb-10">
                            <a
                                href="#download"
                                className="group bg-primary text-white px-7 py-4 rounded-2xl font-semibold text-base hover:bg-primary-dark transition-all hover:shadow-green-lg hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2.5"
                            >
                                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                                </svg>
                                App Store
                            </a>
                            <a
                                href="#download"
                                className="group bg-white border border-border text-dark px-7 py-4 rounded-2xl font-semibold text-base hover:border-primary hover:text-primary transition-all hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2.5"
                            >
                                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M3.18 23.76c.37.2.79.21 1.18.04l12.11-6.96-2.63-2.63zM.29 1.27C.11 1.6 0 2.01 0 2.51v18.98c0 .5.11.91.29 1.24l.07.06 10.64-10.64v-.25L.36 1.21zM20.06 8.66l-3.06-1.76-2.96 2.96 2.97 2.97 3.06-1.77c.87-.5.87-1.32-.01-1.4zM4.36.2l12.11 6.96-2.63 2.63L1.54.16C1.93-.01 2.35 0 2.73.2z"/>
                                </svg>
                                Google Play
                            </a>
                        </div>
                        
                        <div className="flex items-center gap-4">
                            <div className="flex -space-x-2">

                                {['D', 'S', 'R', 'M'].map((initial, i) => (
                                <div
                                    key={i}
                                    className="w-8 h-8 rounded-full bg-primary border-2 border-white flex items-center justify-center text-white text-xs font-bold"
                                >
                                    {initial}
                                </div>
                                ))}

                            </div>
                            <div>
                                <div className="flex text-amber-400 text-xs gap-0.5 mb-0.5">
                                    {'★★★★★'.split('').map((s, i) => <span key={i}>{s}</span>)}
                                </div>
                                <p className="text-xs text-subtle">Loved by active adults 40+</p>
                            </div>
                        </div>
                    </motion.div>
                    
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                        className="flex justify-center lg:justify-end"
                    >
                        <div className="relative">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.8, duration: 0.5 }}
                                className="absolute -left-12 top-24 bg-white rounded-2xl shadow-lg border border-border p-3 z-20 max-w-[160px]"
                            >
                                <div className="flex items-center gap-2 mb-1">
                                    <span className="text-base">⚡</span>
                                    <span className="text-xs font-semibold text-primary">AI Insight</span>
                                </div>
                                <p className="text-xs text-subtle leading-snug">Energy peaks after morning walks</p>
                            </motion.div>
                            
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 1, duration: 0.5 }}
                                className="absolute -right-10 bottom-32 bg-primary rounded-2xl shadow-green p-3 z-20"
                            >
                                <p className="text-xs text-white/70 font-medium">Current Streak</p>
                                <p className="text-xl font-display font-bold text-white">12 Days 🔥</p>
                            </motion.div>
                            
                            <div className="animate-float">
                                <div
                                    className="relative bg-dark rounded-[44px] shadow-lg overflow-hidden"
                                    style={{
                                        width: '280px',
                                        height: '580px',
                                        boxShadow: '0 32px 80px rgba(15, 26, 20, 0.25), inset 0 0 0 2px rgba(255,255,255,0.06)',
                                    }}
                                >
                                    <div className="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-5 bg-dark rounded-full z-10" />
                                    
                                    <div className="absolute inset-[3px] rounded-[41px] overflow-hidden bg-background">
                                        <Image
                                            src="/screenshots/dashboard.png"
                                            alt="Pacewell Dashboard"
                                            fill
                                            className="object-cover object-top"
                                            priority
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Background glow */}
                            <div className="absolute inset-0 bg-primary-light rounded-full blur-3xl opacity-30 -z-10 scale-75" />
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}