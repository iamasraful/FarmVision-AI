import React from 'react';

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <h1 style={styles.logo}>Farmvision AI</h1>
      <ul style={styles.navLinks}>
        <li>Dashboard</li>
        <li>Reports</li>
        <li>Recommendations</li>
        <li>Settings</li>
      </ul>
    </nav>
  );
};

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem',
    flexWrap: 'wrap',
    backgroundColor: '#4CAF50',
  },
  logo: {
    color: 'white',
    fontSize: '24px',
  },
  navLinks: {
    listStyle: 'none',
    display: 'flex',
    gap: '1rem',
    flexWrap: 'wrap',
    padding: 0,
    color: 'white',
  },
};

export default Navbar;
