import { Navbar } from "./PorfolioComponent/Navbar";
import { Footer } from "./PorfolioComponent/Footer";
import { useDarkmode } from "./hooks/useDarkmode";
import { Outlet } from "react-router-dom";
import './Portfolio.css';

export function Portfolio() {
    const [dark, handleToggle] = useDarkmode();

    return (
        <div className={`container ${dark ? 'dark-mode' : ''}`}>
            <Navbar dark={dark} handleToggle={handleToggle}/>
            <Outlet />
            <Footer />
        </div>
    );
}

