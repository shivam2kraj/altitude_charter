
import React from "react";
import aircarft_indoor from "../assets/aircarft_indoor.png"; // Update the path as necessary

function Welcome() {
  return (
    <main className="px-6 sm:px-10 md:px-16 lg:px-20 xl:px-[70px] pt-10 md:pt-[80px] md:h-[750px]">
      {/* Heading */}
      <h1 className="text-3xl sm:text-5xl md:text-[48px] lg:text-[72px] xl:text-[92px] w-full sm:w-[450px] md:w-[550px] lg:w-[650px] leading-tight md:leading-[120%] capitalize">
        Welcome To <br /> Altitude Charter
      </h1>
      
      {/* Spacing */}
      <div className="mt-6 md:mt-12 lg:mt-16"></div>

      {/* Aircraft Image */}
      <div className="flex justify-center md:justify-start">
        <img 
          src={aircarft_indoor} 
          className="w-[200px] sm:w-[310px] md:w-[360px] lg:w-[410px] xl:w-[480px] hover:shadow-[0px_0px_20px_grey] transition-all duration-500 hover:border-white rounded-2xl md:rounded-[40px]" 
          alt="Aircraft Indoor" 
        />
      </div>

      {/* Text Section */}
      <div className="flex justify-center md:justify-end mt-6 md:mt-[-200px] xl:mt-[-300px]">
        <p className="text-sm sm:text-md sm:w-[250px] md:w-[350px] lg:w-[424px] xl:w-[500px] capitalize">
          Altitude charter offers 37 years of charter experience. We have procured everything from 6-passenger turboprops to 300-passenger jumbo jets and everything in between. We not only know the best operators in the industry but also several of the individual aircraft.
        </p>
      </div>
    </main>
  );
}

export default Welcome;
