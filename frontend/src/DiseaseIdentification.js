import React, { useState } from "react";
import Webcam from "react-webcam";
import { FaCamera, FaUpload } from "react-icons/fa"; // Import icons
<<<<<<< HEAD
import "./css/DiseaseIdentification.css";
=======
import "./DiseaseIdentification.css";
>>>>>>> 515ec11b07e05ec0e0490fe56655dd0b7113d2dd

function DiseaseIdentification() {
  const [report, setReport] = useState(null);
  const [imageSrc, setImageSrc] = useState(null);
  const [cameraActive, setCameraActive] = useState(false);
  const [loading, setLoading] = useState(false);

  const webcamRef = React.useRef(null);
<<<<<<< HEAD
  //Bck Button To Home Page .
  const goBack = () => {
    window.location.href = "/#home"; // Adjust the path if needed for your home section or page
  };
=======

>>>>>>> 515ec11b07e05ec0e0490fe56655dd0b7113d2dd
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
<<<<<<< HEAD
        <button className="back-buttonThree" onClick={goBack}>
          ← Back to Home
        </button>
        <h2>🐞 Disease Identification Service</h2>
        <p>
          Identify The Diseases Of Plant Around You With just a Capture Or
          Upload!
        </p>
=======
        <h2>🐞 Disease Identification Service</h2>
        <p>Identify diseases around you with just a capture or upload!</p>
>>>>>>> 515ec11b07e05ec0e0490fe56655dd0b7113d2dd

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
<<<<<<< HEAD
              videoConstraints={{ facingMode: "environment" }} // Use back camera
=======
              videoConstraints={{ facingMode: "user" }}
>>>>>>> 515ec11b07e05ec0e0490fe56655dd0b7113d2dd
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