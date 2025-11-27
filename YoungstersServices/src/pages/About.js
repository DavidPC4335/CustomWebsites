import React from 'react';
import WhyChooseUs from '../components/WhyChooseUs';
import heroBg from '../assets/hero-bg.png';
const About = () => {
  return (
    <div className="about-page">
      <section 
        className="page-header"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(13, 59, 102, 0.9), rgba(13, 59, 102, 0.7)), url(${heroBg})`
        }}
      >
        <div className="container">
          <h1 className="section-title" style={{color: 'white'}}>Our Mission</h1>
          <p className="section-subtitle" style={{color: 'white'}}>
            Your trusted partner for friendly and reliable services.
          </p>
        </div>
      </section>

      <section className="about-content">
        <div className="container">
          <div className="about-grid">
            <div className="about-text">
              <h2>Our Story</h2>
              <p>
                What started as an idea between our two founders Daniel and Matt, has grown into a successful business that has been serving our community since 2024.
              </p>
              <p>
                Our team of experienced professionals takes pride in delivering exceptional 
                service that exceeds expectations. Whether you need a quick delivery, 
                a complete home move, or junk removal services, we handle every job with 
                care and professionalism.
              </p>
            </div>
            
            <div className="about-stats">
              <div className="stat-item">
                <h3>5.0</h3>
                <p>Average Rating</p>
              </div>
              <div className="stat-item">
                <h3>500+</h3>
                <p>Happy Customers</p>
              </div>
              <div className="stat-item">
                <h3>5+</h3>
                <p>Corporate Clients</p>
              </div>
              <div className="stat-item">
                <h3>24/7</h3>
                <p>Emergency Support</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mission-vision">
        <div className="container">
          <div className="mission-vision-grid">
            <div className="mission">
              <h3>Our Mission</h3>
              <p>
                To provide exceptional delivery, moving, and junk removal services 
                that make our customers' lives easier while maintaining the highest 
                standards of professionalism and care.
              </p>
            </div>
            
            <div className="vision">
              <h3>Our Vision</h3>
              <p>
                To become the most trusted and reliable service provider in Guelph and surrounding communities, known for our commitment to customer satisfaction and 
                environmental responsibility.
              </p>
            </div>
          </div>
        </div>
      </section>

      <WhyChooseUs />
    </div>
  );
};

export default About; 