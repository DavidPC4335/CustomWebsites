import React from 'react';
import styled from 'styled-components';
import Hero from '../../components/Hero/Hero';
import ServicesSection from '../../components/Services/ServicesSection';
import TestimonialsSection from '../../components/Testimonials/TestimonialsSection';
import SocialMediaSection from '../../components/SocialMedia/SocialMediaSection';
import VideosSection from '../../components/Videos/VideosSection';

const HomeContainer = styled.div`
  padding-top: 80px; /* Account for fixed header */
`;

const Home = () => {
  return (
    <HomeContainer>
      <Hero />
      <SocialMediaSection />
      <VideosSection />
      <ServicesSection />
      <TestimonialsSection />
    </HomeContainer>
  );
};

export default Home; 