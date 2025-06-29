import React from 'react';
import { Link } from 'react-router-dom';
import { FaCheckCircle, FaArrowRight } from 'react-icons/fa';
import { 
  AboutPreviewContainer,
  AboutContent,
  AboutText,
  AboutTitle,
  AboutDescription,
  FeaturesList,
  FeatureItem,
  LearnMoreButton,
  AboutImage
} from './AboutPreview.styles';

const AboutPreview = () => {
  const features = [
    'Reliable and Fast',
    'Trained & Friendly Professionals',
    'Eco-Friendly Cleaning Solutions',
    '100% Satisfaction Guarantee'
  ];

  return (
    <AboutPreviewContainer className="section">
      <div className="container">
        <AboutContent>
          <AboutText>
            <AboutTitle>
              Why Choose Oding Windows?
            </AboutTitle>
            <AboutDescription>
              With our experience in professional window cleaning, we've built 
              our reputation on quality, reliability, and exceptional customer service. Our 
              team of trained professionals uses the latest techniques and eco-friendly 
              products to ensure your windows are crystal clear.
            </AboutDescription>
            
            <FeaturesList>
              {features.map((feature, index) => (
                <FeatureItem key={index}>
                  <FaCheckCircle />
                  <span>{feature}</span>
                </FeatureItem>
              ))}
            </FeaturesList>

            <LearnMoreButton to="/about">
              Learn More About Us
              <FaArrowRight />
            </LearnMoreButton>
          </AboutText>

          <AboutImage>
            <img 
              src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
              alt="Professional window cleaner at work"
            />
          </AboutImage>
        </AboutContent>
      </div>
    </AboutPreviewContainer>
  );
};

export default AboutPreview; 