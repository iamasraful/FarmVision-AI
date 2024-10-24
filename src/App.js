import './Header.css';
import './Services.css';
import './About.css';
import './Testimonials.css';
import './Contact.css';
import './RegisterLogin.css'
import './AdminPage.css'
import React from 'react';
import Header from './Header.js';
import Services from './Services.js';
import About from './About.js';
import Testimonials from './Testimonials.js';
import Footer from './Footer.js';
import Contact from './Contact.js';
import RegisterLogin from './RegisterLogin.js';
import AdminPage from './AdminPage.js';


function App() {
  const getPageComponent = () => {
    switch (window.location.pathname) {
      case '/about':
        return <About />;
      case '/services':
        return <Services />;
      case '/testimonials':
        return <Testimonials />;
      case '/contact-page':
        return <Contact />;
        case '/register-login-page':
          return <RegisterLogin />;
          case '/admin-page':
            return <AdminPage/>

      default:
        return (
          
          <div>
           
    
            <Services />
            <About />
            <Testimonials />
          </div>
        );
    }
  };

  return (
    <div style={styles.appContainer}>
      <Header />
      {getPageComponent()}
      <Footer />
    </div>
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
