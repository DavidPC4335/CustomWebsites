import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      icon: 'fas fa-truck',
      title: 'Delivery Services',
      description: 'Fast and reliable delivery services for all your needs. From same-day delivery to scheduled pickups, we handle it all with care and efficiency.',
      link: '/services',
      id: 'deliveries'
    },
    {
      icon: 'fas fa-box',
      title: 'Moving Services',
      description: 'Professional moving services for residential and commercial needs. Our experienced team ensures your belongings are handled safely and securely.',
      link: '/services',
      id: 'moving'
    },
    {
      icon: 'fas fa-trash',
      title: 'Junk Removal',
      description: 'Efficient junk removal and disposal services. We help you declutter your space responsibly with eco-friendly disposal methods.',
      link: '/services',
      id: 'junk-removal'
    }
  ];

  return (
    <section id="services" className="services">
      <div className="container" >
        <h2 className="section-title">Our Services</h2>
        <p className="section-subtitle">
          We provide comprehensive solutions for all your moving, delivery, and junk removal needs
        </p>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">
                <i className={service.icon}></i>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <Link to={`/services#${service.id}`} className="btn btn-outline">Learn More</Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 