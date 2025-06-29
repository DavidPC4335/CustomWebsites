import React, { useState } from 'react';
import styled from 'styled-components';

const VideosContainer = styled.section`
  padding: 5rem 0;
  background: ${props => props.theme.colors.white};
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
    font-size: 2.5rem;
    
    @media (max-width: ${props => props.theme.breakpoints.mobile}) {
      font-size: 2rem;
    }
  }
  
  p {
    font-size: 1.125rem;
    max-width: 600px;
    margin: 0 auto;
    color: ${props => props.theme.colors.textLight};
    
    @media (max-width: ${props => props.theme.breakpoints.mobile}) {
      font-size: 1rem;
      padding: 0 1rem;
    }
  }
`;

const CarouselContainer = styled.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    max-width: 100%;
    padding: 0 1rem;
  }
`;

const VideoWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
  border-radius: ${props => props.theme.borderRadius.large};
  overflow: hidden;
  box-shadow: ${props => props.theme.shadows.medium};
  margin-bottom: 2rem;
`;

const VideoIframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
`;

const VideoInfo = styled.div`
  text-align: center;
  margin-bottom: 2rem;
  
  h3 {
    color: ${props => props.theme.colors.deepBlue};
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    
    @media (max-width: ${props => props.theme.breakpoints.mobile}) {
      font-size: 1.25rem;
      padding: 0 1rem;
    }
  }
  
  p {
    color: ${props => props.theme.colors.textLight};
    line-height: 1.6;
    max-width: 600px;
    margin: 0 auto;
    
    @media (max-width: ${props => props.theme.breakpoints.mobile}) {
      font-size: 0.9rem;
      padding: 0 1rem;
    }
  }
`;

const NavigationControls = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-top: 2rem;
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    gap: 0.75rem;
    margin-top: 1.5rem;
  }
`;

const NavButton = styled.button`
  background: ${props => props.theme.colors.primary};
  color: white;
  border: none;
  width: 50px;
  height: 50px;
  border-radius: ${props => props.theme.borderRadius.round};
  font-size: 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover:not(:disabled) {
    background: ${props => props.theme.colors.deepBlue};
    transform: translateY(-2px);
    box-shadow: ${props => props.theme.shadows.medium};
  }
  
  &:disabled {
    background: ${props => props.theme.colors.lightGray};
    color: ${props => props.theme.colors.textLight};
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
  
  &:focus {
    outline: 2px solid ${props => props.theme.colors.primary};
    outline-offset: 2px;
  }
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    width: 40px;
    height: 40px;
    font-size: 1.25rem;
  }
`;

const DotsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
`;

const Dot = styled.button`
  width: 12px;
  height: 12px;
  border-radius: ${props => props.theme.borderRadius.round};
  border: none;
  background: ${props => props.active ? props.theme.colors.primary : props.theme.colors.lightGray};
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${props => props.active ? props.theme.colors.primary : props.theme.colors.deepBlue};
  }
`;

const VideoTitle = styled.div`
  text-align: center;
  margin-top: 1rem;
  
  .video-count {
    color: ${props => props.theme.colors.textLight};
    font-size: 0.875rem;
    margin-bottom: 0.5rem;
  }
`;
const channelId = 'UUwOO1Hta5sU9wyqOkMO_CEg'
// Sample video data - replace with your actual YouTube video IDs
const videos = [
  {
    url: `https://www.youtube.com/embed?list=${channelId}&index=0`,
  },
//   {
//     url: `https://www.youtube.com/embed?list=${channelId}&index=1`,
//   },
//   {
//     url: `https://www.youtube.com/embedlist=${channelId}&index=3`, 
//   }
];

const VideosSection = () => {
  const [currentVideo, setCurrentVideo] = useState(0);

  const nextVideo = () => {
    setCurrentVideo((prev) => (prev + 1) % videos.length);
  };

  const prevVideo = () => {
    setCurrentVideo((prev) => (prev - 1 + videos.length) % videos.length);
  };

  const goToVideo = (index) => {
    setCurrentVideo(index);
  };

  // Keyboard navigation
  const handleKeyDown = (event) => {
    if (event.key === 'ArrowLeft') {
      prevVideo();
    } else if (event.key === 'ArrowRight') {
      nextVideo();
    }
  };

  React.useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentVideo]);

  const currentVideoData = videos[currentVideo];

  return (
    <VideosContainer>
      <Container>
        <SectionHeader>
          <h2>Our Latest Video</h2>
          <p>
            Check out our latest outdoor adventures, gear reviews, and educational content. 
            Subscribe to our YouTube channel for weekly updates!
          </p>
        </SectionHeader>
        
        <CarouselContainer>
          <VideoWrapper>
            <VideoIframe
              src={currentVideoData.url}
              title={currentVideoData.title}
              allowFullScreen
            />
          </VideoWrapper>
          
          <VideoInfo>
            <h3>{currentVideoData.title}</h3>
            <p>{currentVideoData.description}</p>
          </VideoInfo>
          
          {/* <VideoTitle>
            <div className="video-count">
              Video {currentVideo + 1} of {videos.length}
            </div>
          </VideoTitle> */}
          
          {/* <NavigationControls>
            <NavButton 
              onClick={prevVideo} 
              disabled={currentVideo === 0}
              aria-label="Previous video"
            >
              ‹
            </NavButton>
            
            <DotsContainer>
              {videos.map((_, index) => (
                <Dot
                  key={index}
                  active={index === currentVideo}
                  onClick={() => goToVideo(index)}
                  aria-label={`Go to video ${index + 1}`}
                />
              ))}
            </DotsContainer>
            
            <NavButton 
              onClick={nextVideo} 
              disabled={currentVideo === videos.length - 1}
              aria-label="Next video"
            >
              ›
            </NavButton>
          </NavigationControls> */}
        </CarouselContainer>
      </Container>
    </VideosContainer>
  );
};

export default VideosSection; 