'use client';

import { motion } from 'framer-motion';

export default function Download() {
    return (
        <section id="download" className="py-28 bg-dark relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/20 rounded-full blur-3xl pointer-events-none" />

            <div className="absolute inset-0 opacity-[0.04]"
                style={{
                    backgroundImage: 'radial-gradient(circle, #2E7D52 1px, transparent 1px)',
                    backgroundSize: '32px 32px',
                }}
            />

            <div className="relative max-w-4xl mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    viewport={{ once: true }}
                >
                    <div className="inline-flex w-20 h-20 bg-primary/20 border border-primary/30 rounded-3xl items-center justify-center text-4xl mb-8 mx-auto">
                        <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
                            <path d="M13 2L4.5 13.5H12L11 22L19.5 10.5H12L13 2Z" fill="#2E7D52" strokeLinejoin="round"/>
                        </svg>
                    </div>

                    <h2 className="font-display text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                        Start tracking your
                        <br />
                        <span className="text-primary-mid">recovery today</span>
                    </h2>

                    <p className="text-xl text-white/50 mb-4 max-w-lg mx-auto leading-relaxed">
                        Free to download. No subscription required for basic tracking.
                    </p>

                    <p className="text-sm text-white/30 mb-12">
                        Available on iOS and Android · Works with 100+ wearable devices
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                        <a
                            href="#"
                            className="group bg-white text-dark px-8 py-4 rounded-2xl font-semibold text-base hover:bg-gray-50 transition-all hover:-translate-y-0.5 hover:shadow-lg flex items-center justify-center gap-3"
                        >
                            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                            </svg>
                            <div className="text-left">
                                <div className="text-xs text-gray-500 font-normal leading-none mb-0.5">Download on the</div>
                                <div className="font-bold leading-none">App Store</div>
                            </div>
                        </a>

                        <a
                            href="#"
                            className="group bg-white text-dark px-8 py-4 rounded-2xl font-semibold text-base hover:bg-gray-50 transition-all hover:-translate-y-0.5 hover:shadow-lg flex items-center justify-center gap-3"
                        >
                            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M3.18 23.76c.37.2.79.21 1.18.04l12.11-6.96-2.63-2.63zM.29 1.27C.11 1.6 0 2.01 0 2.51v18.98c0 .5.11.91.29 1.24l.07.06 10.64-10.64v-.25L.36 1.21zM20.06 8.66l-3.06-1.76-2.96 2.96 2.97 2.97 3.06-1.77c.87-.5.87-1.32-.01-1.4zM4.36.2l12.11 6.96-2.63 2.63L1.54.16C1.93-.01 2.35 0 2.73.2z" />
                            </svg>
                            <div className="text-left">
                                <div className="text-xs text-gray-500 font-normal leading-none mb-0.5">Get it on</div>
                                <div className="font-bold leading-none">Google Play</div>
                            </div>
                        </a>
                    </div>
                    
                    <div className="flex flex-wrap items-center justify-center gap-8 text-white/30">
                        <div className="flex items-center gap-2 text-sm">
                            <span>🔒</span>
                            <span>HIPAA-conscious design</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                            <span>🛡️</span>
                            <span>Your data stays private</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                            <span>🆓</span>
                            <span>Free to start</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}