import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import basement from '../assets/basement.webp';
import ground from '../assets/ground.webp';
import second from '../assets/second.webp';
import third from '../assets/third.webp';
import terrace from '../assets/four.webp';

const floors = [
  {
    name: 'BASEMENT FLOOR',
    image: basement,
    details: { builtup: '5413.33', carpet: '5139.69', rentable: '-' },
  },
  {
    name: 'GROUND FLOOR',
    image: ground,
    details: { builtup: '7827.4', carpet: '5247.73', rentable: '7827.4' },
  },
  {
    name: '1ST FLOOR',
    image: second,
    details: { builtup: '7199.33', carpet: '7031.69', rentable: '7199.33' },
  },
  {
    name: '2ND FLOOR',
    image: third,
    details: { builtup: '5872.18', carpet: '5635.4', rentable: '5872.18' },
  },
  {
    name: 'TERRACE FLOOR',
    image: terrace,
    details: { builtup: '6369.42', carpet: '6369.42', rentable: '-' },
  },
];

const Layout = () => {
  const [selectedFloor, setSelectedFloor] = useState(null);

  const openModal = (floor) => {
    setSelectedFloor(floor);
  };

  const closeModal = () => {
    setSelectedFloor(null);
  };

  return (
    <div className="p- sm:p- bg-gray100 min-h-screen sm:w-[100vw] md:w-full lg:w-full mt-4">
      <h1 className="text-xl sm:text-2xl pl-2 md:pl-0 lg:pl-0 font-semibold mb-6">Floor Layout</h1>
      <div className="md:space-y-4">
        {floors.map((floor, index) => (
          <div
            key={index}
            className="flex flex-col md:gap-4 lg:gap-4 gap-4 sm:flex-row items-center bg-white rounded-lg shadow-md p-4 hover:shadow-lg cursor-pointer transition"
            onClick={() => openModal(floor)}
          >
            <img
              src={floor.image}
              alt={floor.name}
              className="w- sm:w-32 h-32 object-cover rounded-md mb-4 sm:mb-0 "
            />
            <div className="text-center sm:text-left">
              <h2 className="text-lg font-semibold">{floor.name}</h2>
              <p className="text-gray-600 mt-1">
                Builtup: {floor.details.builtup} SFT
              </p>
              <p className="text-gray-600">
                Carpet: {floor.details.carpet} SFT
              </p>
              <p className="text-gray-600">
                Rentable: {floor.details.rentable} SFT
              </p>
            </div>
          </div>
        ))}
      </div>

      {selectedFloor && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-[90vw] sm:w-[80vw] h-[80vh] sm:h-[70vh] overflow-y-auto p-6 relative">
            <button
              className="absolute top-3 right-3 bg-red-500 text-white rounded-full p-1 hover:scale-110 transition-all"
              onClick={closeModal}
            >
              <AiOutlineClose size={24} />
            </button>
            <div className="flex flex-col sm:flex-row items-center sm:items-start">
              <div className="w-full sm:w-1/2 text-center sm:pr-4">
                <img
                  src={selectedFloor.image}
                  alt={selectedFloor.name}
                  className="w-full h-auto object-cover rounded-md mb-4"
                />
                <h2 className="text-xl font-bold mb-4">{selectedFloor.name}</h2>
              </div>
              <div className="w-full sm:w-1/2">
                <table className="table-auto w-full border-collapse border border-gray-300">
                  <thead>
                    <tr>
                      <th className="border border-gray-300 px-4 py-2 text-sm sm:text-base">Category</th>
                      <th className="border border-gray-300 px-4 py-2 text-sm sm:text-base">Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 text-sm sm:text-base">
                        Builtup/Plinth Area (SFT)
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-sm sm:text-base">
                        {selectedFloor.details.builtup}
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 text-sm sm:text-base">
                        Carpet Area (SFT)
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-sm sm:text-base">
                        {selectedFloor.details.carpet}
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 text-sm sm:text-base">
                        Rentable Area (SFT)
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-sm sm:text-base">
                        {selectedFloor.details.rentable}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Layout;
