import React from 'react';
import { Gap } from '.';
import DocumentReference from '../../components/DocumentReference';
import ExpandableImage from '../../components/ExpandableImage';
const Fall25Report: React.FC = () => {
  return (
    <div>
      <h1>Milch & Zucker GmbH</h1>
      <h3>AI Engineering Intern</h3>
      <h3>September 2025 - November 2025</h3>
      <h6>Gießen, Germany | on-site</h6>
      <Gap />
      <DocumentReference url="/documents/Internship_reference.pdf" filename="Reference Letter from Milch und Zucker" secondaryTitle="" />
      <Gap />
      <section>
        <h3>Overview</h3>
        <Gap height="1rem" />
        <p>
          During the Fall 2025 term, I was lucky enough to have the opportunity to move to Germany where I worked at Milch und Zucker, a leading Recruitment technology company. I contributed to research and development of AI and Verifiable credentialing features for recruiting. 
          I had an important focus on writing professional, maintainable and production-ready code while also having important architectural discussions about the design and implementation of the features.
        </p>
      </section>
      <section>
        <h3>About Milch und Zucker</h3>
        <Gap height="1rem" />
        <p>
 Since 1998,
Milch und Zucker has been developing integrated solutions for HR tech and HR marketing for
global companies. Strategy, creation, communication, and software technology - all come from
a single source. Currently, they employ around 150 people at their two locations in Gießen and Hamburg.
           I worked with the AI team on prototyping and integrating AI capabilities into their product suite.
          Learn more about them{' '}
          <a href="https://www.milchundzucker.de" target="_blank" rel="noopener noreferrer">on their website</a>.
        </p>
      </section>
      <section>
        <h3>About the Role</h3>
        <Gap height="1rem" />
        <p>
         My core responsibility for the internship was to develop and integrate a microservice that allows the ingestion of Velocity Network verifiable credentials into the platform.
         Thanks to support from the team and a speedy onboarding I was able to complete the service and demo it to the team and stakeholders. While waiting for the service to added to the roadmap, I was locky enough to work on development for other services that our team was responsible for.
         </p>
      </section>
      <section>
        <h2>Developed Prototypes & AI Integrations</h2>
        <Gap />
        <div className="report__pairs">
          <div className="report__pair">
            <div className="report__text">
              <h3>Candidate Managment AI Agent</h3>
              <p>
                The Most impactful feature I worked on was the Candidate Managment AI Agent. 
                This AI agent allows for applicants to be searched, filtered and grouped based on a plain language discussion with the agent. This was done through an integration with the existing APIs 
                and a custom agent toolset. This agent was put through a custom testing pipeline and is scheduled to be included in the next release.
              </p>
            </div>
            <div className="report__image">
              <ExpandableImage src="/images/fall25/IntegratedAgent.jpeg" alt="Admin panel for resume parsing and skill extraction" />
            </div>
          </div>

          <div className="report__pair report__pair--reverse">
            <div className="report__image">
              <ExpandableImage src="/images/fall25/velocityIntegration.jpeg" alt="Integrated AI assistant for job ad creation" />
            </div>
            <div className="report__text">
              <h3>Verifiable Credentials Integration</h3>
              <p>
                Another impactful project was the integration of the Velocity Network with the Milch und Zucker recruitment platform. 
                This allowed for secure ingestion of verifiable credentials for candidates and the verification of credentials for employers. 
                This was done through the creation of a custom microservice that enables the communication and handling of verifiable credentials between the two systems.
                I also created a demo application to help other teams and stakeholders understand the capabilities of the integration.
              </p>
            </div>
          </div>

          <div className="report__pair">
            <div className="report__text">
              <h3>Centralized AI management console</h3>
              <p>
                The AI team at MuZ has many microservices that are used throughout the platform. These need to be individually managed and configured for each company by our internal staff. 
                Because of this I created a centralized management console that allows for the management of all the microservices and their configurations. This Vue with typescript application 
                is hosted internally and used to manage the various AI agents and tools provided by the team.
              </p>
            </div>
            <div className="report__image">
              <ExpandableImage src="/images/fall25/adminPanel.jpeg" alt="Velocity integration demo for semantic search and RAG" />
            </div>
          </div>
          <Gap height="1rem" />
        </div>
      </section>
<Gap height="4rem" />
      <section className="report__section">
      <h3>Goals & Learning Outcomes</h3>
        <Gap height="1rem" />
        <p>
          My primairy goal was to strengthen my applied software engineering skills. This included design and architecture discussions, as well as the implementation of the features that were requested by managment. I wanted to improve my ability to write professinal, maintainable and production-ready code.
          My secondary goal for the work term was being able to integrate well with an international team and to learn about the culture and expectations of a German company.
          Overall, my goal was to become a more well‑rounded software engineer and collaborator, with a clearer understanding of how to build reliable software features that create value for end users.
        
          Throughout my internship I was able to work with some of the existing systems and frameworks from the company as well as develop separate microservices that interact with other aspects of the platform.

          During my development of the Candidate Managment AI Agent I was able to build using Pydantic AI, Pydantic and FastAPI. This allowed me to use the latest and greatest features of the library to build a robust and scalable agent, as well as well documented and testable APIs.
        
          Overall, I would say that I was extremely successful in forwarding and working towards my goals. I completed 3 very well made and well recieved projects and some that were even included in the latest release. I have recieved a very nice reference from my employer as well as the potential to work further with them in the future.

          I would say that I have also integrated well with the working culture although my german still leaves something to be desired! I would say that my biggest difference from a local worker would be the language but outside of that I would say that I fit in well.

          I'm very grateful to be able to have worked and learned from such great people as well as do a semester abroad. I fell that I have improved both my social and technical abilities as well as my ability to work in a team.
        </p>
      </section>
      <section className="report__section">
        <h3>Reflection</h3>
        <Gap height="1rem" />
        <p >
      Reflecting on my original goals for this work term, I am proud to say that I was able to complete the vast majority of what I set out to achieve. 
      My primary goal was to strengthen my applied software engineering skills, particularly around designing, implementing, and shipping robust production-ready code.
       I was able to work on a variety of challenging projects. This includes the Candidate Management AI Agent, the verifiable credentials microservice, 
       and the centralized AI management console. Each of these projects required a range of technical and architectural skills. 
       Through these projects,I gained significant experience working with modern frameworks (such as FastAPI and Pydantic AI), integrating new pieces into existing systems, 
        and improving my ability to collaborate in a professional, international team setting. I am so thankful to be able to have worked with such great people and to have been able to grow as a person and as an AI engineer.
      </p>
      </section>
      <Gap height="4rem" />
      <section className="report__section">
        <h3>Conclusion</h3>
        <Gap height="1rem" />
        <p>
            This placement in Germany was a valuable opportunity to grow as and develop both as a person and as an AI engineer. This work term allowed me to collaborate across teams and cultures, and contribute to a product that is used by both candidates and recruiters across industries.

          I plan to build on these experiences and continue improving my skills while contributing to AI features that create a positive impact in peoples lives. I would also like to make a special
           acknowledgement to my managers and colleagues at Milch und Zucker for their support and guidance.
        </p>
      </section>
    </div>
  );
};

export default Fall25Report;
