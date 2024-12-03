import React from "react";

import "./css/AdminPage.css"; // Import the CSS file


const AdminPage = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    alert("Form submitted!");
  };

  const goBack = () => {
    window.history.back(); // Navigate back to the previous page
  };
  return (
    <div className="admin-page">
      <div className="admin-header">
        <h2>Admin Dashboard</h2>
        <button className="back-button" onClick={goBack}>
          Back
        </button>
      </div>
      <form className="admin-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Admin Username</label>
          <input type="text" id="username" name="username" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Admin Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required />
        </div>
        <div className="form-group">
          <label htmlFor="role">Select Role</label>
          <select id="role" name="role" required>
            <option value="manager">Manager</option>
            <option value="editor">Editor</option>
            <option value="viewer">Viewer</option>
          </select>
        </div>
        <button type="submit" className="submit-button">
          Login For Admin
        </button>
      </form>
    </div>
  );
};

export default AdminPage;
