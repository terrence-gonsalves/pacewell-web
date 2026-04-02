'use client';

import { motion } from 'framer-motion';

const steps = [
    {
        number: '01',
        icon: '✅',
        title: 'Check in daily',
        description: 'Log how you feel in under 60 seconds with our intuitive emoji-based check-in flow.',
    },
    {
        number: '02',
        icon: '🏃',
        title: 'Track your activity',
        description: 'Log workouts manually or sync your wearable device automatically.',
    },
    {
        number: '03',
        icon: '✨',
        title: 'Get AI insights',
        description: 'Receive personalised pattern analysis powered by Claude AI every time you check in.',
    },
];

export default function HowItWorks() {
    return (
        <section id="how-it-works" className="py-24 bg-primary">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                        <span>⚡</span>
                        <span>How It Works</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Simple. Consistent. Powerful.
                    </h2>
                    <p className="text-xl text-white/70 max-w-2xl mx-auto">
                        Three simple steps to better recovery and fewer injuries.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    {steps.map((step, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.15 }}
                        viewport={{ once: true }}
                        className="text-center"
                    >
                        <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4">
                            {step.icon}
                        </div>
                        <div className="text-white/40 text-sm font-bold tracking-widest mb-2">
                            {step.number}
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                        <p className="text-white/70 leading-relaxed">{step.description}</p>

                        {index < steps.length - 1 && (
                        <div className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 text-white/30 text-2xl">
                            →
                        </div>
                        )}

                    </motion.div>
                    ))}

                </div>
            </div>
        </section>
    );
}