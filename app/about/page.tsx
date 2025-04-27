'use client';

import { motion } from "motion/react";

const skills = [
    "Next.js",
    "React",
    "React Native",
    "Tailwind CSS",
    "TypeScript",
    "Node.js",
    "Express",
    "NestJS",
    "Prisma",
    "Framer Motion",
    "API REST",
    "PHP",
    "Laravel",
    "C",
    "Java",
    "C#",
    "Python",
    "SQL"
];

export default function AboutPage() {
    return (
        <main className="min-h-[80vh] flex flex-col items-center justify-center px-6 sm:px-10 md:px-16 lg:px-24 py-16">
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12"
            >
                À propos
            </motion.h2>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 1 }}
                className="max-w-3xl text-center text-gray-400 text-base sm:text-lg mb-12"
            >
                Je suis Mathéo Picouleau, étudiant en informatique et passionné par le développement web. J&#39;ai acquis des compétences solides dans le développement d&#39;applications web et mobiles, ainsi que dans la création de sites web modernes et réactifs. Je suis toujours à la recherche de nouveaux défis et d&#39;opportunités pour apprendre et grandir en tant que développeur.
            </motion.p>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 1 }}
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center"
            >
                {skills.map((item, i) => (
                    <div
                        key={i}
                        className="border border-gray-700 rounded-xl py-4 px-2 hover:border-white transition-all"
                    >
                        {item}
                    </div>
                ))}
            </motion.div>
        </main>
    );
}