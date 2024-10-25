import "./Header.css";
import "./Services.css";
import "./About.css";
import "./Testimonials.css";
import "./Contact.css";
import "./RegisterLogin.css";
import "./AdminPage.css";
import Header from "./Header.js";
import Services from "./Services.js";
import About from "./About.js";
import Testimonials from "./Testimonials.js";
import Footer from "./Footer.js";
import Contact from "./Contact.js";
import RegisterLogin from "./RegisterLogin.js";
import AdminPage from "./AdminPage.js";
import GardenMaking from "./GardenMaking.js";
import PlantIndentiFication from "./PlantIdentiFication.js";
import DiseaseIdentification from "./DiseaseIdentification.js";
import PlantingUpgrade from "./PalntingUpgrade.js";
import GardenMaintainence from "./GardenMaintainence.js";
import BonsaiCare from "./BonsaiCare.js";
import PlantCutting from "./PlantCutting.js";
import WeatherInformation from "./WeatherInformation.js";
import PalntWater from "./PlantWater.js";
import AbouTwo from"./AbouTwo.js"
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <Router>
      <div style={styles.appContainer}>
        <Header />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Services />
                <About />
                <Testimonials />
              </>
            }
          />

          <Route path="/about" element={<About />} />
          <Route path="/about-two" element={<AbouTwo />} />
          <Route path="/services" element={<Services />} />

          <Route path="/services/garden-making" element={<GardenMaking />} />
          <Route
            path="/services/plant-identification"
            element={<PlantIndentiFication />}
          />
          <Route
            path="/services/plant-disease-identification"
            element={<DiseaseIdentification />}
          />
          <Route
            path="/services/planting-upgrade"
            element={<PlantingUpgrade />}
          />
          <Route path="/services/bonsai-care" element={<BonsaiCare />} />
          <Route
            path="/services/garden-maintenance"
            element={<GardenMaintainence />}
          />
           <Route
            path="/services/plant-water"
            element={<PalntWater/>}
          />
           <Route
            path="/services/plant-cutting"
            element={<PlantCutting/>}
          />
           <Route
            path="/services/weather-information"
            element={<WeatherInformation/>}
          />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact-page" element={<Contact />} />
          <Route path="/register-login-page" element={<RegisterLogin />} />
          <Route path="/admin-page" element={<AdminPage />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

const styles = {
  appContainer: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
};

export default App;
