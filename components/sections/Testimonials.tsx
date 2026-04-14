'use client';

import { motion } from 'framer-motion';

const testimonials = [
    {
        quote: "Pacewell helped me spot that my energy crashes every time I skip my morning walk. That single insight changed my whole week.",
        name: "David M",
        age: 58,
        activity: "Cyclist",
        initial: "D",
        stars: 5,
        highlight: "That single insight changed my whole week.",
    },
    {
        quote: "I've tried every fitness app out there. This is the first one that actually understands recovery, not just workouts.",
        name: "Susan K",
        age: 62,
        activity: "Swimmer",
        initial: "S",
        stars: 5,
        highlight: "Actually understands recovery.",
    },
    {
        quote: "The AI caught a fatigue pattern building for two weeks before I felt it. I avoided what would have been a bad injury.",
        name: "Robert T",
        age: 55,
        activity: "Runner",
        initial: "R",
        stars: 5,
        highlight: "I avoided what would have been a bad injury.",
    },
];

export default function Testimonials() {
    return (
        <section id="testimonials" className="py-28 bg-background relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-light rounded-full opacity-40 blur-3xl translate-x-1/2 -translate-y-1/4 pointer-events-none" />

            <div className="relative max-w-6xl mx-auto px-6">
                <div className="max-w-2xl mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 bg-primary-light text-primary px-4 py-2 rounded-full text-sm font-medium mb-6"
                    >
                        <span>⭐</span>
                        <span>Real stories</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="font-display text-5xl md:text-6xl font-bold text-dark leading-tight"
                    >
                        Built for people
                        <br />
                        who take their
                        <br />
                        <span className="text-primary">health seriously</span>
                    </motion.h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                    {testimonials.map((t, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="group bg-white rounded-3xl p-7 border border-border hover:border-primary/20 hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex flex-col"
                    >
                        <div className="flex gap-0.5 mb-5">

                            {[...Array(t.stars)].map((_, i) => (
                            <span key={i} className="text-amber-400 text-sm">★</span>
                            ))}

                        </div>
                        
                        <div className="bg-primary-light rounded-2xl px-4 py-3 mb-4 border-l-4 border-primary">
                            <p className="text-primary font-semibold text-sm leading-snug italic">
                                &ldquo;{t.highlight}&rdquo;
                            </p>
                        </div>
                        
                        <p className="text-subtle leading-relaxed text-sm flex-1 mb-6">
                            &ldquo;{t.quote}&rdquo;
                        </p>
                        
                        <div className="flex items-center gap-3 pt-5 border-t border-border">
                            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold font-display text-sm flex-shrink-0">
                                {t.initial}
                            </div>
                            <div>
                                <p className="font-semibold text-dark text-sm">{t.name}, {t.age}</p>
                                <p className="text-xs text-subtle">{t.activity}</p>
                            </div>
                        </div>
                    </motion.div>
                    ))}

                </div>
            </div>
        </section>
    );
}