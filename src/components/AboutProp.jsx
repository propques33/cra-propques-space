import React, { useState } from "react";
import DownloadButton from "./DownloadButton";
const AboutProperty = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="container px-4 md:px-0 mt-6 md:w-full w-[100vw]">
      <h2 className="text-xl md:text-2xl font-semibold  flex gap-2 ">
        About this Property <DownloadButton />
      </h2>
      <p className="text-xs md:text-sm leading-relaxed text-justify my-4">
        This commercial office space in BTM Layout, strategically positioned
        near Outer Ring Road and Silk Board Junction, is a prime leasing
        opportunity for businesses looking for a high-demand location. The
        property is designed with a low-rise structure comprising one basement,
        a ground floor, and three upper floors, along with a terrace featuring a
        pantry. With a total built-up area of 39,834 sq ft, the building
        provides ample space for multiple office setups, making it ideal for
        companies in the IT, tech, or coworking sectors.
      </p>

      {showMore && (
        <>
          <p className="">Key amenities include:</p>

          <ul className="list-disc ml-4 md:ml-8 mt-4 space-y-4 text-justify ">
            <li className="text-xs md:text-sm">
              <span className="font-semibold">
                24 dedicated car parking spaces
              </span>{" "}
              and 22 bike parking spaces, ensuring hassle-free parking for
              employees and clients.
            </li>
            <li className="text-xs md:text-sm">
              <span className="font-semibold">One elevator</span> with a
              6-passenger capacity for smooth vertical movement within the
              building.
            </li>
            <li className="text-xs md:text-sm">
              <span className="font-semibold">Multiple access points</span>{" "}
              (South, West, and East) for easier navigation and improved
              logistics.
            </li>
            <li className="text-xs md:text-sm">
              The building is surrounded by important landmarks and facilities,
              such as <span className="font-semibold">Vega City Mall</span> (2.5
              km), <span className="font-semibold">Apollo Hospitals</span>{" "}
              (within 3 km), and{" "}
              <span className="font-semibold">Treebo Trip Elmas Hotel</span> (2
              km), which add to the convenience for employees and visitors.
            </li>
            <p className="text-xs md:text-sm leading-relaxed text-justify my-4">
              Additionally, the building’s proximity to key infrastructure
              projects like the newly inaugurated double-decker bridge and metro
              connectivity enhances its value for businesses. Its corner plot
              location ensures high visibility and ease of access from the Outer
              Ring Road, making it a highly attractive leasing option for
              companies looking to establish a strong presence in Bangalore.
            </p>
          </ul>
        </>
      )}

      <button
        onClick={toggleShowMore}
        className=" text-blue-500 hover:text-blue-700 text-sm mt-4"
      >
        {showMore ? "See Less" : "See More"}
      </button>
    </div>
  );
};

export default AboutProperty;
