
import React from "react";
import image_2 from '../assets/image_2.png';
import TabComponent from "./tab";

function Hero() {
  return (
    <main className="sm:px-12 lg:px-[80px] md:pt-[150px] bg-[#07060B] flex justify-between pb-[85px] h-[929px] flex-col lg:flex-row">
      <div>
      <h1 className="text-[32px] md:text-[55px] font-Italiana text-center md:text-left text-white z-[5] relative">
        ALTITUDE<br/>CHARTER
      </h1>
      <p className="text-[14px] md:text-[18px] text-center font-Jura md:text-left w-full md:w-[397px] text-white z-[5] relative">
        Uncompromising Luxury, Unforgettable Journeys.
      </p>
      <div className="text-center md:text-left mt-4 md:mt-8 z-[5] relative">
        <button className="border-[1px] hover:shadow-[0px_0px_20px_grey] transition-all duration-500 hover:border-white text-white px-6 py-3 rounded-full capitalize">
          request a flight
        </button>
      </div>
      <div className="absolute top-0 z-[1] left-0 md:w-[800px]">
        <img src={image_2} alt="Aircraft" className="w-[820px]" />
      </div>
      </div>
    
      <div className="z-[5] relative block">
        <TabComponent />
      </div>
    </main>
  );
}

export default Hero;
