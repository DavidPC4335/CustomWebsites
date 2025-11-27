import React from 'react';
import QuoteForm from '../components/QuoteForm';
import heroBg from '../assets/hero-bg.png';
// import CTABanner from '../components/CTABanner';
import { pricingPlans, faqs   } from '../config';


const PricingPage = () => {
  return (
    <div className="pricing-page">
      {/* Hero Section */}
      <section 
        className="pricing-hero"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(13, 59, 102, 0.9), rgba(13, 59, 102, 0.7)), url(${heroBg})`
        }}
      >
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Transparent Pricing</h1>
            <p className="hero-subtitle">
              No hidden fees, no surprises. Get instant quotes for all our services.
            </p>
            <div className="hero-features">
              <div className="hero-feature">
                <i className="fas fa-check-circle"></i>
                <span>Free Estimates</span>
              </div>
              <div className="hero-feature">
                <i className="fas fa-shield-alt"></i>
                <span>Fully Insured</span>
              </div>
              <div className="hero-feature">
                <i className="fas fa-clock"></i>
                <span>24/7 Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <CTABanner /> */}
      {/* Pricing Cards Section */}
      <section className="pricing-plans">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Service Pricing</h2>
            <p className="section-subtitle">
              Choose the service that fits your needs. All prices include professional service and basic insurance.
            </p>
          </div>
          
          <div className="pricing-grid">
            {pricingPlans.map((plan) => (
              <div key={plan.id} className={`pricing-card ${plan.popular ? 'popular' : ''}`}>
                {plan.popular && <div className="popular-badge">Most Popular</div>}
                <div className="service-icon" style={{color: 'red'}}>
                    <i className={plan.icon}></i>
                  </div>
                <div className="card-header">
                 
                  <h3 className="service-title">{plan.title}</h3>
                  <p className="service-description">{plan.description}</p>
                </div>
                
                <div className="card-pricing">
                  <div className="price">
                    <span className="price-label">Starting at</span>
                    <span className="price-amount">{plan.startingPrice}</span>
                  </div>
                </div>
                
                <div className="card-features">
                  <ul className="features-list">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="feature-item">
                        <i className="fas fa-check"></i>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="card-action">
                  <button className="btn btn-primary" onClick={() => {
                    document.getElementById('quote-calculator').scrollIntoView({ behavior: 'smooth' });
                  }}>
                    Get Quote
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Calculator Section */}
      <section id="quote-calculator" className="quote-section">
        <div className="container">
       <QuoteForm />
       </div>
      </section>
    </div>
  );
};

export default PricingPage; 