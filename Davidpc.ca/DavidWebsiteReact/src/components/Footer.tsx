import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="footer__container">
      <div className="footer__content">
        <div className="footer__section footer__brand">
          <Link to="/" className="footer__logo">
            <i className="fas fa-terminal"></i>
            David PC
          </Link>
          <p className="footer__description">
            Software Engineering Student at University of Guelph
          </p>
          <h3 className="footer__title">Follow</h3>
          <div className="footer__social--icons">
            <a href="https://github.com/DavidPC4335" className="footer__social--icon" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/davidpavlovecunsolo/" className="footer__social--icon" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="mailto:davidpc4335@gmail.com" className="footer__social--icon" target="_blank" rel="noopener noreferrer">
              <i className="fa-regular fa-envelope"></i>
            </a>
          </div>
        </div>
        
        <div className="footer__section footer__navigation">
          <h3 className="footer__title">Navigate</h3>
          <div className="footer__links">
            <Link to="/" className="footer__link">Home</Link>
            <Link to="/projects" className="footer__link">Projects</Link>
            <Link to="/resume" className="footer__link">Resume</Link>
            <Link to="/about" className="footer__link">About</Link>
          </div>
        </div>
        
        <div className="footer__section footer__contact">
          <h3 className="footer__title">Connect</h3>
          <div className="footer__links">
            <Link to="/contact" className="footer__link">Contact Me</Link>
            <a href="mailto:davidpc4335@gmail.com" className="footer__link">Email</a>
            <a href="https://www.linkedin.com/in/davidpavlovecunsolo/" className="footer__link" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://github.com/DavidPC4335" className="footer__link" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>
        
        <div className="footer__section footer__social">

        </div>
      </div>
      
      <div className="footer__bottom">
        <div className="footer__bottom--content">
          <p className="footer__copyright">© {new Date().getFullYear()} David Pavlove Cunsolo. All rights reserved.</p>
          <p className="footer__built">Built with React & TypeScript</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 