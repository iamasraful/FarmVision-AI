import React from "react";
import "./css/AboutUs.css";
import SayanImg from "./image/sayanph-modified.png";
import AsrafulImg from "./image/DSC_8918-photoaidcom-cropped.jpg.png";

const AboutUs = () => {
  return (
    <div className="aboutus-page">
      <div className="animated-background"></div>
      <div className="about-content">
        <div className="profile-card glass animate-card">
          <img className="profile-img" src={SayanImg} alt="Sayan Majumder" />
          <h2>Sayan Majumder (he/him)</h2>
          <p>Android Developer</p>
          <div className="social-icons">
            <a href="https://www.instagram.com/sayanmajumder1">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://x.com/Sayanmajum52059">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://www.facebook.com/Sayan-Majumder">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://www.linkedin.com/in/sayan-majumder-841a92276">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
          <a href="mailto:sayanmajumder566@gmail.com">
            <button className="email-button">Email me</button>
          </a>
        </div>

        <div className="about-text">
          <h1 className=" about-us-text ">About Us</h1>
          <p>
            We are tech-savvy individuals with a passion for Software
            Development, currently working on many projects. We are passionate
            about consistently advancing our knowledge and skills.
          </p>
        </div>

        <div className="profile-card glass animate-card">
          <img className="profile-img" src={AsrafulImg} alt="Sk Asraful" />
          <h2>Sk Asraful (he/him)</h2>
          <p>Web Developer</p>
          <div className="social-icons">
            <a href="https://instagram.com/heyy_suraj">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://twitter.com/heyy_suraj">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://facebook.com/Su162004">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://linkedin.com/iamasraful">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
          <a href="mailto:su162004@gmail.com">
            <button className="email-button">Email me</button>
          </a>
        </div>
      </div>

      {/* About Project Section */}
      <div class="project-about-container">
  <div class="project-about-section">
    <h1 class="section-title">About the Project</h1>
    <p class="project-description">
      FarmVision AI is a generative AI-based project designed to revolutionize
      agricultural management. Our goal is to provide innovative solutions to help
      farmers and gardeners achieve their goals with ease and efficiency.
    </p>
    <h2 class="services-title">Our Services</h2>
    <ul class="services-list">
      <li><i class="fas fa-seedling"></i> Garden Making</li>
      <li><i class="fas fa-leaf"></i> Plant Identification</li>
      <li><i class="fas fa-virus"></i> Plant Disease Identification</li>
      <li><i class="fas fa-seedling"></i> Planting & Upgrade</li>
      <li><i class="fas fa-tree"></i> Bonsai Care</li>
      <li><i class="fas fa-garden-trowel"></i> Garden Maintenance</li>
      <li><i class="fas fa-water"></i> Plant Water</li>
      <li><i class="fas fa-cut"></i> Plant Cutting</li>
      <li><i class="fas fa-cloud-sun"></i> Weather Information</li>
    </ul>
    <p class="project-footer">FarmVision AI</p>
  </div>

 
  <div class="ppt-viewer">
    <h2 class="ppt-title">PROJECT PRESENTATION</h2>
    <iframe
      src="https://docs.google.com/presentation/d/1jOeXquDexWuqpg9PU6b5TmsBtxAwsNjo/embed"
      width="100%"
      height="400px"
      frameborder="0"
      allowfullscreen
    ></iframe>
    <a href="https://docs.google.com/presentation/d/1jOeXquDexWuqpg9PU6b5TmsBtxAwsNjo/embed" class="ppt-download-btn">Download PPT</a>
  </div>
</div>


    </div>
  );
};

export default AboutUs;
