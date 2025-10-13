import user from '../assets/img/user8.png'
import { Link } from 'react-router-dom';

export function Main() {
    return (
        <main id="main-content">
            <img src={user} alt="user image" className="user-image" />
                <h2 className="name">Hi, I am Taukir Front-End Developer</h2>
                <p className="role">I am front-end developer with strong foundation in HTML, CSS and JavaScript and React. I enjoy building
                    clean, responsive user interfaces and turning design ideas into real, working component. I am continously
                    learning and love creating project that improve my skill and solve real problems.</p>
                <p className="button-container">
                    <Link to="project"><button id="project-btn">View Project</button></Link>
                    <Link to="contact"><button id="contact-btn">Contact</button></Link>
                </p>
        </main>
    );
}