import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import {
  BookNowContainer,
  ContentWrapper,
  FormContainer,
  ContactInfoContainer,
  ContactCard,
  ContactItem,
  ContactIcon,
  ContactDetails,
  ContactTitle,
  ContactText,
  OrDivider,
  Form,
  FormTitle,
  FormSubtitle,
  FormSection,
  SectionTitle,
  FormGroup,
  Label,
  Input,
  Select,
  TextArea,
  FormRow,
  SubmitButton,
  SuccessMessage,
  BackgroundDecoration
} from './BookNow.styles';

const BookNow = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
    serviceType: '',
    propertyType: '',
    frequency: '',
    preferredDate: '',
    preferredTime: '',
    specialRequests: ''
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
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    handleSubmit(formData);
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        postalCode: '',
        serviceType: '',
        propertyType: '',
        frequency: '',
        preferredDate: '',
        preferredTime: '',
        specialRequests: ''
      });
    }, 3000);
  };

  if (state?.succeeded) {
    return (
      <BookNowContainer>
        <BackgroundDecoration />
        <ContentWrapper>
          <FormContainer>
            <SuccessMessage>
              <h2>🎉 Booking Request Submitted!</h2>
              <p>Thank you for choosing our window cleaning service. We'll contact you within 24 hours to confirm your appointment.</p>
            </SuccessMessage>
          </FormContainer>
        </ContentWrapper>
      </BookNowContainer>
    );
  }

  return (
    <BookNowContainer>
      <BackgroundDecoration />
      <ContentWrapper>
        <FormContainer>
          <FormTitle>Book Your Window Cleaning Service</FormTitle>
          <FormSubtitle>
            Fill out the form below and we'll get back to you with a quote and available time slots.
          </FormSubtitle>

          <ContactInfoContainer>
            <ContactCard>
              <ContactItem>
                <ContactIcon>📞</ContactIcon>
                <ContactDetails>
                  <ContactTitle>Call Us</ContactTitle>
                  <ContactText><a href="tel:+12263373867">+1 (226) 337-3867</a></ContactText>
                </ContactDetails>
              </ContactItem>
              
              <ContactItem>
                <ContactIcon>✉️</ContactIcon>
                <ContactDetails>
                  <ContactTitle>Email Us</ContactTitle>
                  <ContactText><a href="mailto:info@odingwindows.com">info@odingwindows.com</a></ContactText>
                </ContactDetails>
              </ContactItem>
              
              <ContactItem>
                <ContactIcon>🕒</ContactIcon>
                <ContactDetails>
                  <ContactTitle>Business Hours</ContactTitle>
                  <ContactText>Mon-Fri: 8AM-6PM<br />Sat: 9AM-4PM</ContactText>
                </ContactDetails>
              </ContactItem>
              
              <ContactItem>
                <ContactIcon>📍</ContactIcon>
                <ContactDetails>
                  <ContactTitle>Service Area</ContactTitle>
                  <ContactText>Guelph & Tri-Cities<br />& Surrounding Cities</ContactText>
                </ContactDetails>
              </ContactItem>
            </ContactCard>
            
            <OrDivider>
              <span>OR</span>
            </OrDivider>
          </ContactInfoContainer>

        <Form onSubmit={handleSubmitFormspree}>
          <FormSection>
            <SectionTitle>Contact Information</SectionTitle>
            <FormRow>
              <FormGroup>
                <Label htmlFor="firstName">First Name *</Label>
                <Input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="lastName">Last Name *</Label>
                <Input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
            </FormRow>

            <FormRow>
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
              <FormGroup>
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
            </FormRow>
          </FormSection>

          <FormSection>
            <SectionTitle>Service Location</SectionTitle>
            <FormGroup>
              <Label htmlFor="address">Street Address</Label>
              <Input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
              />
            </FormGroup>

            <FormRow>
              {/* <FormGroup>
                <Label htmlFor="city">City</Label>
                <Input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="postalCode">Postal Code</Label>
                <Input
                  type="text"
                  id="postalCode"
                  name="postalCode"
                  value={formData.postalCode}
                  onChange={handleChange}
                />
              </FormGroup> */}
            </FormRow>
          </FormSection>

          <FormSection>
            <SectionTitle>Service Details</SectionTitle>
            <FormRow>
              <FormGroup>
                <Label htmlFor="serviceType">Service Type *</Label>
                <Select
                  id="serviceType"
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a service</option>
                  <option value="interior-exterior">Interior & Exterior Windows</option>
                  <option value="exterior-only">Exterior Windows Only</option>
                  <option value="interior-only">Interior Windows Only</option>
                  <option value="commercial">Commercial Service</option>
                  <option value="post-construction">Post-Construction Cleanup</option>
                  <option value="other">Other</option>
                </Select>
              </FormGroup>
              <FormGroup>
                <Label htmlFor="propertyType">Property Type *</Label>
                <Select
                  id="propertyType"
                  name="propertyType"
                  value={formData.propertyType}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select property type</option>
                  <option value="residential-house">Residential House</option>
                  <option value="apartment">Apartment/Condo</option>
                  <option value="commercial-office">Commercial Office</option>
                  <option value="retail">Retail Store</option>
                  <option value="other">Other</option>
                </Select>
              </FormGroup>
            </FormRow>

            <FormGroup>
              <Label htmlFor="frequency">Service Frequency</Label>
              <Select
                id="frequency"
                name="frequency"
                value={formData.frequency}
                onChange={handleChange}
              >
                <option value="">Select frequency</option>
                <option value="one-time">One-time Service</option>
                <option value="weekly">Weekly</option>
                <option value="bi-weekly">Bi-weekly</option>
                <option value="monthly">Monthly</option>
                <option value="quarterly">Quarterly</option>
              </Select>
            </FormGroup>
          </FormSection>

          <FormSection>
            <SectionTitle>Scheduling Preferences</SectionTitle>
            <FormRow>
              <FormGroup>
                <Label htmlFor="preferredDate">Preferred Date</Label>
                <Input
                  type="date"
                  id="preferredDate"
                  name="preferredDate"
                  value={formData.preferredDate}
                  onChange={handleChange}
                  min={new Date().toISOString().split('T')[0]}
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="preferredTime">Preferred Time</Label>
                <Select
                  id="preferredTime"
                  name="preferredTime"
                  value={formData.preferredTime}
                  onChange={handleChange}
                >
                  <option value="">Select time preference</option>
                  <option value="morning">Morning (8AM - 12PM)</option>
                  <option value="afternoon">Afternoon (12PM - 5PM)</option>
                  <option value="flexible">Flexible</option>
                </Select>
              </FormGroup>
            </FormRow>
          </FormSection>

          <FormSection>
            <FormGroup>
              <Label htmlFor="specialRequests">Special Requests or Notes</Label>
              <TextArea
                id="specialRequests"
                name="specialRequests"
                value={formData.specialRequests}
                onChange={handleChange}
                rows="4"
                placeholder="Let us know about any special requirements, access instructions, or specific concerns..."
              />
            </FormGroup>
          </FormSection>

          <SubmitButton type="submit">
            Request Free Quote & Schedule
          </SubmitButton>
        </Form>
        </FormContainer>
      </ContentWrapper>
    </BookNowContainer>
  );
};

export default BookNow; 