import React from 'react';
import { Gap } from '.';
import ExpandableImage from '../../components/ExpandableImage';

const Summer2024Report: React.FC = () => {
  return (
    <div>
      <h1>Barfoot Ventures / Joynd LLC</h1>
      <h3>Software Engineering — Verifiable Credentials</h3>
      <h3>May 2024 - August 2024</h3>
      <h6>Waterloo, Ontario | Remote</h6>
      <Gap />

      <section>
        <h3>Overview</h3>
        <Gap height="1rem" />
        <p>
          During Summer 2024, I worked with Barfoot Ventures and Joynd LLC to design and build an
          all-in-one issuer and verifier platform integrated with the Velocity Network a public,
          W3C-aligned, blockchain-powered utility layer for sharing trusted career credentials.
          The goal was to enable organizations to issue verifiable credentials and verify shared
          disclosures from individuals using one streamlined experience, while aligning with the
          Velocity Network Foundation's guidance and rulebook.
          Learn more about the network on the{' '}
          <a href="https://www.velocitynetwork.foundation" target="_blank" rel="noopener noreferrer">Velocity Network Foundation site</a>.
        </p>
      </section>

      <section>
        <h3>About the Platform</h3>
        <Gap height="1rem" />
        <p>
          The platform bundles credential issuing and verification workflows into a cohesive web app:
          administrators create credential offers, manage issuances, and verify disclosures shared by
          candidates. It connects to Velocity's blockchain where cryptographic keys are stored for
          verification, while personal data remains off-chain in line with privacy best practices.
        </p>
      </section>

      <section>
        <h2>Core Features I Built</h2>
        <Gap />
        <div className="report__pairs">
          <div className="report__pair">
            <div className="report__text">
              <h3>Credential Issuance UX</h3>
              <p>
                Implemented issuer flows to configure credential specifications (e.g., assessment,
                certification, and employment), capture recipient details, attach alignments, and
                issue to the Velocity Network. I focused on clear form design, helpful defaults, and
                inline validation to reduce issuer friction.
              </p>
            </div>
            <div className="report__image">
              <ExpandableImage src="/images/velocitycreds1.png" alt="Credential issuance form" />
            </div>
          </div>

          <div className="report__pair report__pair--reverse">
            <div className="report__image">
              <ExpandableImage src="/images/velocitycreds2.png" alt="Dashboard and credential offers" />
            </div>
            <div className="report__text">
              <h3>Issuer Dashboard</h3>
              <p>
                Built the dashboard and listing views for issued offers, with status indicators for
                claimed, unclaimed, and issued credentials, plus quick actions for resending and
                revocation. I optimized table rendering for responsiveness and readability.
              </p>
            </div>
          </div>

          <div className="report__pair">
            <div className="report__text">
              <h3>Verifier Flows and Disclosures</h3>
              <p>
                Implemented the disclosure viewer to verify holder, issuer, revocation, recency, and
                tamper checks, surfacing pass/fail states with clear explanations. This enables hiring
                teams to quickly trust and act on shared credentials.
              </p>
            </div>
            <div className="report__image">
              <ExpandableImage src="/images/velocitycreds3.png" alt="Disclosure verification details" />
            </div>
          </div>

          <div className="report__pair report__pair--reverse">
            <div className="report__image">
              <ExpandableImage src="/images/velocitycreds4.png" alt="End-to-end flows collage" />
            </div>
            <div className="report__text">
              <h3>Polish, Auth, and Ops</h3>
              <p>
                Contributed to sign-in flows and basic role separation, refined UI components for
                consistency, and assisted with end-to-end demos showing issuance, wallet claiming,
                and verification. I also created product shots and demo sequences to support
                stakeholder presentations and documentation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Gap height="4rem" />

      <section className="report__section">
        <h3>Goals & Learning Outcomes</h3>
        <Gap height="1rem" />
        <p>
          I aimed to deepen my understanding of Verifiable Credentials, decentralized identity,
          and practical blockchain integrations. I learned how to design issuer and verifier flows
          that are simple for non-technical users, while meeting the network's security and privacy
          constraints. Working across product, design, and engineering helped me ship features that
          balanced usability with rigorous verification.
        </p>
      </section>

      <section className="report__section">
        <h3>Reflection</h3>
        <Gap height="1rem" />
        <p>
          Contributing to a platform on top of the Velocity Network challenged me to think carefully
          about trust, provenance, and user experience. The collaboration between Barfoot Ventures
          and Joynd LLC gave me a strong appreciation for interoperable standards and the value of a
          public, open, and governed network for credentials. The experience set a solid foundation
          for my future work with verifiable data and identity.
        </p>
      </section>

      <Gap height="4rem" />

      <section className="report__section">
        <h3>Conclusion</h3>
        <Gap height="1rem" />
        <p>
          Over the term I helped ship a usable, end-to-end issuer and verifier experience, delivered
          demos, and documented flows that align with Velocity Network best practices. This work
          strengthened my skills in TypeScript/React, product thinking, and decentralized identity.
        </p>
      </section>
    </div>
  );
};

export default Summer2024Report;


