import React, { useState } from "react";

import "./css/Review.css";


function Revew() {
  const [photo, setPhoto] = useState(null);
  const [userName, setUserName] = useState("");
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(0);

  // Function to handle photo upload
  const handlePhotoChange = (e) => {
    setPhoto(URL.createObjectURL(e.target.files[0]));
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Review Submitted! Rating: ${rating} stars`);
    // Reset form fields
    setPhoto(null);
    setUserName("");
    setReview("");
    setRating(0);
  };

  return (
    <section className="review-page" id="review">
      <div className="review-content">
        <h2>Review Page For Client Or User</h2>

        <form onSubmit={handleSubmit} className="review-form">
          <div className="photo-upload">
            {photo && <img src={photo} alt="User" className="uploaded-photo" />}
            <label htmlFor="file-upload" className="upload-btn">Upload Photo</label>
            <input
              id="file-upload"
              type="file"
              accept="image/*"
              onChange={handlePhotoChange}
            />
          </div>
          <input
            type="text"
            placeholder="Your Name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            required
            className="username-input"
          />
          <textarea
            placeholder="Write your review here..."
            value={review}
            onChange={(e) => setReview(e.target.value)}
            required
            className="review-textarea"
          />

          <div className="rating">
            {[...Array(5)].map((_, index) => (
              <span
                key={index}
                className={`star ${rating > index ? "filled" : ""}`}
                onClick={() => setRating(index + 1)}
              >
                ★
              </span>
            ))}
          </div>

          <button type="submit" className="submit-btn">Submit Review</button>
        </form>
      </div>
    </section>
  );
}

export default Revew;
