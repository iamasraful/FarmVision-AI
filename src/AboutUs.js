import React from "react";
import "./AboutUs.css";
import SayanImg from "./image/sayanph-modified.png";
import AsrafulImg from "./image/DSC_8918-photoaidcom-cropped.jpg.png"

const AboutUs = () => {
  return (
    <div className="about-container">
      <div className="profile-card glass">
        <img
          className="profile-img"
          src={SayanImg}
          alt="Sayan Majumder"
        />
        <h2>Sayan Majumder (he/him)</h2>
        <p>Hybrid Developer</p>
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
        <a href="mailto:sayanmajumder566@gmail.com"><button >Email me</button></a>
      </div>
      <div className="about-text">
        <h1>About Us</h1>
        <p>
          We are tech-savvy individuals with a passion for Software Development,
          currently working on many projects. We are passionate about
          consistently advancing our knowledge and skills.
        </p>
      </div>
      <div className="profile-card glass">
        <img
          className="profile-img"
          src={AsrafulImg}
          alt="Sk Asraful"
        />
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
        <a href="mailto:su162004@gmail.com"><button >Email me</button></a>
      </div>
    </div>
  );
};

export default AboutUs;
