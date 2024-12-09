import React, { useState } from "react";
import { MdLocationPin } from "react-icons/md";
import image from "../assets/image.webp";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Adarsh = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [area, setArea] = useState(""); // Default area value
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [mobileError, setMobileError] = useState(""); // Error message for mobile number
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false); // State for checkbox

  const validateMobile = (mobile) => {
    if (!/^\d{10}$/.test(mobile)) {
      setMobileError("Please enter a valid 10-digit mobile number.");
      return false;
    }
    setMobileError("");
    return true;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    // Validate mobile number
    if (!validateMobile(mobile)) {
      return;
    }

    // Ensure checkbox is checked
    if (!isCheckboxChecked) {
      alert("Please agree to the privacy policy to proceed.");
      return;
    }

    setIsLoading(true); // Show loading spinner

    const dateObj = new Date();
    const currentDate = `'${String(dateObj.getDate()).padStart(
      2,
      "0"
    )}-${String(dateObj.getMonth() + 1).padStart(
      2,
      "0"
    )}-${dateObj.getFullYear()}`;

    // Prepare data to send to Make.com
    const inquiryData = {
      name,
      email,
      phone: mobile,
      area,
      inquiry_date: currentDate,
    };

    try {
      // Send data to Make.com webhook
      await axios.post(
        "https://hook.eu2.make.com/w9jnca0ki1fpup1ebeuiw0p5q5o82l5f",
        inquiryData
      );

      setIsSuccess(true);
      setName("");
      setEmail("");
      setMobile("");
      setArea(""); // Reset area
      setIsCheckboxChecked(false); // Reset checkbox
      navigate("/thank-you");
    } catch (error) {
      console.error("Error submitting the form:", error);
      alert("Error submitting the form.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">
        Cocoon By Jaipuria
      </h2>
      <p className="flex items-center text-sm text-gray-600 md:mb-4 mb-3 gap-2 capitalize">
        <MdLocationPin className="text-red-500" size={40} /> OUTER RING ROAD,
        DOLLAR SCHEME COLONY, 1ST STAGE, BTM LAYOUT 1, BANGALORE
      </p>
      <hr className="md:mb-4 mb-3" />
      <div className="flex gap-4 md:mb-3 mb-3">
        <img
          src={image}
          alt="Person"
          loading="lazy"
          className="w-16 h-16 rounded-full shadow-md"
          width="64"
          height="64"
        />
        <div className="flex flex-col justify-center">
          <h2 className="text-base font-medium text-gray-700">
            Adarsh Mohan Dixit
          </h2>
        </div>
      </div>

      <h2 className="pb-3 md:text-sm text-xs">
        Adarsh is an expert in commercial leasing, helping businesses optimize
        their real estate investments through strategic lease negotiations and
        space utilization.
      </h2>

      {/* Form Section */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <label className="text-sm font-medium text-gray-700">
          Name
          <input
            type="text"
            placeholder="Enter Your Name"
            value={name}
            onChange={(e) => {
              const value = e.target.value;
              if (/^[a-zA-Z\s]*$/.test(value)) {
                setName(value); // Update state only if input is valid
              }
            }}
            className="mt-1 px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
            required
          />
          {!/^[a-zA-Z\s]+$/.test(name) && name !== "" && (
            <span className="text-red-500 text-sm">
              Please enter a valid name (only alphabets and spaces).
            </span>
          )}
        </label>

        <label className="text-sm font-medium text-gray-700">
          Company/Organization Name
          <input
            type="text"
            placeholder="Enter Your Company/Organization Name"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
            required
          />
        </label>
        <label className="text-sm font-medium text-gray-700">
          Mobile Number
          <input
            type="text"
            placeholder="Enter Your Mobile Number"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            className="mt-1 px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
            required
          />
          {mobileError && (
            <span className="text-red-500 text-sm">{mobileError}</span>
          )}
        </label>

        <label className="text-sm font-medium text-gray-700">
          Area (in sq. ft.)
          <select
            value={area}
            onChange={(e) => setArea(e.target.value)}
            className="mt-1 px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
            required
          >
            <option value="" disabled>
              Select Area
            </option>
            <option value="20000-30000">20000 - 30000 (Sq. Ft.)</option>
            <option value="30000+">30000+ (Sq. Ft.)</option>
          </select>
        </label>

        {/* Checkbox */}
        <label className="fle items-center text-sm">
          <input
            type="checkbox"
            checked={isCheckboxChecked}
            onChange={(e) => setIsCheckboxChecked(e.target.checked)}
            className="mr-2"
            required
          />
          I am happy for 
          
          <a href="https://propques.space/" className="text-blue-500"> propques.space </a>

           to contact me via text/SMS.{" "} By selecting this you agree to our privacy policy. {" "}

           
          <a
            href="/privacy-policy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            See policy
          </a>
        </label>

        <button
          type="submit"
          className={`bg-blue-500 text-white px-4 py-2 shadow ${
            isLoading ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-600"
          } transition duration-300`}
          disabled={isLoading}
        >
          {isLoading ? "Submitting..." : "Make an Appointment"}
        </button>
      </form>

      {isSuccess && (
        <div className="text-blue-600 mt-4">
          Appointment request successfully submitted!
        </div>
      )}
    </div>
  );
};

export default Adarsh;
