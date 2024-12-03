import React from 'react';

import "./css/Footer.css"

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p className="Text-Three">© 2024 FarmVision AI. All rights reserved.</p>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#333',
    color: 'white',
    textAlign: 'center',
    padding: '1rem',
    position: 'relative',
    bottom: 0,
    marginTop: '2rem',
    width: '100%',
  },

};

export default Footer;
