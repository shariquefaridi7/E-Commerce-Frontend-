import React, { useState } from 'react';
import './ZoomableImage.css'; // Make sure to include appropriate styles

const ZoomableImage = ({ src }) => {
  const [zoomLevel, setZoomLevel] = useState(1);

  const handleZoomIn = () => {
    setZoomLevel((prevZoom) => prevZoom + 0.1);
  };

  const handleZoomOut = () => {
    setZoomLevel((prevZoom) => Math.max(prevZoom - 0.1, 1));
  };

  const resetZoom = () => {
    setZoomLevel(1);
  };

  const containerStyle = {
    transform: `scale(${zoomLevel})`,
    transformOrigin: 'top left', // Adjust the origin based on your preference
  };

  return (
    <div className="zoomable-image-container" style={containerStyle}>
      <img src={src} alt="Zoomable Image" className="zoomable-image" />
      <div className="zoom-controls">
        <button onClick={handleZoomIn}>Zoom In</button>
        <button onClick={handleZoomOut}>Zoom Out</button>
        <button onClick={resetZoom}>Reset Zoom</button>
      </div>
    </div>
  );
};

export default ZoomableImage;
