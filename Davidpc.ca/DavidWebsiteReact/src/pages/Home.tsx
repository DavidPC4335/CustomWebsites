import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="home">
      {/* Hero section */}
      <div className="main">
        <div className="main__container">
          <div className="main__content">
            <h1>Hi I'm</h1>
            <h2>David Pavlove Cunsolo</h2>
            <p>University of Guelph Software Engineering</p>
            <button className="main__btn">
              <Link to="/resume">See My Resume</Link>
            </button>
          </div>
          <div className="main__img--container">
            <img src="/images/headshot.png" alt="headshot" id="main__img" />
          </div>
        </div>
      </div>

      {/* Projects and Qualifications section */}
      <div className="services">
        <h1>Projects and Qualifications</h1>
        <div className="services__container">
        <div className="services__card">
            <h2>Fluent with AI tools</h2>
            <p>Comfortable with AI tools, such as Langchain,LangGraph and Agent Evaluators</p>
            <Link to="/projects">
              <button>Learn More</button>
            </Link>
          </div>
          <div className="services__card">
            <h2>Experinced Web Developer</h2>
            <p>Comfortable with React, Node.js, and Express.js to build any custom web applications</p>
            <Link to="/projects">
              <button>Learn More</button>
            </Link>
          </div>
          <div className="services__card">
            <h2>Full-stack Development</h2>
            <p>Worked extensively with verifiable credentialing infrastructures</p>
            <Link to="/projects">
              <button>Learn More</button>
            </Link>
          </div>
          <div className="services__card" >
            <h2>Built Expansive Games</h2>
            <p>With over 40,000 players around the world</p>
            <Link to="/projects">
              <button>Learn More</button>
            </Link>
          </div>
          <div className="services__card">
            <h2>Worked in Team Environments</h2>
            <p>Experienced with source control tools and Agile methodologies</p>
            <Link to="/projects">
              <button>Learn More</button>
            </Link>
          </div>
          <div className="services__card">
            <h2>Worked in Various platforms</h2>
            <p>Comfortable with many languages and environments, fast learner</p>
            <Link to="/projects">
              <button>Learn More</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home; 