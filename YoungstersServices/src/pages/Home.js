import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import CTABanner from '../components/CTABanner';
import WhyChooseUs from '../components/WhyChooseUs';

const Home = () => {
  return (
    <div className="home-page">
      <Hero />
      <CTABanner />
      <Services />
      <WhyChooseUs />
    </div>
  );
};

export default Home; 