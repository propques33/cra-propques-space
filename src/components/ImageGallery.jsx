import React, { useState, useRef } from "react";
import { useSwipeable } from "react-swipeable"; // Import swipeable
import img from "../assets/hero0.jpg";
import img1 from "../assets/hero1.jpg";
import img2 from "../assets/hero2.jpg";
import img3 from "../assets/hero3.jpg";
import img4 from "../assets/hero4.jpg";
import img5 from "../assets/hero5.jpg";
import img6 from "../assets/hero6.jpg";

const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const thumbnailRef = useRef(null);

  // Navigate to the next image
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Navigate to the previous image
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Handle thumbnail click
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Swipeable handlers for thumbnails
  const thumbnailSwipeHandlers = useSwipeable({
    onSwipedLeft: () =>
      thumbnailRef.current.scrollBy({ left: 100, behavior: "smooth" }),
    onSwipedRight: () =>
      thumbnailRef.current.scrollBy({ left: -100, behavior: "smooth" }),
  });

  return (
    <div className="w-full flex flex-col items-center md:w-full md:mt-0 mt-0">
      {/* Main Image or Video Display */}
      <div className="relative w-full flex justify-center">
        {images[currentIndex].isVideo ? (
          <iframe
            className="w-full h-80 sm:h-80 md:h-[60vh] lg:h-[75vh]"
            src={images[currentIndex].url}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ) : (
          <img
            src={images[currentIndex].url}
            alt={`Slide ${currentIndex}`}
            className="w-full h-80 sm:h-80 md:h-[60vh] lg:h-[75vh] object-cover"
          />
        )}
      </div>

      {/* Thumbnails */}
      <div
        className="relative w-full flex items-center mt-2 sm:mt-4 overflow-hidden"
        {...thumbnailSwipeHandlers}
      >
        <div
          ref={thumbnailRef}
          className="flex overflow-x-hidden space-x-1 sm:space-x-2 px-8"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded-md border-2 ${
                currentIndex === index ? "border-green-500" : "border-gray-300"
              } cursor-pointer flex items-center justify-center bg-gray-200`}
            >
              {image.isVideo ? (
                "🎥"
              ) : (
                <img
                  src={image.url}
                  alt={`Thumbnail ${index}`}
                  className="object-cover w-full h-full rounded-md"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Parent Component with Filtering Functionality
const ImageGallery = () => {
  const allImages = [
    { url: "https://www.youtube.com/embed/2fixeADSIzk", isVideo: true },
    { url: img1, category: "architecture" },
    { url: img, category: "architecture" },
    { url: img2, category: "nature" },
    { url: img3, category: "nature" },
    { url: img4, category: "architecture" },
    { url: img5, category: "architecture" },
    { url: img6, category: "architecture" },
  ];

  const [filteredImages, setFilteredImages] = useState(allImages);

  return (
    <div className="w-full max-w-screen-md mx-auto">
      <ImageCarousel images={filteredImages} />
    </div>
  );
};

export default ImageGallery;
