import React from 'react';
import { Link } from 'react-router-dom';

const Resume: React.FC = () => {
  return (
    <div className="resume-page">
      {/* Header */}
      <div className="contact__header">
        <h1>See My Resume</h1>
        <p>
          Feel free to <Link to="/contact">contact me</Link> if you have any questions or would like to set up an interview.
        </p>
        
        {/* Social Icons */}
        <div className="social__icons--contactme">
          <a href="https://github.com/DavidPC4335" className="social__icon--link" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/davidpavlovecunsolo/" className="social__icon--link" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="mailto:davidpc4335@gmail.com" className="social__icon--link" target="_blank" rel="noopener noreferrer">
            <i className="fa-regular fa-envelope"></i>
          </a>
        </div>
      </div>

      {/* Resume Display */}
      <div className="resume__wrapper">
        <div className="resume__container">
          <div className="resume__download-section">
            <a
              href="/images/Resume.pdf"
              download="David_Pavlove_Cunsolo_Resume.pdf"
              className="resume__download-btn"
            >
              <i className="fas fa-download"></i>
              Download PDF
            </a>
            <a
              href="/images/Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="resume__view-btn"
            >
              <i className="fas fa-external-link-alt"></i>
              Open in New Tab
            </a>
          </div>
          
          <div className="resume__iframe-container">
            <iframe
              src="/images/Resume.pdf"
              title="David Pavlove Cunsolo Resume"
              className="resume__iframe"
            >
              <div className="resume__fallback">
                <p>This browser does not support PDF viewing.</p>
                <p>Please use one of the options above to view or download the resume.</p>
                <a 
                  href="/images/Resume.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="resume__fallback-link"
                >
                  Download Resume PDF
                </a>
              </div>
            </iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume; 