import React from 'react';
import { Link } from 'react-router-dom';
import { FaStar, FaArrowRight } from 'react-icons/fa';
import { 
  TestimonialsPreviewContainer,
  SectionTitle,
  TestimonialsGrid,
  TestimonialCard,
  Stars,
  TestimonialText,
  CustomerInfo,
  CustomerName,
  CustomerRole,
  ViewAllButton
} from './TestimonialsPreview.styles';

const TestimonialsPreview = () => {
  const testimonials = [
    {
      name: "David P.",
      role: "Client",
      text: "Absolutely fantastic service! The team was professional, punctual, and my windows have never looked better. Highly recommend!",
      rating: 5
    },
    {
      name: "Calum M.",
      role: "Client",
      text: "Oding Windows has been cleaning our office building for 2 years. Consistent quality and reliable service every time.",
      rating: 5
    },
    {
      name: "Mackenzie E.",
      role: "Client",
      text: "They handle all our residential properties. Professional, insured, and always deliver exceptional results. I've been using them for a while now and I'm very happy with the service.",
      rating: 5
    }
  ];

  return (
    <TestimonialsPreviewContainer className="section">
      <div className="container">
        <SectionTitle>What Our Customers Say</SectionTitle>
        
        <TestimonialsGrid>
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index}>
              <Stars>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </Stars>
              <TestimonialText>"{testimonial.text}"</TestimonialText>
              <CustomerInfo>
                <CustomerName>{testimonial.name}</CustomerName>
                <CustomerRole>{testimonial.role}</CustomerRole>
              </CustomerInfo>
            </TestimonialCard>
          ))}
        </TestimonialsGrid>

        <ViewAllButton to="/testimonials">
          View All Testimonials
          <FaArrowRight />
        </ViewAllButton>
      </div>
    </TestimonialsPreviewContainer>
  );
};

export default TestimonialsPreview; 