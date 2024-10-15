import React from 'react';
const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>© 2024 FarmVision AI. All rights reserved.</p>
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
