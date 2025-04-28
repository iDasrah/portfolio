'use client';

import Link from "next/link";

export default function Footer() {
    return (
        <footer className="w-full px-6 py-8 flex flex-col items-center text-center gap-4 text-gray-600 text-sm">
            <div className="flex gap-6">
                <Link
                    href="https://github.com/iDasrah"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                >
                    GitHub
                </Link>
                <Link
                    href="https://www.linkedin.com/in/mathéo-picouleau-767812250"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                >
                    LinkedIn
                </Link>
            </div>
            <p>
                © {new Date().getFullYear()} Mathéo Picouleau. Tous droits réservés.
            </p>
        </footer>
    );
}