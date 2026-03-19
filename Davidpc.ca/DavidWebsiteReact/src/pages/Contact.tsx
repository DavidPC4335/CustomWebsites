import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    Email: '',
    phone: '',
    Message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // The form will be handled by Formspree
    const form = e.target as HTMLFormElement;
    form.submit();
  };

  return (
    <div className="contact-page">
      {/* Header */}
      <div className="contact__header">
        <h1>Get In Touch</h1>
        <p>
          Ready to work together? Have a question about my projects? I'd love to hear from you!
        </p>
      </div>

      {/* Main Contact Content */}
      <div className="contact__content">
        <div className="contact__container">
          
          {/* Contact Information */}
          <div className="contact__info">
            <h2>Let's Connect</h2>
            <p>
              I'm always open to discussing new opportunities, collaborations, 
              or just having a conversation about technology and software development.
            </p>
            
            <div className="contact__methods">
              <div className="contact__method">
                <div className="contact__method-icon">
                  <i className="fa-regular fa-envelope"></i>
                </div>
                <div className="contact__method-info">
                  <h3>Email</h3>
                  <a href="mailto:davidpc4335@gmail.com">davidpc4335@gmail.com</a>
                </div>
              </div>
              
              <div className="contact__method">
                <div className="contact__method-icon">
                  <i className="fab fa-linkedin"></i>
                </div>
                <div className="contact__method-info">
                  <h3>LinkedIn</h3>
                  <a href="https://www.linkedin.com/in/davidpavlovecunsolo/" target="_blank" rel="noopener noreferrer">
                    View Profile
                  </a>
                </div>
              </div>
              
              <div className="contact__method">
                <div className="contact__method-icon">
                  <i className="fab fa-github"></i>
                </div>
                <div className="contact__method-info">
                  <h3>GitHub</h3>
                  <a href="https://github.com/DavidPC4335" target="_blank" rel="noopener noreferrer">
                    Check out my code
                  </a>
                </div>
              </div>
            </div>
            
            {/* Social Icons */}
            <div className="contact__social">
              <h3>Follow Me</h3>
              <div className="social__icons--contactme">
                <a href="https://github.com/DavidPC4335" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/davidpavlovecunsolo/" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="mailto:davidpc4335@gmail.com">
                  <i className="fa-regular fa-envelope"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact__form-section">
            <div className="form-container">
              <h2>Send a Message</h2>
              <p>Fill out the form below and I'll get back to you as soon as possible.</p>
              
              <form 
                className="contact__form" 
                action="https://formspree.io/f/meqyejqw" 
                method="POST"
                onSubmit={handleSubmit}
              >
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">
                      <i className="fa-solid fa-user"></i>
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="Name"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="email">
                      <i className="fa-solid fa-envelope"></i>
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="Email"
                      placeholder="your.email@example.com"
                      value={formData.Email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="subject">
                    <i className="fa-solid fa-tag"></i>
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="Subject"
                    placeholder="What's this about?"
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">
                    <i className="fa-regular fa-comment-dots"></i>
                    Message
                  </label>
                  <textarea
                    id="message"
                                          name="Message"
                      placeholder="Tell me about your project, question, or just say hello!"
                      rows={6}
                      value={formData.Message}
                      onChange={handleChange}
                    required
                  />
                </div>
                
                <button className="form-submit-btn" type="submit">
                  <i className="fas fa-paper-plane"></i>
                  Send Message
                </button>
                
                <p className="form-note">
                  Powered by <a href="https://Formspree.io" target="_blank" rel="noopener noreferrer">Formspree</a>
                </p>
              </form>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Contact; 