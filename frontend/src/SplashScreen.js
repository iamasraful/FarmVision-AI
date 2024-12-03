import React, { useEffect, useState } from "react";
<<<<<<< HEAD
import "./css/SplashScreen.css";
=======
import "./SplashScreen.css";
>>>>>>> 515ec11b07e05ec0e0490fe56655dd0b7113d2dd
import logo from "./image/farmvision_logo.png";

function SplashScreen() {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Start fade-out animation after 12 seconds
    const timer = setTimeout(() => setFadeOut(true), 12000);

    // Clean up the timer when the component unmounts
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`splash-screen ${fadeOut ? "fade-out" : ""}`}>
      <div className="splash-logo-container">
        <img src={logo} alt="Logo" className="splash-logo" />
      </div>
      <h1 className="splash-title">FarmVision</h1>
    </div>
  );
}

export default SplashScreen;
