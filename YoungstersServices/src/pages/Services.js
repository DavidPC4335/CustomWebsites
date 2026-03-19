import React from 'react';
import Services from '../components/Services';
import WhyChooseUs from '../components/WhyChooseUs';
// import CTABanner from '../components/CTABanner';
import bg3 from '../assets/bg-3.png';
import { pricingPlans, servicesDetails } from '../config';

const ServicesPage = () => {
  const deliverPricing = pricingPlans.find(service => service.id === 'delivery')?.startingPrice;
  const movingPricing = pricingPlans.find(service => service.id === 'moving')?.startingPrice;
  const junkRemovalPricing = pricingPlans.find(service => service.id === 'junk')?.startingPrice;
  const stagingPricing = pricingPlans.find(service => service.id === 'staging')?.startingPrice;



  const getPricingForService = (serviceId) => {
    switch(serviceId) {
      case 'deliveries':
        return deliverPricing;
      case 'moving':
        return movingPricing;
      case 'junk-removal':
        return junkRemovalPricing;
      case 'staging':
        return stagingPricing;
      default:
        return '';
    }
  };

  const getPricingDetails = (serviceId) => {
    switch(serviceId) {
      case 'deliveries':
        return {
          startingText: `Starting at ${deliverPricing} for local deliveries`,
          additionalCharges: [
            'Same-day service',
            'Fragile item handling',
            'Long-distance deliveries',
            'After-hours service'
          ]
        };
      case 'moving':
        return {
          startingText: `Starting at ${movingPricing} for local moves`,
          included: [
            'Professional moving team',
            'Packing materials',
            'Furniture protection',
            'Insurance coverage',
            'Loading and unloading'
          ]
        };
      case 'junk-removal':
        return {
          startingText: `Starting at ${junkRemovalPricing} for standard removal`,
          basedOn: [
            'Volume of items',
            'Type of materials',
            'Location and accessibility',
            'Urgency of service'
          ]
        };
      case 'staging':
        return {
          startingText: `Starting at ${stagingPricing} for staging services`,
          included: [
            'Furniture and decor placement',
            'Expert consultation',
            'Decluttering assistance',
            'Quick turnaround available',
            'Photography-ready setup'
          ]
        };
      default:
        return {};
    }
  };

  return (
    <div className="services-page">
      <section
        className="page-header"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(26, 26, 27, 0.88), rgba(37, 37, 38, 0.82)), url(${bg3})`
        }}
      >
        <div className="container">
          <h1 className="section-title">Our Services</h1>
          <p className="page-header-est">Est. 2024</p>
          <p className="section-subtitle">
            Comprehensive solutions for all your delivery, moving, and junk removal needs
          </p>
          
          <div className="service-navigation">
            {servicesDetails.map(service => (
              <a key={service.id} href={`#${service.id}`} className="service-nav-link">
                <i className={service.icon}></i>
                <span>{service.title}</span>
              </a>
            ))}
          </div>
        </div>
      </section>
      
      {/* <CTABanner /> */}
      
      {servicesDetails.map(service => {
        const pricingDetails = getPricingDetails(service.id);
        
        return (
          <section key={service.id} id={service.id} className="service-section">
            <div className="container">
              <div className="service-section-header">
                <div className="service-icon-large">
                  <i className={service.icon}></i>
                </div>
                <h2>{service.title}</h2>
                <p>{service.description}</p>
              </div>
              
              <div className="service-content">
                <div className="service-features">
                  <h3>{service.id === 'deliveries' ? 'What We Offer' : service.id === 'moving' ? 'Our Moving Services' : service.id === 'staging' ? 'Staging Services' : 'Junk Removal Services'}</h3>
                  <div className="features-grid">
                    {service.features.map((feature, index) => {
                      const iconMap = {
                        'deliveries': ['fas fa-clock', 'fas fa-box', 'fas fa-shield-alt', 'fas fa-map-marker-alt', 'fas fa-calendar-alt', 'fas fa-route'],
                        'moving': ['fas fa-home', 'fas fa-building', 'fas fa-boxes', 'fas fa-tools', 'fas fa-warehouse', 'fas fa-road'],
                        'junk-removal': ['fas fa-house-user', 'fas fa-briefcase', 'fas fa-hammer', 'fas fa-leaf', 'fas fa-hand-holding-heart', 'fas fa-recycle'],
                        'staging': ['fas fa-couch', 'fas fa-chair', 'fas fa-loveseat', 'fas fa-comments', 'fas fa-broom', 'fas fa-bolt']
                      };
                      return (
                      <div key={index} className="feature-item">
                        <i className={(iconMap[service.id] || [])[index] || 'fas fa-check'}></i>
                        <h4>{feature.title}</h4>
                        <p>{feature.description}</p>
                      </div>
                      );
                    })}
                  </div>
                </div>
                
                <div className="service-pricing">
                  <h3>Pricing</h3>
                  <div className="pricing-info">
                    <p><strong>{pricingDetails.startingText}</strong></p>
                    {pricingDetails.additionalCharges && (
                      <>
                        <p>Additional charges may apply for:</p>
                        <ul>
                          {pricingDetails.additionalCharges.map((charge, index) => (
                            <li key={index}>{charge}</li>
                          ))}
                        </ul>
                      </>
                    )}
                    {pricingDetails.included && (
                      <>
                        <p>Included in our service:</p>
                        <ul>
                          {pricingDetails.included.map((item, index) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      </>
                    )}
                    {pricingDetails.basedOn && (
                      <>
                        <p>Pricing based on:</p>
                        <ul>
                          {pricingDetails.basedOn.map((item, index) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}
      
      <WhyChooseUs />
    </div>
  );
};

export default ServicesPage; 