import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Alex Durington',
      rating: 5,
      text: 'Had a great experience with these guys. Very helpful, and super efficient! Would highly recommend the Youngsters crew!',
      service: 'Moving Services'
    },
    {
      name: 'Luc Levesque',
      rating: 5,
      text: 'Had a great experience with these guys. Very helpful, and super efficient! Would highly recommend the Youngsters crew!',
      service: 'Delivery Services'
    },
    {
      name: 'Maja Zylkowski',
      rating: 5,
      text: 'Excellent service—fast, reliable, and professional. Highly recommended!!!',
      service: 'Junk Removal'
    },
    {
      name: 'Joe Bruggeman',
      rating: 5,
      text: 'Thanks for delivering my treadmill! Very professional service and accommodated my needs to get it where it needed to be.',
      service: 'Delivery Services'
    },  
      {
      name: 'M Z',
      rating: 5,
      text: 'Excellent service, very nice and helpful, very responsible what they do, I will recommend in a future just  YOUNGSTERS services and thank you',
      service: 'Junk Removal'
    },
    {
      name: 'Calum MacKenzie',
      rating: 5,
      text: 'Great guys, worked professionally and quickly, highly recommend! Thank you for your help!',
      service: 'Delivery Services'
    }

  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <i key={i} className={`fas fa-star ${i < rating ? '' : 'text-light'}`}></i>
    ));
  };

  return (
    <section id="testimonials" className="testimonials" >
      <div className="container">
        <h2 className="section-title">What Our Customers Say</h2>
        <p className="section-subtitle">
          Don't just take our word for it - hear from our satisfied customers
        </p>
        
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 