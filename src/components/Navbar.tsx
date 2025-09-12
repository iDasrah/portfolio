import React, { useEffect, useState } from 'react';

const Navbar = () => {
    const [pathname, setPathname] = useState("");

    useEffect(() => {
        setPathname(window.location.pathname);
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