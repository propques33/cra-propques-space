import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TagManager from "react-gtm-module";
import { BsCheckCircle } from "react-icons/bs";

const ThankYou = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Ensure scrolling to the top of the document when the component is mounted
    window.scrollTo({
      top: 0,
      behavior: "auto", // You can use "auto" for instant scroll
    });

    // As a fallback, scroll the root element
    document.documentElement.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  // Initialize GTM
  useEffect(() => {
    TagManager.initialize({
      gtmId: "GTM-KB8BRZW8", // Replace with your GTM ID
    });
  }, []);

  const handleGoBack = () => {
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center justify-center  mt-8 ">
      <div className="bg-white p-10 rounded-2xl flex flex-col items-center space-y-6 w-[90vw] max-w-lg ">
        <BsCheckCircle size={70} className="text-green-500" />
        <h1 className="text-3xl font-semibold text-gray-800 text-center">
          Form Submitted Successfully!
        </h1>
        <p className="text-lg text-gray-600 text-center">
          Thank you for getting in touch! We have received your information and
          will contact you shortly.
        </p>
        <button
          onClick={handleGoBack}
          className="mt-6 px-6 py-3 bg-blue-600 rounded-full text-white font-medium hover:bg-blue-700 transition duration-300 ease-in-out"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default ThankYou;
