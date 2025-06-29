import React from 'react';
import styled from 'styled-components';
import Card from '../../components/UI/Card';
import aboutus from '../../assets/aboutus.jpeg';
const AboutContainer = styled.div`
  padding-top: 80px; /* Account for fixed header */
`;

const HeroSection = styled.section`
  padding: 8rem 0; /* Increased from 5rem to 8rem */
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${aboutus});
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

const Section = styled.section`
  padding: 5rem 0;
  
  &:nth-child(even) {
    background: ${props => props.theme.colors.lightGray};
  }
`;

const SectionTitle = styled.h2`
  text-align: center;
  color: ${props => props.theme.colors.deepBlue};
  margin-bottom: 3rem;
`;

const StoryContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  
  p {
    font-size: 1.125rem;
    margin-bottom: 2rem;
    line-height: 1.8;
  }
`;

const MissionGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const TeamCard = styled(Card)`
  text-align: center;
  
  .team-avatar {
    width: 120px;
    height: 120px;
    border-radius: ${props => props.theme.borderRadius.round};
    background: ${props => props.theme.colors.primary};
    margin: 0 auto 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 3rem;
    color: white;
  }
  
  .team-name {
    font-size: 1.25rem;
    font-weight: 600;
    color: ${props => props.theme.colors.deepBlue};
    margin-bottom: 0.5rem;
  }
  
  .team-role {
    color: ${props => props.theme.colors.primary};
    font-weight: 500;
    margin-bottom: 1rem;
  }
  
  .team-bio {
    color: ${props => props.theme.colors.textLight};
    line-height: 1.6;
  }
`;

const StatsSection = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-top: 4rem;
  text-align: center;
`;

const StatCard = styled.div`
  .stat-number {
    font-size: 3rem;
    font-weight: 700;
    color: ${props => props.theme.colors.primary};
    margin-bottom: 0.5rem;
  }
  
  .stat-label {
    font-size: 1.125rem;
    color: ${props => props.theme.colors.textLight};
  }
`;

const missions = [
  {
    icon: '🌲',
    title: 'Environmental Stewardship',
    description: 'We promote responsible outdoor practices and environmental conservation through our content and community initiatives.'
  },
  {
    icon: '📚',
    title: 'Education & Inspiration',
    description: 'We believe in sharing knowledge and inspiring others to explore the outdoors safely and confidently.'
  },
  {
    icon: '🤝',
    title: 'Community Building',
    description: 'We foster a supportive community of outdoor enthusiasts who share knowledge, experiences, and adventures.'
  }
];

const teamMembers = [
  {
    name: 'David PC',
    role: 'Co-Founder & Content Creator',
    avatar: '🏔️',
    bio: 'Learning the ways of the outdoors from Calum, David brings his creative vision to life through engaging content. His passion for storytelling helps capture and share the magic of outdoor adventures with our community.'
  },
  {
    name: 'Calum M',
    role: 'Co-Founder & Content Creator',
    avatar: '📹',
    bio: 'A passionate outdoorsman who finds peace in nature. Calum brings his love for adventure and wilderness exploration to every video, inspiring others to get outside and experience the beauty of the natural world.'
  },
  {
    name: 'Luc L',
    role: 'Part-Time Editor',
    avatar: '👥',
    bio: 'As our skilled editor and content creator, Luc brings his creative expertise to enhance our videos. His attention to detail and storytelling abilities help bring our outdoor adventures to life. When not editing, you might find him casting a line on local waters.'
  },
];

const stats = [
  { number: '5K+', label: 'Followers' },
  { number: '10M+', label: 'Views' },
  { number: '15+', label: 'Adventures Documented' },
  // { number: '5+', label: 'Years Experience' }
];

const About = () => {
  return (
    <AboutContainer>
      <HeroSection>
        <Container>
          <h1>The Story of Bros Outdoors</h1>
          <p style={{color: 'white'}}>
            Inspiring outdoor adventures and building a community of nature enthusiasts 
            through authentic content and shared experiences.
          </p>
        </Container>
      </HeroSection>

      <Section>
        <Container>
          <SectionTitle>Our Story</SectionTitle>
          <StoryContent>
            <p>
              Bros Outdoors began as a simple idea between friends who shared a passion for 
              outdoor adventures. What started as weekend hiking trips and casual gear discussions 
              has evolved into a thriving community of outdoor enthusiasts spanning multiple social media platforms.
            </p>
            <p>
              Our journey began in 2023 when we realized there was a need for authentic, 
              honest outdoor content that truly helps people get outside and explore nature. 
              We've since grown into a trusted source for gear reviews, trail guides, and 
              outdoor education content.
            </p>
            <p>
              Today, we're proud to be part of a community that values adventure, 
              environmental stewardship, and the transformative power of spending time in nature. 
              Every piece of content we create is designed to inspire and educate our audience 
              to pursue their own outdoor adventures safely and confidently.
            </p>
          </StoryContent>
          
          <StatsSection>
            {stats.map((stat, index) => (
              <StatCard key={index}>
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </StatCard>
            ))}
          </StatsSection>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionTitle>Our Mission</SectionTitle>
          <MissionGrid>
            {missions.map((mission, index) => (
              <Card key={index}>
                <div className="card-icon">{mission.icon}</div>
                <h3 className="card-title">{mission.title}</h3>
                <p className="card-description">{mission.description}</p>
              </Card>
            ))}
          </MissionGrid>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionTitle>Meet Our Team</SectionTitle>
          <TeamGrid>
            {teamMembers.map((member, index) => (
              <TeamCard key={index}>
                <div className="team-avatar">{member.avatar}</div>
                <div className="team-name">{member.name}</div>
                <div className="team-role">{member.role}</div>
                <div className="team-bio">{member.bio}</div>
              </TeamCard>
            ))}
          </TeamGrid>
        </Container>
      </Section>
    </AboutContainer>
  );
};

export default About; 