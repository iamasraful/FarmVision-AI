import React, { useState } from "react";
import Webcam from "react-webcam";
import { FaCamera, FaUpload } from "react-icons/fa"; // Import icons
import "./DiseaseIdentification.css";

function DiseaseIdentification() {
  const [report, setReport] = useState(null);
  const [imageSrc, setImageSrc] = useState(null);
  const [cameraActive, setCameraActive] = useState(false);
  const [loading, setLoading] = useState(false);

  const webcamRef = React.useRef(null);

  // Handle image upload from file input
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImageSrc(imageUrl);
      simulateProcessing(imageUrl); // Mock processing
    }
  };

  // Capture image from webcam
  const captureImage = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImageSrc(imageSrc);
    setCameraActive(false);
    simulateProcessing(imageSrc);
  };
  const simulateProcessing = (image) => {
    setLoading(true);
    setTimeout(() => {
      setReport({
        image: image,
        name: "Ficus Elastica",
        description: "A tropical evergreen plant known as the rubber plant.",
      });
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="back-side">
      <div className="plant-identification">
        <h2>🐞 Disease Identification Service</h2>
        <p>Identify diseases around you with just a capture or upload!</p>

        <div className="buttons-container">
          <label htmlFor="imageUpload" className="identify-button">
            <FaUpload /> Upload Image
          </label>
          <input
            id="imageUpload"
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            onChange={handleImageUpload}
          />

          <button
            className="identify-button"
            onClick={() => setCameraActive(!cameraActive)}
          >
            <FaCamera /> {cameraActive ? "Close Camera" : "Open Camera"}
          </button>
        </div>

        {/* Display webcam if camera is active */}
        {cameraActive && (
          <div className="webcam-container">
            <Webcam
              audio={false}
              ref={webcamRef}
              screenshotFormat="image/jpeg"
              className="webcam"
              videoConstraints={{ facingMode: "user" }}
            />
            <button className="capture-button" onClick={captureImage}>
              Capture Photo
            </button>
          </div>
        )}

        {/* Loading spinner when processing */}
        {loading && <div className="loading-spinner">Processing...</div>}

        {/* Display scan report if available */}
        {report && (
          <div className="scan-report fade-in">
            <h3>Scan Report</h3>
            <img
              src={report.image}
              alt="Scanned Plant"
              className="scan-image"
            />
            <h4>{report.name}</h4>
            <p>{report.description}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default DiseaseIdentification;
