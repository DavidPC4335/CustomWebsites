import React from 'react';
import { FaCheckCircle, FaUsers, FaStar, FaShieldAlt, FaClock, FaLeaf } from 'react-icons/fa';
import {
  AboutContainer,
  BackgroundDecoration,
  ContentWrapper,
  HeroSection,
  HeroContent,
  HeroTitle,
  HeroSubtitle,
  StorySection,
  StoryCard,
  StoryTitle,
  StoryText,
  ValuesSection,
  SectionTitle,
  ValuesGrid,
  ValueCard,
  ValueIcon,
  ValueTitle,
  ValueDescription,
  StatsSection,
  StatItem,
  StatNumber,
  StatLabel,
  TeamSection,
  TeamGrid,
  TeamMember,
  MemberPhoto,
  MemberInfo,
  MemberName,
  MemberRole,
  MemberDescription,
  CTASection,
  CTATitle,
  CTAText,
  CTAButton
} from './About.styles';

const About = () => {
  const values = [
    {
      icon: <FaStar />,
      title: "Quality Excellence",
      description: "We deliver exceptional results every time, using premium tools and proven techniques that leave your windows crystal clear."
    },
    // {
    //   icon: <FaShieldAlt />,
    //   title: "Fully Insured",
    //   description: "Complete liability and workers' compensation insurance gives you peace of mind knowing you're protected."
    // },
    {
      icon: <FaClock />,
      title: "Reliable Service",
      description: "We arrive on time, work efficiently, and maintain consistent schedules that respect your busy lifestyle."
    },
    // {
    //   icon: <FaLeaf />,
    //   title: "Eco-Friendly",
    //   description: "Environmentally safe cleaning solutions that protect your family, pets, and the surrounding landscape."
    // },
    // {
    //   icon: <FaUsers />,
    //   title: "Professional Team",
    //   description: "Trained, uniformed professionals who treat your property with care and maintain the highest safety standards."
    // },



    
    {
      icon: <FaCheckCircle />,
      title: "Satisfaction Guaranteed",
      description: "We stand behind our work with a 100% satisfaction guarantee. If you're not happy, we'll make it right."
    }
  ];

  const stats = [
    // { number: "8+", label: "Years Experience" },
    // { number: "500+", label: "Happy Customers" },
    { number: "1,000+", label: "Windows Cleaned" },
    { number: "10+", label: "5 Star Reviews" },
    { number: "100%", label: "Satisfaction Rate" }
  ];

  const teamMembers = [
    {
      name: "David Johnson",
      role: "Founder & Lead Technician",
      description: "With over 8 years of experience, David founded Oding Windows with a vision to provide exceptional service to the Guelph community.",
      photo: "DJ"
    },
    {
      name: "Michael Chen",
      role: "Senior Window Specialist",
      description: "Michael brings 5 years of commercial window cleaning expertise and ensures every job meets our high standards.",
      photo: "MC"
    },
    {
      name: "Sarah Thompson",
      role: "Customer Service Manager",
      description: "Sarah coordinates our scheduling and customer communications, ensuring a smooth experience from quote to completion.",
      photo: "ST"
    }
  ];

  return (
    <AboutContainer>
      <BackgroundDecoration />
      <ContentWrapper>
        <HeroSection>
          <HeroContent>
            <HeroTitle>About Oding Windows</HeroTitle>
            <HeroSubtitle>
              Professional window cleaning services serving Guelph and the Tri-Cities with excellence, 
              reliability, and a commitment to crystal-clear results.
            </HeroSubtitle>
          </HeroContent>
        </HeroSection>

        <StorySection>
          <StoryCard>
            <StoryTitle>Our Story</StoryTitle>
            <StoryText>
              Founded in 2024, Oding Windows began with a simple mission: to provide the highest quality 
              window cleaning services in Guelph and surrounding areas. What started as a small local business 
              has grown into the region's most trusted window cleaning service, serving hundreds of satisfied 
              customers across residential and commercial properties.
            </StoryText>
            <StoryText>
              Our commitment to excellence, combined with our attention to detail and customer-first approach, 
              has earned us a reputation for reliability and outstanding results. We use only the best equipment 
              and eco-friendly cleaning solutions to ensure your windows sparkle while protecting your property 
              and the environment.
            </StoryText>
            <StoryText>
              Today, we're proud to be Guelph's premier window cleaning service, with a growing team of 
              dedicated professionals who share our passion for making your view of the world crystal clear.
            </StoryText>
          </StoryCard>
        </StorySection>

        <StatsSection>
          {stats.map((stat, index) => (
            <StatItem key={index}>
              <StatNumber>{stat.number}</StatNumber>
              <StatLabel>{stat.label}</StatLabel>
            </StatItem>
          ))}
        </StatsSection>

        <ValuesSection>
          <SectionTitle>Why Choose Oding Windows?</SectionTitle>
          <ValuesGrid>
            {values.map((value, index) => (
              <ValueCard key={index}>
                <ValueIcon>{value.icon}</ValueIcon>
                <ValueTitle>{value.title}</ValueTitle>
                <ValueDescription>{value.description}</ValueDescription>
              </ValueCard>
            ))}
          </ValuesGrid>
        </ValuesSection>

        {/* <TeamSection>
          <SectionTitle>Meet Our Team</SectionTitle>
          <TeamGrid>
            {teamMembers.map((member, index) => (
              <TeamMember key={index}>
                <MemberPhoto>{member.photo}</MemberPhoto>
                <MemberInfo>
                  <MemberName>{member.name}</MemberName>
                  <MemberRole>{member.role}</MemberRole>
                  <MemberDescription>{member.description}</MemberDescription>
                </MemberInfo>
              </TeamMember>
            ))}
          </TeamGrid>
        </TeamSection> */}

        <CTASection>
          <CTATitle>Ready to Experience the Oding Windows Difference?</CTATitle>
          <CTAText>
            Join hundreds of satisfied customers who trust us with their window cleaning needs. 
            Get your free quote today and see why we're Guelph's #1 choice for window cleaning.
          </CTAText>
          <CTAButton to="/book-now">
            Get Your Free Quote
          </CTAButton>
        </CTASection>
      </ContentWrapper>
    </AboutContainer>
  );
};

export default About; 