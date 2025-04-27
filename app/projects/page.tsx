'use client';

import { motion } from "motion/react";
import Link from "next/link";

const projects = [
    {
        title: "PuckTracker",
        description: "PuckTracker est une application de suivi des performances NHL. Elle récupère, stocke et analyse les statistiques des joueurs (points, buts, passes) pour générer des comptes rendus par match et par équipe. L’outil met en avant les meilleurs pointeurs, buteurs et passeurs sur les derniers matchs et facilite l’analyse rapide des tendances.",
        technologies: ["React", "TailwindCSS", "Prisma", "NestJS"],
        link: "https://pucktracker.vercel.app/"
    },
    {
        title: "Frise-moi ça!",
        description: "Jeu de société en ligne inspiré de Timeline. Les joueurs doivent placer des événements historiques français sur une frise chronologique. Le but est de deviner la date d'un événement en le plaçant correctement sur la frise. Le jeu est accessible à tous et permet de tester ses connaissances historiques tout en s'amusant.",
        technologies: ["React", "TailwindCSS", "Node.js", "Express", "Socket.io"],
        link: "https://t4-frise-moi-ca.vercel.app/"
    },
    {
        title: "Projet cours web : React",
        description: "Application basée sur l'API créé en cours, permettant de gérer une base de données de livres et d'auteurs.",
        technologies: ["React", "TailwindCSS"],
        link: "https://github.com/iDasrah/projet-w42-react.git"
    },
    {
        title: "Projet cours web : API",
        description: "Création d'une API permettant de gérer une base de données de livres et d'auteurs.",
        technologies: ["Node.js", "Express", "Prisma"],
        link: "https://github.com/iDasrah/cours-nodejs-express-prisma.git"
    },
    {
        title: "Projet cours Android",
        description: "Application Android permettant de gérer une base de données de livres et d'auteurs.",
        technologies: ["Java", "Android Studio"],
        link: "https://github.com/iDasrah/android-books-client.git"
    }
];

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