
import React from "react";
import aircarft from '../assets/aircarft.png';
import TabComponent from "./tab";

function Hero() {
  return (
    <main className="sm:px-12 md:px-20 lg:px-[80px] md:pt-[150px]">
      <h1 className="text-[32px] md:text-[55px] md:w-[310px] text-center md:text-left text-white">
        ALTITUDE<br/>CHARTER
      </h1>
      <p className="text-[14px] md:text-[18px] text-center md:text-left w-full md:w-[397px] text-white">
        Uncompromising Luxury, Unforgettable Journeys.
      </p>
      <div className="text-center md:text-left mt-4 md:mt-8">
        <button className="border-[1px] hover:shadow-[0px_0px_20px_grey] transition-all duration-500 hover:border-white text-white px-6 py-3 rounded-full capitalize">
          request a flight
        </button>
      </div>
      <div className="absolute top-0 z-[-5] left-0 md:w-[880px]">
        <img src={aircarft} alt="Aircraft" className="w-[900px]" />
      </div>
      <div className="px-[715px] md:mt-[-450px]">
        <TabComponent />
      </div>
    </main>
  );
}

export default Hero;
