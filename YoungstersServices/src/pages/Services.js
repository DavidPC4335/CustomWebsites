import React from 'react';
import Services from '../components/Services';
import WhyChooseUs from '../components/WhyChooseUs';
import CTABanner from '../components/CTABanner';
import heroBg from '../assets/hero-bg.jpg';

const ServicesPage = () => {
  return (
    <div className="services-page">
      <section
        className="page-header"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(255,255,255,0.95), rgba(207, 207, 207, 0.7)), url(${heroBg})`
        }}
      >
        <div className="container">
          <h1 className="section-title">Our Services</h1>
          <p className="section-subtitle">
            Comprehensive solutions for all your delivery, moving, and junk removal needs
          </p>
          
          <div className="service-navigation">
            <a href="#deliveries" className="service-nav-link">
              <i className="fas fa-truck"></i>
              <span>Delivery Services</span>
            </a>
            <a href="#moving" className="service-nav-link">
              <i className="fas fa-box"></i>
              <span>Moving Services</span>
            </a>
            <a href="#junk-removal" className="service-nav-link">
              <i className="fas fa-trash"></i>
              <span>Junk Removal</span>
            </a>
          </div>
        </div>
      </section>
      
      <CTABanner />
      
      {/* Delivery Services Section */}
      <section id="deliveries" className="service-section">
        <div className="container">
          <div className="service-section-header">
            <div className="service-icon-large">
              <i className="fas fa-truck"></i>
            </div>
            <h2>Delivery Services</h2>
            <p>Fast, reliable delivery solutions for all your needs</p>
          </div>
          
          <div className="service-content">
            <div className="service-features">
              <h3>What We Offer</h3>
              <div className="features-grid">
                <div className="feature-item">
                  <i className="fas fa-clock"></i>
                  <h4>Same-Day Delivery</h4>
                  <p>Urgent deliveries completed within hours</p>
                </div>
                <div className="feature-item">
                  <i className="fas fa-box"></i>
                  <h4>Package Handling</h4>
                  <p>Careful pickup and delivery of all package types</p>
                </div>
                <div className="feature-item">
                  <i className="fas fa-shield-alt"></i>
                  <h4>Fragile Items</h4>
                  <p>Specialized handling for delicate and valuable items</p>
                </div>
                <div className="feature-item">
                  <i className="fas fa-map-marker-alt"></i>
                  <h4>Real-Time Tracking</h4>
                  <p>Track your delivery from pickup to destination</p>
                </div>
                <div className="feature-item">
                  <i className="fas fa-calendar-alt"></i>
                  <h4>Flexible Scheduling</h4>
                  <p>Choose delivery times that work for you</p>
                </div>
                <div className="feature-item">
                  <i className="fas fa-route"></i>
                  <h4>Local & Regional</h4>
                  <p>Coverage throughout the metro area and beyond</p>
                </div>
              </div>
            </div>
            
            <div className="service-pricing">
              <h3>Pricing</h3>
              <div className="pricing-info">
                <p><strong>Starting at $25</strong> for local deliveries</p>
                <p>Additional charges may apply for:</p>
                <ul>
                  <li>Same-day service</li>
                  <li>Fragile item handling</li>
                  <li>Long-distance deliveries</li>
                  <li>After-hours service</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Moving Services Section */}
      <section id="moving" className="service-section">
        <div className="container">
          <div className="service-section-header">
            <div className="service-icon-large">
              <i className="fas fa-box"></i>
            </div>
            <h2>Moving Services</h2>
            <p>Professional moving solutions for residential and commercial needs</p>
          </div>
          
          <div className="service-content">
            <div className="service-features">
              <h3>Our Moving Services</h3>
              <div className="features-grid">
                <div className="feature-item">
                  <i className="fas fa-home"></i>
                  <h4>Residential Moving</h4>
                  <p>Complete home moving with care and precision</p>
                </div>
                <div className="feature-item">
                  <i className="fas fa-building"></i>
                  <h4>Commercial Moving</h4>
                  <p>Office and business relocation services</p>
                </div>
                <div className="feature-item">
                  <i className="fas fa-boxes"></i>
                  <h4>Packing Services</h4>
                  <p>Professional packing and unpacking assistance</p>
                </div>
                <div className="feature-item">
                  <i className="fas fa-tools"></i>
                  <h4>Furniture Assembly</h4>
                  <p>Disassembly and reassembly of furniture</p>
                </div>
                <div className="feature-item">
                  <i className="fas fa-warehouse"></i>
                  <h4>Storage Solutions</h4>
                  <p>Short and long-term storage options</p>
                </div>
                <div className="feature-item">
                  <i className="fas fa-road"></i>
                  <h4>Long-Distance</h4>
                  <p>Cross-country and interstate moving</p>
                </div>
              </div>
            </div>
            
            <div className="service-pricing">
              <h3>Pricing</h3>
              <div className="pricing-info">
                <p><strong>Starting at $120</strong> for local moves</p>
                <p>Included in our service:</p>
                <ul>
                  <li>Professional moving team</li>
                  <li>Packing materials</li>
                  <li>Furniture protection</li>
                  <li>Insurance coverage</li>
                  <li>Loading and unloading</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Junk Removal Section */}
      <section id="junk-removal" className="service-section">
        <div className="container">
          <div className="service-section-header">
            <div className="service-icon-large">
              <i className="fas fa-trash"></i>
            </div>
            <h2>Junk Removal</h2>
            <p>Efficient and eco-friendly disposal services</p>
          </div>
          
          <div className="service-content">
            <div className="service-features">
              <h3>Junk Removal Services</h3>
              <div className="features-grid">
                <div className="feature-item">
                  <i className="fas fa-house-user"></i>
                  <h4>Household Cleanouts</h4>
                  <p>Complete home decluttering and cleanup</p>
                </div>
                <div className="feature-item">
                  <i className="fas fa-briefcase"></i>
                  <h4>Office Cleanouts</h4>
                  <p>Commercial space clearing and organization</p>
                </div>
                <div className="feature-item">
                  <i className="fas fa-hammer"></i>
                  <h4>Construction Debris</h4>
                  <p>Removal of renovation and construction waste</p>
                </div>
                <div className="feature-item">
                  <i className="fas fa-leaf"></i>
                  <h4>Eco-Friendly Disposal</h4>
                  <p>Responsible waste management and recycling</p>
                </div>
                <div className="feature-item">
                  <i className="fas fa-hand-holding-heart"></i>
                  <h4>Donation Services</h4>
                  <p>Donate usable items to local charities</p>
                </div>
                <div className="feature-item">
                  <i className="fas fa-recycle"></i>
                  <h4>Recycling</h4>
                  <p>Proper recycling of eligible materials</p>
                </div>
              </div>
            </div>
            
            <div className="service-pricing">
              <h3>Pricing</h3>
              <div className="pricing-info">
                <p><strong>Starting at $85</strong> for standard removal</p>
                <p>Pricing based on:</p>
                <ul>
                  <li>Volume of items</li>
                  <li>Type of materials</li>
                  <li>Location and accessibility</li>
                  <li>Urgency of service</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <WhyChooseUs />
    </div>
  );
};

export default ServicesPage; 