import React from 'react';
import styled from 'styled-components';
import Button from '../UI/Button';
import hero from '../../assets/hero.jpeg';
const HeroContainer = styled.section`
  height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
              url(${hero}) center/cover;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  position: relative;
`;

const HeroContent = styled.div`
  max-width: 800px;
  padding: 0 2rem;
  
  h1 {
    font-size: 3.5rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    
    @media (max-width: ${props => props.theme.breakpoints.mobile}) {
      font-size: 2.5rem;
    }
  }
  
  p {
    font-size: 1.25rem;
    margin-bottom: 2rem;
    color: rgba(255, 255, 255, 0.9);
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
    
    @media (max-width: ${props => props.theme.breakpoints.mobile}) {
      font-size: 1.125rem;
    }
  }
`;

const CTASection = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 2rem;
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    flex-direction: column;
    align-items: center;
  }
`;

const ScrollIndicator = styled.div`
  position: absolute;
  bottom: 6rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  animation: bounce 2s infinite;
  
  span {
    font-size: 0.875rem;
    margin-bottom: 0.5rem;
  }
  
  &::after {
    content: '';
    width: 2px;
    height: 30px;
    background: white;
    border-radius: 1px;
  }
  
  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateX(-50%) translateY(0);
    }
    40% {
      transform: translateX(-50%) translateY(-10px);
    }
    60% {
      transform: translateX(-50%) translateY(-5px);
    }
  }
`;

const Hero = () => {
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <HeroContainer>
      <HeroContent>
        <h1>Adventure Awaits with <span style={{color: '#4ca694',textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'}}>Bros Outdoors</span></h1>
        <p>
          Join us on epic outdoor adventures! Follow our social media channels for the latest 
          gear reviews, adventure tips, and breathtaking outdoor content that will inspire 
          your next expedition.
        </p>
        <CTASection>
          <Button 
            as="a" 
            href="/contact" 
            size="large"
            onClick={(e) => {
              
            }}
          >
            Contact Us
          </Button>
          <Button 
            variant="outline" 
            size="large"
            onClick={scrollToContent}
          >
            Explore Our Content
          </Button>
        </CTASection>
      </HeroContent>
      
      {/* <ScrollIndicator onClick={scrollToContent}>
        <span>Scroll Down</span>
      </ScrollIndicator> */}
    </HeroContainer>
  );
};

export default Hero; 