import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Banner() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "/banner/image1.jpg",
    "/banner/image2.jpg",
    "/banner/image3.jpg",
    "/banner/image4.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative lg:h-fit w-full sm:w-10/12 lg:w-10/12 sm:h-[50vh] mx-auto overflow-hidden rounded-lg shadow-lg">
      {/* Images Container */}
      <div
        className="flex transition-transform duration-500"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-full h-full flex items-center justify-center"
          >
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-auto object-cover"
            />
          </div>
        ))}
      </div>

     

      {/* Dots Navigation */}
      <div className="absolute bottom-4 w-full flex justify-center space-x-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-5 h-2 sm:w-4 sm:h-2 lg:w-5 lg:h-2 rounded-full ${
              currentIndex === index ? "bg-white" : "bg-gray-600"
            } transition-colors duration-300`}
            onClick={() => setCurrentIndex(index)}
          ></button>
        ))}
      </div>
    </div>
  );
}

export default Banner;


//  {/* Left Arrow */}
//  <button
//  className="absolute top-1/2 left-4 sm:left-2 lg:left-6 transform -translate-y-1/2 bg-gray-800 text-white p-2 sm:p-3 lg:p-4 rounded-full hover:bg-gray-600 z-10"
//  onClick={handlePrevious}
// >
//  <FontAwesomeIcon icon={faChevronLeft} size="lg" />
// </button>

// {/* Right Arrow */}
// <button
//  className="absolute top-1/2 right-4 sm:right-2 lg:right-6 transform -translate-y-1/2 bg-gray-800 text-white p-2 sm:p-3 lg:p-4 rounded-full hover:bg-gray-600 z-10"
//  onClick={handleNext}
// >
//  <FontAwesomeIcon icon={faChevronRight} size="lg" />
// </button>