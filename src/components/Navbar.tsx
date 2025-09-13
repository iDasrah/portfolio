import React, { useEffect, useState } from 'react';

const Navbar = () => {
    const [pathname, setPathname] = useState("");

    useEffect(() => {
        const updatePath = () => setPathname(window.location.pathname);

        updatePath();

        document.addEventListener('swup:contentReplaced', updatePath);

        return () => {
            document.removeEventListener('swup:contentReplaced', updatePath);
        };
    }, []);

    const links = [
        { href: "/", text: "Accueil" },
        { href: "/projects", text: "Projets" },
        { href: "/about", text: "À propos" },
        { href: "/contact", text: "Contact" }
    ];

    return (
        <nav className="navbar">
            <ul>
                {links.map((link) => (
                    <li key={link.href}>
                        <a href={link.href} id={pathname === link.href ? "currentLink" : ""}>{link.text}</a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;