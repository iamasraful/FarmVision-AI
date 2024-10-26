import React, { useState } from "react";
import "./Header.css";
import logo from "./image/farmvision_logo.png";
function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  const navigateTo = (path) => {
    window.location.href = path;
    toggleNav();
  };
  return (
    <header className="header">
      <div className="header-content">
        <div className="header-top">
          <div className="logo">
            <img src={logo} alt="Logo" />
            <h2>FarmVision</h2>
          </div>
          <button className="hamburger" onClick={toggleNav}>
            {isNavOpen ? "✖" : "☰"}
          </button>
        </div>
        <nav className={isNavOpen ? "open" : ""}>
          <ul id="navbar">
            <li>
              <a href="#home" onClick={() => navigateTo("/")}>
                Home
              </a>
            </li>
            <li>
              <a href="#services" onClick={() => navigateTo("/services")}>
                Services
              </a>
            </li>
            <li>
              <a href="#clients" onClick={() => navigateTo("/testimonials")}>
                Clients
              </a>
            </li>
            <li>
              <a href="#about" onClick={() => navigateTo("/about-two")}>
                About
              </a>
            </li>
            <li>
              <a
                href="#contact-page"
                onClick={() => navigateTo("/contact-page")}
              >
                Contact Us
              </a>
            </li>
            <li>
              <a
                href="#register-login-page"
                onClick={() => navigateTo("/register-login-page")}
              >
                Login / Register{" "}
              </a>
            </li>
            <li>
              <a href="#about" onClick={() => navigateTo("/admin-page")}>
                Admin
              </a>
            </li>
            <li>
              <a href="#revew" onClick={() => navigateTo("/revew-Page")}>
                Review
              </a>
            </li>
          </ul>
        </nav>
        <div className="header-buttons">
          <button onClick={() => navigateTo("/about-two")} className="read-more">
            Read More
          </button>
          <button
            onClick={() => navigateTo("/contact-page")}
            className="contact-us"
          >
            Contact Us
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
