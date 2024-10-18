
import React from "react";
import aircarft1 from '../assets/aircarft1.png';
import aircarft2 from '../assets/aircarft2.png';
import Vector from '../assets/Vector.png'; // Import vector line image
import Vector_1 from '../assets/Vector_1.png'
import Screenshoot from '../assets/Screenshoot.png'

function Project() {
  return (
    <section className="bg-[#000000] py-[180px] min-h-screen">
       <h3 className="flex justify-end text-[55px] w-[1210px] mt-[-132px] text-[#FFFFFF] opacity: 0px">
         We Listen and <br />Learn
       </h3>

       <div className="flex justify-end">
         <p className="capitalize mt-[30px] text-[15px] w-[650px] text-[#FFFFFF]">
           Once you fly with us, we’ll meticulously document your preferences, including aircraft size and type, as well as any food allergies your family may have for catering.
         </p>
       </div>
       <div className="flex justify-end">
         <p className="capitalize mt-[30px] text-[15px] w-[650px] text-[#FFFFFF]">
           This personalized approach ensures that each subsequent booking is seamless and effortlessly tailored to your needs.
         </p>
       </div>
       <br />
       <div>
         <img src={Screenshoot} className="w-[1515px] pt-[15px] hover:shadow-[0px_0px_20px_grey] transition-all duration-500 hover:border-white" alt="" />
       </div>
       <br /> <br /> <br />

      {/* Vector Lines */}
      <div className="absolute relative inset-0 z-0">
        <img src={Vector} alt="Curved Lines" className="absolute top-[50px] left-0 w-200 w-[850px] object-cover" />
      </div>

      {/* Title Section */}
      <div className="relative z-10 px-[80px]">
        <h1 className="text-[60px] font-light text-white mb-[30px]">Our Services</h1>
      </div>

      {/* "Know More" Button */}
      <div className="absolute relative inset-0 z-0">
        <img src={Vector_1} alt="Curved Lines" className="absolute top-[50px] right-0 w-200 w-[580px] object-cover" />
      </div>
      <div className="flex justify-end right-[80px] pt-[5px] mt-[-65px] w-[1450px]">
        <button className="border-[1px] border-white text-white py-[12px] px-[35px] rounded-full hover:shadow-[0px_0px_20px_grey] transition-all duration-500 hover:border-white">
          Know More
        </button>
      </div>

      {/* First Section - Image on Left, Text on Right */}
      <div className="relative z-10 flex justify-between items-center px-[80px] gap-[50px] mb-[50px]">
        <div className="w-1/2 relative">
          <img src={aircarft1} alt="Ground Transportation" className="w-300 h-auto rounded-[40px] object-cover hover:shadow-[0px_0px_20px_grey] transition-all duration-500 hover:border-white shadow-lg" />
        </div>
        <div className="w-1/2 text-white">
          <h3 className="text-[20px] mb-[10px]">Concierge Services</h3>
          <h2 className="text-[32px] font-bold mb-[15px]">Ground Transportation</h2>
          <p className="text-[16px] leading-[1.8]">
            Altitude charter is happy to arrange door-to-door ground transportation at cost for any of our clients.
          </p>
        </div>
      </div>

      {/* Second Section - Text on Left, Image on Right */}
      <div className="relative z-10 flex justify-between items-center px-[80px] gap-[50px] mb-[50px]">
        <div className="w-1/2 text-white">
          <h3 className="text-[20px] mb-[10px]">Concierge Services</h3>
          <h2 className="text-[32px] font-bold mb-[15px]">Catering with Care</h2>
          <p className="text-[16px] leading-[1.8]">
            Altitude charter is happy to arrange any type of catering requested at cost for any of our clients. This includes catering from specific restaurants whenever possible.
          </p>
        </div>
        <div className="w-1/2 relative">
          <img src={aircarft2} alt="Catering with Care" className="w-300 h-auto rounded-[40px] object-cover hover:shadow-[0px_0px_20px_grey] transition-all duration-500 hover:border-white shadow-lg" />
        </div>
      </div>
    </section>
  );
}

export default Project;
