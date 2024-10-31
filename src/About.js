import React from "react";
import "./About.css";
import SayanImg from "./image/sayanph-modified.png";
import AsrafulImg from "./image/DSC_8918-photoaidcom-cropped.jpg.png";

function About() {
  const navigateTo = (path) => {
    window.location.href = path;
  };

  return (
    <section className="about" id="about">
      <div className="about-content">
        <h2 className = "about-text-two">About Us</h2>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>

        <div className="about-images">
          <img src={AsrafulImg} alt="Team Member 1" className="circle-image" />
          <img src={SayanImg} alt="Team Member 2" className="circle-image" />
        </div>

        <div className="read-more">
          <button onClick={() => navigateTo("/about-us")}>
            Read More
          </button>
        </div>
      </div>
    </section>
  );
}

export default About;
