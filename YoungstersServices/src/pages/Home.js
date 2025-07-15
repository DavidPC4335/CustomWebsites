import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import CTABanner from '../components/CTABanner';

const Home = () => {
  return (
    <div className="home-page">
      <Hero />
      <CTABanner />
      <Services />
    </div>
  );
};

export default Home; 