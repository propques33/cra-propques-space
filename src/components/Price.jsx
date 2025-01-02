import React from "react";
import { FaBuilding, FaParking, FaRoad, FaFireExtinguisher } from "react-icons/fa";

const Price = () => {
  return (
    <div className="w-full border rounded-lg p-4 shadow-md mt-4">
      {/* Header */}
      <div className="flex items-center">
        <span className="text-green-400 font-semibold">● For rent</span>
      </div>

      {/* Title and Address */}
      <h2 className="text-lg font-semibold mt-2">Cocoon by Jaipuria Tower</h2>
      <p className="text-gray-500 text-sm">
        📍OUTER RING ROAD, DOLLAR SCHEME COLONY, 1ST STAGE, BTM LAYOUT 1, BANGALORE
      </p>

      {/* Details Section */}
      <div className="flex flex-wrap justify-between mt-4">
        <div className="text-center flex flex-col w-1/2 md:w-auto mb-4">
          <span className="text-xl font-semibold text-gray-800">₹63/Sq.Ft.</span>
          <span className="text-base text-zinc-500 font-semibold">Price</span>
        </div>
        <div className="text-center flex flex-col w-1/2 md:w-auto mb-4">
          <span className="text-xl font-semibold text-gray-800">39833.80 Sq. Ft.</span>
          <span className="text-base text-zinc-500 font-semibold">Total Area</span>
        </div>
        <div className="text-center flex flex-col w-1/2 md:w-auto mb-4">
          <span className="text-xl font-semibold text-gray-800">2</span>
          <span className="text-base text-zinc-500 font-semibold">Number of Entries</span>
        </div>
        <div className="text-center flex flex-col w-1/2 md:w-auto mb-4">
          <span className="text-xl font-semibold text-gray-800">Ground + 3</span>
          <span className="text-base text-zinc-500 font-semibold">Number of Floors</span>
        </div>
      </div>
    </div>
  );
};

export default Price;
