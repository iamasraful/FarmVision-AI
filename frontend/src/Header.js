
import React, { useEffect, useState , useRef} from "react";
import "./css/Header.css";
import logo from "./image/farmvision_logo.png";
import { FaHamburger } from "react-icons/fa";
function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const navRef = useRef(null);
 
  const toggleNav = () => {

    setIsNavOpen(!isNavOpen);
  };
  const navigateTo = (path,toggleMenu = true) => {
    if (toggleMenu) toggleNav();  
    window.location.href = path;

  };

 // Close The Nav Bar  When clicking  outside
 useEffect(() => {
  const handleOutsideClick = (event) => {
    if (
      isNavOpen &&
      navRef.current &&
      !navRef.current.contains(event.target) &&
      !event.target.classList.contains("hamburger")
    ) {
      setIsNavOpen(false); // Close the navbar
    }
  };

  document.addEventListener("click", handleOutsideClick);

  return () => {
    document.removeEventListener("click", handleOutsideClick);
  };
},[isNavOpen]);
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

              <a href="#clients" className="Clients" onClick={() => navigateTo("/testimonials")}>

                Clients
              </a>
            </li>
            <li>
              <a href="#about" onClick={() => navigateTo("/about-us")}>
                About
              </a>
            </li>
            <li>
              <a
                href="#contact-page"
                onClick={() => navigateTo("/contact-page")}
              >
                ContactUs
              </a>
            </li>
            <li>
              <a
                href="#register-login-page"
                onClick={() => navigateTo("/register-login-page")}
              >
                Login/Register{" "}
              </a>
            </li>
            <li>
              <a href="#about" onClick={() => navigateTo("/admin-page")}>

                AdminLogin

              </a>
            </li>
            <li>
              <a href="#revew" onClick={() => navigateTo("/revew-Page")}>
                Review
              </a>
            </li>
            <li>
              <a href="#profile" onClick={() => navigateTo("/profile-detail")}>
                Profile
              </a>
            </li>

            <li>
              <a href="#test" onClick={() => navigateTo("/test-message")}>
                Test
              </a>
            </li>
            <li>
              <a href="#Admin-d" onClick={() => navigateTo("/admin-dashboard")}>

                Admin/DashBoard
              </a>
            </li>
            
          </ul>
        </nav>
        <div className="header-buttons">
          <button onClick={() => navigateTo("/about-us",false)} className="read-more">
            Read More
          </button>
          <button
            onClick={() => navigateTo("/contact-page",false)}

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
