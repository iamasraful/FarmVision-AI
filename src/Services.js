import React from "react";
import "./Services.css";
import { useNavigate } from "react-router-dom";
function Services() {
  const services = [
    {
      title: "Garden Making",
      description: "Detailed description here.",
      icon: "fas fa-seedling",
    },
    {
      title: "Plant Identification",
      description: "Detailed description here.",
      icon: "fas fa-search",
    },
    {
      title: "Plant Disease Identification",
      description: "Detailed description here.",
      icon: "fas fa-virus",
    },
    {
      title: "Planting & Upgrade",
      description: "Detailed description here.",
      icon: "fas fa-leaf",
    },
    {
      title: "Bonsai Care",
      description: "Detailed description here.",
      icon: "fas fa-tree",
    },
    {
      title: "Garden Maintenance",
      description: "Detailed description here.",
      icon: "fas fa-wrench",
    },
    {
      title: "Plant Water",
      description: "Detailed description here.",
      icon: "fas fa-water",
    },
    {
      title: "Plant Cutting",
      description: "Detailed description here.",
      icon: "fas fa-cut",
    },
    {
      title: "Weather Information",
      description: "Detailed description here.",
      icon: "fas fa-cloud-sun",
    },
  ];
  const navigate = useNavigate();
  // Function to handle clicking the card
  const handleCardClick = (serviceTitle) => {
    navigate(`/services/${serviceTitle}`);
    // You can add logic here for navigation, showing modal, etc.














  };

  return (
    <section className="services" id="services">
      <h2>Our Services</h2>

      <div className="service-cards">
        {services.map((service, index) => (
          <div
            key={index}
            className="service-card"
            onClick={() => handleCardClick(service.title)} // Make card clickable
          >
            <i className={`${service.icon} service-icon`}></i>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            {/* Separator line */}
            <hr className="separator-line" />
            {/* "Read More" text */}
            <p className="read-more-text">read more for click the card</p>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Services;
