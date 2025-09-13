import React from 'react'
import {Menu, X} from "lucide-react";

const NavbarHome = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    const handleClickMenu = () => {
        setIsOpen(!isOpen);
    }

    return (
        <nav className="navbar-home">
            <a href="/projects">Voir mes projets</a>
            {
                isOpen ? (
                    <div className="menu">
                        <ul>
                            <li><a href="/about">À propos</a></li>
                            <li><a href="/contact">Contact</a></li>
                        </ul>
                        <X className="menuIcon" onClick={handleClickMenu} />
                    </div>
                ) : <Menu className="menuIcon" onClick={handleClickMenu} />
            }
        </nav>
    )
}
export default NavbarHome
