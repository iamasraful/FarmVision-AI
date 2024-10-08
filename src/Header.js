import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <h1>GREEN SCAPE</h1>
        <nav>
          <ul id="navbar">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#clients">Client</a></li>
            <li><a href="#Setting">Blog</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </nav>
        <div className="header-buttons">
          <button className="read-more">Read More</button>
          <button className="contact-us">Contact Us</button>
        </div>
      </div>
    </header>
  );
}
export default Header; 