import React from 'react';
import Testimonials from '../components/Testimonials';

const TestimonialsPage = () => {
  const additionalTestimonials = [
    {
      name: 'Jennifer Martinez',
      rating: 5,
      text: 'Outstanding service from start to finish! The team was professional, careful with our belongings, and completed the move faster than expected. Highly recommend!',
      service: 'Moving Services',
      date: 'March 2024'
    },
    {
      name: 'Robert Lee',
      rating: 5,
      text: 'Great experience with their delivery service. They handled my fragile artwork with extreme care and delivered it safely. Will use them again!',
      service: 'Delivery Services',
      date: 'February 2024'
    },
    {
      name: 'Amanda Davis',
      rating: 5,
      text: 'Perfect junk removal service! They cleared out my basement completely and even swept up afterward. Fair pricing and excellent customer service.',
      service: 'Junk Removal',
      date: 'January 2024'
    }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <i key={i} className={`fas fa-star ${i < rating ? '' : 'text-light'}`}></i>
    ));
  };

  return (
    <div className="testimonials-page">
      <section className="page-header">
        <div className="container">
          <h1 className="section-title">Customer Testimonials</h1>
          <p className="section-subtitle">
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
          <h2 className="section-title">More Customer Stories</h2>
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
            <div className="platform-item">
              <i className="fab fa-google"></i>
              <h4>Google Reviews</h4>
              <p>4.9/5 stars (800+ reviews)</p>
            </div>
            <div className="platform-item">
              <i className="fab fa-facebook"></i>
              <h4>Facebook</h4>
              <p>4.8/5 stars (250+ reviews)</p>
            </div>
            <div className="platform-item">
              <i className="fab fa-yelp"></i>
              <h4>Yelp</h4>
              <p>4.7/5 stars (150+ reviews)</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TestimonialsPage; 