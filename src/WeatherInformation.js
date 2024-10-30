import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import './WeatherDashboard.css';

// Register necessary components with Chart.js
Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function WeatherInformation() {
    const sampleWeatherData = {
        main: { temp: 24 },
        wind: { speed: 5 },
        clouds: { all: 20 },
        humidity: 60,
    };

    const [location, setLocation] = useState('London');

    // Sample data for daily updates
    const dailyUpdates = [
        { day: 'Mon', temp: 20, wind: 4, humidity: 60, rain: 80 },
        { day: 'Tue', temp: 22, wind: 5, humidity: 55, rain: 99 },
        { day: 'Wed', temp: 24, wind: 6, humidity: 50, rain: 79 },
        { day: 'Thu', temp: 23, wind: 4.5, humidity: 65, rain: 60 },
        { day: 'Fri', temp: 25, wind: 5.5, humidity: 70, rain: 100 },
    ];

    // State for checkbox visibility
    const [showTemp, setShowTemp] = useState(true);
    const [showWind, setShowWind] = useState(true);
    const [showHumidity, setShowHumidity] = useState(true);
    const [showRain, setShowRain] = useState(true);

    // Data for the Bar chart
    const barChartData = {
        labels: dailyUpdates.map(data => data.day),
        datasets: [
            ...(showTemp ? [{
                label: 'Temperature (°C)',
                backgroundColor: 'rgba(255,99,132,0.5)',
                borderColor: 'rgba(255,99,132,1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(255,99,132,0.7)',
                hoverBorderColor: 'rgba(255,99,132,1)',
                data: dailyUpdates.map(data => data.temp),
            }] : []),
            ...(showWind ? [{
                label: 'Wind Speed (m/s)',
                backgroundColor: 'rgba(54,162,235,0.5)',
                borderColor: 'rgba(54,162,235,1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(54,162,235,0.7)',
                hoverBorderColor: 'rgba(54,162,235,1)',
                data: dailyUpdates.map(data => data.wind),
            }] : []),
            ...(showHumidity ? [{
                label: 'Humidity (%)',
                backgroundColor: 'rgba(255,206,86,0.5)',
                borderColor: 'rgba(255,206,86,1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(255,206,86,0.7)',
                hoverBorderColor: 'rgba(255,206,86,1)',
                data: dailyUpdates.map(data => data.humidity),
            }] : []),
            ...(showRain ? [{
                label: 'Rain Probability (%)',
                backgroundColor: 'rgba(75,192,192,0.5)',
                borderColor: 'rgba(75,192,192,1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(75,192,192,0.7)',
                hoverBorderColor: 'rgba(75,192,192,1)',
                data: dailyUpdates.map(data => data.rain),
            }] : []),
        ],
    };

    const barChartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true,
                grid: {
                    color: 'rgba(200,200,200,0.2)',
                },
                title: {
                    display: true,
                    text: 'Values',
                    color: '#333',
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
                    text: 'Days of the Week',
                    color: '#333',
                    font: {
                        size: 14,
                    },
                },
            },
        },
        plugins: {
            legend: {
                labels: {
                    color: '#333',
                    font: {
                        size: 12,
                    },
                },
            },
            tooltip: {
                enabled: true,
                backgroundColor: 'rgba(0,0,0,0.7)',
                titleColor: '#fff',
                bodyColor: '#fff',
                borderColor: '#333',
                borderWidth: 1,
                cornerRadius: 4,
            },
        },
        animation: {
            duration: 1000,
            easing: 'easeOutBounce',
        },
    };

    return (
        <div className="weather-dashboard">
            <h2>Weather Dashboard</h2>
            <div className="location-input">
                <input 
                    type="text" 
                    placeholder="Enter location" 
                    onChange={(e) => setLocation(e.target.value)}
                />
                <button onClick={() => alert('This button is disabled for the demo')}>Get Weather</button>
            </div>

            <div className="service-cards">
                <div className="service-card">
                    <i className="fas fa-thermometer-half service-icon"></i>
                    <p>{sampleWeatherData.main.temp}°C</p>
                    <p>Temperature</p>
                </div>
                <div className="service-card">
                    <i className="fas fa-wind service-icon"></i>
                    <p>{sampleWeatherData.wind.speed} m/s</p>
                    <p>Wind Speed</p>
                </div>
                <div className="service-card">
                    <i className="fas fa-tint service-icon"></i>
                    <p>{sampleWeatherData.humidity}%</p>
                    <p>Humidity</p>
                </div>
                <div className="service-card">
                    <i className="fas fa-cloud-rain service-icon"></i>
                    <p>{sampleWeatherData.clouds.all}%</p>
                    <p>Rain Probability</p>
                </div>
            </div>

            {/* Checkbox Section for Data Selection */}
            <div className="checkboxes">
                <h3 className="text1">Select Data to Display:</h3>
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
