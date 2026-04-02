'use client';

import { motion } from 'framer-motion';

export default function Download() {
    return (
        <section id="download" className="py-24 bg-primary">
            <div className="max-w-4xl mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-6">
                        ⚡
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Start tracking your recovery today
                    </h2>

                    <p className="text-xl text-white/70 mb-10">
                        Free to download. No subscription required.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center"> 
                        <a href="#"
                            className="bg-white text-primary px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
                        >
                            <span>🍎</span> Download on App Store
                        </a>
                        <a href="#"
                            className="bg-white text-primary px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
                        >
                            <span>🤖</span> Get it on Google Play
                        </a>
                    </div>

                    <p className="text-white/50 text-sm mt-8">
                        Available for iOS and Android
                    </p>
                </motion.div>
            </div>
        </section>
    );
}