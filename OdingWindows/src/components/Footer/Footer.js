import React from 'react';
import { Link } from 'react-router-dom';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { 
  FooterContainer,
  FooterContent,
  FooterSection,
  FooterTitle,
  ContactInfo,
  ContactItem,
  SocialLinks,
  SocialLink,
  FooterLinks,
  FooterLink,
  FooterBottom,
  Copyright
} from './Footer.styles';

const Footer = () => {
  const quickLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/services', label: 'Services' },
    { path: '/pricing', label: 'Pricing' }
  ];

  const services = [
    'Residential Cleaning',
    'Commercial Cleaning',
    'Deep Cleaning',
    'Maintenance Programs',
    'Emergency Service',
    'Screen Cleaning'
  ];

  return (
    <FooterContainer>
      <div className="container">
        <FooterContent>
          <FooterSection>
            <FooterTitle>Oding Windows</FooterTitle>
            <p style={{ color: 'rgba(255, 255, 255, 0.8)', marginBottom: '1.5rem' }}>
              Professional window cleaning services that will deliver a great experience. 
              We make your windows crystal clear.
            </p>
            <SocialLinks>
              <SocialLink href="#" aria-label="Facebook">
                <FaFacebook />
              </SocialLink>
              <SocialLink href="#" aria-label="Twitter">
                <FaTwitter />
              </SocialLink>
              <SocialLink href="#" aria-label="Instagram">
                <FaInstagram />
              </SocialLink>
              <SocialLink href="#" aria-label="LinkedIn">
                <FaLinkedin />
              </SocialLink>
            </SocialLinks>
          </FooterSection>

          <FooterSection>
            <FooterTitle>Quick Links</FooterTitle>
            <FooterLinks>
              {quickLinks.map((link) => (
                <FooterLink key={link.path} to={link.path}>
                  {link.label}
                </FooterLink>
              ))}
              <FooterLink to="/testimonials">Testimonials</FooterLink>
              <FooterLink to="/contact">Contact</FooterLink>
              <FooterLink to="/book-now">Book Now</FooterLink>
            </FooterLinks>
          </FooterSection>

          <FooterSection>
            <FooterTitle>Our Services</FooterTitle>
            <FooterLinks>
              {services.map((service, index) => (
                <div key={index} style={{ color: 'rgba(255, 255, 255, 0.7)', marginBottom: '0.5rem' }}>
                  {service}
                </div>
              ))}
            </FooterLinks>
          </FooterSection>

          <FooterSection>
            <FooterTitle>Contact Info</FooterTitle>
            <ContactInfo>
              <ContactItem>
                <FaPhone />
                <a href="tel:+12263373867">+1 (226) 337-3867</a>
              </ContactItem>
              <ContactItem>
                <FaEnvelope />
                <a href="mailto:info@odingwindows.com">info@odingwindows.com</a>
              </ContactItem>
              {/* <ContactItem>
                <FaMapMarkerAlt />
                <span>123 Main St, Your City, ST 12345</span>
              </ContactItem> */}
              <ContactItem>
                <FaClock />
                <span>Mon-Fri: 8AM-6PM<br />Sat: 9AM-4PM</span>
              </ContactItem>
            </ContactInfo>
          </FooterSection>
        </FooterContent>

        <FooterBottom>
          <Copyright>
            © 2023 Oding Windows. All rights reserved. | Licensed & Insured
          </Copyright>
        </FooterBottom>
      </div>
    </FooterContainer>
  );
};

export default Footer; 