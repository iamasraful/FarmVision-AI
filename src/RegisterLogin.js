import React, { useState } from 'react';
import './RegisterLogin.css';

function RegisterLogin() {
  const [activeTab, setActiveTab] = useState('login');

  const switchTab = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="register-login-page">
      <div className="tab-header">
        <button
          className={activeTab === 'login' ? 'active' : ''}
          onClick={() => switchTab('login')}
        >
          Login
        </button>
        <button
          className={activeTab === 'register' ? 'active' : ''}
          onClick={() => switchTab('register')}
        >
          Register
        </button>
       
      </div>

      <div className="tab-content">
        {activeTab === 'login' && (
          <div className="login-form">
            <h2>Login</h2>
            <div className="form-group">
              <label>Farmer Name</label>
              <input type="text" placeholder="Enter Farmer Name" />
            </div>
            <div className="form-group">
              <label>ID</label>
              <input type="text" placeholder="Enter ID" />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="password" placeholder="Enter Password" />
            </div>
            <button className="submit-button">Login</button>
          </div>
        )}

        {activeTab === 'register' && (
          <div className="register-form">
            <h2>Register</h2>
            <div className="form-group">
              <label>Farmer Name</label>
              <input type="text" placeholder="Enter Farmer Name" />
            </div>
            <div className="form-group">
              <label>ID</label>
              <input type="text" placeholder="Enter ID" />
            </div>
            <div className="form-group">
              <label>Phone No.</label>
              <input type="text" placeholder="Enter Phone No." />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="Enter Email" />
            </div>
            <div className="form-group">
              <label>District</label>
              <input type="text" placeholder="Enter District" />
            </div>
            <div className="form-group">
              <label>Pin</label>
              <input type="text" placeholder="Enter Pin" />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="password" placeholder="Enter Password" />
            </div>
            <button className="submit-button">Register</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default RegisterLogin;
