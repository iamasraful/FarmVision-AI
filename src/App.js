import './Header.css';
import './Services.css';
import './About.css';


import Header from './Header.js';
import Services from './Services.js';
import About from './About.js';
import Testimonials from './Testimonials.js';
import Footer from './Footer.js';

function App() {
  return (
    <div style={styles.appContainer}>
      <Header />
      <Services />
      <About />
      <Testimonials />
     <Footer/>
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


