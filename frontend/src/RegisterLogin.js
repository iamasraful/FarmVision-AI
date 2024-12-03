import React, { useState } from 'react';

import './css/RegisterLogin.css';

function RegisterLogin() {
  // State to manage active tab
  const [activeTab, setActiveTab] = useState('login');

  // State to manage uploaded image file
  const [image, setImage] = useState(null);

  // Function to switch between tabs
  const switchTab = (tab) => {
    setActiveTab(tab);
  };

  // Function to handle image upload and preview
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file)); // Creates a preview URL for the uploaded image
    }
  };

  return (
    <div className="register-login-page">
      {/* Tab header with Login and Register buttons */}
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

      {/* Tab content for Login and Register forms */}
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

            <button className="submit-buttonTwo">Reset Your Password</button>

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
            <div className="form-group">

              <label> Confirm Password</label>
              <input type="password" placeholder="Enter Password" />
            </div>
            <div className="form-group">

          <label htmlFor="role">Select  Gender</label>
          <select id="role" name="role" required>
            <option value="manager">Male</option>
            <option value="editor">Female</option>
            <option value="viewer">Transgender</option>
          </select>
        </div>

            {/* Image Upload Section */}
            <div className="form-group">
              <label>Profile Image</label>
              <input type="file" onChange={handleImageUpload} />
            </div>

            {/* Preview of the uploaded image */}
            {image && (
              <div className="image-preview">
                <img src={image} alt="Profile Preview" />
              </div>
            )}

            <button className="submit-button">Register</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default RegisterLogin;
