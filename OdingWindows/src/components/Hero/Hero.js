import React from 'react';
import { Link } from 'react-router-dom';
import { FaPhone, FaStar, FaCheckCircle } from 'react-icons/fa';
import { 
  HeroContainer, 
  HeroContent, 
  HeroTitle, 
  HeroSubtitle, 
  HeroDescription,
  CTAButtons,
  PrimaryButton,
  SecondaryButton,
  FeaturesList,
  FeatureItem
} from './Hero.styles';

const Hero = () => {
  const features = [
    'Licensed & Insured',
    '100% Satisfaction Guarantee',
    'Eco-Friendly Products',
    'Same Day Service Available'
  ];

  return (
    <HeroContainer>
      <div className="container">
        <HeroContent>
          <HeroTitle>
            Crystal Clear Windows,
            <span> Professional Results</span>
          </HeroTitle>
          
          <HeroSubtitle>
            Transform your view with Oding Windows - the premier window cleaning service 
            trusted by homeowners and businesses across Guelph and the tri-cities.
          </HeroSubtitle>
          
          <HeroDescription>
            Our experienced team uses advanced techniques and eco-friendly products 
            to deliver spotless, streak-free windows that let the light shine through.
          </HeroDescription>

          <FeaturesList>
            {features.map((feature, index) => (
              <FeatureItem key={index}>
                <FaCheckCircle />
                <span>{feature}</span>
              </FeatureItem>
            ))}
          </FeaturesList>

          <CTAButtons>
            <PrimaryButton to="/book-now">
              <FaPhone />
              Get Free Quote
            </PrimaryButton>
            <SecondaryButton to="/contact">
              Learn More
            </SecondaryButton>
          </CTAButtons>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '2rem' }}>
            <div style={{ display: 'flex', gap: '0.25rem' }}>
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} style={{ color: '#FFD700', fontSize: '1.2rem' }} />
              ))}
            </div>
            <span style={{ color: '#ccc', fontSize: '0.9rem' }}>
              Rated 5.0 stars by satisfied customers
            </span>
          </div>
        </HeroContent>
      </div>
    </HeroContainer>
  );
};

export default Hero; 