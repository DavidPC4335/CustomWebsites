import React from 'react';
import { Link } from 'react-router-dom';
import heroBg from '../assets/hero-bg.jpg';

const Hero = () => {
  return (
    <section id="home" className="hero" style={{ backgroundImage: `linear-gradient(135deg, rgba(13, 59, 102, 0.8), rgba(13, 59, 102, 0.6)), url(${heroBg})` }}>
      <div className="container">
        <div className="hero-content">
          <h1>Fast. Reliable. Affordable.</h1>
          <p>Moving, junk removal, and delivery – all in one place.</p>
          <Link to="/contact" className="btn btn-primary btn-large">
            Get a Free Quote
          </Link>
          <a href="tel:+12267670630" className="btn btn-secondary">
                  Call Now: (226) 767-0630
                </a>
        </div>
      </div>
    </section>
  );
};

export default Hero; 