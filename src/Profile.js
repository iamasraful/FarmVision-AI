import React, { useState } from "react";
import "./ProfileSection.css";
import defaultProfile from "./image/default-profile.png"; // Placeholder image

function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [bio, setBio] = useState("Passionate web developer exploring the latest tech.");
  const [selectedTab, setSelectedTab] = useState("details");
  
  const toggleEdit = () => setIsEditing(!isEditing);
  const handleBioChange = (e) => setBio(e.target.value);
  const handleTabChange = (tab) => setSelectedTab(tab);

  return (
    <div className="profile-section">
      <div className="profile-card">
        <div className="profile-image-container">
          <img src={defaultProfile} alt="Profile" className="profile-image" />
          <button className="edit-photo-btn">Change Photo</button>
        </div>

        <div className="profile-info">
          <h2 className="profile-name">John Doe</h2>
          
          {isEditing ? (
            <textarea
              value={bio}
              onChange={handleBioChange}
              className="bio-input"
            />
          ) : (
            <p className="profile-bio">{bio}</p>
          )}
          
          <button onClick={toggleEdit} className="edit-bio-btn">
            {isEditing ? "Save" : "Edit Bio"}
          </button>
        </div>

        <div className="profile-tabs">
          <button
            onClick={() => handleTabChange("details")}
            className={`tab-button ${selectedTab === "details" ? "active" : ""}`}
          >
            Details
          </button>
          <button
            onClick={() => handleTabChange("settings")}
            className={`tab-button ${selectedTab === "settings" ? "active" : ""}`}
          >
            Settings
          </button>
        </div>

        <div className="tab-content">
          {selectedTab === "details" ? (
            <div>
              <h3>Details</h3>
              <p>Email: johndoe@example.com</p>
            </div>
          ) : (
            <div>
              <h3>Settings</h3>
              <p>Account Settings and Preferences</p>
              <button className="logout-btn">Logout</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Profile;

  