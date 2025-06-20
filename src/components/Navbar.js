import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <h1 className="navbar-logo">MyPortfolio</h1>

      <div className={`navbar-toggle ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      <ul className={`navbar-links ${isOpen ? "active" : ""}`}>
        <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
<li><Link to="/about" onClick={() => setIsOpen(false)}>About</Link></li>
<li><Link to="/projects" onClick={() => setIsOpen(false)}>Projects</Link></li>
<li><Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;