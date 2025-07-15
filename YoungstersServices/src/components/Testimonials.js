import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      rating: 5,
      text: 'Youngsters Services made my move so much easier! The team was professional, punctual, and handled all my belongings with care. Highly recommend their moving services!',
      service: 'Moving Services'
    },
    {
      name: 'Mike Chen',
      rating: 5,
      text: 'Fast and reliable delivery service! They delivered my packages on time and kept me updated throughout the process. Will definitely use them again.',
      service: 'Delivery Services'
    },
    {
      name: 'Lisa Rodriguez',
      rating: 5,
      text: 'Great junk removal service! They cleared out my garage quickly and disposed of everything responsibly. The pricing was transparent and fair.',
      service: 'Junk Removal'
    },
    {
      name: 'David Smith',
      rating: 5,
      text: 'Professional team and excellent customer service. They went above and beyond to ensure I was satisfied with their work. Five stars!',
      service: 'Moving Services'
    },
    {
      name: 'Emily Brown',
      rating: 5,
      text: 'Same-day service when I needed it most! Their delivery team was efficient and careful with my fragile items. Couldn\'t be happier!',
      service: 'Delivery Services'
    },
    {
      name: 'Tom Wilson',
      rating: 5,
      text: 'Helped me declutter my entire house. The team was respectful, efficient, and made the whole process stress-free. Excellent value for money!',
      service: 'Junk Removal'
    }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <i key={i} className={`fas fa-star ${i < rating ? '' : 'text-light'}`}></i>
    ));
  };

  return (
    <section id="testimonials" className="testimonials">
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