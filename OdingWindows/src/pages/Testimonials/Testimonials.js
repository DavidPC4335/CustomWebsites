import React, { useState } from 'react';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';
import {
  TestimonialsContainer,
  BackgroundDecoration,
  ContentWrapper,
  HeroSection,
  HeroTitle,
  HeroSubtitle,
  FilterSection,
  FilterButton,
  TestimonialsSection,
  TestimonialsGrid,
  TestimonialCard,
  QuoteIcon,
  Stars,
  TestimonialText,
  CustomerInfo,
  CustomerAvatar,
  CustomerDetails,
  CustomerName,
  CustomerRole,
  CustomerLocation,
  StatsSection,
  StatItem,
  StatNumber,
  StatLabel,
  CTASection,
  CTATitle,
  CTAText,
  CTAButton
} from './Testimonials.styles';

const Testimonials = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const testimonials = [
    {
      id: 1,
      name: "David P.",
      role: "Client",
      location: "Guelph, ON",
      category: "residential",
      text: "Absolutely fantastic service! The team was professional, punctual, and my windows have never looked better. They even cleaned the window sills and frames without being asked. Highly recommend!",
      rating: 5,
      avatar: "DP"
    },
    {
      id: 2,
      name: "Calum M.",
      role: "Client",
      location: "Cambridge, ON", 
      category: "commercial",
      text: "Oding Windows has been cleaning our windows for a while now. Consistent quality and reliable service every time. They work around our business hours and never disrupt operations.",
      rating: 5,
      avatar: "CM"
    },
    {
      id: 3,
      name: "Mackenzie E.",
      role: "Client",
      location: "Kitchener, ON",
      category: "residential",
      text: "They handle all our residential properties. Professional and always deliver exceptional results. I've been using them for a while now and I'm very happy with the service.",
      rating: 5,
      avatar: "ME"
    },
    {
      id: 4,
      name: "Luc L.",
      role: "Client",
      location: "Waterloo, ON",
      category: "commercial",
      text: "The team was efficient, careful around our outdoor seating area, and the results speak for themselves. Our customers have commented on how clean everything looks.",
      rating: 5,
      avatar: "SJ"
    },
    {
      id: 5,
      name: "Andy O.",
      role: "Homeowner",
      location: "Guelph, ON",
      category: "residential",
      text: "I was skeptical about professional window cleaning, but wow! The difference is night and day. They cleaned both interior and exterior windows, and even removed hard water stains I thought were permanent.",
      rating: 5,
      avatar: "MC"
    },
    {
      id: 6,
      name: "",
      role: "Client",
      location: "Cambridge, ON",
      category: "commercial",
      text: "Reliable, professional, and thorough. They've been cleaning our corporate office windows monthly for over a year. Always on time, always excellent results. Couldn't ask for better service.",
      rating: 5,
      avatar: "LT"
    },
    {
      id: 7,
      name: "",
      role: "Homeowner",
      location: "Kitchener, ON",
      category: "residential",
      text: "After a home renovation, our windows were covered in construction dust and debris. Oding Windows made them look brand new again! They even cleaned the screens and tracks. Amazing attention to detail.",
      rating: 4,
      avatar: "RW"
    },
    {
      id: 8,
      name: "Rachel O.",
      role: "Client",
      location: "Waterloo, ON",
      category: "commercial",
      text: "Oding Windows keeps them crystal clear, which definitely helps with foot traffic. Professional service and competitive pricing.",
      rating: 5,
      avatar: "AF"
    },
    {
      id: 9,
      name: "",
      role: "Homeowner",
      location: "Guelph, ON",
      category: "residential",
      text: "We have a lot of windows in our house, and cleaning them was always a weekend nightmare. Now we have Oding Windows come quarterly, and it's the best investment we've made. Highly recommended!",
      rating: 5,
      avatar: "JR"
    }
  ];

  const stats = [
    // { number: "500+", label: "Happy Customers" },
    { number: "1,000+", label: "Windows Cleaned" },
    { number: "100%", label: "Satisfaction Rate" },
    { number: "4.6★", label: "Average Rating" }
  ];

  const filteredTestimonials = activeFilter === 'all' 
    ? testimonials 
    : testimonials.filter(testimonial => testimonial.category === activeFilter);

  return (
    <TestimonialsContainer>
      <BackgroundDecoration />
      <ContentWrapper>
        <HeroSection>
          <HeroTitle>Customer Testimonials</HeroTitle>
          <HeroSubtitle>
            Discover why our customers trust us with their window cleaning needs. 
            Real reviews from real customers across Guelph and the Tri-Cities.
          </HeroSubtitle>
        </HeroSection>

        <StatsSection>
          {stats.map((stat, index) => (
            <StatItem key={index}>
              <StatNumber>{stat.number}</StatNumber>
              <StatLabel>{stat.label}</StatLabel>
            </StatItem>
          ))}
        </StatsSection>

        <FilterSection>
          <FilterButton 
            $active={activeFilter === 'all'} 
            onClick={() => setActiveFilter('all')}
          >
            All Reviews
          </FilterButton>
          <FilterButton 
            $active={activeFilter === 'residential'} 
            onClick={() => setActiveFilter('residential')}
          >
            Residential
          </FilterButton>
          <FilterButton 
            $active={activeFilter === 'commercial'} 
            onClick={() => setActiveFilter('commercial')}
          >
            Commercial
          </FilterButton>
        </FilterSection>

        <TestimonialsSection>
          <TestimonialsGrid>
            {filteredTestimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id}>
                <QuoteIcon>
                  <FaQuoteLeft />
                </QuoteIcon>
                <Stars>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </Stars>
                <TestimonialText>"{testimonial.text}"</TestimonialText>
                <CustomerInfo>
                  <CustomerAvatar>{testimonial.avatar}</CustomerAvatar>
                  <CustomerDetails>
                    <CustomerName>{testimonial.name}</CustomerName>
                    <CustomerRole>{testimonial.role}</CustomerRole>
                    <CustomerLocation>{testimonial.location}</CustomerLocation>
                  </CustomerDetails>
                </CustomerInfo>
              </TestimonialCard>
            ))}
          </TestimonialsGrid>
        </TestimonialsSection>

        <CTASection>
          <CTATitle>Ready to Experience the Difference?</CTATitle>
          <CTAText>
            Join hundreds of satisfied customers and see why we're the trusted choice 
            for window cleaning in Guelph and the Tri-Cities.
          </CTAText>
          <CTAButton to="/book-now">
            Get Your Free Quote Today
          </CTAButton>
        </CTASection>
      </ContentWrapper>
    </TestimonialsContainer>
  );
};

export default Testimonials; 