import React from 'react';
import WhyChooseUs from '../components/WhyChooseUs';

const About = () => {
  return (
    <div className="about-page">
      <section className="page-header">
        <div className="container">
          <h1 className="section-title">About Youngsters Services</h1>
          <p className="section-subtitle">
            Your trusted partner for reliable delivery, moving, and junk removal services
          </p>
        </div>
      </section>

      <section className="about-content">
        <div className="container">
          <div className="about-grid">
            <div className="about-text">
              <h2>Our Story</h2>
              <p>
                Founded with a vision to provide fast, reliable, and affordable services, 
                Youngsters Services has been serving our community for over a decade. 
                We understand that moving, deliveries, and junk removal can be stressful, 
                which is why we're committed to making these experiences as smooth as possible.
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
                <h3>10+</h3>
                <p>Years of Experience</p>
              </div>
              <div className="stat-item">
                <h3>5000+</h3>
                <p>Happy Customers</p>
              </div>
              <div className="stat-item">
                <h3>50+</h3>
                <p>Team Members</p>
              </div>
              <div className="stat-item">
                <h3>24/7</h3>
                <p>Customer Support</p>
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
                To become the most trusted and reliable service provider in our 
                community, known for our commitment to customer satisfaction and 
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