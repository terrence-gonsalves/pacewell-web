'use client';

import { motion } from 'framer-motion';

const testimonials = [
    {
        quote: "Pacewell helped me spot that my energy crashes every time I skip my morning walk. That single insight changed my whole week.",
        name: "David M",
        age: 58,
        activity: "Cyclist",
    },
    {
        quote: "I've tried every fitness app out there. This is the first one that actually understands recovery, not just workouts.",
        name: "Susan K",
        age: 62,
        activity: "Swimmer",
    },
    {
        quote: "The AI caught a fatigue pattern building for two weeks before I felt it. I avoided what would have been a bad injury.",
        name: "Robert T",
        age: 55,
        activity: "Runner",
    },
];

export default function Testimonials() {
    return (
        <section id="testimonials" className="py-24 bg-background">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 bg-primary-light text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
                        <span>⭐</span>
                        <span>Reviews</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-dark mb-4">
                        Built for people who take
                        <span className="text-primary block">their health seriously</span>
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                    {testimonials.map((testimonial, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm"
                    >
                        <div className="flex gap-1 mb-4">

                            {[...Array(5)].map((_, i) => (
                            <span key={i} className="text-yellow-400">⭐</span>
                            ))}

                        </div>
                        <p className="text-gray-600 leading-relaxed mb-6 italic">
                            &quot;{testimonial.quote}&quot;
                        </p>
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                                <span className="text-white font-bold">{testimonial.name.charAt(0)}</span>
                            </div>
                            <div>
                                <p className="font-semibold text-dark">{testimonial.name}, {testimonial.age}</p>
                                <p className="text-sm text-gray-400">{testimonial.activity}</p>
                            </div>
                        </div>
                    </motion.div>
                    ))}

                </div>
            </div>
        </section>
    );
}