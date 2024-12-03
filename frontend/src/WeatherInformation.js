
import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import "./css/WeatherDashboard.css";
//Bck Button To Home Page .
const goBack = () => {
  window.location.href = '/#home'; // Adjust the path if needed for your home section or page
};




// Register necessary components with Chart.js
Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function WeatherInformation() {

  const [location, setLocation] = useState('');
  const [dailyUpdates, setDailyUpdates] = useState([]);
  const [showTemp, setShowTemp] = useState(true);
  const [showWind, setShowWind] = useState(true);
  const [showHumidity, setShowHumidity] = useState(true);
  const [showRain, setShowRain] = useState(true);
  const API_KEY = "2b56b6d9fff54903a81151823241711";

  // Fetch weather data

  const fetchWeatherData = async (loc) => {
  
    try {
      const response = await fetch(
        `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${loc}&days=5&aqi=no`
      );
      const data = await response.json();
      // Extract current day and forecast data
      const currentDate = new Date(); // Ensure local timezone
      const currentDayIndex = currentDate.getDay();

      const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      const getRelativeDay = (offset) => daysOfWeek[(currentDayIndex + offset) % 7];
     // Extract current day and forecast data
     const forecast = data.forecast.forecastday.map((day,index) => ({
      day: getRelativeDay(index + 1),
      temp: day.day.avgtemp_c,
      wind: (day.day.maxwind_kph / 3.6).toFixed(1), // Convert from kph to m/s
      humidity: day.day.avghumidity,
      rain: day.day.daily_chance_of_rain,
    }));

   // Update state with daily data
   setDailyUpdates([
    {
      day: "Today",
      temp: data.current.temp_c,
      wind: (data.current.wind_kph / 3.6).toFixed(1),
      humidity: data.current.humidity,
      rain: data.current.precip_mm,
    },
    ...forecast,
  ]);
} catch (error) {
  console.error("Error fetching weather data:", error);
}
};

// Fetch weather data when the location changes
useEffect(() => {
if (location) fetchWeatherData(location);
}, [location]);

    

  // Function to get device location and fetch weather data
  const getDeviceLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;
          const loc = `${lat},${lon}`; // Format for weather API
          setLocation(loc);
          fetchWeatherData(loc); // Fetch data for current location
        },
        (error) => {
          console.error("Error getting location:", error);
          alert("Unable to access location. Please enable location services.");
        }
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  // Data for the Bar chart
  const barChartData = {
    labels: dailyUpdates.map((data) => data.day),
    datasets: [
      ...(showTemp
        ? [
            {
              label: "Temperature (°C)",
              backgroundColor: "rgba(255,99,132,0.5)",
              borderColor: "rgba(255,99,132,1)",
              borderWidth: 1,
              hoverBackgroundColor: "rgba(255,99,132,0.7)",
              hoverBorderColor: "rgba(255,99,132,1)",
              data: dailyUpdates.map((data) => data.temp),
            },
          ]
        : []),
      ...(showWind
        ? [
            {
              label: "Wind Speed (m/s)",
              backgroundColor: "rgba(54,162,235,0.5)",
              borderColor: "rgba(54,162,235,1)",
              borderWidth: 1,
              hoverBackgroundColor: "rgba(54,162,235,0.7)",
              hoverBorderColor: "rgba(54,162,235,1)",
              data: dailyUpdates.map((data) => data.wind),
            },
          ]
        : []),
      ...(showHumidity
        ? [
            {
              label: "Humidity (%)",
              backgroundColor: "rgba(255,206,86,0.5)",
              borderColor: "rgba(255,206,86,1)",
              borderWidth: 1,
              hoverBackgroundColor: "rgba(255,206,86,0.7)",
              hoverBorderColor: "rgba(255,206,86,1)",
              data: dailyUpdates.map((data) => data.humidity),
            },
          ]
        : []),
      ...(showRain
        ? [
            {
              label: "Rain Probability (%)",
              backgroundColor: "rgba(75,192,192,0.5)",
              borderColor: "rgba(75,192,192,1)",
              borderWidth: 1,
              hoverBackgroundColor: "rgba(75,192,192,0.7)",
              hoverBorderColor: "rgba(75,192,192,1)",
              data: dailyUpdates.map((data) => data.rain),
            },
          ]
        : []),
    ],
  };

  const barChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: "rgba(200,200,200,0.2)",
        },
        title: {
          display: true,
          text: "Values",
          color: "#333",
          font: {
            size: 14,
          },
        },
      },
      x: {
        grid: {
          display: false,
        },
        title: {
          display: true,
          text: "Days of the Week",
          color: "#333",
          font: {
            size: 14,
          },
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          color: "#333",
          font: {
            size: 12,
          },
        },
      },
      tooltip: {
        enabled: true,
        backgroundColor: "rgba(0,0,0,0.7)",
        titleColor: "#fff",
        bodyColor: "#fff",
        borderColor: "#333",
        borderWidth: 1,
        cornerRadius: 4,
      },
    },
    animation: {
      duration: 1000,
      easing: "easeOutBounce",
    },
  };

  return (
    <div className="weather-dashboard">
       <button className="back-buttonFour" onClick={goBack}>← Back to Home</button>
      <h2 className="weather-text">Weather Dashboard</h2>
     
      <div className="location-input">
        <input
          type="text"
          placeholder="Enter location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <button  onClick={() => fetchWeatherData(location)}>Get Weather</button>
        <button className="Location-button-Two" onClick={getDeviceLocation}>Use Current Location</button>{" "}
        {/* Added button */}
      </div>

      <div className="service-cards">
        <div className="service-card">
          <i className="fas fa-thermometer-half service-icon"></i>
          <p>{dailyUpdates.length > 0 ? dailyUpdates[0].temp : "--"}°C</p>
          <p>Temperature</p>
        </div>
        <div className="service-card">
          <i className="fas fa-wind service-icon"></i>
          <p>{dailyUpdates.length > 0 ? dailyUpdates[0].wind : "--"} m/s</p>
          <p>Wind Speed</p>
        </div>
        <div className="service-card">
          <i className="fas fa-tint service-icon"></i>
          <p>{dailyUpdates.length > 0 ? dailyUpdates[0].humidity : "--"}%</p>
          <p>Humidity</p>
        </div>
        <div className="service-card">
          <i className="fas fa-cloud-rain service-icon"></i>
          <p>{dailyUpdates.length > 0 ? dailyUpdates[0].rain : "--"}%</p>
          <p>Rain Probability</p>
        </div>
      </div>

      {/* Checkbox Section for Data Selection */}
      <div className="checkboxes">
        <h3 className="text1">Select Data to Display</h3>
        <label>
          <input
            type="checkbox"
            checked={showTemp}
            onChange={() => setShowTemp(!showTemp)}
          />
          Temperature
        </label>
        <label>
          <input
            type="checkbox"
            checked={showWind}
            onChange={() => setShowWind(!showWind)}
          />
          Wind Speed
        </label>
        <label>
          <input
            type="checkbox"
            checked={showHumidity}
            onChange={() => setShowHumidity(!showHumidity)}
          />
          Humidity
        </label>
        <label>
          <input
            type="checkbox"
            checked={showRain}
            onChange={() => setShowRain(!showRain)}
          />
          Rain Probability
        </label>
      </div>

      {/* Daily Updates Section */}
      <div className="daily-updates">
        <h3>Daily Weather Updates</h3>
        <div className="chart-container">
          <Bar data={barChartData} options={barChartOptions} />
        </div>
      </div>
    </div>
  );

    

}

export default WeatherInformation;
