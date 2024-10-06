import React from 'react';

const Dashboard = () => {
  return (
    <div style={styles.dashboard}>
      <h2>Farm Overview</h2>
      <div style={styles.card}>
        <h3>Current Crop Health</h3>
        <p>AI-powered analysis shows optimal crop health.</p>
      </div>
      <div style={styles.card}>
        <h3>Weather Forecast</h3>
        <p>Expected rainfall: 10mm over the next 3 days.</p>
      </div>
    </div>
  );
};

const styles = {
  dashboard: {
    padding: '2rem',
    backgroundColor: '#f4f4f4',
  },
  card: {
    backgroundColor: 'white',
    padding: '1rem',
    margin: '1rem 0',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
};

export default Dashboard;
