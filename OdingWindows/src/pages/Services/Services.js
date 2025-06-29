import React from 'react';
import { FaHome, FaBuilding, FaTools, FaCheckCircle, FaClock, FaShieldAlt, FaLeaf, FaUsers, FaStar, FaTrophy } from 'react-icons/fa';
import {
  ServicesContainer,
  BackgroundDecoration,
  ContentWrapper,
  HeroSection,
  HeroContent,
  HeroTitle,
  HeroSubtitle,
  ServicesGrid,
  ServiceCard,
  ServiceIcon,
  ServiceTitle,
  ServiceDescription,
  ServiceFeatures,
  ServiceFeatureItem,
  ProcessSection,
  SectionTitle,
  ProcessSteps,
  ProcessStep,
  StepNumber,
  StepTitle,
  StepDescription,
  FeaturesSection,
  FeaturesGrid,
  FeatureCard,
  FeatureIcon,
  FeatureTitle,
  FeatureDescription,
  BeforeAfterSection,
  BeforeAfterCard,
  BeforeAfterTitle,
  BeforeAfterText,
  CTASection,
  CTATitle,
  CTAText,
  CTAButton
} from './Services.styles';

const Services = () => {
  const services = [
    {
      icon: <FaHome />,
      title: "Residential Window Cleaning",
      description: "Complete window cleaning services for homes, including interior and exterior cleaning, screen cleaning, and sill wiping.",
      features: [
        "Interior & exterior window cleaning",
        "Screen cleaning & maintenance", 
        "Window sill & frame cleaning",
        "Spot-free, streak-free results",
        "Eco-friendly cleaning solutions"
      ]
    },
    {
      icon: <FaBuilding />,
      title: "Commercial Window Cleaning",
      description: "Professional window cleaning for offices, retail stores, restaurants, and other commercial properties with flexible scheduling.",
      features: [
        "Flexible scheduling options",
        "Storefront maintenance",
        "Post-construction cleanup",
        "Emergency cleaning services"
      ]
    },
    
    {
      icon: <FaTools />,
      title: "Gutter Cleaning Services", 
      description: "Professional gutter cleaning and maintenance to protect your property from water damage and ensure proper drainage.",
      features: [
        "Complete gutter cleaning",
        "Downspout clearing & testing",
        "Debris removal & disposal",
        "Gutter inspection & maintenance",
        "Seasonal cleaning programs"
      ]
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Free Consultation",
      description: "We assess your property and provide a detailed quote with no hidden fees. All estimates are completely free."
    },
    {
      number: "02", 
      title: "Scheduling",
      description: "We work around your schedule to find the perfect time. Flexible booking options including recurring services."
    },
    {
      number: "03",
      title: "Professional Cleaning",
      description: "Our trained team arrives on time with professional equipment and eco-friendly cleaning solutions."
    },
    {
      number: "05",
      title: "Customer Satisfaction",
      description: "Your satisfaction is guaranteed. If you're not happy with any aspect, we'll make it right at no extra cost."
    }
  ];

  const features = [
    {
      icon: <FaCheckCircle />,
      title: "100% Satisfaction Guaranteed",
      description: "We stand behind our work with a complete satisfaction guarantee. If you're not happy, we'll make it right."
    },
    {
      icon: <FaShieldAlt />,
      title: "Fully Licensed & Insured",
      description: "Complete liability and workers' compensation insurance protects you and your property during service."
    },
    {
      icon: <FaClock />,
      title: "Punctual & Reliable",
      description: "We arrive on time, every time. Our reliable scheduling means you can count on us when you need us."
    },
    {
      icon: <FaLeaf />,
      title: "Eco-Friendly Solutions",
      description: "Environmentally safe cleaning products that are effective on dirt but gentle on your property and landscape."
    },
    {
      icon: <FaUsers />,
      title: "Professional Team",
      description: "Trained, uniformed professionals who treat your property with respect and maintain the highest safety standards."
    },
    {
      icon: <FaTrophy />,
      title: "Award-Winning Service",
      description: "Recognized as Guelph's premier window cleaning service with hundreds of 5-star reviews from satisfied customers."
    }
  ];

  return (
    <ServicesContainer>
      <BackgroundDecoration />
      <ContentWrapper>
        <HeroSection>
          <HeroContent>
            <HeroTitle>Professional Window Cleaning Services</HeroTitle>
            <HeroSubtitle>
              Comprehensive window cleaning solutions for residential and commercial properties 
              in Guelph and the Tri-Cities. Crystal-clear results, every time.
            </HeroSubtitle>
          </HeroContent>
        </HeroSection>

        <ServicesGrid>
          {services.map((service, index) => (
            <ServiceCard key={index}>
              <ServiceIcon>{service.icon}</ServiceIcon>
              <ServiceTitle>{service.title}</ServiceTitle>
              <ServiceDescription>{service.description}</ServiceDescription>
              <ServiceFeatures>
                {service.features.map((feature, idx) => (
                  <ServiceFeatureItem key={idx}>
                    <FaCheckCircle /> {feature}
                  </ServiceFeatureItem>
                ))}
              </ServiceFeatures>
            </ServiceCard>
          ))}
        </ServicesGrid>

        <ProcessSection>
          <SectionTitle>Our Simple 4-Step Process</SectionTitle>
          <ProcessSteps>
            {processSteps.map((step, index) => (
              <ProcessStep key={index}>
                <StepNumber>{step.number}</StepNumber>
                <StepTitle>{step.title}</StepTitle>
                <StepDescription>{step.description}</StepDescription>
              </ProcessStep>
            ))}
          </ProcessSteps>
        </ProcessSection>

        <FeaturesSection>
          <SectionTitle>Why Choose Oding Windows?</SectionTitle>
          <FeaturesGrid>
            {features.map((feature, index) => (
              <FeatureCard key={index}>
                <FeatureIcon>{feature.icon}</FeatureIcon>
                <FeatureTitle>{feature.title}</FeatureTitle>
                <FeatureDescription>{feature.description}</FeatureDescription>
              </FeatureCard>
            ))}
          </FeaturesGrid>
        </FeaturesSection>

        <BeforeAfterSection>
          <SectionTitle>The Oding Windows Difference</SectionTitle>
          <BeforeAfterCard>
            <BeforeAfterTitle>Transform Your View</BeforeAfterTitle>
            <BeforeAfterText>
              Our professional window cleaning service doesn't just clean your windows – we transform 
              your entire view of the world. Using advanced techniques and premium equipment, we remove 
              years of buildup, streaks, and spots that ordinary cleaning can't touch.
            </BeforeAfterText>
            <BeforeAfterText>
              From residential homes to commercial storefronts, we've helped thousands of customers 
              in Guelph and the Tri-Cities see the difference that professional window cleaning makes. 
              Our attention to detail and commitment to excellence ensures every window sparkles.
            </BeforeAfterText>
            <BeforeAfterText>
              Don't settle for cloudy, streaked windows that block your natural light and diminish 
              your property's appearance. Experience the crystal-clear difference that only Oding 
              Windows can deliver.
            </BeforeAfterText>
          </BeforeAfterCard>
        </BeforeAfterSection>

        <CTASection>
          <CTATitle>Ready to See the Difference?</CTATitle>
          <CTAText>
            Get your free quote today and discover why hundreds of customers trust Oding Windows 
            for all their window cleaning needs. Professional results, guaranteed satisfaction.
          </CTAText>
          <CTAButton to="/book-now">
            Get Your Free Quote Today
          </CTAButton>
        </CTASection>
      </ContentWrapper>
    </ServicesContainer>
  );
};

export default Services; 