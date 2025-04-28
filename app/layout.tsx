import "@/app/globals.css";
import { ReactNode } from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

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