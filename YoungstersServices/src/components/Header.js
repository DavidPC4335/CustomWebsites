import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path) => {
    return location.pathname === path ? 'nav-link active' : 'nav-link';
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          <div className="header-logo-container">
            <div className="header-logo">
              <img src={logo} alt="Youngsters Services" className="logo-image"/>
            </div>
            <Link to="/" className="logo" onClick={closeMenu}>
              Youngsters Services
            </Link>
          </div>
          <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <Link to="/" className={isActive('/')} onClick={closeMenu}>Home</Link>
            <Link to="/services" className={isActive('/services')} onClick={closeMenu}>Services</Link>
            <Link to="/about" className={isActive('/about')} onClick={closeMenu}>About</Link>
            <Link to="/pricing" className={isActive('/pricing')} onClick={closeMenu}>Pricing</Link>
            <Link to="/testimonials" className={isActive('/testimonials')} onClick={closeMenu}>Testimonials</Link>
            {/* <Link to="/contact" className={isActive('/contact')} onClick={closeMenu}>Contact</Link> */}
            <Link to="/contact" className={`btn btn-primary ${location.pathname==='/contact' ? 'active' : ''}`} onClick={closeMenu}>Get a Quote</Link>
          </nav>
          
          <button className="mobile-menu-toggle" onClick={toggleMenu}>
            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header; 