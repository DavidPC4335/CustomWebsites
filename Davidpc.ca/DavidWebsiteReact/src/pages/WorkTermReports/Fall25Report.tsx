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
              <ExpandableImage src="/images/fall25/VelocityIntegration.jpeg" alt="Integrated AI assistant for job ad creation" />
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
                The AI team at MuZ has many microservices that are used throuought the platform. These need to be individually managed and configured for each company by our internal staff. 
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
          I aimed to strengthen my applied AI engineering skills—from problem framing and data preparation to model evaluation and integration—within a production‑oriented HR tech context. I also wanted to grow my ability to communicate with cross‑functional partners and to deliver measurable improvements to user workflows.

          I participated in design reviews and demos, translated qualitative feedback into quantitative evaluation criteria, and learned to balance accuracy, latency, and maintainability when shipping AI features.

          Working in Germany with an international team improved my collaboration skills across languages and time zones, and gave me practical exposure to domain considerations specific to HR and recruiting.

          Overall, I became a more well‑rounded AI engineer and collaborator, with a clearer understanding of how to build reliable AI features that create value for end users.
        </p>
      </section>
      <section className="report__section">
        <h3>Reflection</h3>
        <Gap height="1rem" />
        <p >
          My experience at Milch und Zucker was both rewarding and formative. I deepened my understanding of the AI product lifecycle—scoping problems, building prototypes, running evaluations, and planning integrations. Collaborating with engineers, product managers, and domain experts taught me the importance of clarity, iteration, and user‑centric design in shipping effective AI features.

          I appreciated the culture of experimentation that encouraged initiative and careful measurement. Being entrusted with meaningful work that will inform product decisions was motivating and taught me to balance innovation with robustness and maintainability.

          I also gained hands‑on experience with modern LLM tooling and evaluation methods, and learned how to adapt models and prompts to the specific constraints of HR technology and European data/privacy expectations.

          Overall, I completed what I set out to do: contribute meaningfully, improve my skills, and learn a great deal about building AI features in a real product environment.
            </p>
      </section>
      <Gap height="4rem" />
      <section className="report__section">
        <h3>Conclusion</h3>
        <Gap height="1rem" />
        <p>
            This placement in Germany was a valuable opportunity to grow as an AI engineer, collaborate with an international team, and contribute to impactful HR technology.

          I plan to build on these experiences and continue improving my skills while contributing to AI features that help both candidates and recruiters.
        </p>
      </section>
    </div>
  );
};

export default Fall25Report;
