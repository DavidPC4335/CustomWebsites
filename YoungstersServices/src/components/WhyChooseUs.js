import React from 'react';

const WhyChooseUs = () => {
  const benefits = [
    {
      icon: 'fas fa-shield-alt',
      text: 'Licensed & Insured'
    },
    {
      icon: 'fas fa-clock',
      text: 'Same-Day Service Available'
    },
    {
      icon: 'fas fa-dollar-sign',
      text: 'Transparent Pricing'
    },
    {
      icon: 'fas fa-users',
      text: 'Professional Team'
    },
    {
      icon: 'fas fa-star',
      text: '5-Star Customer Service'
    },
    {
      icon: 'fas fa-leaf',
      text: 'Eco-Friendly Disposal'
    },
    {
      icon: 'fas fa-map-marker-alt',
      text:'Support Small Business'
    },
    {
      icon: 'fas fa-handshake',
      text: 'Locally-Owned & Operated'
    }
  ];

  return (
    <section id="about" className="why-choose">
      <div className="container">
        <h2 className="section-title">Why Choose Youngsters Services?</h2>
        <p className="section-subtitle">
          We're committed to providing exceptional service that exceeds your expectations
        </p>
        
        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <div key={index} className="benefit-item">
              <div className="benefit-icon">
                <i className={benefit.icon}></i>
              </div>
              <div className="benefit-text">
                {benefit.text}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs; 