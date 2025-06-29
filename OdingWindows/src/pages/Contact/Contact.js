import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import {
  ContactContainer,
  BackgroundDecoration,
  ContentWrapper,
  ContactHeader,
  ContactTitle,
  ContactSubtitle,
  ContactContent,
  ContactInfoSection,
  ContactCard,
  ContactItem,
  ContactIcon,
  ContactDetails,
  ContactItemTitle,
  ContactText,
  ContactFormSection,
  ContactForm,
  FormTitle,
  FormGroup,
  Label,
  Input,
  Select,
  TextArea,
  FormRow,
  SubmitButton,
  SuccessMessage,
  MapSection,
  MapPlaceholder
} from './Contact.styles';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [state, handleSubmit] = useForm("mrbkrrnb");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmitFormspree = (e) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    setIsSubmitted(true);
    handleSubmit(formData);
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 3000);
  };

  if (state?.succeeded) {
    return (
      <ContactContainer>
        <BackgroundDecoration />
        <ContentWrapper>
          <SuccessMessage>
            <h2>🎉 Message Sent Successfully!</h2>
            <p>Thank you for contacting us. We'll get back to you within 24 hours.</p>
          </SuccessMessage>
        </ContentWrapper>
      </ContactContainer>
    );
  }

  return (
    <ContactContainer>
      <BackgroundDecoration />
      <ContentWrapper>
        <ContactHeader>
          <ContactTitle>Get In Touch</ContactTitle>
          <ContactSubtitle>
            We're here to help with all your window cleaning needs. Reach out to us for a free quote or any questions you may have.
          </ContactSubtitle>
        </ContactHeader>

        <ContactContent>
          <ContactInfoSection>
            <ContactCard>
              <ContactItem>
                <ContactIcon>📞</ContactIcon>
                <ContactDetails>
                  <ContactItemTitle>Call Us Today</ContactItemTitle>
                  <ContactText><a href="tel:+12263373867">+1 (226) 337-3867</a></ContactText>
                  <ContactText>Available 7 days a week</ContactText>
                </ContactDetails>
              </ContactItem>

              <ContactItem>
                <ContactIcon>✉️</ContactIcon>
                <ContactDetails>
                  <ContactItemTitle>Email Us</ContactItemTitle>
                  <ContactText>info@windowcleaning.com</ContactText>
                  <ContactText>We respond within 24 hours</ContactText>
                </ContactDetails>
              </ContactItem>

              <ContactItem>
                <ContactIcon>🕒</ContactIcon>
                <ContactDetails>
                  <ContactItemTitle>Business Hours</ContactItemTitle>
                  <ContactText>Monday - Friday: 8:00 AM - 6:00 PM</ContactText>
                  <ContactText>Saturday: 9:00 AM - 4:00 PM</ContactText>
                  <ContactText>Sunday: Emergency services only</ContactText>
                </ContactDetails>
              </ContactItem>

              <ContactItem>
                <ContactIcon>📍</ContactIcon>
                <ContactDetails>
                  <ContactItemTitle>Service Areas</ContactItemTitle>
                  <ContactText>Guelph & Tri-Cities</ContactText>
                  <ContactText>Surrounding Cities & Suburbs</ContactText>
                  <ContactText>Commercial & Residential</ContactText>
                </ContactDetails>
              </ContactItem>

              <ContactItem>
                <ContactIcon>⚡</ContactIcon>
                <ContactDetails>
                  <ContactItemTitle>Emergency Service</ContactItemTitle>
                  <ContactText><a href="tel:+12263373867">+1 (226) 337-3867</a></ContactText>
                  <ContactText>Available 24/7 for urgent needs</ContactText>
                </ContactDetails>
              </ContactItem>


            </ContactCard>
          </ContactInfoSection>

          <ContactFormSection>
            <ContactForm onSubmit={handleSubmitFormspree}>
              <FormTitle>Send Us a Message</FormTitle>
              
              <FormRow>
                <FormGroup>
                  <Label htmlFor="name">Your Name *</Label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </FormGroup>
              </FormRow>

              <FormRow>
                <FormGroup>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="subject">Subject *</Label>
                  <Select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="quote">Request a Quote</option>
                    <option value="booking">Schedule Service</option>
                    <option value="complaint">Service Complaint</option>
                    <option value="compliment">Compliment</option>
                    <option value="general">General Inquiry</option>
                    <option value="emergency">Emergency Service</option>
                    <option value="other">Other</option>
                  </Select>
                </FormGroup>
              </FormRow>

              <FormGroup>
                <Label htmlFor="message">Message *</Label>
                <TextArea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  placeholder="Please provide details about your window cleaning needs, property size, preferred dates, or any other information that would help us serve you better..."
                  required
                />
              </FormGroup>

              <SubmitButton type="submit">
                Send Message
              </SubmitButton>
            </ContactForm>
          </ContactFormSection>
        </ContactContent>

        <MapSection>
          <MapPlaceholder>
            <h3>📍 Service Area Map</h3>
            <p>We serve the Greater Metro Area and surrounding communities. Contact us to confirm service availability in your specific location.</p>
          </MapPlaceholder>
        </MapSection>
      </ContentWrapper>
    </ContactContainer>
  );
};

export default Contact; 