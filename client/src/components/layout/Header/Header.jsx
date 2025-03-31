// src/components/layout/Header/Header.jsx
import { useState } from 'react';
import './Header.css';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-container">
          <a href="/" className="logo">
            <span className="logo-text">StudySpace</span>
            <span className="logo-overseas">OVERSEAS</span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          <ul className="nav-links">
            <li><a href="/">Home</a></li>
            <li><a href="/destinations">Destinations</a></li>
            <li><a href="/programs">Programs</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/success-stories">Success Stories</a></li>
            <li><a href="/resources">Resources</a></li>
          </ul>
        </nav>

        <div className="auth-buttons">
          <button className="login-btn">Log In</button>
          <button className="signup-btn">Sign Up</button>
        </div>

        {/* Mobile Menu Button */}
        <button className="mobile-menu-btn" onClick={toggleMobileMenu} aria-label="Toggle mobile menu">
          <span className={`menu-icon ${mobileMenuOpen ? 'open' : ''}`}></span>
        </button>

        {/* Mobile Navigation */}
        <div className={`mobile-nav ${mobileMenuOpen ? 'open' : ''}`}>
          <ul className="mobile-nav-links">
            <li><a href="/" onClick={toggleMobileMenu}>Home</a></li>
            <li><a href="/destinations" onClick={toggleMobileMenu}>Destinations</a></li>
            <li><a href="/programs" onClick={toggleMobileMenu}>Programs</a></li>
            <li><a href="/services" onClick={toggleMobileMenu}>Services</a></li>
            <li><a href="/success-stories" onClick={toggleMobileMenu}>Success Stories</a></li>
            <li><a href="/resources" onClick={toggleMobileMenu}>Resources</a></li>
          </ul>
          <div className="mobile-auth-buttons">
            <button className="login-btn">Log In</button>
            <button className="signup-btn">Sign Up</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;