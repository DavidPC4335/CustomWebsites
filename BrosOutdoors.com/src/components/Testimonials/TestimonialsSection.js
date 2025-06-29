import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const TestimonialsContainer = styled.section`
  padding: 5rem 0;
  background: ${props => props.theme.colors.white};
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
  
  h2 {
    color: ${props => props.theme.colors.deepBlue};
    margin-bottom: 1rem;
  }
  
  p {
    font-size: 1.125rem;
    max-width: 600px;
    margin: 0 auto;
  }
`;

const CarouselContainer = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: ${props => props.theme.borderRadius.large};
`;

const CarouselTrack = styled.div`
  display: flex;
  transition: transform 0.5s ease;
  transform: translateX(-${props => props.currentIndex * 100}%);
`;

const TestimonialCard = styled.div`
  min-width: 100%;
  padding: 3rem 2rem;
  text-align: center;
  background: ${props => props.theme.colors.lightGray};
  
  .quote {
    font-size: 1.25rem;
    line-height: 1.6;
    margin-bottom: 2rem;
    color: ${props => props.theme.colors.text};
    font-style: italic;
    position: relative;
    
    &::before {

      font-size: 3rem;
      color: ${props => props.theme.colors.primary};
      position: absolute;
      left: -1rem;
      top: -0.5rem;
    }
    
    &::after {
      font-size: 3rem;
      color: ${props => props.theme.colors.primary};
      position: absolute;
      right: -1rem;
      bottom: -1.5rem;
    }
  }
  
  .author {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    
    .name {
      font-weight: 600;
      color: ${props => props.theme.colors.deepBlue};
      font-size: 1.125rem;
    }
    
    .title {
      color: ${props => props.theme.colors.textLight};
      font-size: 0.875rem;
    }
  }
  
  .rating {
    margin-bottom: 1.5rem;
    display: flex;
    justify-content: center;
    gap: 0.25rem;
    
    .star {
      color: ${props => props.theme.colors.limeGreen};
      font-size: 1.25rem;
    }
  }
`;

const CarouselControls = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
`;

const CarouselButton = styled.button`
  width: 50px;
  height: 50px;
  border-radius: ${props => props.theme.borderRadius.round};
  background: ${props => props.theme.colors.primary};
  color: white;
  border: none;
  cursor: pointer;
  font-size: 1.25rem;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${props => props.theme.colors.deepBlue};
    transform: scale(1.1);
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }
`;

const DotsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1rem;
`;

const Dot = styled.button`
  width: 12px;
  height: 12px;
  border-radius: ${props => props.theme.borderRadius.round};
  border: none;
  background: ${props => props.active ? props.theme.colors.primary : props.theme.colors.lightGray};
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${props => props.theme.colors.primary};
  }
`;

const testimonials = [
  {
    quote: "Did you guys cuddle?, you promised you would last video",
    author: "@evanlew818",
    title: "Subscriber to Bros Outdoors",
    rating: 5
  },
  {
    quote: "The Things I would do for a friendship like this bro",
    author: "@gustav.explores",
    title: "Lonley Tiktok Follower",
    rating: 5
  },
  {
    quote: "Fire intro 🔥🗣",
    author: "@pareeshmadan5725",
    title: "Subscriber to Bros Outdoors",
    rating: 5
  },
  {
    quote: "Thats a skink, you doofus",
    author: "@maestros_h",
    title: "Misinformed Instagram Follower",
    rating: 5
  },
  {
    quote: "These are fire post more",
    author: "@iamnotdull3n",
    title: "Instagram Follower",
    rating: 5
  }
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex(prev => prev === 0 ? testimonials.length - 1 : prev - 1);
  };

  const goToNext = () => {
    setCurrentIndex(prev => (prev + 1) % testimonials.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <TestimonialsContainer>
      <Container>
        <SectionHeader>
          <h2>What Our Community Says</h2>
          <p>
            Hear from our amazing community of outdoor enthusiasts who trust 
            Bros Outdoors for their adventure inspiration and guidance.
          </p>
        </SectionHeader>
        
        <CarouselContainer>
          <CarouselTrack currentIndex={currentIndex}>
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index}>
                <div className="rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="star">★</span>
                  ))}
                </div>
                <div className="quote">" {testimonial.quote} "</div>
                <div className="author">
                  <div className="name">{testimonial.author}</div>
                  <div className="title">{testimonial.title}</div>
                </div>
              </TestimonialCard>
            ))}
          </CarouselTrack>
        </CarouselContainer>
        
        <CarouselControls>
          <CarouselButton onClick={goToPrevious}>‹</CarouselButton>
          <CarouselButton onClick={goToNext}>›</CarouselButton>
        </CarouselControls>
        
        <DotsContainer>
          {testimonials.map((_, index) => (
            <Dot 
              key={index} 
              active={index === currentIndex}
              onClick={() => goToSlide(index)}
            />
          ))}
        </DotsContainer>
      </Container>
    </TestimonialsContainer>
  );
};

export default TestimonialsSection; 