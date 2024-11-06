import React, { useState, useRef } from "react";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
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

  // Scroll Thumbnails Left
  const scrollLeft = () => {
    thumbnailRef.current.scrollBy({
      left: -100,
      behavior: "smooth",
    });
  };

  // Scroll Thumbnails Right
  const scrollRight = () => {
    thumbnailRef.current.scrollBy({
      left: 100,
      behavior: "smooth",
    });
  };

  return (
    <div className="w-full flex flex-col items-center md:w-full">
      {/* Main Image Display */}
      <div className="relative w-full flex justify-center">
        <img
          src={images[currentIndex].url}
          alt={`Slide ${currentIndex}`}
          className="w-full h-52 sm:h-64 md:h-[60vh] lg:h-[75vh] object-cover"
        />
        {/* Left Arrow */}
        {/* <button
          className="absolute top-1/2 left-2 md:left-4 pl-4  text-lg sm:text-xl md:text-2xl lg:text-3xl text-white bg-black/50 rounded-full p-2 transform -translate-y-1/2"
          onClick={prevSlide}
        >
          <MdArrowBackIos />
        </button> */}
        {/* Right Arrow */}
        {/* <button
          className="absolute top-1/2 right-2 md:right-4 text-lg sm:text-xl md:text-2xl lg:text-3xl text-white bg-black/50 rounded-full p-2 transform -translate-y-1/2"
          onClick={nextSlide}
        >
          <MdArrowForwardIos />
        </button> */}
      </div>

      {/* Thumbnails */}
      <div className="relative w-full flex items-center mt-2 sm:mt-4">
        {/* Left Thumbnail Arrow */}
        <button
          onClick={scrollLeft}
          className="absolute left-0 pl-2 text-xl text-gray-600 bg-white py-1 rounded-full shadow-md md:hidden z-10"
        >
          <MdArrowBackIos />
        </button>

        <div
          ref={thumbnailRef}
          className="flex overflow-x-hidden space-x-1 sm:space-x-2 px-8"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {images.map((image, index) => (
            <img
              key={index}
              src={image.url}
              alt={`Thumbnail ${index}`}
              className={`w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded-md border-2 ${
                currentIndex === index ? "border-green-500" : "border-gray-300"
              } cursor-pointer transition duration-300 ease-in-out`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>

        {/* Right Thumbnail Arrow */}
        <button
          onClick={scrollRight}
          className="absolute right-0 text-xl text-gray-600 bg-white p-1 rounded-full shadow-md md:hidden z-10"
        >
          <MdArrowForwardIos />
        </button>
      </div>
    </div>
  );
};

// Parent Component with Filtering Functionality
const ImageGallery = () => {
  const allImages = [
    { url: img3, category: "architecture" },
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
