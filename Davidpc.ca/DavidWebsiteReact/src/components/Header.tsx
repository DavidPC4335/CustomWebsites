import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar__container">
          <Link to="/" id="navbar__logo" onClick={closeMenu}>
            <i className="fas fa-terminal"></i>
            David PC
          </Link>
          <div className={`navbar__toggle ${isMenuOpen ? 'active' : ''}`} id="mobile-menu" onClick={toggleMenu}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
          <ul className={`navbar__menu ${isMenuOpen ? 'active' : ''}`}>
            <li className="navbar__item">
              <Link to="/" className="navbar__links" onClick={closeMenu}>Home</Link>
            </li>
            <li className="navbar__item">
              <Link to="/work-term-reports" className="navbar__links" onClick={closeMenu}>Work Reports</Link>
            </li>
            <li className="navbar__item">
              <Link to="/projects" className="navbar__links" onClick={closeMenu}>Projects</Link>
            </li>
            <li className="navbar__item">
              <Link to="/resume" className="navbar__links" onClick={closeMenu}>Resume</Link>
            </li>
            {/* <li className="navbar__item">
              <Link to="/about" className="navbar__links" onClick={closeMenu}>About</Link>
            </li> */}
           
            <li className="navbar__btn">
              <Link to="/contact" className="button" onClick={closeMenu}>Contact me</Link>
            </li>
          </ul>
        </div>
      </nav>
      
      {/* Mobile menu overlay */}
      {isMenuOpen && (
        <div className="mobile-overlay" onClick={closeMenu}></div>
      )}
    </>
  );
};

export default Header; 