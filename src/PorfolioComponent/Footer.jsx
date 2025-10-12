import { Link } from "react-router-dom";

export function Footer() {
    return (
        <footer className="footer">
            <p className="link-container"><Link to="/" className="back-link">Home</Link> | <Link to="project" className="back-link">Project</Link> | <Link to="/" className="back-link">FAQ</Link> | <Link to="contact" className="back-link">Contact</Link></p>
            <p className="social-link">
                <a href="https://www.linkedin.com/in/taukir-shaikh-81029733b" target="_blank" rel="noopener noreferrer"><i className="social-icon fab fa-linkedin"></i></a>
                <a href="https://github.com/TaukirShaikh-dev" target="_blank" rel="noopener noreferrer"><i className="social-icon fab fa-github"></i></a>
            </p>
            <p className="copyright">&copy; 2025 Taukir Shaikh</p>
        </footer>
    );
}
