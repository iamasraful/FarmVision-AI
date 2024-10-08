import React from 'react';
import './Testimonials.css';

function Testimonials() {
  const testimonials = [
    {
      name: 'John Doe',
      feedback: 'The service was exceptional, and the team was very professional!',
      image: 'https://via.placeholder.com/80', // Replace with actual image URLs or assets
    },
    {
      name: 'Jane Smith',
      feedback: 'I loved the seamless experience. Highly recommend to everyone!',
      image: 'https://via.placeholder.com/80',
    },
    {
      name: 'Sam Wilson',
      feedback: 'Great experience, will definitely be back for more services.',
      image: 'https://via.placeholder.com/80',
    },
  ];

  return (
    <div className="testimonials">
      <h2>Customer Says</h2>
      <div className="testimonials-container">
        {testimonials.map((testimonial, index) => (
          <div className="testimonial-card" key={index}>
            <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
            <div className="testimonial-name">{testimonial.name}</div>
            <div className="testimonial-feedback">"{testimonial.feedback}"</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;

