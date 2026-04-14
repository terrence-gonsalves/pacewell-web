'use client';

import { motion } from 'framer-motion';

const features = [
    {
        icon: '✅',
        title: 'Daily Check-in',
        description: '60 seconds a day to log mood, sleep, energy and stress with an intuitive emoji-based interface.',
        tag: 'Core',
        tagColor: 'bg-primary-light text-primary',
    },
    {
        icon: '✨',
        title: 'AI Insights',
        description: 'Claude AI analyses your patterns and surfaces personalised insights — trends, correlations and predictions that matter.',
        tag: 'AI-Powered',
        tagColor: 'bg-amber-50 text-amber-700',
        featured: true,
    },
    {
        icon: '🏃',
        title: 'Activity Tracking',
        description: 'Log workouts manually or connect your wearable through Apple Health and Google Health Connect.',
        tag: 'Wearables',
        tagColor: 'bg-blue-50 text-blue-700',
    },
    {
        icon: '🔥',
        title: 'Streak Tracking',
        description: 'Build lasting habits with daily streak motivation. Every consecutive check-in counts.',
        tag: 'Habits',
        tagColor: 'bg-orange-50 text-orange-700',
    },
    {
        icon: '🔗',
        title: 'Recovery Patterns',
        description: 'Spot correlations between sleep, stress and performance that even your doctor might miss.',
        tag: 'Analysis',
        tagColor: 'bg-purple-50 text-purple-700',
    },
    {
        icon: '⌚',
        title: 'Wearable Sync',
        description: 'Connects with Apple Watch, Fitbit, Garmin and more. Your health data, unified.',
        tag: 'Integration',
        tagColor: 'bg-teal-50 text-teal-700',
    },
];

export default function Features() {
    return (
        <section id="features" className="py-28 bg-background relative">
            <div className="max-w-6xl mx-auto px-6">
                <div className="max-w-2xl mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 bg-primary-light text-primary px-4 py-2 rounded-full text-sm font-medium mb-6"
                    >
                        <span>⚡</span>
                        <span>Everything you need</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="font-display text-5xl md:text-6xl font-bold text-dark mb-6 leading-tight"
                    >
                        Track your
                        <br />
                        <span className="text-primary">recovery</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.15 }}
                        viewport={{ once: true }}
                        className="text-lg text-subtle leading-relaxed"
                    >
                        Pacewell combines daily check-ins, wearable data and AI analysis 
                        into one seamless experience designed for active adults.
                    </motion.p>
                </div>

                {/* Feature grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {features.map((feature, index) => (
                    <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                    viewport={{ once: true }}
                    className={`group relative bg-white rounded-3xl p-7 border transition-all duration-300 hover:-translate-y-1 hover:shadow-md ${
                        feature.featured
                        ? 'border-primary/20 shadow-green ring-1 ring-primary/10'
                        : 'border-border hover:border-primary/20'
                    }`}
                    >
                    {feature.featured && (
                        <div className="absolute -top-3 left-6">
                        <span className="bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full shadow-green">
                            Most popular
                        </span>
                        </div>
                    )}

                    <div className="flex items-start justify-between mb-5">
                        <div className="w-12 h-12 bg-background rounded-2xl flex items-center justify-center text-2xl">
                        {feature.icon}
                        </div>
                        <span className={`text-xs font-semibold px-3 py-1 rounded-full ${feature.tagColor}`}>
                        {feature.tag}
                        </span>
                    </div>

                    <h3 className="font-display text-xl font-semibold text-dark mb-3">{feature.title}</h3>
                    <p className="text-subtle leading-relaxed text-sm">{feature.description}</p>
                    </motion.div>
                ))}
                </div>
            </div>
        </section>
    );
}