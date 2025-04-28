'use client';

import { motion } from "motion/react";
import Link from "next/link";
import {projects} from "@/app/data";

export default function ProjectsPage() {
    return (
        <main className="min-h-[80vh] flex flex-col items-center justify-center px-6 sm:px-10 md:px-16 lg:px-24 py-16">
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12"
            >
                Mes projets
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2, duration: 0.8 }}
                        className="border border-gray-700 rounded-2xl p-6 hover:border-white transition-all flex flex-col justify-between"
                    >
                        <div>
                            <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                            <p className="text-gray-400 mb-4">{project.description}</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.technologies.map((tech, idx) => (
                                    <span
                                        key={idx}
                                        className="px-3 py-1 text-sm bg-gray-800 rounded-full text-gray-300"
                                    >
                    {tech}
                  </span>
                                ))}
                            </div>
                        </div>
                        <Link href={project.link} className="text-sm text-gray-400 hover:text-white transition-colors underline">
                            Voir le projet
                        </Link>
                    </motion.div>
                ))}
            </div>
        </main>
    );
}