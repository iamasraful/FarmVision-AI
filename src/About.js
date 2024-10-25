import React from "react";
import "./About.css";

function About() {
  // Function to handle navigation
  const navigateTo = (path) => {
    window.location.href = path;
  };

  return (
    <section className="about" id="about">
      <div className="about-content">
        <h2>About Us</h2>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>
        <div className="read-more">
        <button 
        onClick={() => navigateTo("/about-two")} className="read-more">
          Read More
        </button>
        </div>
      </div>
    </section>
  );
}

export default About;
