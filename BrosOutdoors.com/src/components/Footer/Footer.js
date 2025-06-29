import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaYoutube, FaInstagram, FaTiktok, FaFacebook } from 'react-icons/fa';
import logo from '../../assets/logo.png';
const FooterContainer = styled.footer`
  background: ${props => props.theme.colors.dark};
  color: white;
  padding: 3rem 0 1rem;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
  margin-bottom: 2rem;
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const FooterSection = styled.div`
  h4 {
    color: ${props => props.theme.colors.primary};
    margin-bottom: 1rem;
    font-size: 1.125rem;
    font-weight: 600;
  }
`;

const FooterLogo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  
  img {
    height: 40px;
    width: auto;
    margin-right: 0.5rem;
  }
  
  span {
    font-size: 1.25rem;
    font-weight: 700;
    color: ${props => props.theme.colors.primary};
  }
`;

const FooterDescription = styled.p`
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const FooterLinks = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  
  li {
    margin-bottom: 0.75rem;
    
    a {
      color: rgba(255, 255, 255, 0.8);
      text-decoration: none;
      transition: color 0.3s ease;
      
      &:hover {
        color: ${props => props.theme.colors.primary};
      }
    }
  }
`;

const SocialMediaLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const SocialLink = styled.a`
  width: 40px;
  height: 40px;
  background: ${props => props.theme.colors.primary};
  border-radius: ${props => props.theme.borderRadius.round};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-decoration: none;
  font-size: 1.25rem;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${props => props.theme.colors.limeGreen};
    transform: translateY(-2px);
  }
`;

const NewsletterForm = styled.form`
  display: flex;
  gap: 0.5rem;
  margin-top: 1rem;
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    flex-direction: column;
  }
`;

const NewsletterInput = styled.input`
  flex: 1;
  padding: 0.75rem;
  border: none;
  border-radius: ${props => props.theme.borderRadius.small};
  font-family: inherit;
  
  &:focus {
    outline: 2px solid ${props => props.theme.colors.primary};
  }
`;

const NewsletterButton = styled.button`
  padding: 0.75rem 1.5rem;
  background: ${props => props.theme.colors.primary};
  color: white;
  border: none;
  border-radius: ${props => props.theme.borderRadius.small};
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s ease;
  
  &:hover {
    background: ${props => props.theme.colors.deepBlue};
  }
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    width: 100%;
  }
`;

const FooterBottom = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    flex-direction: column;
    text-align: center;
  }
`;

const Copyright = styled.p`
  color: rgba(255, 255, 255, 0.6);
  margin: 0;
  font-size: 0.875rem;
`;

const FooterBottomLinks = styled.div`
  display: flex;
  gap: 2rem;
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    gap: 1rem;
  }
  
  a {
    color: rgba(255, 255, 255, 0.6);
    text-decoration: none;
    font-size: 0.875rem;
    transition: color 0.3s ease;
    
    &:hover {
      color: ${props => props.theme.colors.primary};
    }
  }
`;

const socialMediaLinks = [
  { icon: <FaYoutube />, url: 'https://youtube.com/@brosoutdoorsofficial', label: 'YouTube' },
  { icon: <FaInstagram />, url: 'https://instagram.com/brosoutdoorsofficial', label: 'Instagram' },
  { icon: <FaTiktok />, url: 'https://tiktok.com/@brosoutdoorsofficial', label: 'TikTok' },
  { icon: <FaFacebook />, url: 'https://www.facebook.com/people/Bros-Outdoors/61569401403045/', label: 'Facebook' },
  // { icon: <FaTwitter />, url: 'https://twitter.com/brosoutdoors', label: 'Twitter' },
];

const Footer = () => {
  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would handle newsletter signup here
    alert('Thank you for subscribing to our newsletter!');
  };

  return (
    <FooterContainer>
      <Container>
        <FooterContent>
          <FooterSection>
            <FooterLogo>
              <img src={logo} alt="Bros Outdoors Logo" />
              <span>Bros Outdoors</span>
            </FooterLogo>
            <FooterDescription>
              Your ultimate destination for outdoor adventures, gear reviews, and 
              community-driven content. Join us as we explore the great outdoors 
              and share our passion for nature.
            </FooterDescription>
         
          </FooterSection>

          <FooterSection>
            <h4>Quick Links</h4>
            <FooterLinks>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><a href="">Testimonials</a></li>
            </FooterLinks>
          </FooterSection>

          <FooterSection>
            <h4>Content</h4>
            <FooterLinks>
              <li><a href="https://youtube.com/@brosoutdoorsofficial" target="_blank" rel="noopener noreferrer">Latest Videos</a></li>
              <li><a href="https://youtube.com/@brosoutdoorsofficial" target="_blank" rel="noopener noreferrer">Gear Reviews</a></li>
              <li><a href="https://youtube.com/@brosoutdoorsofficial" target="_blank" rel="noopener noreferrer">Trail Guides</a></li>
              <li><a href="https://youtube.com/@brosoutdoorsofficial" target="_blank" rel="noopener noreferrer">Outdoor Tips</a></li>
              <li><a href="https://youtube.com/@brosoutdoorsofficial" target="_blank" rel="noopener noreferrer">Adventure Stories</a></li>
            </FooterLinks>
          </FooterSection>

          <FooterSection>
            <h4>Stay Connected</h4>
            <p style={{ color: 'rgba(255, 255, 255, 0.8)', marginBottom: '1rem' }}>
              Subscribe to our channels for the latest outdoor adventures and gear updates.
            </p>
            <SocialMediaLinks>
              {socialMediaLinks.map((social, index) => (
                <SocialLink 
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                >
                  {social.icon}
                </SocialLink>
              ))}
            </SocialMediaLinks>
          </FooterSection>
        </FooterContent>

        <FooterBottom>
          <Copyright>
            © {new Date().getFullYear()} Bros Outdoors. All rights reserved.
          </Copyright>
        </FooterBottom>
      </Container>
    </FooterContainer>
  );
};

export default Footer; 