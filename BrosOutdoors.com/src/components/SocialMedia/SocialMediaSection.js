import React from 'react';
import styled from 'styled-components';
import { FaYoutube, FaInstagram, FaTiktok, FaFacebook } from 'react-icons/fa';

const SocialSection = styled.section`
  padding: 5rem 0;
  background: linear-gradient(135deg, ${props => props.theme.colors.primary} 0%, ${props => props.theme.colors.deepBlue} 100%);
  color: white;
  text-align: center;
`;

const SocialContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: white;
`;

const SectionSubtitle = styled.p`
  font-size: 1.25rem;
  margin-bottom: 3rem;
  color: rgba(255, 255, 255, 0.9);
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const SocialGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const SocialCard = styled.a`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: ${props => props.theme.borderRadius.large};
  padding: 2rem;
  text-decoration: none;
  color: white;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  height: 100%;
  &:hover {
    transform: translateY(-10px) scale(1.05);
    background: rgba(255, 255, 255, 0.2);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  }
  
  .social-icon {
    height: 100%
    font-size: 3rem;
    margin-bottom: 1rem;
  }
  
  .social-icon img {
    width: 100%;
    height: 100%;
    max-width: 100px;
    height: 100px;
    object-fit: contain;
  }

  .social-name {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }
  
  .social-handle {
    font-size: 1rem;
    opacity: 0.8;
    margin-bottom: 1rem;
  }
  
  .social-stats {
    display: flex;
    gap: 1rem;
    font-size: 0.875rem;
    opacity: 0.9;
  }
`;

const PulseEffect = styled.div`
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: -10px;
    left: -10px;
    right: -10px;
    bottom: -10px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: ${props => props.theme.borderRadius.large};
    animation: pulse 2s infinite;
  }
  
  @keyframes pulse {
    0% {
      transform: scale(1);
      opacity: 1;
    }
    50% {
      transform: scale(1.05);
      opacity: 0.7;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }
`;

const socialMediaChannels = [
  {
    name: 'YouTube',
    handle: '@brosoutdoorsofficial',
    icon: <FaYoutube color='red'/>,
    img:'https://upload.wikimedia.org/wikipedia/commons/f/fd/YouTube_full-color_icon_%282024%29.svg',
    url: 'https://youtube.com/@brosoutdoorsofficial',
    text: 'Follow us on YouTube'
  },
  {
    name: 'Instagram',
    handle: '@brosoutdoorsofficial',
    icon: <FaInstagram />,
    img:'https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png',
    url: 'https://instagram.com/brosoutdoorsofficial',
    text: 'Follow us on Instagram'
  },
  {
    name: 'TikTok',
    handle: '@brosoutdoorsofficial',
    icon: <FaTiktok />,
    img:'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Tiktok_icon.svg/1200px-Tiktok_icon.svg.png',
    url: 'https://tiktok.com/@brosoutdoorsofficial',
    text: 'Follow us on TikTok'
  },
  {
    name: 'Facebook',
    handle: '@brosoutdoorsofficial',
    icon: <FaFacebook />,
    img:'https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/2048px-Facebook_f_logo_%282021%29.svg.png',
    url: 'https://facebook.com/brosoutdoorsofficial',
    text: 'Follow us on Facebook'
  },
  // {
  //   name: 'Twitter',
  //   handle: '@BrosOutdoors',
  //   icon: '🐦',
  //   followers: '29K',
  //   tweets: '2.1K',
  //   url: 'https://twitter.com/brosoutdoorsofficial'
  // },
  // {
  //   name: 'Podcast',
  //   handle: 'Bros Outdoors Podcast',
  //   icon: '🎙️',
  //   followers: '15K',
  //   episodes: '78+',
  //   url: 'https://podcast.brosoutdoorsofficial.com'
  // }
];

const SocialMediaSection = () => {
  return (
    <SocialSection>
      <SocialContainer>
        <SectionTitle>Follow Our Adventures</SectionTitle>
        <SectionSubtitle>
          Join our growing community across all platforms for daily outdoor inspiration, 
          gear reviews, and exclusive behind-the-scenes content!
        </SectionSubtitle>
        
        <SocialGrid>
          {socialMediaChannels.map((channel, index) => (
            <PulseEffect key={channel.name}>
              <SocialCard 
                href={channel.url} 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="social-icon">
                  <img src={channel.img} alt={channel.name}/>
                </div>
                <div className="social-name">{channel.name}</div>
                <div className="social-handle">{channel.handle}</div>
                <div className="social-stats">
                  {/* <span>{channel.followers} Followers</span> */}
                  {/* <span>•</span> */}
                  <span>{channel.text}!</span>
                </div>
              </SocialCard>
            </PulseEffect>
          ))}
        </SocialGrid>
      </SocialContainer>
    </SocialSection>
  );
};

export default SocialMediaSection; 