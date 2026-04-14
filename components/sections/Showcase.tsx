'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const screens = [
    {
        title: 'Dashboard',
        description: 'Your daily health overview at a glance — streak, weekly averages and AI insights',
        src: '/screenshots/dashboard.png',
        offset: 60,
    },
    {
        title: 'Daily Check-in',
        description: 'Intuitive emoji-based logging that takes less than 60 seconds',
        src: '/screenshots/checkin.png',
        offset: 0,
        featured: true,
    },
    {
        title: 'AI Insights',
        description: 'Personalised pattern analysis powered by Claude AI',
        src: '/screenshots/insight.png',
        offset: 60,
    },
];

export default function Showcase() {
    return (
        <section className="py-28 bg-background relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1/2 bg-dark" />

            <div className="relative max-w-6xl mx-auto px-6">
                <div className="text-center mb-20 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <div className="inline-flex items-center gap-2 bg-white/10 text-white/80 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-white/10">
                            <span>📱</span>
                            <span>See the app</span>
                        </div>

                        <h2 className="font-display text-5xl md:text-6xl font-bold text-white mb-6">
                            Beautifully designed
                            <br />
                            <span className="text-primary-mid">for your lifestyle</span>
                        </h2>

                        <p className="text-lg text-white/50 max-w-xl mx-auto">
                            Clean, readable and intuitive — every detail designed 
                            with active adults 50+ in mind.
                        </p>
                    </motion.div>
                </div>
                
                <div className="flex flex-col md:flex-row items-end justify-center gap-6 md:gap-4 relative z-10">

                    {screens.map((screen, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 48 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
                        viewport={{ once: true }}
                        className="flex flex-col items-center"
                        style={{ marginTop: `${screen.offset}px` }}
                    >
                        <div
                            className={`relative rounded-[44px] overflow-hidden transition-transform hover:-translate-y-2 duration-300 ${
                                screen.featured ? 'shadow-green-lg' : 'shadow-lg'
                            }`}
                            style={{
                                width: screen.featured ? '260px' : '220px',
                                height: screen.featured ? '540px' : '460px',
                                background: '#0F1A14',
                                boxShadow: screen.featured
                                    ? '0 32px 80px rgba(46, 125, 82, 0.25), 0 0 0 2px rgba(46,125,82,0.2)'
                                    : '0 24px 64px rgba(15, 26, 20, 0.20), 0 0 0 2px rgba(255,255,255,0.06)',
                            }}
                        >
                            
                            <div className="absolute top-3 left-1/2 -translate-x-1/2 w-16 h-4 bg-dark rounded-full z-10" />
                            
                            <div className="absolute inset-[3px] rounded-[41px] overflow-hidden bg-background">
                                <Image
                                    src={screen.src}
                                    alt={screen.title}
                                    fill
                                    className="object-cover object-top"
                                />
                            </div>

                            {screen.featured && (
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full shadow-green whitespace-nowrap z-20">
                                Most used screen
                            </div>
                            )}

                        </div>
                        
                        <div className="mt-6 text-center">
                            <p className="font-display text-lg font-semibold text-dark">{screen.title}</p>
                            <p className="text-sm text-subtle max-w-[200px] mt-1 leading-snug">{screen.description}</p>
                        </div>
                        </motion.div>
                    ))}
                    
                </div>
            </div>
        </section>
    );
}