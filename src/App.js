import './Header.css';
import './Services.css';
import './About.css';
import './Testimonials.css';
import './Contact.css';
import './RegisterLogin.css';
import './AdminPage.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './Header.js';
import Services from './Services.js';
import About from './About.js';
import Testimonials from './Testimonials.js';
import Footer from './Footer.js';
import Contact from './Contact.js';
import RegisterLogin from './RegisterLogin.js';
import AdminPage from './AdminPage.js';
import GardenMaking from './GardenMaking.js';

function App() {
  return (
    <Router>
      <div style={styles.appContainer}>
        <Header />
        <Routes>
          <Route path="/" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact-page" element={<Contact />} />
          <Route path="/register-login-page" element={<RegisterLogin />} />
          <Route path="/admin-page" element={<AdminPage />} />
          <Route path="/garden" element={<GardenMaking />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

const styles = {
  appContainer: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
};

export default App;
