import React from 'react';
import './About.css';

function About() {
  return (
    <section className="about" id="about">
      <div className="about-content">
        <h2>About Us</h2>
        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
        <button className="read-more">Read More</button>
      </div>
      <div className="about-image">
        <img src="profile.jpg" alt="Profile" />
      </div>
    </section>
  );
}

export default About;
