import React from "react";
import image from "../assets/image.png"; 
import imagew from "../assets/imagew.png"; 

const ConsultantCard = () => {
  const consultants = [
    {
      id: 1,
      name: "Adarsh Mohan Dixit",
      mobile: "+91-7392037856",
      image: image,
    },
    {
      id: 2,
      name: "Swithen Thomas",
      mobile: "+91-9044895895",
      image: imagew,
    },
  ];

  return (
    <div className="container px-4 md:px-0 py-6">
      <h2 className="text-2xl font-semibold ">Leasing Experts</h2>
      <div className="flex flex-wrap  md:gap-8">
        {consultants.map((consultant) => (
          <div key={consultant.id} className=" overflow-hidden text-center">
            <img
              className="w-24 h-24 rounded-full mx-auto mt-6"
              src={consultant.image}
              alt={`${consultant.name}'s profile`}
            />
            <div className="px-4 py-2">
              <h3 className="text-base font-semibold  text-gray-800">
                {consultant.name}
              </h3>
              <p className="text-gray-700 text-sm">{consultant.mobile}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConsultantCard;
