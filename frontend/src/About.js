import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for React Router navigation

import "./css/About.css";

import SayanImg from "./image/sayanph-modified.png";
import AsrafulImg from "./image/DSC_8918-photoaidcom-cropped.jpg.png";

function About() {
  const navigate = useNavigate();

  return (
    <section className="about" id="about">
      <div className="about-content">
        <h2 className="about-text-two">About Us</h2>

        <div className="about-images">
          <img src={AsrafulImg} alt="Asraful" className="circle-image" />
          <img src={SayanImg} alt="Sayan" className="circle-image" />
        </div>
        
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>

        <div className="read-more">
          <button onClick={() => navigate("/about-us")}>
            Know More
          </button>
        </div>
      </div>
    </section>
  );
}

export default About;
