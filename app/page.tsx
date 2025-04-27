'use client';

import { motion } from "motion/react";

export default function Home() {
    return (
        <main className="flex min-h-[80vh] flex-col justify-center items-center text-center px-6 sm:px-10 md:px-16 lg:px-24">

            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6"
            >
                Mathéo Picouleau
            </motion.h1>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 1 }}
                className="max-w-2xl text-base sm:text-lg md:text-xl text-gray-400 mb-10"
            >
                Étudiant en informatique
            </motion.p>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 1 }}
            >
                <a
                    href="/projects"
                    className="border border-gray-600 px-6 py-3 rounded-full text-gray-300 hover:text-white hover:border-white transition-colors"
                >
                    Voir mes projets
                </a>
            </motion.div>

        </main>
    );
}