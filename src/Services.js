import React from 'react';
import './Services.css';
function Services() {
  const services = [
    { title: 'Garden Makeing', description: 'Detailed description here.' },
    { title: 'Plant Identification', description: 'Detailed description here.' },
    { title: 'Plant Disease Indentification', description: 'Detailed description here.' },
    { title: 'Garden Maintenance', description: 'Detailed description here.' },
    { title: 'Plant Water', description: 'Detailed description here.' },
    { title: 'Plant Cutting', description: 'Detailed description here.' },
    { title: 'Weather Information ', description: 'Detailed description here.' },
  
  ];

  return (
    <section className="services" id="services">
      <h2>Our Services</h2>
      <div className="service-cards">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <a href="#more">Read More</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
