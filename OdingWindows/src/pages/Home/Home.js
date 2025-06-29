import React from 'react';
import Hero from '../../components/Hero/Hero';
import ServiceHighlights from '../../components/ServiceHighlights/ServiceHighlights';
import AboutPreview from '../../components/AboutPreview/AboutPreview';
import TestimonialsPreview from '../../components/TestimonialsPreview/TestimonialsPreview';
import CallToAction from '../../components/CallToAction/CallToAction';

const Home = () => {
  return (
    <>
      <Hero />
      <ServiceHighlights />
      <AboutPreview />
      <TestimonialsPreview />
      <CallToAction />
    </>
  );
};

export default Home; 