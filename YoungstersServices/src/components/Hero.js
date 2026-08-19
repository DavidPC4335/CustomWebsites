import React from 'react';
import { Link } from 'react-router-dom';
import heroBg from '../assets/bg-8.png';
import { contact } from '../config';

const Hero = () => {
  return (
    <section id="home" className="hero" style={{ backgroundImage: `linear-gradient(135deg, rgba(13, 59, 102, 0.8), rgba(13, 59, 102, 0.6)), url(${heroBg})` }}>
      <div className="container">
        <div className="hero-content">
          <h1>Fast. Reliable. Affordable.</h1>
          <p>Moving, Junk Removal, and Delivery – all in one place.</p>
          <div className="hero-trust">
            <span><i className="fas fa-star"></i> 5-Star Rated</span>
            <span><i className="fas fa-users"></i> 5,000+ Customers Served</span>
            <span><i className="fas fa-heart"></i> 100% Satisfaction</span>
          </div>
          <Link to="/contact" className="btn btn-primary btn-large">
            Get a Free Quote
          </Link>
          <a href={`tel:${contact.phoneTel}`} className="btn btn-secondary">
            Call Now: {contact.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
