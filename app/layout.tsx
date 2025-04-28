import "@/app/globals.css";
import { ReactNode } from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export const metadata = {
    title: "Portfolio | Mathéo Picouleau",
    description: "Portfolio de Mathéo Picouleau, étudiant en informatique",
    icons: {
        icon: "/icon.svg",
        shortcut: "/icon.svg",
        apple: "/icon.svg",
    }
}

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="fr">
            <body className="bg-black text-white flex flex-col min-h-screen">
                <Header />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    );
}