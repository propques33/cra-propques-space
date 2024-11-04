import React,{useEffect} from "react";
import { MdLocationPin } from "react-icons/md";
import image from "../../public/image.png";

const Contact = () => {
   
  return (
    <div>
      <div className="right-0 top-20 ">
        <h1 className="text-xl font-semibold text-gray-800 mb-4">
          Jaipuria Towers
        </h1>
        <p className="flex items-center text-sm text-gray-600 mb-6 gap-2 capitalize">
          <MdLocationPin className="text-red-500 " size={40} /> OUTER RING ROAD,
          DOLLAR SCHEME COLONY, 1ST STAGE, BTM LAYOUT 1, BANGALORE
        </p>

        <hr className="mb-6" />

        <div className="flex items-center gap-6 mb-6">
          <img
            src={image}
            alt="Person"
            className="w-16 h-16 rounded-full shadow-md"
          />
          <div>
            <h2 className="text-xl font-medium text-gray-700">
              Adarsh Mohan Dixit
            </h2>
            <p className="text-gray-500 text-sm">+91-7392037856</p>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Enter Your Mobile Number"
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600 transition duration-300">
Make an appointment          </button>
        </div>
      </div>
      
    </div>
  );
};

export default Contact;
