import React, { useState, useRef } from "react";
import { useSwipeable } from "react-swipeable"; // Import swipeable
import img from "../assets/img.webp";
import img2 from "../assets/img2.webp";
import img3 from "../assets/img3.webp";
import img4 from "../assets/img4.webp";
import img5 from "../assets/img5.webp";
import img6 from "../assets/img6.webp";
import img7 from "../assets/img7.webp";
import img8 from "../assets/img8.webp";
import img9 from "../assets/img9.webp";

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
    onSwipedLeft: () => thumbnailRef.current.scrollBy({ left: 100, behavior: "smooth" }), // Swipe left to scroll thumbnails right
    onSwipedRight: () => thumbnailRef.current.scrollBy({ left: -100, behavior: "smooth" }), // Swipe right to scroll thumbnails left
  });

  return (
    <div className="w-[100vw] md:w-full lg:w-full flex flex-col items-center md:w-full md:mt-0 mt-0">
      {/* Main Image Display */}
      <div className="relative w-full flex justify-center">
      <img
  src={images[currentIndex].url}
  alt={`Slide ${currentIndex}`}
  className="w-full h-80 sm:h-80 md:h-[60vh] lg:h-[75vh] object-cover"
  height="450" // Example height in pixels
  width="800"  // Example width in pixels
/>

      </div>

      {/* Thumbnails */}
      <div
        className="relative w-full flex items-center mt-2 sm:mt-4 overflow-hidden"
        {...thumbnailSwipeHandlers} // Attach swipe handlers
      >
        <div
          ref={thumbnailRef}
          className="flex overflow-x-hidden space-x-1 sm:space-x-2 px-8"
          style={{ scrollSnapType: "x mandatory" }}
        >
         {images.map((image, index) => (
  <img
    key={index}
    src={image.url}
    alt={`Thumbnail Image ${index}`}
    loading="lazy" 
    className={`w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded-md border-2 ${
      currentIndex === index ? "border-green-500" : "border-gray-300"
    } cursor-pointer transition duration-300 ease-in-out`}
    width="40" // Matches the smallest size (w-10)
    height="40" // Matches the smallest size (h-10)
    onClick={() => goToSlide(index)}
  />
))}

        </div>
      </div>
    </div>
  );
};

// Parent Component with Filtering Functionality
const ImageGallery = () => {
  const allImages = [
    // { url: img3, category: "architecture" },
    { url: img2, category: "nature" },
    { url: img, category: "architecture" },
    { url: img4, category: "architecture" },
    { url: img5, category: "architecture" },
    { url: img6, category: "architecture" },
    { url: img7, category: "architecture" },
    { url: img8, category: "architecture" },
    { url: img9, category: "architecture" },
  ];

  const [filteredImages, setFilteredImages] = useState(allImages);

  return (
    <div className="w-full max-w-screen-md mx-auto">
      <ImageCarousel images={filteredImages} />
    </div>
  );
};

export default ImageGallery;
