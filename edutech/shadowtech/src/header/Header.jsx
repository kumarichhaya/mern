import { useState } from "react";
import "./header.css";
import { NavLink,Link } from "react-router";

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="header">
            <nav>
                <Link to="/" className="logo-text">
                    <img src="/images/logo.png" alt="Shadow Tech Institute Logo" />
                </Link>

                {/* Navigation Links */}
                <div className={`nav-links ${menuOpen ? "open" : ""}`}>
                    <button type="button" className="btn-close" aria-label="Close" onClick={() => setMenuOpen(false)}>×</button>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/course">Courses</Link></li>
                        <li><Link to="/blog/sports">Sports Blog</Link></li>
                        <li><Link to="/blog/tech">Tech Blog</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>

                {/* Hamburger Icon */}
                <i className="bi bi-list hamburger" onClick={() => setMenuOpen(!menuOpen)}>☰</i>
            </nav>
        </div>
    );
}

export default Header;
