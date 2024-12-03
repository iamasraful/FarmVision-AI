import React, { useState } from 'react';
<<<<<<< HEAD
import './css/Contact.css';
=======
import './Contact.css';
>>>>>>> 515ec11b07e05ec0e0490fe56655dd0b7113d2dd

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission here (e.g., send data to a server)
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
  };

  const goBack = () => {
    window.location.href = '/#home'; // Adjust the path if needed for your home section or page
  };

  return (
    <div className="contact-page">
      <div className="contact-header">
        <h2>Contact Us</h2>
        <button className="back-button" onClick={goBack}>← Back to Home</button>
      </div>
      {isSubmitted ? (
        <div className="thank-you-message">
          <h3>Thank you for reaching out!</h3>
          <p>We will get back to you shortly.</p>
          <button className="back-button" onClick={goBack}>← Back to Home</button>
        </div>
      ) : (
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-button">Send Message</button>
        </form>
      )}
    </div>
  );
}

export default Contact;
