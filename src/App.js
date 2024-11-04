import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Info from "./components/Info";
import Adarsh from "./components/Adarsh";

const App = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handlePopupOpen = () => {
    setIsPopupOpen(true);
  };

  const handlePopupClose = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className="md:w-full w-[100vw]">
      <Navbar />

      <div className="fixed bottom-4 right-4 md:hidden">
        <button
          onClick={handlePopupOpen}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600 transition duration-300"
        >
          Open Appointment Form
        </button>
      </div>

      {isPopupOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[10000000] ">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[90vw] max-w-md">
            <button
              onClick={handlePopupClose}
              className="text-red-500 font-semibold w-full text-end "
            >
              Close
            </button>
            <Adarsh />
          </div>
        </div>
      )}

      <Info />
      <Footer />
    </div>
  );
};

export default App;
