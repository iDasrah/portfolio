'use client';

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { usePathname } from "next/navigation";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const navLinks = [
        { href: "/projects", label: "Projets" },
        { href: "/about", label: "À propos" },
        { href: "/contact", label: "Contact" },
    ];

    return (
        <header className="w-full px-6 py-4 flex justify-between items-center relative z-50">
            <Link href="/" className="text-2xl font-bold">
                Mathéo
            </Link>

            <nav className="hidden md:flex gap-8 text-gray-400">
                {navLinks.map((link) => (
                    <Link
                        key={link.href}
                        href={link.href}
                        className={`hover:text-white transition-colors ${
                            pathname.startsWith(link.href) ? 'text-white underline underline-offset-4' : ''
                        }`}
                    >
                        {link.label}
                    </Link>
                ))}
            </nav>

            <button
                className="md:hidden relative w-8 h-8 flex items-center justify-center"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle Menu"
            >
                <motion.span
                    initial={false}
                    animate={{
                        rotate: isOpen ? 45 : 0,
                        y: isOpen ? 0 : -6,
                    }}
                    className="absolute w-6 h-0.5 bg-white transition-all"
                />
                <motion.span
                    initial={false}
                    animate={{
                        opacity: isOpen ? 0 : 1,
                    }}
                    className="absolute w-6 h-0.5 bg-white transition-all"
                />
                <motion.span
                    initial={false}
                    animate={{
                        rotate: isOpen ? -45 : 0,
                        y: isOpen ? 0 : 6,
                    }}
                    className="absolute w-6 h-0.5 bg-white transition-all"
                />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.nav
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="absolute top-full left-0 w-full bg-black flex flex-col items-center gap-6 py-8 text-gray-400 md:hidden"
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className={`hover:text-white transition-colors ${
                                    pathname.startsWith(link.href) ? 'text-white underline underline-offset-4' : ''
                                }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </motion.nav>
                )}
            </AnimatePresence>
        </header>
    );
}