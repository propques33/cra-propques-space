import React, { useState } from "react";
import {
  FaTrain,
  FaBus,
  FaHospital,
  FaUtensils,
  FaShoppingCart,
} from "react-icons/fa";
import { MdLocalMall } from "react-icons/md";

const AmenitiesMap = () => {
  // State to track the active tab
  const [activeTab, setActiveTab] = useState("Transportation");

  // State to track the active map URL
  const [activeMapUrl, setActiveMapUrl] = useState("");

  const transportation = [
    {
      name: "Silk Board Metro Station",
      distance: "0.4 km",
      icon: <FaTrain />,
      location: "Silk Board Metro Station, Bangalore",
      map: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15555.429602646158!2d77.6081222!3d12.9168853!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15187f119535%3A0x41d62e768ececbe3!2sBTM%20metro%20station!5e0!3m2!1sen!2sin!4v1729244639605!5m2!1sen!2sin",
    },
    {
      name: "Silk Board Junction",
      distance: "0.5 km",
      icon: <FaBus />,
      location: "Silk Board Junction, Bangalore",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.8622870073436!2d77.62080777507546!3d12.916571387393756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae14f13f1f312d%3A0x490fdf03dd2dcb5d!2sSilk%20Board%20junction%2C%20Sector%206%2C%20HSR%20Layout%2C%20Bengaluru%2C%20Karnataka%20560102!5e0!3m2!1sen!2sin!4v1729244721077!5m2!1sen!2sin",
    },
  ];

  const food = [
    {
      name: "Absolute Barbecues",
      distance: "1.2 km",
      icon: <FaUtensils />,
      location: "Absolute Barbecues, BTM Layout",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.865109059668!2d77.60210367507551!3d12.91639008739392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1503d4f6a7ab%3A0x845dde028247573b!2sAB&#39;s%20-%20Absolute%20Barbecues%20%7C%20BTM%20Layout%2C%20Bangalore!5e0!3m2!1sen!2sin!4v1729244799020!5m2!1sen!2sin",
    },
    {
      name: "Meghana Foods",
      distance: "1.5 km",
      icon: <FaUtensils />,
      location: "Meghana Foods, Bangalore",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248850.28372465458!2d77.44435659633145!3d12.953562416042976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15a1e3e9900d%3A0x207f5b22abdce680!2sMeghana%20Foods%20Jayanagar!5e0!3m2!1sen!2sin!4v1729244865947!5m2!1sen!2sin",
    },
  ];

  const entertainment = [
    {
      name: "Vega City Mall",
      distance: "2.5 km",
      icon: <MdLocalMall />,
      location: "Vega City Mall, Bangalore",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.0002231189783!2d77.59849347507537!3d12.907706887401808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1500510c1167%3A0xf46e63883e90baa9!2sVega%20City%20Mall!5e0!3m2!1sen!2sin!4v1729244966595!5m2!1sen!2sin",
    },
  ];

  const hospitals = [
    {
      name: "Jayadeva Hospital",
      distance: "3.2 km",
      icon: <FaHospital />,
      location: "Jayadeva Hospital, Bangalore",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.841756299763!2d77.59663257507557!3d12.917890287392527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae16773e7dc413%3A0x350240386002607b!2sJayadeva%20Hospital%20Bengaluru!5e0!3m2!1sen!2sin!4v1729245226473!5m2!1sen!2sin",
    },
  ];

  // Handle tab change and set the map URL
  const handleTabChange = (tabName, defaultMapUrl) => {
    setActiveTab(tabName);
    setActiveMapUrl(defaultMapUrl);
  };

  return (
    <div className="container px-4 md:px-0 mt-6">
      {/* Tab Buttons */}
      <div className="flex flex-wrap md:text-sm text-sm justify-between border-b ">
        <button
          onClick={() =>
            handleTabChange("Transportation", transportation[0].map)
          }
          className={`md:px-4 md:py-2 mb-3 ${
            activeTab === "Transportation"
              ? "border-b-2 border-gray-700 text-gray-700"
              : "text-gray-500"
          }`}
        >
          Transportation
        </button>
        <button
          onClick={() => handleTabChange("Food", food[0].map)}
          className={`md:px-4 md:py-2 mb-3 ${
            activeTab === "Food"
              ? "border-b-2 border-gray-700 text-gray-700"
              : "text-gray-500"
          }`}
        >
          Food
        </button>
        <button
          onClick={() => handleTabChange("Entertainment", entertainment[0].map)}
          className={`md:px-4 md:py-2 mb-3 ${
            activeTab === "Entertainment"
              ? "border-b-2 border-gray-700 text-gray-700"
              : "text-gray-500"
          }`}
        >
          Entertainment
        </button>
        <button
          onClick={() => handleTabChange("Hospitals", hospitals[0].map)}
          className={`md:px-4 md:py-2 mb-3 ${
            activeTab === "Hospitals"
              ? "border-b-2 border-gray-700 text-gray-700"
              : "text-gray-500"
          }`}
        >
          Hospitals
        </button>
      </div>

      {/* Tab Content */}
      {activeTab === "Transportation" && (
        <div>
          <h3 className="text-base md:text-lg font-semibold mb-2">
          </h3>
          <ul>
            {transportation.map((item, index) => (
              <li
                key={index}
                className="flex items-center mb-2 cursor-pointer"
                onClick={() => setActiveMapUrl(item.map)}
              >
                <span className="mr-2">{item.icon}</span>
                <span>{item.name}</span>
                <span className="ml-auto">{item.distance}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {activeTab === "Food" && (
        <div>
          <h3 className="text-base md:text-lg font-semibold mb-2"></h3>
          <ul>
            {food.map((item, index) => (
              <li
                key={index}
                className="flex items-center mb-2 cursor-pointer"
                onClick={() => setActiveMapUrl(item.map)}
              >
                <span className="mr-2">{item.icon}</span>
                <span>{item.name}</span>
                <span className="ml-auto">{item.distance}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {activeTab === "Entertainment" && (
        <div>
          <h3 className="text-base md:text-lg font-semibold mb-2">
            
          </h3>
          <ul>
            {entertainment.map((item, index) => (
              <li
                key={index}
                className="flex items-center mb-2 cursor-pointer"
                onClick={() => setActiveMapUrl(item.map)}
              >
                <span className="mr-2">{item.icon}</span>
                <span>{item.name}</span>
                <span className="ml-auto">{item.distance}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {activeTab === "Hospitals" && (
        <div>
          <h3 className="text-base md:text-lg font-semibold mb-2"></h3>
          <ul>
            {hospitals.map((item, index) => (
              <li
                key={index}
                className="flex items-center mb-2 cursor-pointer"
                onClick={() => setActiveMapUrl(item.map)}
              >
                <span className="mr-2">{item.icon}</span>
                <span>{item.name}</span>
                <span className="ml-auto">{item.distance}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Google Map Iframe */}
      <div className="mt-4">
        {activeMapUrl && (
          <iframe
            src={activeMapUrl}
            className="w-full h-72 "
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map"
          ></iframe>
        )}
      </div>
    </div>
  );
};

export default AmenitiesMap;
