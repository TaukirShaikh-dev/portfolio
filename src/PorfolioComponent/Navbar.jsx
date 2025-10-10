import { NavLink } from "react-router-dom";
import { useState } from "react";

export function Navbar({dark, handleToggle}) {
    const [open, setOpen] = useState(false);

    function handleSidebar() {
        //toggle sidebar
        setOpen(!open);
    }

    return (
        <nav id="nav">
            <div className="logo">Taukir Shaikh</div>

            <ul className={`nav-link ${open ? 'open' : ''}`}>
                <li className="fas fa-times" id="cross" onClick={handleSidebar}></li>
                <li className="link"><NavLink to="/" className={({isActive}) => isActive ? 'active home-link' : 'home-link'}>Home</NavLink></li>
                <li className="link"><NavLink to="project" className={({isActive}) => isActive ? 'active home-link' : 'home-link'}>Project</NavLink></li>
                <li className="link"><NavLink to="contact" className={({isActive}) => isActive ? 'active home-link' : 'home-link'}>Contact</NavLink></li>
            </ul>

            <div className="toggle-container">
                <span className="dark-toggle" onClick={handleToggle}>{dark ? '🌞' : '🌙'}</span>
                <span className="fas fa-bars" id="toggle-button" onClick={handleSidebar}></span>
            </div>
        </nav>
    );
}
