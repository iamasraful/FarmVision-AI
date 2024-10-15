import React, { useState } from 'react';
import './Header.css';
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
          <h1>FRAM 
              VISION AI</h1>
          <button className="hamburger" onClick={toggleNav}>
            {isNavOpen ? '✖' : '☰'}
          </button>
        </div>
        <nav className={isNavOpen ? 'open' : ''}>
          <ul id="navbar">
            <li><a href="#home" onClick={() => navigateTo('/')}>Home</a></li>
            <li><a href="#services" onClick={() => navigateTo('/services')}>Services</a></li>
            <li><a href="#clients" onClick={() => navigateTo('/testimonials')}>Clients</a></li>
            <li><a href="#about" onClick={() => navigateTo('/about')}>About</a></li>
            <li><a href="#contact-page" onClick={() => navigateTo('/contact-page')}>Contact Us</a></li>
            <li><a href="#about" onClick={toggleNav}>Login \ Logout</a></li>
            <li><a href="#about" onClick={toggleNav}>Register</a></li>
            <li><a href="#about" onClick={toggleNav}>Admin</a></li>

          </ul>
        </nav>
        <div className="header-buttons">
        <button onClick={() => navigateTo('/about')} className="read-more">Read More</button>
        <button onClick={() => navigateTo('/contact-page')} className="contact-us">Contact Us</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
