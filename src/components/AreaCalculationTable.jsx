import React from "react";

const AreaCalculation = () => {
  const data = {
    "FAR Calculation": [
      { title: "Total Site Area", areaM: "1152.79", areaSft: "12,408.58" },
      {
        title: "Number of Floors",
        areaM: "G+3 (1 BASEMENT + GROUND FLOOR + 3 OFFICE FLOORS)",
      },
      { title: "Number of Entries", areaM: "2" },
      { title: "Fire Exits", areaM: "1" },
    ],
    "Ground Coverage": [
      { title: "Allowed Ground Coverage", areaM: "55%", areaSft: "6,824.60" },
      {
        title: "Achieved Ground Coverage",
        areaM: "630.9",
        areaSft: "6,791.77",
      },
    ],
    "Car Parkings": [
      { title: "Number of Car Parkings", areaM: "24" },
      { title: "Number of Bike Parkings", areaM: "22" },
    ],
  };

  return (
    <div className="container md:w-full w-[100vw] px-2 md:px-0 mt-6">
      <h2 className="text-xl md:text-2xl font-semibold mb-4">Area Calculation</h2>
      {/* Responsive Table Container */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border">
          <thead>
            <tr>
              <th className="border px-2 md:px-4 py-2 text-xs md:text-sm">
                Description
              </th>
              <th className="border px-2 md:px-4 py-2 text-xs md:text-sm">
                Area in M²
              </th>
              <th className="border px-2 md:px-4 py-2 text-xs md:text-sm">
                Area in SFT
              </th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(data).map((section, index) => (
              <React.Fragment key={index}>
                <tr>
                  <td
                    className="border px-2 md:px-4 py-2 font-bold bg-gray-200"
                    colSpan="3"
                  >
                    {section}
                  </td>
                </tr>
                {data[section].map((item, subIndex) => (
                  <tr key={subIndex}>
                    <td className="border px-2 md:px-4 py-2 text-xs md:text-sm">
                      {item.title}
                    </td>
                    <td className="border px-2 md:px-4 py-2 text-xs md:text-sm">
                      {item.areaM}
                    </td>
                    <td className="border px-2 md:px-4 py-2 text-xs md:text-sm">
                      {item.areaSft || "-"}
                    </td>
                  </tr>
                ))}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AreaCalculation;
