import { Link } from "react-router-dom";
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
                <li className="link"><Link to="/" className="home-link">Home</Link></li>
                <li className="link"><Link to="project" className="home-link">Project</Link></li>
                <li className="link"><Link to="contact" className="home-link">Contact</Link></li>
            </ul>

            <div className="toggle-container">
                <span className="dark-toggle" onClick={handleToggle}>{dark ? '🌞' : '🌙'}</span>
                <span className="fas fa-bars" id="toggle-button" onClick={handleSidebar}></span>
            </div>
        </nav>
    );
}
