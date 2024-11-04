import React, { useState } from "react";
import { MdLocationPin } from "react-icons/md";
import image from "../assets/image.png";
import axios from "axios";
import emailjs from "emailjs-com";

const Adarsh = () => {
  // State hooks for form inputs
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isReadMore, setIsReadMore] = useState(false); // State to toggle Read More

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true); // Show loading spinner

    // Get current date
    const currentDate = new Date().toLocaleDateString(); // Format as "MM/DD/YYYY" or "DD/MM/YYYY" depending on locale

    // Prepare email parameters
    const emailParams = {
      from_name: name,
      to_name: "Admin",
      phone: mobile,
      email: email,
      inquiry_date: currentDate, // Automatically generated date
      message: "Here is the inquiry information",
      subject: "[IMPORTANT] Inquiry Information",
    };

    try {
      // Send data to the webhook
      await axios.post(
        "https://hook.eu2.make.com/6irg7ga4tqbtvzvs14axtc11qs7mdk6i",
        {
          name: name,
          email: email,
          phone: mobile,
          inquiry_date: currentDate, // Automatically generated date
        }
      );

      // Send email using EmailJS
      emailjs
        .send(
          "service_vcnub3o",
          "template_wkjd0zu",
          emailParams,
          "KM6kJPymVVzg7Aim1"
        )
        .then((response) => {
          setIsLoading(false); // Hide loading spinner
          setIsSuccess(true); // Show success popup
          setName("");
          setEmail("");
          setMobile("");
          setTimeout(() => {
            setIsSuccess(false); // Hide success popup after 3 seconds
          }, 3000);
        })
        .catch((error) => {
          console.error("Error:", error);
          alert("Error sending email.");
          setIsLoading(false); // Hide loading spinner
        });
    } catch (error) {
      console.error("Error:", error);
      alert("Error submitting the form.");
      setIsLoading(false); // Hide loading spinner
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-semibold text-gray-800 mb-4">
        Jaipuria Towers
      </h1>
      <p className="flex items-center text-sm text-gray-600 md:mb-6 mb-3 gap-2 capitalize">
        <MdLocationPin className="text-red-500" size={40} /> OUTER RING ROAD,
        DOLLAR SCHEME COLONY, 1ST STAGE, BTM LAYOUT 1, BANGALORE
      </p>

      <hr className="md:mb-6 mb-3" />

      <div className="flex gap-4 md:mb-6 mb-3">
        <img
          src={image}
          alt="Person"
          className="w-16 h-16 rounded-full shadow-md"
        />
        <div className="flex flex-col justify-center">
          <h2 className="text-base font-medium text-gray-700">
            Adarsh Mohan Dixit
          </h2>
          <p className="text-gray-500 text-sm">+91-7392037856</p>
        </div>
      </div>

      {/* Description section with Read More */}
      <h1 className="pb-6 md:text-sm text-xs ">
        {isReadMore
          ? "Adarsh is an expert in commercial leasing, helping businesses optimize their real estate investments through strategic lease negotiations and space utilization. His deep knowledge of market trends and asset management ensures tailored solutions that drive growth and maximize returns."
          : "Adarsh is an expert in commercial leasing, helping businesses optimize their real estate investments through strategic lease negotiations and space utilization."}
        <span
          className="text-blue-500 cursor-pointer ml-2"
          onClick={() => setIsReadMore(!isReadMore)}
        >
          {isReadMore ? "Read Less" : "Read More"}
        </span>
      </h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Enter Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="px-4 py-2 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <input
          type="email"
          placeholder="Enter Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="px-4 py-2 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <input
          type="text"
          placeholder="Enter Your Mobile Number"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          className="px-4 py-2 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2  shadow hover:bg-blue-600 transition duration-300"
        >
          {isLoading ? "Submitting..." : "Make an appointment"}
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
