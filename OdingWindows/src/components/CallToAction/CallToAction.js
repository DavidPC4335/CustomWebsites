import React from 'react';
import { Link } from 'react-router-dom';
import { FaPhone, FaEnvelope } from 'react-icons/fa';
import { 
  CTAContainer,
  CTAContent,
  CTATitle,
  CTASubtitle,
  CTAButtons,
  PrimaryButton,
  SecondaryButton
} from './CallToAction.styles';

const CallToAction = () => {
  return (
    <CTAContainer className="section">
      <div className="container">
        <CTAContent>
          <CTATitle>Ready for Crystal Clear Windows?</CTATitle>
          <CTASubtitle>
            Get your free quote today and see the difference professional window cleaning makes. 
            We're ready to transform your view!
          </CTASubtitle>
          
          <CTAButtons>
            <PrimaryButton to="/book-now">
              <FaPhone />
              Book Your Service
            </PrimaryButton>
            <SecondaryButton to="/contact">
              <FaEnvelope />
              Get Free Quote
            </SecondaryButton>
          </CTAButtons>
        </CTAContent>
      </div>
    </CTAContainer>
  );
};

export default CallToAction; 