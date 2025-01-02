import React, { useState, useEffect } from "react";
import CookieManager from "../utils/cookieManager";

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false); // Initially hidden
  const [blurBackground, setBlurBackground] = useState(false); // Manage background blur
  const [animateBanner, setAnimateBanner] = useState(false); // For smooth transition

  useEffect(() => {
    if (!CookieManager.getCookie("cookieConsent")) {
      setTimeout(() => {
        setBlurBackground(true); // Apply blur to background
        setShowBanner(true); // Show banner
        setTimeout(() => {
          setAnimateBanner(true); // Trigger animation
        }, 100); // Delay for CSS animation to apply
      }, 3000); // Wait 3 seconds before showing banner
    }
  }, []);

  const handleAccept = () => {
    CookieManager.setCookie("cookieConsent", "true", 365);
    setAnimateBanner(false); // Remove animation
    setTimeout(() => {
      setShowBanner(false);
      setBlurBackground(false); // Remove background blur
    }, 300); // Delay for smooth closing animation
  };

  const handleReject = () => {
    CookieManager.deleteCookie("cookieConsent");
    setAnimateBanner(false); // Remove animation
    setTimeout(() => {
      setShowBanner(false);
      setBlurBackground(false); // Remove background blur
    }, 300); // Delay for smooth closing animation
  };

  return (
    <>
      {blurBackground && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-[10000000000] transition-opacity duration-300"></div>
      )}
      {showBanner && (
        <div
          className={`cookie-banner z-[100000000000] fixed bottom-0 md:w-96 w-full bg-gray-800 text-white p-4 flex flex-col items-center justify-between shadow-md transition-transform duration-300 ${
            animateBanner ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
          }`}
        >
          <div className="flex flex-col items-center gap-4 z-[1000]">
            <p className="text-sm md:text-base text-center">
              We use cookies to enhance your experience. By continuing, you agree
              to our use of cookies.
            </p>
            <div className="flex gap-2">
              <button
                onClick={handleAccept}
                className=" hover:bg-blue-400 text-white px-4 py-2 rounded-md bg-blue-500 transition duration-300"
              >
                Accept
              </button>
              <button
                onClick={handleReject}
                className="  text-white px-4 py-2  transition duration-300"
              >
                Reject All
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CookieConsent;
