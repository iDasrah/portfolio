import React from 'react'
import {Menu, X} from "lucide-react";

const Navbar = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    const handleClickMenu = () => {
        setIsOpen(!isOpen);
    }

    return (
        <nav>
            <a href="">Voir mes projets</a>
            {
                isOpen ? (
                    <div className="menu">
                        <ul>
                            <li><a>À propos</a></li>
                            <li><a>Contact</a></li>
                        </ul>
                        <X className="menuIcon" onClick={handleClickMenu} />
                    </div>
                ) : <Menu className="menuIcon" onClick={handleClickMenu} />
            }
        </nav>
    )
}
export default Navbar
