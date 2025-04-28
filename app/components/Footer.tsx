'use client';

export default function Footer() {
    return (
        <footer className="w-full px-6 py-8 text-center text-gray-600 text-sm">
            © {new Date().getFullYear()} Mathéo Picouleau. Tous droits réservés.
        </footer>
    );
}