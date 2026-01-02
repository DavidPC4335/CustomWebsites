import React from 'react';
import { Gap } from '.';
import ExpandableImage from '../../components/ExpandableImage';
import CredentialEngine from '../../assets/WorkReports/credeng-finder.png';
import LandingPage from '../../assets/WorkReports/landing-page.png';
import Matcher from '../../assets/WorkReports/matcher.png';

const Summer25Report: React.FC = () => {
  return (
    <div>
      <h1>Summer Placement at Intellicampus</h1>
      <h3>Software Engineering I.C</h3>
      <h3>May 2025 - August 2025</h3>
      <Gap />
      <section>
        <h3>Overview</h3>
        <Gap height="1rem" />
        <p>
          During the Summer 2025 term, I completed a work placement at Intellicampus, where I was fortunate enough to be brought on as part of the development of a cutting edge Verifiable Credentialing (VC) platform.
          I was responsible for organizing the development of the platform. As well as developing custom integrations with third parties.
          
           In addition to this, I was responsible for the development of the user-facing landing page as well as various AI Prototypes that intellicampus is exploring.
        </p>
      </section>
      <section>
        <h3>About Intellicampus</h3>
        <Gap height="1rem" />
        <p>
        Intellicampus is a higher education development company that is focused on using new technologies and AI to improve the student experience. They work closley with Beyond academics to provide a full suite of services to students.
        See more about them <a href="https://intellicampus.com/about-us" target="_blank" rel="noopener noreferrer">here</a>
        </p>
      </section>

      <section>
        <h2>Developed Prototypes & Integrations</h2>
        <Gap />
        <p>All of the following prototypes were built almost entirely by me with some integration work with the rest of the team.</p>
        <Gap />
        <div className="report__pairs">
          <div className="report__pair">
            <div className="report__text">
              <h3>Credential Engine Integration</h3>
              <p>
                I built a Fully functional integration with the Credential Engine using their graph search APIs. I was responsible for onboarding the organization and using the application's 
                existing UI layers to imporve the credential issuance flow. I also developed a mapping tool from the Credential Engine to the application's existing data model.
              </p>
            </div>
            <div className="report__image">
              <ExpandableImage src={CredentialEngine} alt="Credential Engine Integration" />
            </div>
          </div>

          <div className="report__pair report__pair--reverse">
            <div className="report__image">
                <ExpandableImage src={LandingPage} alt="Landing Page" />
                </div>
            <div className="report__text">
              <h3>Student Landing Page</h3>
              <p>
                I was responsible for the development of the student landing page. This is a clean, design-focused site that is crucial to imporve conversion rates. 
                The page was made using Material UI and React. as well as a custim toolset to pull Credential information and validate the user's preauth link. This required some integration with the platform to generate correct links as well as 
                doing the scaled deployment and testing.
              </p>
            </div>
            
          </div>

          <div className="report__pair">
            <div className="report__text">
              <h3>Multiple RAG Prototypes</h3>
              <p>
               Developed two different AI assistants to provide imformative discussions about Verifiable Credentials and a second with a focus on College course selection and financial aid information.
               Built using LangChain and OpenAI.
               The first was built using a standard RAG pipeline.
               The second was built using a custom agent toolset to allow it to search and pull relevant data into the discussion.
               A major goal of these is to give a visual and hands-on demonstration on how different search values, paramaters, and frameworks can affect the results of an assistant.
              </p>
            </div>
            <div className="report__image">
              <ExpandableImage src="/images/rag.gif" alt="RAG prototype demo" />
            </div>
          </div>
          <Gap height="1rem" />
        </div>
        <div className="report__pair report__pair--reverse">
            <div className="report__image">
                <ExpandableImage src={Matcher} alt="Matcher" />
                </div>
            <div className="report__text">
              <h3>AI Scholarship Matcher</h3>
              <p>
                I was responsible for the development of the custom scholarship matcher. This is a tool that allows students to find scholarships that are relevant to them.
                It was built using React and TypeScript. and uses the OpenAI API to generate the rankings.
                The tool was built and demoed by me to show the potential of the new and custom development solutions.
                Built using react and supabase.
              </p>
            </div>
            
          </div>
      </section>
<Gap height="4rem" />
      <section className="report__section">
      <h3>Goals & Learning Outcomes</h3>
        <Gap height="1rem" />
        <p>
          My main goal for this work term was to gain a comprehensive understanding of the software development process, from the initial stages of planning and requirements gathering all the way through to implementation, testing, and deployment. I wanted to immerse myself in the day-to-day workflow of a professional development team, learning not only the technical aspects of building software but also the collaborative and organizational skills required to deliver a successful product as part of a team. 

          Another significant goal for me was to deepen my knowledge of product development, particularly in terms of how to effectively present, position, and demonstrate a product to various stakeholders. Throughout my time at Intellicampus, I had the opportunity to participate in and even lead several key demos, showcasing our work to different schools as well as to a broader community of fellow builders, developers, and potential users. These experiences helped me develop my communication and presentation skills, and gave me valuable insight into how to tailor technical information for different audiences.

          Additionally, I set out to learn more about working in a multicultural and distributed team environment. One of the most rewarding learning outcomes was collaborating closely with a team of talented developers from India. This experience not only improved my ability to work across time zones and cultural differences, but also gave me a deeper appreciation for diverse perspectives and approaches to problem-solving. I learned about their work culture, communication styles, and the unique strengths they brought to the team, which enriched both the project and my own professional growth.

          Overall, my goals for this work term were to become a more well-rounded developer, to understand the full lifecycle of product development, and to build strong collaborative relationships with colleagues from around the world. I feel that I made significant progress in all of these areas, and the experiences I gained at Intellicampus will continue to shape my approach to software development and teamwork in the future.
        </p>
      </section>
      <section className="report__section">
        <h3>Reflection</h3>
        <Gap height="1rem" />
        <p >
          My experience working at Intellicampus was both rewarding and transformative. Throughout my time there, I gained a deep understanding of the software development lifecycle, from initial ideation and requirements gathering to implementation, testing, and deployment. Collaborating closely with a diverse team of developers, designers, and product managers taught me the importance of clear communication, adaptability, and collective problem-solving in delivering a successful product.

          I especially appreciated the entrepreneurial environment at Intellicampus, which fostered creativity and encouraged me to take initiative. Being entrusted with meaningful responsibilities and having the chance to contribute directly to a product that will be used by students was both motivating and fulfilling. The fast-paced, startup-like culture pushed me to learn quickly and adapt to new challenges, while also providing the freedom to experiment with new ideas and technologies.

          One of the most valuable aspects of my internship was the exposure to cutting-edge AI development tools and frameworks. Intellicampus and Beyond place a strong emphasis on innovation and automation, which meant I was able to work hands-on with modern technologies such as OpenAI, LangChain, and custom agent toolsets. This not only enhanced my technical skills but also gave me insight into how AI can be leveraged to solve real-world problems in education.

          Additionally, working with an international team, including developers from India, broadened my perspective on global collaboration and cultural differences in the workplace. I learned how to navigate time zone differences, communicate effectively across cultures, and appreciate diverse approaches to problem-solving. Overall, my time at Intellicampus has significantly contributed to my growth as a developer and as a professional, and I am grateful for the opportunity to have been part of such an innovative and forward-thinking organization.
           
           Overall, I completed what I had set out to do, demoing, imporving my skills, and learning a lot about the software development process.
            </p>
      </section>
      <Gap height="4rem" />
      <section className="report__section">
        <h3>Conclusion</h3>
        <Gap height="1rem" />
        <p>
            Overall, The opportunities and lerning outcomes of, working with dynamic teams, improving my development skills, and working with AI tools and frameworks were all very valuable.
            I accomplished my goals and got to make lots of new connections in higher ed and beyond.    

          I plan to continue to work on the projects part-time and to continue to improve my skills.
          I am grateful for the opportunity to have been part of such an innovative and forward-thinking organization.
        </p>
      </section>
    </div>
  );
};

export default Summer25Report;
