import React, { useState } from 'react';
import './Header.css';

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header className="header">
      <div className="header-content">
        <div className="header-top">
          <h1>FarmVision AI</h1>
          <button className="hamburger" onClick={toggleNav}>
            {isNavOpen ? '✖' : '☰'}
          </button>
        </div>
        <nav className={isNavOpen ? 'open' : ''}>
          <ul id="navbar">
            <li><a href="#home" onClick={toggleNav}>Home</a></li>
            <li><a href="#about" onClick={toggleNav}>About</a></li>
            <li><a href="#services" onClick={toggleNav}>Services</a></li>
            <li><a href="#clients" onClick={toggleNav}>Clients</a></li>
            <li><a href="#blog" onClick={toggleNav}>Blog</a></li>
            <li><a href="#contact" onClick={toggleNav}>Contact Us</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
