import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Info from "./components/Info";
import Adarsh from "./components/Adarsh";
import ThankYou from "./components/ThankYou";
import Whatsapp from './assets/WhatsApp.svg'
const App = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false); // Controls popup visibility
  const [animatePopup, setAnimatePopup] = useState(false); // Controls animation
  const [isMobile, setIsMobile] = useState(false); // Detect if the device is mobile
  const [hasPopupShown, setHasPopupShown] = useState(false); // Tracks if the popup was shown on load

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
    }, 1500); // Matches animation duration
  };

  const handleBookAppointment = () => {
    setIsPopupOpen(true); // Open popup on button click
  };

  useEffect(() => {
    // Check if the device is mobile on initial load
    checkIfMobile();

    // Add an event listener for window resize
    window.addEventListener("resize", checkIfMobile);

    // Automatically open the popup on page load after 3 seconds if not already shown
    const timer = setTimeout(() => {
      if (!hasPopupShown) {
        setIsPopupOpen(true);
        setHasPopupShown(true); // Ensure popup is only shown once on load
      }
    }, 3000);

    // Cleanup event listener and timeout on component unmount
    return () => {
      window.removeEventListener("resize", checkIfMobile);
      clearTimeout(timer);
    };
  }, [hasPopupShown]);

  return (
    
    <div className="md:w-full w-[100vw]">
      <a
  href="https://wa.me/9044895895"
  target="_blank"
  rel="noopener noreferrer"
>
  <img
    src={Whatsapp}
    alt="Click to Download"
    className="fixed z-[100000000000] h-20 bottom-5 right-5 cursor-pointer"
  />
</a>

  
      
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              {/* Popup Logic */}
              {isPopupOpen && (
                <div
                  className={`fixed md:hidden  inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[10000000] transition-all duration-1500 ${
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

              {/* Info Section with Book Appointment Button */}
              <Info />
             
            </>
          }
        />
        <Route path="/thank-you" element={<ThankYou />} />
        
      </Routes>
      <Footer />
      <div className="flex md:hidden lg:hidden justify-center right-20 fixed  bottom-16">
                <button
                  onClick={handleBookAppointment}
                  className="bg-blue-500 text-sm  absolute text-white px-6  py-2 rounded shadow   "
                >
                  Make an Appointment
                </button>
              </div>
    </div>
  );
};

export default App;
