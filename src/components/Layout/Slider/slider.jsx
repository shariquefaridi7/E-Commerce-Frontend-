import React, { useState, useEffect } from 'react';
import './style.css'; // Import your CSS file

//react-toastify

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    '../../../../public/i1.png',
    '../../../../public/av2.png',
    '../../../../public/av1.png',
    // Add more image URLs as needed
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Update the index to the next image
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Set the interval in milliseconds (3 seconds in this case)

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, [currentIndex, images.length]);

  return (
    <div className="slider-container">
      <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
    </div>
  );
};

export default Slider;
