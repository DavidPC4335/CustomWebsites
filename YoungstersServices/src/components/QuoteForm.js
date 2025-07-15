import React, { useState } from 'react';
import { useForm } from '@formspree/react';

const QuoteForm = ({ title = "Request Your Quote" }) => {
    const [state, handleSubmit] = useForm("manwpezr");
  const [formData, setFormData] = useState({
    service: '',
    name: '',
    email: '',
    phone: '',
    address: '',
    serviceDate: '',
    details: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmitFormspree = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Quote request submitted:', formData);
    // setSubmitted(true);
    handleSubmit(formData);
  };

  return (
    <div className="quote-form">
      <h2>{title}</h2>
      
      {state.succeeded ? (
        <div className="success-message">
          <i className="fas fa-check-circle"></i>
          <h3>Your Request Has Been Submitted!</h3>
          <p>Thank you for your interest in our services. We'll contact you within 24 hours to discuss your needs and provide a detailed quote.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmitFormspree}>
          <div className="form-group">
            <label htmlFor="service" className="form-label">Service Type *</label>
            <select 
              id="service"
              name="service"
              className="form-select"
              value={formData.service}
              onChange={handleInputChange}
              required
            >
              <option value="">Select a service...</option>
              <option value="delivery">Delivery Services</option>
              <option value="moving">Moving Services</option>
              <option value="junk-removal">Junk Removal</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="name" className="form-label">Full Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-input"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email" className="form-label">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-input"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone" className="form-label">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="form-input"
              value={formData.phone}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="address" className="form-label">Service Address</label>
            <input
              type="text"
              id="address"
              name="address"
              className="form-input"
              value={formData.address}
              onChange={handleInputChange}
              placeholder="Street, City, etc."
            />
          </div>

          <div className="form-group">
            <label htmlFor="serviceDate" className="form-label">Preferred Service Date</label>
            <input
              type="date"
              id="serviceDate"
              name="serviceDate"
              className="form-input"
              value={formData.serviceDate}
              onChange={handleInputChange}
              min={new Date().toISOString().split('T')[0]}
            />
          </div>

          <div className="form-group">
            <label htmlFor="details" className="form-label">Additional Details</label>
            <textarea
              id="details"
              name="details"
              className="form-input"
              rows="4"
              value={formData.details}
              onChange={handleInputChange}
              placeholder="Please provide any additional information about your service needs..."
            />
          </div>

          <button type="submit" className="btn btn-primary btn-large">
            Get My Quote
          </button>
        </form>
      )}
    </div>
  );
};

export default QuoteForm;
