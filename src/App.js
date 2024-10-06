// src/App.js
import './Navbar.js' 
import './Footer.js'
import './Dashboard.js' 

import React from 'react';
// Ensure this line has a variable to capture the imported module
import './App.css';
import Navbar from './Navbar.js';
import Dashboard from './Dashboard.js';
import Footer from './Footer.js';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Dashboard/>
     <Footer/>
    </div>
  );
}

export default App;

