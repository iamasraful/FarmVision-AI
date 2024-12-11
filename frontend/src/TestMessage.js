import React, { useEffect, useState } from "react";

function TestMessage() {
  const [apiData, setApiData] = useState([]); // State to store API data

  useEffect(() => {
    // Fetch data from the Django REST API endpoint
    fetch("http://127.0.0.1:8000/api/react/")
      .then((response) => response.json()) // Parse the JSON response
      .then((data) => setApiData(data)) // Update state with the fetched data
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <section className="test-message" id="test">
      <div className="test-two">
        <h2>Planting Upgrade Service</h2>
        <p>Our garden services are here to make your green spaces beautiful.</p>
      </div>
      <div className="api-data-section">
        <h3>Fetched Data:</h3>
        {apiData.length > 0 ? (
          <ul>
            {apiData.map((item, index) => (
              <li key={index}>
                <strong>Student:</strong> {item.Student} | <strong>Department:</strong> {item.Department}
              </li>
            ))}
          </ul>
        ) : (
          <p>No data available.</p>
        )}
      </div>
    </section>
  );
}

export default TestMessage;
