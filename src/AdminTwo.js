import React, { useState } from "react";
import { Bar, Doughnut, Line } from "react-chartjs-2";
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
import "./AdminTwo.css";
import { FaMale, FaFemale } from "react-icons/fa";

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
  const [userData, setUserData] = useState([
    {
      id: 1,
      name: "User A",
      active: true,
      review: "Great app!",
      reviewApproved: true,
      gender: "male",
    },
    {
      id: 2,
      name: "User B",
      active: false,
      review: "Needs improvement.",
      reviewApproved: false,
      gender: "female",
    },
  ]);
  const [services, setServices] = useState(initialServices);

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

      <button className="logout-button-main" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}

export default AdminTwo;
