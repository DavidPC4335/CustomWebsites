import React from 'react';
import { Link } from 'react-router-dom';

const Projects: React.FC = () => {
  return (
    <div className="projects">
      {/* Header */}
      <div className="project__header">
        <h1>My Projects</h1>
        <p>For more info about website development visit the <Link to="/about">About Page.</Link></p>
      </div>

      {/* Full Stack Web Application */}
      <div className="project">
        <h1>Full Stack Web Application</h1>
        <p>
          Velocitycreds is an all-in-one issuer and verifier of verifiable credentials that leverages the{' '}
          <a href="https://velocitynetwork.foundation" target="_blank" rel="noopener noreferrer">
            Velocity Network Blockchain.
          </a>{' '}
          This application was developed and designed as part of a 4 month work term with Barfoot Ventures inc. 
          Worked with various partners in the credentialing space to build integrations with existing infrastructures.
        </p>
        <ul className="list">
          <li>Published with containerized docker deployments and DigitalOcean</li>
          <li>Frontend built using React.js with Material UI</li>
          <li>Backend built using Express.js with MongoDB Database</li>
        </ul>
        <p>
          Hosted at:{' '}
          <a href="http://velocitycreds.com" target="_blank" rel="noopener noreferrer">
            https://velocitycreds.com
          </a>
        </p>
        <div className="img__wrapper--wide">
          <img src="/images/velocitycreds4.png" alt="velocitycreds screenshot" />
        </div>
      </div>

          {/* AI Agentic Web Application */}
          <div className="project">
        <h1>Langchain Web Application & RAG Model</h1>
        <p>
          Developed and build an AI agent that can create a game scene and play a D&D style Game.  This application was built using Langchain's javascript tools. 
           The RAG model was build using OpenAI's Embedding models and an Postgres Vector Database.
        </p>
     
        {/* <p>
          Hosted at:{' '}
          <a href="https://playwithdeepseek.netlify.app" target="_blank" rel="noopener noreferrer">
            https://playwithdeepseek.netlify.app
          </a>
        </p> */}
        <div className="img__wrapper--wide">
          <img src="/images/rag.gif" alt="rag model screenshot" />
        </div>
      </div>


      {/* Published Game Development */}
      <div className="project">
        <h1>Published Game Development</h1>
        <p>
          Designed, created and published a flushed out physics based platformer and published to various websites.
          This project was fully self-directed but went through a typical game-development cycle with various play testing.
          The published game has over <b>40,000</b> players worldwide on{' '}
          <a href="https://gx.games/games/3iodbf/grippy-yellow-ball/" target="_blank" rel="noopener noreferrer">
            gx.games
          </a>.
        </p>
        <p>An embedded build of the game can be found below:</p>
        <div className="iframe__wrapper">
          <iframe
            allowFullScreen
            src="https://grippyyellowball.netlify.app"
            frameBorder="0"
            title="Grippy Yellow Ball Game"
          />
          <a href="https://grippyyellowball.netlify.app" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
            <button className="fs__button">Full Screen</button>
          </a>
        </div>
      </div>

      {/* Educational Programs */}
      <div className="project">
        <h1>Educational Programs</h1>
        <p>
          Partnered with local elementary school teachers to design a series of web programs in alignment with the Ontario curriculum.
          Programs Included Financial literacy and fully backend supported question and response system. These applications were then compiled and hosted on a React application that tracks and rewards kids for their playtime.
        </p>
        <p>Hosted at: <a href="https://pavgames.com" target="_blank" rel="noopener noreferrer">https://pavgames.com</a></p>
        <div className="img__wrapper">
          <img src="/images/json.png" alt="JSON education screenshot" />
          <img src="/images/education.png" alt="education program screenshot" />
        </div>
      </div>

      {/* Java Team Development */}
      <div className="project">
        <h1>Java Team Development</h1>
        <p>
          Worked In a small team to develop a procedurally generated open world exploration game. This project helped
          influence my programming abilities as well as my ability to work in a self-directed team. Source code for this
          project can be found on my Github.
        </p>
        <div className="img__wrapper--wide">
          <img src="/images/terrarium.png" alt="terrarium game screenshot" />
        </div>
      </div>
    </div>
  );
};

export default Projects; 