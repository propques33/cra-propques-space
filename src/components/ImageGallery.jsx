import React, { useState } from "react";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md"; // for arrows
import img from "../assets/img.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";
import img5 from "../assets/img5.png";
import img6 from "../assets/img6.png";
import img7 from "../assets/img7.png";
import img8 from "../assets/img8.png";
import img9 from "../assets/img9.png";

const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

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

  return (
    <div className="w-[100vw] md:w-full ">
      {/* Main Image Display */}
      <div className="relative">
        <img
          src={images[currentIndex].url}
          alt={`Slide ${currentIndex}`}
          className="w-full h-64 md:h-[75vh] object-cover "
        />
        {/* Left Arrow */}
        <button
          className="absolute top-1/2 left-2 md:left-4 text-2xl md:text-3xl text-white  rounded-full p-1 md:p-2 transform -translate-y-1/2"
          onClick={prevSlide}
        >
          
          <MdArrowBackIos className="pl-2"/>
        </button>
        {/* Right Arrow */}
        <button
          className="absolute top-1/2 right-2 md:right-4 text-2xl md:text-3xl text-white  rounded-full p-1 md:p-2 transform -translate-y-1/2"
          onClick={nextSlide}
        >
          <MdArrowForwardIos size={24} className=""/>
        </button>
      </div>

      {/* Thumbnails */}
      <div className="flex  mt-4">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.url}
            alt={`Thumbnail ${index}`}
            className={`w-12 h-12 md:w-16 md:h-16 mx-1 cursor-pointer border-2 ${
              currentIndex === index ? "border-green-500" : "border-gray-300"
            }`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

// Parent Component with Filtering Functionality
const  ImageGallery = () => {
  const allImages = [
    {
      url: img3,
      category: "architecture",
    },
    {
      url: img2,
      category: "nature",
    },
    {
      url: img,
      category: "architecture",
    },
    {
      url: img4,
      category: "architecture",
    },
    {
      url: img5,
      category: "architecture",
    },
    {
      url: img6,
      category: "architecture",
    },
    {
      url: img7,
      category: "architecture",
    },
    {
      url: img8,
      category: "architecture",
    },
    {
      url: img9,
      category: "architecture",
    },
  ];

  const [filteredImages, setFilteredImages] = useState(allImages);

  return (
    <div className="">
      <ImageCarousel images={filteredImages} />
    </div>
  );
};

export default ImageGallery;
