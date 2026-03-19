import React from 'react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <div className="about">
      {/* Header */}
      <div className="contact__header">
        <h1>About Me</h1>
      </div>

      {/* Main content */}
      <div className="project">
        <h1>About Me</h1>
        <p>
          My Name is David and I am a proficient Software Engineering student at the University of Guelph. 
          I am a fast learner and an excellent collaborator who enjoys a challenge. My experience programming 
          in many software environments makes me an ideal candidate for an entry-level technical position.
        </p>
        <p>
          I am also a well-rounded individual who enjoys playing sports such as basketball and volleyball. 
          I am an active member of the circus scene and participate in international conventions and meetings.
        </p>
        
        <div className="about__header--wrapper">
          <img src="/images/headshot.png" alt="David Pavlove Cunsolo" className="aboutme__headshot" />
        </div>
        
        <h1>About the Website</h1>
        <p>
          This website is made completely using React, TypeScript and modern CSS. I learned valuable skills and 
          strategies developing this site such as visual layout styles and deployment methods. A full copy 
          of the source code can be found on{' '}
          <a href="https://github.com/DavidPC4335" target="_blank" rel="noopener noreferrer">
            Github
          </a>.
        </p>
        <p>
          The Domain is registered and hosted using AWS services. It is stored in an S3 bucket and distributed 
          using cloudfront. These tools create a robust hosting system for my website.
        </p>
        
        <div className="awslogo__wrapper">
          <img src="/images/awsLogos1.png" alt="AWS logo" />
          <img src="/images/awsLogos2.png" alt="AWS logo" />
        </div>
        
        <p>
          Feel free to <Link to="/contact">contact me</Link> if you have any questions.
        </p>
      </div>
    </div>
  );
};

export default About; 