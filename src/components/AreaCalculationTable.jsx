import React from "react";
import { FaBuilding, FaParking, FaRoad, FaFireExtinguisher } from "react-icons/fa";

const AreaCalculation = () => {
  const data = {
    "FAR Calculation": [
      {
        title: "Total Site Area",
        icon: <FaBuilding className="text-blue-500" />,
        value: "39833.80",
      },
      {
        title: "Number of Floors",
        icon: <FaBuilding className="text-green-500" />,
        value: "Ground+3 (2 Side Entrance)",
      },
      { title: "Number of Entries", icon: <FaRoad className="text-red-500" />, value: "2" },
      { title: "Fire Exits", icon: <FaFireExtinguisher className="text-yellow-500" />, value: "1" },
    ],
    "Ground Coverage": [
      {
        title: "Allowed Ground Coverage",
        icon: <FaBuilding className="text-purple-500" />,
        value: "55% / 6,824.60 SFT",
      },
      {
        title: "Achieved Ground Coverage",
        icon: <FaBuilding className="text-orange-500" />,
        value: "630.9 M² / 6,791.77 SFT",
      },
    ],
    "Parkings": [
      { title: "Car Parkings", icon: <FaParking className="text-indigo-500" />, value: "24" },
      { title: "Bike Parkings", icon: <FaParking className="text-pink-500" />, value: "22" },
    ],
  };

  return (
    <div className="container mx-auto px-2 md:px-0 mt-6">
      <h2 className="text-xl md:text-2xl font-semibold mb-4 capitalize">
        Area Calculation
      </h2>
      <div className="space-y-6">
        {Object.keys(data).map((section, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-blue-500"
          >
            <h3 className="text-xl font-semibold text-blue-600 mb-4">{section}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {data[section].map((item, subIndex) => (
                <div
                  key={subIndex}
                  className="flex items-center bg-gray-50 rounded-md p-4 shadow-sm"
                >
                  <div className="text-2xl mr-4">{item.icon}</div>
                  <div>
                    <h4 className="font-medium text-gray-700">{item.title}</h4>
                    <p className="text-base  text-gray-800">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AreaCalculation;
