'use client';

import { motion } from 'framer-motion';

const steps = [
    {
        number: '01',
        icon: '✅',
        title: 'Check in daily',
        description: 'Log how you feel in under 60 seconds with our intuitive emoji-based flow. Mood, sleep, energy, stress and more.',
        detail: 'Takes less than 60 seconds',
    },
    {
        number: '02',
        icon: '⌚',
        title: 'Sync your wearable',
        description: 'Connect Apple Health or Google Health Connect. Your steps, heart rate, sleep and workouts sync automatically.',
        detail: 'Works with 100+ devices',
    },
    {
        number: '03',
        icon: '✨',
        title: 'Get AI insights',
        description: 'Claude AI analyses your patterns across check-ins and wearable data to surface personalised insights every day.',
        detail: 'Insights generated daily',
    },
];

export default function HowItWorks() {
    return (
        <section id="how-it-works" className="py-28 bg-dark relative overflow-hidden">
            <div className="absolute inset-0 opacity-5"
                style={{
                    backgroundImage: 'radial-gradient(circle, #2E7D52 1px, transparent 1px)',
                    backgroundSize: '40px 40px',
                }}
            />
            
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-3xl pointer-events-none" />

            <div className="relative max-w-6xl mx-auto px-6">
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 bg-white/10 text-white/80 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-white/10"
                    >
                        <span>⚡</span>
                        <span>How Pacewell works</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="font-display text-5xl md:text-6xl font-bold text-white mb-6"
                    >
                        Simple. Consistent.
                        <br />
                        <span className="text-primary-mid">Powerful.</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.15 }}
                        viewport={{ once: true }}
                        className="text-lg text-white/50 max-w-xl mx-auto"
                    >
                        Three simple steps to better recovery, fewer injuries and a deeper 
                        understanding of your health.
                    </motion.p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
                    <div className="hidden md:block absolute top-16 left-[calc(16.67%+32px)] right-[calc(16.67%+32px)] h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

                    {steps.map((step, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.15 }}
                        viewport={{ once: true }}
                        className="relative bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/8 transition-colors"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-14 h-14 bg-primary/20 border border-primary/30 rounded-2xl flex items-center justify-center text-2xl">
                                {step.icon}
                            </div>
                            <span className="font-display text-5xl font-bold text-white/10 leading-none">
                                {step.number}
                            </span>
                        </div>

                        <h3 className="font-display text-xl font-semibold text-white mb-3">{step.title}</h3>
                        <p className="text-white/50 leading-relaxed text-sm mb-5">{step.description}</p>

                        <div className="inline-flex items-center gap-2 bg-primary/20 text-primary-mid text-xs font-semibold px-3 py-1.5 rounded-full border border-primary/20">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary-mid" />
                            {step.detail}
                        </div>
                    </motion.div>
                    ))}
                    
                </div>
            </div>
        </section>
    );
}