import React from 'react';

const Navbar = ({ currentPath } : { currentPath: string }) => {
    // Debug console logs
    console.log('=== NAVBAR DEBUG ===');
    console.log('currentPath prop:', currentPath);
    console.log('typeof currentPath:', typeof currentPath);
    console.log('currentPath length:', currentPath?.length);
    console.log('currentPath as JSON:', JSON.stringify(currentPath));

    const links = [
        { href: "/", text: "Accueil" },
        { href: "/projects", text: "Projets" },
        { href: "/about", text: "À propos" },
        { href: "/contact", text: "Contact" }
    ];

    return (
        <nav className="navbar">
            <ul>
                {links.map((link) => {
                    const isActive = currentPath === link.href;
                    console.log(`Link ${link.href}: currentPath="${currentPath}" === href="${link.href}" = ${isActive}`);

                    return (
                        <li key={link.href}>
                            <a
                                href={link.href}
                                className={isActive ? "currentLink" : ""}
                                data-debug-current-path={currentPath}
                                data-debug-href={link.href}
                                data-debug-is-active={isActive}
                                style={isActive ? {backgroundColor: 'red'} : {}}
                            >
                                {link.text}
                            </a>
                        </li>
                    );
                })}
            </ul>
            {/* Affichage debug visible */}
            <div style={{
                position: 'fixed',
                top: '10px',
                left: '10px',
                background: 'black',
                color: 'white',
                padding: '10px',
                fontSize: '12px',
                zIndex: 9999
            }}>
                Debug: currentPath = "{currentPath}"
            </div>
        </nav>
    );
};

export default Navbar;