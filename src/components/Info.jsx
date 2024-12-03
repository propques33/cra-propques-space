import React, { useState, useEffect } from "react";


import ImageGallery from "./ImageGallery";
import AboutProp from "./AboutProp";
import AreaTable from "./AreaTable";

const AreaCalculationTable = React.lazy(() => import('./AreaCalculationTable'));
const AmenitiesTable = React.lazy(() => import('./AmenitiesTable'));
const Consultants = React.lazy(() => import('./Consultants'));
const Adarsh = React.lazy(() => import('./Adarsh'));

const Info = () => {
 

  return (
    <div className="w-full flex md:px-8 gap-8">
      <div className="md:w-[60vw]">
        <ImageGallery />
        <AboutProp />

        <AreaTable />
        <AreaCalculationTable />
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
