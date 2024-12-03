import React, { useState } from "react";
import { Bar, Doughnut, Line } from "react-chartjs-2";
<<<<<<< HEAD
import defaultProfile from "./image/default-profile.png"; // Placeholder image
=======
>>>>>>> 515ec11b07e05ec0e0490fe56655dd0b7113d2dd
import {
  Chart,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  LineElement,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";
<<<<<<< HEAD
import "./css/AdminTwo.css";
import { FaMale, FaFemale } from "react-icons/fa";
const dummyImages = [
  defaultProfile , defaultProfile , defaultProfile 
];
=======
import "./AdminTwo.css";
import { FaMale, FaFemale } from "react-icons/fa";

>>>>>>> 515ec11b07e05ec0e0490fe56655dd0b7113d2dd
// Register components with Chart.js
Chart.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  LineElement,
  PointElement,
  Tooltip,
  Legend
);

const initialServices = [
  { id: 1, name: "Garden Making", requests: 50, active: true },
  { id: 2, name: "Plant Identification", requests: 75, active: true },
  { id: 3, name: "Plant Disease Identification", requests: 60, active: true },
  { id: 4, name: "Planting Upgrade Service", requests: 45, active: false },
];

function AdminTwo() {
  const [activeUsers, setActiveUsers] = useState(120);
<<<<<<< HEAD
  const [searchQuery, setSearchQuery] = useState("");
  const [searchField, setSearchField] = useState("name");
=======
>>>>>>> 515ec11b07e05ec0e0490fe56655dd0b7113d2dd
  const [userData, setUserData] = useState([
    {
      id: 1,
      name: "User A",
      active: true,
      review: "Great app!",
      reviewApproved: true,
      gender: "male",
<<<<<<< HEAD
      reviewApproved: true,
      gender: "male",
      district: "Burdwan",
      phone: "1234567890",
      dob: "1990-01-01",
    
      image: dummyImages[0],
=======
>>>>>>> 515ec11b07e05ec0e0490fe56655dd0b7113d2dd
    },
    {
      id: 2,
      name: "User B",
      active: false,
      review: "Needs improvement.",
      reviewApproved: false,
      gender: "female",
<<<<<<< HEAD
      district: "Kolkata",
      phone: "9876543210",
      dob: "1992-05-12",
      
      image: dummyImages[1],
    },
    {
      id: 3,
      name: "User C",
      dob: "1995-12-30",
      district: "District 3",
      phone: "1231231234",
      active: true,
      review: "Very user-friendly.",
      reviewApproved: true,
      gender: "male",
      image: dummyImages[2],
    },


  ]);
  const [services, setServices] = useState(initialServices);
  const handleSearch = () => {
    return userData.filter((user) =>
      user[searchField].toLowerCase().includes(searchQuery.toLowerCase())
    );
  };
  const setPassword = (id) => {
    const newPassword = prompt("Enter new password:");
    if (newPassword) {
      alert(`Password for User ${id} set to: ${newPassword}`);
    }
  };
=======
    },
  ]);
  const [services, setServices] = useState(initialServices);

>>>>>>> 515ec11b07e05ec0e0490fe56655dd0b7113d2dd
  const toggleServiceStatus = (id) => {
    setServices(
      services.map((service) =>
        service.id === id ? { ...service, active: !service.active } : service
      )
    );
  };

  const maleUsers = userData.filter((user) => user.gender === "male").length;
  const femaleUsers = userData.filter((user) => user.gender === "female")
    .length;

<<<<<<< HEAD

    const updateUserPassword = (id) => {
      const newPassword = prompt("Enter new password:");
      if (newPassword) {
        alert(`Password for User ID ${id} updated successfully.`);
      }
    };

    const permanentlyDeleteUser = (id) => {
      if (window.confirm(`Are you sure you want to permanently delete User ID ${id}?`)) {
        setUserData(userData.filter((user) => user.id !== id));
        alert(`User ID ${id} permanently deleted.`);
      }
    };
    
=======
>>>>>>> 515ec11b07e05ec0e0490fe56655dd0b7113d2dd
  const serviceRequestData = {
    labels: services.map((service) => service.name),
    datasets: [
      {
        label: "Service Requests",
        data: services.map((service) => service.requests),
        backgroundColor: "#36A2EB",
      },
    ],
  };

  const barData = {
    labels: ["Active Users", "Inactive Users"],
    datasets: [
      {
        label: "Users",
        data: [activeUsers, userData.length - activeUsers],
        backgroundColor: ["#36A2EB", "#FF6384"],
      },
    ],
  };

  const monthlyTrafficData = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Monthly Traffic",
        data: [300, 400, 320, 500, 450, 600],
        borderColor: "#42A5F5",
        backgroundColor: "rgba(66, 165, 245, 0.5)",
        fill: true,
        tension: 0.3,
        borderWidth: 3,
        pointRadius: 5,
        pointBackgroundColor: "#42A5F5",
      },
    ],
  };

  const doughnutData = {
    labels: ["Positive Reviews", "Pending Reviews", "Male", "Female"],
    datasets: [
      {
        data: [
          userData.filter((user) => user.reviewApproved).length,
          userData.filter((user) => !user.reviewApproved).length,
          maleUsers,
          femaleUsers,
        ],
        backgroundColor: ["#4BC0C0", "#FFCE56", "#36A2EB", "#FF6384"],
      },
    ],
  };

  const toggleUserStatus = (id) => {
    setUserData(
      userData.map((user) =>
        user.id === id ? { ...user, active: !user.active } : user
      )
    );
  };

  const deleteUser = (id) => {
    setUserData(userData.filter((user) => user.id !== id));
  };

  const toggleReviewApproval = (id) => {
    setUserData(
      userData.map((user) =>
        user.id === id
          ? { ...user, reviewApproved: !user.reviewApproved }
          : user
      )
    );
  };

  const handleLogout = () => {
    alert("User logged out successfully!");
  };

  return (
    <div className="admin-dashboard" id="Admin-d">
      <h2>Admin Dashboard</h2>

      <div className="service-requests-section">
        <div className="service-request-section-two">
          <h3>Service Requests Overview</h3>
          <Bar data={serviceRequestData} options={{ responsive: true }} />
        </div>
      </div>

      <div className="traffic-section">
        <div className="traffic-card">
          <h3>Monthly Traffic</h3>
          <Line data={monthlyTrafficData} options={{ responsive: true }} />
        </div>
      </div>

      <div className="chart-section">
        <div className="bar-chart">
          <h3>Active User Statistics</h3>
          <Bar data={barData} options={{ responsive: true }} />
        </div>
        <div className="doughnut-chart">
          <h3>User Review Status</h3>
          <Doughnut data={doughnutData} options={{ responsive: true }} />
          <div className="gender-icons">
            <p>
              <FaMale style={{ color: "#36A2EB" }} /> {maleUsers} Males
            </p>
            <p>
              <FaFemale style={{ color: "#FF6384" }} /> {femaleUsers} Females
            </p>
          </div>
        </div>
      </div>

      <div className="user-management">
        <h3>User Management</h3>
        <div className="table-responsive">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Status</th>
                <th>Review</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {userData.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.active ? "Active" : "Inactive"}</td>
                  <td>
                    {user.review}
                    <br />
                    <small>
                      Status: {user.reviewApproved ? "Approved" : "Pending"}
                    </small>
                  </td>
                  <td>
                    <button
                      className="Button-main-two"
                      onClick={() => toggleUserStatus(user.id)}
                    >
                      {user.active ? "Deactivate" : "Activate"}
                    </button>
                    <button
                      className="Button-main-two"
                      onClick={() => deleteUser(user.id)}
                    >
                      Delete
                    </button>
                    <button
                      className="Button-main-two"
                      onClick={() => toggleReviewApproval(user.id)}
                    >
                      {user.reviewApproved ? "Unapprove" : "Approve"}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="service-management">
        <h3>Manage Services</h3>
        <div className="table-responsive-two">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Service</th>
                <th>Status</th>
                <th>Requests</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {services.map((service) => (
                <tr key={service.id}>
                  <td>{service.id}</td>
                  <td>{service.name}</td>
                  <td>{service.active ? "Active" : "Inactive"}</td>
                  <td>{service.requests}</td>
                  <td>
                    <button
                      className="Button-main-three"
                      onClick={() => toggleServiceStatus(service.id)}
                    >
                      {service.active ? "Deactivate" : "Activate"}
                    </button>
                    <button className="Button-main-three">Update</button>
                    <button className="Button-main-three">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

<<<<<<< HEAD
       {/* Search Section */}
       <div className="search-section">
        <h3>Search Users</h3>
        <div className="search-bar">
          <select
            onChange={(e) => setSearchField(e.target.value)}
            value={searchField}
          >
            <option value="name">Name</option>
            <option value="district">District</option>
            <option value="dob">Date of Birth</option>
          </select>
          <input
            type="text"
            placeholder={`Search by ${searchField}`}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>
        {/* User Details Card Section */}
        <div className="user-details-card">
        <h3>User Details</h3>
        <div className="user-grid">
          {handleSearch().map((user) => (
            <div className="user-card" key={user.id}>
              <img src={user.image} alt={`${user.name}'s profile`} />
              <div className="user-info">
                <p><strong>ID:</strong> {user.id}</p>
                <p><strong>Name:</strong> {user.name}</p>
                <p><strong>DOB:</strong> {user.dob}</p>
                <p><strong>District:</strong> {user.district}</p>
                <p><strong>Phone:</strong> {user.phone}</p>
                <p><strong>Status:</strong> {user.active ? "Active" : "Inactive"}</p>
              </div>
              <div className="user-actions">
                <button onClick={() => setPassword(user.id)}>Set Password</button>
                <button onClick={() => deleteUser(user.id)}>Delete User</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    
=======
>>>>>>> 515ec11b07e05ec0e0490fe56655dd0b7113d2dd
      <button className="logout-button-main" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}

export default AdminTwo;
