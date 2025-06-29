import React, { useState } from 'react';
import styled from 'styled-components';
import { useForm, ValidationError } from '@formspree/react';
import Button from '../../components/UI/Button';
import contactus from '../../assets/contactus.jpeg';
const ContactContainer = styled.div`
  padding-top: 80px; /* Account for fixed header */
`;

const HeroSection = styled.section`
  padding: 8rem 0;
  background: linear-gradient(135deg, ${props => props.theme.colors.primary} 0%, ${props => props.theme.colors.deepBlue} 100%);
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${contactus});
  background-size: cover;
  background-position: center;
  color: white;
  text-align: center;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const ContactContent = styled.section`
  padding: 5rem 0;
  background: ${props => props.theme.colors.lightGray};
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const ContactForm = styled.form`
  background: ${props => props.theme.colors.white};
  padding: 2.5rem;
  border-radius: ${props => props.theme.borderRadius.large};
  box-shadow: ${props => props.theme.shadows.medium};
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: ${props => props.theme.colors.deepBlue};
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 2px solid ${props => props.theme.colors.lightGray};
  border-radius: ${props => props.theme.borderRadius.small};
  font-family: inherit;
  font-size: 1rem;
  transition: border-color 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  border: 2px solid ${props => props.theme.colors.lightGray};
  border-radius: ${props => props.theme.borderRadius.small};
  font-family: inherit;
  font-size: 1rem;
  min-height: 120px;
  resize: vertical;
  transition: border-color 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
  }
`;

// Custom styling for Formspree ValidationError components
const StyledFormGroup = styled.div`
  margin-bottom: 1.5rem;
  
  .validation-error {
    color: #e74c3c;
    font-size: 0.875rem;
    margin-top: 0.25rem;
    display: block;
  }
`;

const ContactInfo = styled.div`
  h3 {
    color: ${props => props.theme.colors.deepBlue};
    margin-bottom: 2rem;
  }
`;

const InfoCard = styled.div`
  background: ${props => props.theme.colors.white};
  padding: 2rem;
  border-radius: ${props => props.theme.borderRadius.large};
  box-shadow: ${props => props.theme.shadows.light};
  margin-bottom: 2rem;
  
  .info-icon {
    width: 50px;
    height: 50px;
    background: ${props => props.theme.colors.primary};
    border-radius: ${props => props.theme.borderRadius.round};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;
    color: white;
    font-size: 1.5rem;
  }
  
  .info-title {
    font-size: 1.125rem;
    font-weight: 600;
    color: ${props => props.theme.colors.deepBlue};
    margin-bottom: 0.5rem;
  }
  
  .info-content {
    color: ${props => props.theme.colors.textLight};
    line-height: 1.6;
  }
`;

const MapSection = styled.section`
  padding: 5rem 0;
  background: ${props => props.theme.colors.white};
`;

const MapContainer = styled.div`
  background: ${props => props.theme.colors.lightGray};
  height: 400px;
  border-radius: ${props => props.theme.borderRadius.large};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.colors.textLight};
  font-size: 1.125rem;
  margin-top: 2rem;
`;

const contactInfo = [
  {
    icon: '📧',
    title: 'Email',
    content: 'hello@brosoutdoors.com\nFor business inquiries: business@brosoutdoors.com'
  },
  {
    icon: '📱',
    title: 'Phone',
    content: '+1 (519) 841-4335'
  },
  {
    icon: '💬',
    title: 'DM us on Any Social Media!',
    content: '@BrosOutdoorsOfficial'
  },
  // {
  //   icon: '🕒',
  //   title: 'Business Hours',
  //   content: 'Monday - Friday: 9:00 AM - 6:00 PM PST\nWeekends: 10:00 AM - 4:00 PM PST\nResponse time: 24-48 hours'
  // },
  // {
  //   icon: '📍',
  //   title: 'Location',
  //   content: 'Pacific Northwest, USA\nWe work remotely and on location for outdoor adventures'
  // }
];

const Contact = () => {
  const [state, handleSubmit] = useForm("mjkrvvyl"); // Using the form ID from the template
  
  if (state.succeeded) {
    return (
      <ContactContainer id="contact">
        <HeroSection>
          <Container>
            <h1>Thank You!</h1>
            <p style={{ color: 'white' }}>
              Your message has been sent successfully. We'll get back to you as soon as possible.
            </p>
          </Container>
        </HeroSection>
      </ContactContainer>
    );
  }

  return (
    <ContactContainer id="contact">
      <HeroSection>
        <Container>
          <h1>Get In Touch</h1>
          <p style={{color: 'white'}}>
            Ready to start your outdoor adventure? Have questions about our content or 
            want to collaborate? We'd love to hear from you!
          </p>
        </Container>
      </HeroSection>

      <ContactContent>
        <Container>
          <ContactGrid>
            <div>
              <h2>Send us a Message</h2>
              <p style={{ marginBottom: '2rem', color: '#666' }}>
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
              
              <ContactForm onSubmit={handleSubmit}>
                <StyledFormGroup>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    required
                  />
                  <ValidationError 
                    prefix="Name" 
                    field="name"
                    errors={state.errors}
                    className="validation-error"
                  />
                </StyledFormGroup>

                <StyledFormGroup>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    required
                  />
                  <ValidationError 
                    prefix="Email" 
                    field="email"
                    errors={state.errors}
                    className="validation-error"
                  />
                </StyledFormGroup>

                <StyledFormGroup>
                  <Label htmlFor="subject">Subject *</Label>
                  <Input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                  />
                  <ValidationError 
                    prefix="Subject" 
                    field="subject"
                    errors={state.errors}
                    className="validation-error"
                  />
                </StyledFormGroup>

                <StyledFormGroup>
                  <Label htmlFor="message">Message *</Label>
                  <TextArea
                    id="message"
                    name="message"
                    placeholder="Tell us about your project, question, or how we can help you..."
                    required
                  />
                  <ValidationError 
                    prefix="Message" 
                    field="message"
                    errors={state.errors}
                    className="validation-error"
                  />
                </StyledFormGroup>

                <Button type="submit" fullWidth size="large" disabled={state.submitting}>
                  {state.submitting ? 'Sending...' : 'Send Message'}
                </Button>
              </ContactForm>
            </div>

            <ContactInfo>
            <h2>Our Contact Information</h2>
              <p style={{ marginBottom: '2rem', color: '#666' }}>
                Feel free to reach out to us via email or phone.
              </p>
              {contactInfo.map((info, index) => (
                <InfoCard key={index}>
                  <div className="info-icon">{info.icon}</div>
                  <div className="info-title">{info.title}</div>
                  <div className="info-content">
                    {info.content.split('\n').map((line, i) => (
                      <div key={i}>{line}</div>
                    ))}
                  </div>
                </InfoCard>
              ))}
            </ContactInfo>
          </ContactGrid>
        </Container>
      </ContactContent>

      <MapSection>
        <Container>
          <h2 style={{ textAlign: 'center', marginBottom: '1rem' }}>Our Coverage Area</h2>
          <p style={{ textAlign: 'center', color: '#666', marginBottom: '2rem' }}>
            While we're based in Southern Ontario, we create content and cover adventures across North America.
          </p>
          <MapContainer>
            <div>
              🗺️ Interactive Map Coming Soon<br />
              <small>We're working on an interactive map to show our adventure locations!</small>
            </div>
          </MapContainer>
        </Container>
      </MapSection>
    </ContactContainer>
  );
};

export default Contact; 