import { useState } from "react";
import "./header.css";

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="header">
            <nav>
                <a href="index.html" className="logo-text">
                    <img src="/images/logo.png" alt="Shadow Tech Institute Logo" />
                </a>

                {/* Navigation Links */}
                <div className={`nav-links ${menuOpen ? "open" : ""}`}>
                    <button type="button" className="btn-close" aria-label="Close" onClick={() => setMenuOpen(false)}>×</button>
                    <ul>
                        <li><a href="/home">Home</a></li>
                        <li><a href="/about">About Us</a></li>
                        <li><a href="/course">Courses</a></li>
                        <li><a href="/blog">Blog</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </div>

                {/* Hamburger Icon */}
                <i className="bi bi-list hamburger" onClick={() => setMenuOpen(!menuOpen)}>☰</i>
            </nav>
        </div>
    );
}

export default Header;
