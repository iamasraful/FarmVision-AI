import React from "react";
import { Link } from "react-router-dom";
import "./Services.css";
function Services() {
  const services = [
    {
      title: "Garden Making",
      description: "Detailed description here.",
      icon: "fas fa-seedling",
      link: "/garden",
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

  return (
    <section className="services" id="services">
      <h2>Our Services</h2>

      <div className="service-cards">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <i className={`${service.icon} service-icon`}></i>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            {service.link ? (
              <Link to={service.link}>Read More</Link>
            ) : (
              <a href="#more">Read More</a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
