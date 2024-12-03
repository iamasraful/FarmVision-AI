import React from 'react';
<<<<<<< HEAD
import './css/Testimonials.css';
=======
import './Testimonials.css';
>>>>>>> 515ec11b07e05ec0e0490fe56655dd0b7113d2dd

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

