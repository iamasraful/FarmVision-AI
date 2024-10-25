import React from "react";
import { useParams } from "react-router-dom";
function ServiceDetail() {
  const { title } = useParams(); // Fetch title from URL parameters
  return (
    <div>
      <h1>Service Detail: {title}</h1>
      {/* Render detailed content based on service title */}
      <p>This is a more detailed page about {title}.</p>
      {/* You can add more service details or even fetch data based on title */}
    </div>
  );
}
export default ServiceDetail;
