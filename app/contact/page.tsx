'use client';

import { motion } from "motion/react";

export default function ContactPage() {
    return (
        <main className="min-h-[80vh] flex flex-col items-center justify-center px-6 sm:px-10 md:px-16 lg:px-24 py-16">
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12"
            >
                Contact
            </motion.h2>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 1 }}
                className="max-w-2xl text-center text-gray-400 text-base sm:text-lg mb-8"
            >
                Si vous souhaitez me contacter, n'hésitez pas à m'envoyer un e-mail à l'adresse suivante :
            </motion.p>

            <motion.a
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 1 }}
                href="mailto:matheo.picouleau@hotmail.com"
                className="border border-gray-600 px-8 py-4 rounded-full text-gray-300 hover:text-white hover:border-white transition-colors"
            >
                matheo.picouleau@hotmail.com
            </motion.a>
        </main>
    );
}