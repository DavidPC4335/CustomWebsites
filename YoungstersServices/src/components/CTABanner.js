import React from 'react';
import { Link } from 'react-router-dom';

const CTABanner = () => {
  return (
    <section className="cta-banner">
      <div className="container">
        <h2>Book Today and Save 10%!</h2>
        <p className="cta-text">
          Don't wait - schedule your service today and take advantage of our limited-time offer. 
          use code <span className="cta-code">SAVE10</span> to get 10% off your first service.
        </p>
        <Link to="/contact" className="btn btn-secondary btn-small">
          Get a Quote Now
        </Link>
      </div>
    </section>
  );
};

export default CTABanner; 