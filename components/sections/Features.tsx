'use client';

import { motion } from 'framer-motion';

const features = [
    {
        icon: '✅',
        title: 'Daily Check-in',
        description: '60 seconds a day to log mood, sleep, energy and stress levels with an intuitive emoji-based interface.',
    },
    {
        icon: '✨',
        title: 'AI Insights',
        description: 'Claude AI analyses your patterns and surfaces personalised insights — trends, correlations and predictions.',
    },
    {
        icon: '🏃',
        title: 'Activity Tracking',
        description: 'Log workouts manually or connect your wearable devices through Apple Health and Google Health Connect.',
    },
    {
        icon: '🔥',
        title: 'Streak Tracking',
        description: 'Build healthy habits with daily streak motivation. Every consecutive day counts towards your wellness goals.',
    },
    {
        icon: '🔗',
        title: 'Recovery Patterns',
        description: 'Spot correlations between sleep, stress and performance that even your doctor might miss between checkups.',
    },
    {
        icon: '⌚',
        title: 'Wearable Sync',
        description: 'Connects with Apple Watch, Fitbit, Garmin and more through Apple Health and Google Health Connect.',
    },
];

export default function Features() {
    return (
        <section id="features" className="py-24 bg-background">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 bg-primary-light text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
                        <span>⚡</span>
                        <span>Features</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-dark mb-4">
                        Everything you need to
                        <span className="text-primary block">track your recovery</span>
                    </h2>
                    <p className="text-xl text-gray-500 max-w-2xl mx-auto">
                        Pacewell combines daily check-ins, activity tracking and AI analysis into one seamless experience.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                    {features.map((feature, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-primary hover:shadow-lg transition-all duration-300"
                    >
                        <div className="w-12 h-12 bg-primary-light rounded-xl flex items-center justify-center text-2xl mb-4">
                            {feature.icon}
                        </div>
                        <h3 className="text-lg font-semibold text-dark mb-2">{feature.title}</h3>
                        <p className="text-gray-500 leading-relaxed">{feature.description}</p>
                    </motion.div>
                    ))}

                </div>
            </div>
        </section>
    );
}