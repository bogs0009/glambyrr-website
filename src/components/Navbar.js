/*import React from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
        <li><Link to="services" smooth={true} duration={500}>Services</Link></li>
        <li><Link to="portfolio" smooth={true} duration={500}>Portfolio</Link></li>
        <li><Link to="about" smooth={true} duration={500}>About</Link></li>
        <li><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;*/
import React, { useState } from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link
          to="home"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="logo-link"
          onClick={closeMobileMenu}
        >
          <img src="/images/Logo-GlambyRR.png" alt="GlambyRR" className="logo-img" />
        </Link>

        <div className={`nav-links ${isMobileMenuOpen ? 'open' : ''}`}>
          {['home', 'services', 'portfolio', 'about', 'contacts'].map((section) => (
            <Link
              key={section}
              to={section}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="nav-link"
              activeClass="active"
              onClick={closeMobileMenu}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          ))}
        </div>

        <div className="hamburger" onClick={toggleMenu}>
          {isMobileMenuOpen ? '✕' : '☰'}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
