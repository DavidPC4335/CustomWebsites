import React from 'react';

const Footer = () => {
  return (
    <footer id="contact" className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h4>Contact Information</h4>
            <p>
              <a href="tel:+12267670630">
              <i className="fas fa-phone"></i> (226) 767-0630
              </a>
            </p>
            <p>
              <a href="mailto:info@youngstersservices.com">
              <i className="fas fa-envelope"></i> info@youngstersservices.com
              </a>
            </p>
            <p>
              <i className="fas fa-clock"></i> Mon-Fri: 7AM-7PM<br />
              Sat-Sun: 8AM-5PM
            </p>
          </div>

          <div className="footer-section">
            <h4>Our Services</h4>
            <p><a href="/services">Delivery Services</a></p>
            <p><a href="/services">Moving Services</a></p>
            <p><a href="/services">Junk Removal</a></p>
            <p><a href="/contact">Get a Quote</a></p>
          </div>
{/* 
          <div className="footer-section">
            <h4>Service Areas</h4>
            <p>Downtown Area</p>
            <p>Suburban Districts</p>
            <p>Metro Region</p>
            <p>Surrounding Counties</p>
            <p><a href="#contact">Check if we serve your area</a></p>
          </div> */}

          <div className="footer-section">
            <h4>Quick Links</h4>
            <p><a href="/about">About Us</a></p>
            <p><a href="/testimonials">Testimonials</a></p>
            <p><a href="/contact">Contact Us</a></p>
            {/* <p><a href="#blog">Blog</a></p> */}
            {/* <p><a href="/faq">FAQ</a></p> */}
          </div>
        </div>

        <div className="social-links">
          <a href="#" className="social-link" aria-label="Facebook">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#" className="social-link" aria-label="Twitter">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="social-link" aria-label="Instagram">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="social-link" aria-label="LinkedIn">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="#" className="social-link" aria-label="Google Reviews">
            <i className="fab fa-google"></i>
          </a>
        </div>

        <div className="footer-bottom">
          <p>&copy;{` ${new Date().getFullYear()}`}<a href="https://davidpc.ca" target="_blank" rel="noopener noreferrer"> David Pavlove Cunsolo</a> All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 