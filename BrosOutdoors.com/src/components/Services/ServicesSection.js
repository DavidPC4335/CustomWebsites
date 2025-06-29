import React from 'react';
import styled from 'styled-components';
import Card from '../UI/Card';

const ServicesContainer = styled.section`
  padding: 5rem 0;
  background: ${props => props.theme.colors.lightGray};
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
  
  h2 {
    color: ${props => props.theme.colors.deepBlue};
    margin-bottom: 1rem;
  }
  
  p {
    font-size: 1.125rem;
    max-width: 600px;
    margin: 0 auto;
  }
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const services = [
  // {
  //   icon: '🏕️',
  //   title: 'Adventure Planning',
  //   description: 'Expert guidance for planning your next outdoor adventure. From hiking trails to camping spots, we help you discover the best outdoor experiences.'
  // },
  {
    icon: '🎥',
    title: 'Scenic Videography',
    description: 'Professional outdoor photography and videography services. Watch our videos to get a glimpse of the beautiful places we visit.'
  },
  {
    icon: '🎯',
    title: 'Gear Reviews',
    description: 'In-depth reviews of the latest outdoor gear and equipment. Make informed decisions with our honest, hands-on testing and reviews.'
  },
  {
    icon: '📚',
    title: 'Outdoor Education',
    description: 'Learn essential outdoor skills through our workshops and tutorials. From survival techniques to photography tips, we\'ve got you covered.'
  },
  // {
  //   icon: '🗺️',
  //   title: 'Trail Guides',
  //   description: 'Comprehensive trail guides and outdoor destination recommendations. Discover hidden gems and popular outdoor destinations.'
  // },
  // {
  //   icon: '👥',
  //   title: 'Community Events',
  //   description: 'Join our outdoor community events and meetups. Connect with fellow adventurers and share amazing outdoor experiences together.'
  // }
];

const ServicesSection = () => {
  return (
    <ServicesContainer>
      <Container>
        <SectionHeader>
          <h2>Our Content</h2>
          <p>
          From adventure planning to gear reviews, we provide comprehensive outdoor 
          services to enhance your outdoor experiences and connect you with nature.
          </p>
        </SectionHeader>
        
        <ServicesGrid>
          {services.map((service, index) => (
            <Card key={index}>
              <div className="card-icon">{service.icon}</div>
              <h3 className="card-title">{service.title}</h3>
              <p className="card-description">{service.description}</p>
            </Card>
          ))}
        </ServicesGrid>
      </Container>
    </ServicesContainer>
  );
};

export default ServicesSection; 