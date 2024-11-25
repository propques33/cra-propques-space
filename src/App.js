import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Info from "./components/Info";
import Adarsh from "./components/Adarsh";
import ThankYou from "./components/ThankYou";

const App = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false); // Controls popup visibility
  const [animatePopup, setAnimatePopup] = useState(false); // Controls animation
  const [isMobile, setIsMobile] = useState(false); // Detect if the device is mobile

  // Detect if the device is mobile
  const checkIfMobile = () => {
    const isMobileDevice = window.innerWidth <= 768; // Adjust the breakpoint if needed
    setIsMobile(isMobileDevice);
  };

  const handlePopupClose = () => {
    setAnimatePopup(true); // Start closing animation
    setTimeout(() => {
      setIsPopupOpen(false); // Close the popup
      setAnimatePopup(false); // Reset animation state
      // Reopen the popup after 7 seconds
      setTimeout(() => {
        setIsPopupOpen(true);
      }, 5000);
    }, 1500); // Matches animation duration
  };

  useEffect(() => {
    // Check if the device is mobile on initial load
    checkIfMobile();

    // Add an event listener for window resize
    window.addEventListener("resize", checkIfMobile);

    // Automatically open the popup on page load for mobile devices
    if (isMobile) {
      setIsPopupOpen(true);
    }

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", checkIfMobile);
    };
  }, [isMobile]);

  return (
    <div className="md:w-full w-[100vw]">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              {isPopupOpen && isMobile && (
                <div
                  className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[10000000] transition-all duration-1500 ${
                    animatePopup ? "opacity-0 scale-90" : "opacity-100 scale-100"
                  }`}
                >
                  <div
                    className={`bg-white p-6 rounded-lg shadow-lg w-[90vw] max-w-md transform transition-all duration-1500 ${
                      animatePopup ? "opacity-0 scale-90" : "opacity-100 scale-100"
                    }`}
                  >
                    <button
                      onClick={handlePopupClose}
                      className="text-red-500 font-semibold w-full text-end"
                    >
                      Close
                    </button>
                    <Adarsh />
                  </div>
                </div>
              )}

              <Info />
            </>
          }
        />
        <Route path="/thank-you" element={<ThankYou />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
