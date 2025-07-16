import React from 'react';
import Testimonials from '../components/Testimonials';
import heroBg from '../assets/hero-bg.jpg';
import { links } from '../config';
const TestimonialsPage = () => {
  const additionalTestimonials = [
    {
      name: 'Phillip Chenier',
      rating: 5,
      text: 'My name is Phillip Chenier owner of JT appliance. I’ve been using youngsters services for the last six months to do my daily deliveries For my appliances, they are truly professional honest and straight to the point. I highly recommend Them for your daily removal, deliveries or other services that they provide',
      service: 'Corporate Client',
      date: 'June 2025'
    },
    // {
    //   name: 'Robert Lee',
    //   rating: 5,
    //   text: 'Great experience with their delivery service. They handled my fragile artwork with extreme care and delivered it safely. Will use them again!',
    //   service: 'Delivery Services',
    //   date: 'February 2024'
    // },
    // {
    //   name: 'Amanda Davis',
    //   rating: 5,
    //   text: 'Perfect junk removal service! They cleared out my basement completely and even swept up afterward. Fair pricing and excellent customer service.',
    //   service: 'Junk Removal',
    //   date: 'January 2024'
    // }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <i key={i} className={`fas fa-star ${i < rating ? '' : 'text-light'}`}></i>
    ));
  };

  return (
    <div className="testimonials-page">
        <section className="page-header"     style={{
          backgroundImage: `linear-gradient(135deg, rgba(13, 59, 102, 0.9), rgba(13, 59, 102, 0.7)), url(${heroBg})`
        }}>
        <div className="container">
          <h1 className="section-title" style={{color: 'white'}}>Customer Testimonials</h1>
          <p className="section-subtitle" style={{color: 'white'}}>
            Hear what our satisfied customers have to say about our services
          </p>
        </div>
      </section>

      <section className="testimonials-stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <h3>4.9/5</h3>
              <p>Average Rating</p>
            </div>
            <div className="stat-item">
              <h3>1,200+</h3>
              <p>Reviews</p>
            </div>
            <div className="stat-item">
              <h3>98%</h3>
              <p>Customer Satisfaction</p>
            </div>
            <div className="stat-item">
              <h3>95%</h3>
              <p>Repeat Customers</p>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />

      <section className="additional-testimonials">
        <div className="container">
          <h2 className="section-title">Corporate Clients</h2>
          <div className="testimonials-grid">
            {additionalTestimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="testimonial-rating">
                  {renderStars(testimonial.rating)}
                </div>
                <p className="testimonial-text">
                  "{testimonial.text}"
                </p>
                <div className="testimonial-author">
                  <strong>{testimonial.name}</strong>
                  <br />
                  <small className="text-accent">{testimonial.service}</small>
                  <br />
                  <small className="text-light">{testimonial.date}</small>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="review-platforms">
        <div className="container">
          <h2 className="section-title">Find Us On</h2>
          <div className="platforms-grid">
              <a href={links.google} target="_blank" rel="noopener noreferrer">
            <div className="platform-item">
                <i className="fab fa-google"></i>
              <h4>Google Reviews</h4>
              <p>4.9/5 stars (800+ reviews)</p>
            </div>
              </a>
            <a href={links.facebook} target="_blank" rel="noopener noreferrer">
            <div className="platform-item">
              
                <i className="fab fa-facebook"></i>
              
              <h4>Facebook</h4>
              <p>4.8/5 stars (250+ reviews)</p>
            </div></a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TestimonialsPage; 