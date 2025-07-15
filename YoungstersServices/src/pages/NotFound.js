import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const NotFound = () => {
  return (
    <div className="not-found-page">
      <Header />
      <main className="not-found-content">
        <div className="container">
          <div className="not-found-wrapper">
            <div className="not-found-icon">
              <i className="fas fa-exclamation-triangle"></i>
            </div>
            <h1 className="not-found-title">404</h1>
            <h2 className="not-found-subtitle">Page Not Found</h2>
            <p className="not-found-description">
              Oops! The page you're looking for doesn't exist. It might have been moved, deleted, or you entered the wrong URL.
            </p>
            <div className="not-found-actions">
              <Link to="/" className="btn btn-primary">
                <i className="fas fa-home"></i>
                Go Home
              </Link>
              <Link to="/contact" className="btn btn-outline">
                <i className="fas fa-envelope"></i>
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound; 