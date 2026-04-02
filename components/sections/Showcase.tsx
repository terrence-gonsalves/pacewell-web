'use client';

import { motion } from 'framer-motion';

const screens = [
    {
        title: 'Dashboard',
        emoji: '🏠',
        description: 'Your daily health overview at a glance',
    },
    {
        title: 'Daily Check-in',
        emoji: '✅',
        description: 'Quick emoji-based daily logging',
    },
    {
        title: 'AI Insights',
        emoji: '✨',
        description: 'Personalised pattern analysis',
    },
];

export default function Showcase() {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-dark mb-4">
                        Beautifully designed for
                        <span className="text-primary block">your lifestyle</span>
                    </h2>
                    <p className="text-xl text-gray-500 max-w-2xl mx-auto">
                        Clean, readable and intuitive — designed with active adults 50+ in mind.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end">
                    
                    {screens.map((screen, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: index === 1 ? 0 : 20 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className={`flex flex-col items-center ${index === 1 ? 'scale-105' : ''}`}
                    >
                        <div className="w-56 h-[460px] bg-dark rounded-[2.5rem] shadow-2xl flex items-center justify-center border-4 border-gray-800 mb-4">
                            <div className="w-48 h-[420px] bg-background rounded-[2rem] overflow-hidden flex flex-col items-center justify-center">
                                <span className="text-6xl mb-4">{screen.emoji}</span>
                                <p className="text-sm font-semibold text-dark">{screen.title}</p>
                            </div>
                        </div>
                        <p className="text-lg font-semibold text-dark">{screen.title}</p>
                        <p className="text-sm text-gray-400 text-center">{screen.description}</p>
                    </motion.div>
                    ))}

                </div>
            </div>
        </section>
    );
}