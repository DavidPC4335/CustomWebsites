import React from 'react';
import QuoteForm from '../components/QuoteForm';
import heroBg from '../assets/hero-bg.jpg';
import CTABanner from '../components/CTABanner';
const PricingPage = () => {
  const pricingPlans = [
    {
      id: 'delivery',
      title: 'Delivery Services',
      icon: 'fas fa-truck',
      startingPrice: '$25',
      description: 'Fast, reliable delivery for all your needs',
      features: [
        'Same-day delivery available',
        'Real-time tracking',
        'Fragile item handling',
        'Flexible scheduling',
        'Professional drivers',
        'Insurance coverage'
      ],
      popular: false
    },
    {
      id: 'moving',
      title: 'Moving Services',
      icon: 'fas fa-box',
      startingPrice: '$120',
      description: 'Complete moving solutions for homes and offices',
      features: [
        'Professional moving team',
        'Packing materials included',
        'Furniture protection',
        'Loading & unloading',
        'Insurance coverage',
        'Storage solutions'
      ],
      popular: true
    },
    {
      id: 'junk',
      title: 'Junk Removal',
      icon: 'fas fa-trash',
      startingPrice: '$85',
      description: 'Eco-friendly junk removal and disposal',
      features: [
        'Eco-friendly disposal',
        'Same-day service',
        'No hidden fees',
        'Donation & recycling',
        'Heavy lifting included',
        'Clean-up service'
      ],
      popular: false
    }
  ];

  const faqs = [
    {
      question: 'How do you calculate pricing?',
      answer: 'Our pricing is based on factors like distance, service type, time requirements, and any special handling needs. We provide transparent quotes with no hidden fees.'
    },
    {
      question: 'Are there any additional fees?',
      answer: 'No hidden fees! Our quotes include all standard services. Additional charges may apply for special requests or services outside normal business hours.'
    },
    {
      question: 'Do you offer discounts?',
      answer: 'Yes! We offer discounts for recurring customers, bulk services, and seasonal promotions. Check our current offers when requesting a quote.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept cash, credit cards, debit cards, and digital payment methods. Payment is typically due upon completion of service.'
    },
    {
      question: 'How quickly can you provide service?',
      answer: 'Most services can be scheduled within 24-48 hours. Same-day service is available for urgent requests with an additional fee.'
    },
    {
      question: 'Do you provide free estimates?',
      answer: 'Yes! We provide free, no-obligation estimates for all our services. Use our quote calculator or contact us directly.'
    }
  ];

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
      <CTABanner />
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
                
                <div className="card-header">
                  <div className="service-icon">
                    <i className={plan.icon}></i>
                  </div>
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
          <div className="section-header">
            <h2 className="section-title">Get Your Free Quote</h2>
            <p className="section-subtitle">
              Fill out the form below to receive an instant estimate for your service needs.
            </p>
          </div>
          
          <div className="quote-calculator">
            <QuoteForm title="Calculate Your Quote" />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="pricing-faq">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">
              Everything you need to know about our pricing and services.
            </p>
          </div>
          
          <div className="faq-grid">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item">
                <div className="faq-question">
                  <i className="fas fa-question-circle"></i>
                  <h4>{faq.question}</h4>
                </div>
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingPage; 