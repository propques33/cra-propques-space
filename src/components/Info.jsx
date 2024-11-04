import React, { useState, useEffect } from "react";
import ImageGallery from "./ImageGallery";
import AreaTable from "./AreaTable";
import AreaCalculationTable from "./AreaCalculationTable";
import AmenitiesTable from "./AmenitiesTable";
import AboutProp from "./AboutProp";
import Consultants from "./Consultants";
import QueryForm from "./QueryForm";
import Adarsh from "./Adarsh";
const Info = () => {
 

  return (
    <div className="w-full flex md:px-8 gap-8">
      <div className="md:w-[60vw]">
        <ImageGallery />
        <AreaTable />
        <AreaCalculationTable />
        <AboutProp />
        <AmenitiesTable />
        <Consultants />
      </div>
      <div className={`md:w-[40vw] md:block hidden`}>
        <div className="sticky right-0 top-20 fixed bg-[#F7F7F7] p-8">
          <Adarsh />
        </div>
      </div>
    </div>
  );
};

export default Info;
