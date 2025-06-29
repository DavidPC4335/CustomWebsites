import React from 'react';
import { FaHome, FaBuilding, FaCog, FaBroom, FaShieldAlt, FaClock } from 'react-icons/fa';
import { 
  ServiceHighlightsContainer,
  SectionTitle,
  SectionSubtitle,
  ServicesGrid,
  ServiceCard,
  ServiceIcon,
  ServiceTitle,
  ServiceDescription
} from './ServiceHighlights.styles';

const ServiceHighlights = () => {
  const services = [
    {
      icon: <FaHome />,
      title: 'Residential Cleaning',
      description: 'Professional window cleaning for homes, apartments, and condominiums with attention to detail.'
    },
    {
      icon: <FaBuilding />,
      title: 'Commercial Services',
      description: 'Reliable commercial window cleaning for offices, retail stores, and business complexes.'
    },
    {
      icon: <FaCog />,
      title: 'Maintenance Programs',
      description: 'Regular cleaning schedules tailored to your needs - weekly, monthly, or quarterly service.'
    },
    {
      icon: <FaBroom />,
      title: 'Deep Cleaning',
      description: 'Comprehensive cleaning including frames, sills, and screens for a complete transformation.'
    },
    {
      icon: <FaShieldAlt />,
      title: 'Fast & Reliable',
      description: 'We are Professional and Reliable. You can always trust that we will show up on time and do a great job.'
    },
    {
      icon: <FaClock />,
      title: 'Flexible Scheduling',
      description: 'Same-day and emergency services available. We work around your schedule.'
    }
  ];

  return (
    <ServiceHighlightsContainer className="section">
      <div className="container">
        <SectionTitle>Our Premium Services</SectionTitle>
        <SectionSubtitle>
          We provide comprehensive window cleaning solutions for every need
        </SectionSubtitle>
        
        <ServicesGrid>
          {services.map((service, index) => (
            <ServiceCard key={index}>
              <ServiceIcon>
                {service.icon}
              </ServiceIcon>
              <ServiceTitle>{service.title}</ServiceTitle>
              <ServiceDescription>{service.description}</ServiceDescription>
            </ServiceCard>
          ))}
        </ServicesGrid>
      </div>
    </ServiceHighlightsContainer>
  );
};

export default ServiceHighlights; 