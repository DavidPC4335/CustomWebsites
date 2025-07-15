import React from 'react';
import QuoteForm from '../components/QuoteForm';

const Contact = () => {
  return (
    <div className="contact-page">
      <section className="page-header">
        <div className="container">
          <h1 className="section-title">Get a Quote</h1>
          <p className="section-subtitle">
            Fill out the form below to get an instant estimate and schedule your service
          </p>
          <a href="tel:+12267670630" className="btn btn-primary">
                  Call Now: (226) 767-0630
                </a>
        </div>
      </section>

      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
          <div className="contact-form">
              <QuoteForm title="Request Your Quote" />
            </div>
            <div className="contact-info">
              <h2>Ready to Get Started?</h2>
              <p>
                Get your instant quote using the form, or contact us directly to discuss your specific needs. 
                We're here to provide fast, reliable service at competitive prices.
              </p>

              <div className="contact-details">
                <div className="contact-item">
                  <i className="fas fa-phone"></i>
                  <div>
                    <h4>Phone</h4>
                    <a href="tel:+12267670630">
                    <p>(226) 767-0630</p>
                    </a>
                  </div>
                </div>

                <div className="contact-item">
                  <i className="fas fa-envelope"></i>
                  <div>
                    <h4>Email</h4>
                    <a href="mailto:info@youngstersservices.com">
                    <p>info@youngstersservices.com</p>
                    </a>
                  </div>
                </div>
{/* 
                <div className="contact-item">
                  <i className="fas fa-map-marker-alt"></i>
                  <div>
                    <h4>Address</h4>
                    <p>123 Main Street<br />Your City, State 12345</p>
                  </div>
                </div> */}

                <div className="contact-item">
                  <i className="fas fa-clock"></i>
                  <div>
                    <h4>Business Hours</h4>
                    <p>
                      Monday - Friday: 7:00 AM - 7:00 PM<br />
                      Saturday - Sunday: 8:00 AM - 5:00 PM
                    </p>
                  </div>
                </div>
              </div>

              <div className="emergency-contact">
                <h4>Urgent Service</h4>
                <p>24/7 urgent services available</p>
                <a href="tel:+12267670630" className="btn btn-primary">
                  Call Now: (226) 767-0630
                </a>
              </div>
            </div>

     
          </div>
        </div>
      </section>

    
    </div>
  );
};

export default Contact; 