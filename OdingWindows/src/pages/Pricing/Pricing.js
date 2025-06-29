import React, { useState } from 'react';
import { FaHome, FaBuilding, FaCheckCircle, FaTimes, FaStar, FaArrowDown, FaArrowUp } from 'react-icons/fa';
import {
  PricingContainer,
  BackgroundDecoration,
  ContentWrapper,
  HeroSection,
  HeroContent,
  HeroTitle,
  HeroSubtitle,
  PricingGrid,
  PricingCard,
  PricingHeader,
  PricingIcon,
  PricingTitle,
  PricingSubtitle,
  PricingPrice,
  PricingPeriod,
  PopularBadge,
  PricingFeatures,
  PricingFeature,
  PricingButton,
  AddOnsSection,
  SectionTitle,
  AddOnsGrid,
  AddOnCard,
  AddOnTitle,
  AddOnPrice,
  AddOnDescription,
  FAQSection,
  FAQContainer,
  FAQItem,
  FAQQuestion,
  FAQAnswer,
  FAQToggle,
  CTASection,
  CTATitle,
  CTAText,
  CTAButton,
  PriceNote
} from './Pricing.styles';

const Pricing = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const pricingPlans = [
    {
      icon: <FaHome />,
      title: "Residential Basic",
      subtitle: "Perfect for homes",
      price: "$45",
      period: "per visit",
      popular: false,
      features: [
        { included: true, text: "Exterior window cleaning" },
        { included: true, text: "Up to 15 windows" },
        { included: true, text: "Window sill cleaning" },
        { included: true, text: "Eco-friendly solutions" },
        { included: false, text: "Interior cleaning" },
        { included: false, text: "Screen cleaning" },
        { included: false, text: "Frame detailing" }
      ]
    },
    {
      icon: <FaStar />,
      title: "Residential Premium",
      subtitle: "Most popular choice",
      price: "$75",
      period: "per visit",
      popular: true,
      features: [
        { included: true, text: "Interior & exterior cleaning" },
        { included: true, text: "Up to 25 windows" },
        { included: true, text: "Screen cleaning & maintenance" },
        { included: true, text: "Window sill & frame cleaning" },
        { included: true, text: "Eco-friendly solutions" },
        { included: true, text: "Spot-free guarantee" },
        { included: true, text: "Same-day service available" }
      ]
    },
    {
      icon: <FaBuilding />,
      title: "Commercial",
      subtitle: "For businesses",
      price: "Custom",
      period: "quote",
      popular: false,
      features: [
        { included: true, text: "Flexible scheduling" },
        // { included: true, text: "High-rise capability" },
        { included: true, text: "Post-construction cleanup" },
        { included: true, text: "Storefront maintenance" },
        { included: true, text: "Emergency services" },
        { included: true, text: "Volume discounts" },
        { included: true, text: "Insurance documentation" }
      ]
    }
  ];

  const addOns = [
    {
      title: "Screen Cleaning",
      price: "$3",
      description: "Professional cleaning and maintenance of window screens. Price is per screen."
    },
    {
      title: "Interior Windows",
      price: "$2.50",
      description: "Interior window cleaning service per window"
    },
    {
      title: "Frame Detailing",
      price: "$1.50",
      description: "Deep cleaning of window frames and tracks"
    },
    // {
    //   title: "Sill & Track Cleaning",
    //   price: "$2.00",
    //   description: "Deep cleaning of window sills and tracks per window"
    // },
    {
      title: "Emergency Service",
      price: "+30%",
      description: "Same-day or urgent cleaning requests"
    }
  ];

  const faqs = [
    {
      question: "How often should I have my windows professionally cleaned?",
      answer: "For most residential properties, we recommend cleaning every 2-3 months. Commercial properties may need monthly service depending on location and environmental factors. We offer flexible scheduling to meet your specific needs."
    },
    {
      question: "Do you provide your own equipment and cleaning supplies?",
      answer: "Yes, we bring all necessary professional equipment, eco-friendly cleaning solutions, and tools. You don't need to provide anything - just access to your property and water source."
    },
    {
      question: "What if I'm not satisfied with the service?",
      answer: "We offer a 100% satisfaction guarantee. If you're not completely happy with our work, we'll return and re-clean any areas at no additional cost. Your satisfaction is our priority."
    },
    {
      question: "Do you clean windows in bad weather?",
      answer: "We don't clean windows in rain, snow, or high winds for safety and quality reasons. We'll reschedule at no charge and work with you to find the next available time slot."
    },
    {
      question: "How do I prepare for window cleaning service?",
      answer: "Simply ensure we have access to all windows and remove any obstacles like furniture or decorations from window areas. For interior cleaning, please secure any valuable items near windows."
    },
    {
      question: "Do you offer discounts for regular service?",
      answer: "Yes! We offer significant discounts for customers who schedule regular service. Monthly service receives 15% off, bi-monthly gets 10% off, and quarterly service gets 5% off regular rates."
    },
    {
      question: "Can you clean high or hard-to-reach windows?",
      answer: "Yes, we specialize in high and difficult-to-access windows. Our team uses professional equipment including water-fed poles and safety gear to reach windows up to 4 stories high safely."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <PricingContainer>
      <BackgroundDecoration />
      <ContentWrapper>
        <HeroSection>
          <HeroContent>
            <HeroTitle>Transparent Pricing for Crystal-Clear Windows</HeroTitle>
            <HeroSubtitle>
              Professional window cleaning services with no hidden fees. Choose the perfect 
              package for your home or business with our competitive, straightforward pricing.
            </HeroSubtitle>
          </HeroContent>
        </HeroSection>

        <PricingGrid>
          {pricingPlans.map((plan, index) => (
            <PricingCard key={index} popular={plan.popular}>
              {plan.popular && <PopularBadge>Most Popular</PopularBadge>}
              <PricingHeader>
                <PricingIcon>{plan.icon}</PricingIcon>
                <PricingTitle>{plan.title}</PricingTitle>
                <PricingSubtitle>{plan.subtitle}</PricingSubtitle>
              </PricingHeader>
              <PricingPrice>
                {plan.price}
                <PricingPeriod>/{plan.period}</PricingPeriod>
              </PricingPrice>
              <PricingFeatures>
                {plan.features.map((feature, idx) => (
                  <PricingFeature key={idx} included={feature.included}>
                    {feature.included ? <FaCheckCircle /> : <FaTimes />}
                    {feature.text}
                  </PricingFeature>
                ))}
              </PricingFeatures>
              <PricingButton to="/book-now" popular={plan.popular}>
                {plan.title === "Commercial" ? "Get Custom Quote" : "Book Now"}
              </PricingButton>
            </PricingCard>
          ))}
        </PricingGrid>

        <PriceNote>
          * Prices may vary based on window size, accessibility, and condition. 
          All quotes include free estimates with no hidden fees.
        </PriceNote>

        <AddOnsSection>
          <SectionTitle>Add-On Services</SectionTitle>
          <AddOnsGrid>
            {addOns.map((addon, index) => (
              <AddOnCard key={index}>
                <AddOnTitle>{addon.title}</AddOnTitle>
                <AddOnPrice>{addon.price}</AddOnPrice>
                <AddOnDescription>{addon.description}</AddOnDescription>
              </AddOnCard>
            ))}
          </AddOnsGrid>
        </AddOnsSection>

        <FAQSection>
          <SectionTitle>Frequently Asked Questions</SectionTitle>
          <FAQContainer>
            {faqs.map((faq, index) => (
              <FAQItem key={index}>
                <FAQQuestion onClick={() => toggleFAQ(index)}>
                  {faq.question}
                  <FAQToggle>
                    {openFAQ === index ? <FaArrowUp /> : <FaArrowDown />}
                  </FAQToggle>
                </FAQQuestion>
                <FAQAnswer open={openFAQ === index}>
                  {faq.answer}
                </FAQAnswer>
              </FAQItem>
            ))}
          </FAQContainer>
        </FAQSection>

        <CTASection>
          <CTATitle>Ready to Get Started?</CTATitle>
          <CTAText>
            Get your free, no-obligation quote today. Experience the Oding Windows difference 
            with transparent pricing and professional results guaranteed.
          </CTAText>
          <CTAButton to="/book-now">
            Get Your Free Quote
          </CTAButton>
        </CTASection>
      </ContentWrapper>
    </PricingContainer>
  );
};

export default Pricing; 