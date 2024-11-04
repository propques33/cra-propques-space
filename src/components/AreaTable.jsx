import React from "react";

const RentalProperties = () => {
  const data = [
    {
      category: "Office",
      building: "Jaipuria Towers",
      floor: "BASEMENT FLOOR",
      builtup: "5413.33",
      carpet: "5139.69",
      rentable: "-",
    },
    {
      category: "Office",
      building: "Jaipuria Towers",
      floor: "GROUND FLOOR",
      builtup: "7827.4",
      carpet: "5247.73",
      rentable: "7827.4",
    },
    {
      category: "Office",
      building: "Jaipuria Towers",
      floor: "1ST FLOOR",
      builtup: "7199.33",
      carpet: "7031.69",
      rentable: "7199.33",
    },
    {
      category: "Office",
      building: "Jaipuria Towers",
      floor: "2ND FLOOR",
      builtup: "5872.18",
      carpet: "5635.4",
      rentable: "5872.18",
    },
    {
      category: "Office",
      building: "Jaipuria Towers",
      floor: "3RD FLOOR",
      builtup: "7152.14",
      carpet: "6908.39",
      rentable: "7152.14",
    },
    {
      category: "Office",
      building: "Jaipuria Towers",
      floor: "TERRACE FLOOR",
      builtup: "6369.42",
      carpet: "6369.42",
      rentable: "-",
    },
  ];

  // Helper function to calculate total area
  const calculateTotal = (key) => {
    return data
      .reduce((total, item) => {
        const value = parseFloat(item[key]);
        return total + (isNaN(value) ? 0 : value);
      }, 0)
      .toFixed(2);
  };

  const totalBuiltup = calculateTotal("builtup");
  const totalCarpet = calculateTotal("carpet");
  const totalRentable = calculateTotal("rentable");

  return (
    <div className="container md:w-full w-[100vw] px-2 md:px-0 mt-6">
      <h2 className="text-xl md:text-2xl font-semibold mb-4">
        Rental Properties
      </h2>
      {/* Responsive Table Container */}
      <div className="">
        <table className=" bg-white border">
          <thead>
            <tr>
              <th className="border md:px-4 py-2 text-xs md:text-sm">
                Category
              </th>
              <th className="border md:px-4 py-2 text-xs md:text-sm">
                Building
              </th>
              <th className="border md:px-4 py-2 text-xs md:text-sm">Floor</th>
              <th className="border md:px-4 py-2 text-xs md:text-sm">
                Builtup/Plinth Area (SFT)
              </th>
              <th className="border md:px-4 py-2 text-xs md:text-sm">
                Carpet Area (SFT)
              </th>
              <th className="border md:px-4 py-2 text-xs md:text-sm">
                Rentable Area (SFT)
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index} className="border">
                <td className="border md:px-4 py-2 text-xs md:text-sm">
                  {item.category}
                </td>
                <td className="border md:px-4 py-2 text-xs md:text-sm">
                  {item.building}
                </td>
                <td className="border md:px-4 py-2 text-xs md:text-sm">
                  {item.floor}
                </td>
                <td className="border md:px-4 py-2 text-xs md:text-sm">
                  {item.builtup}
                </td>
                <td className="border md:px-4 py-2 text-xs md:text-sm">
                  {item.carpet}
                </td>
                <td className="border md:px-4 py-2 text-xs md:text-sm">
                  {item.rentable}
                </td>
              </tr>
            ))}
            {/* Total row */}
            <tr className="border font-bold bg-[#E5E7EB]">
              <td
                className="border md:px-4 py-2 text-xs md:text-sm font-semibold"
                colSpan="3"
              >
                Total
              </td>
              <td className="border md:px-4 py-2 text-xs font-semibold md:text-sm">
                {totalBuiltup}
              </td>
              <td className="border md:px-4 py-2 text-xs font-semibold md:text-sm">
                {totalCarpet}
              </td>
              <td className="border md:px-4 py-2 text-xs font-semibold md:text-sm">
                {totalRentable}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RentalProperties;
