
import React from "react";
import Vector from '../assets/Vector.png'; 
import Vector_1 from '../assets/Vector_1.png'
import Screenshoot from '../assets/Screenshoot.png'
import Group_61 from '../assets/Group_61.png'
import Group_62 from '../assets/Group_62.png'

function Project() {

  return (
    <section className="bg-[#07060B] relative py-[80px] sm:py-[100px] md:py-[150px] lg:py-[180px]">
      
      {/* Heading Section */}
      <h3 className="flex justify-end font-Italiana text-[32px] sm:text-[40px] md:text-[48px] lg:text-[55px] w-full sm:w-[600px] md:w-[800px] lg:w-[1210px] mt-[-50px] sm:mt-[-80px] md:mt-[-100px] lg:mt-[-132px] text-[#FFFFFF]">
        We Listen and <br />Learn
      </h3>

      {/* Paragraphs Section */}
      <div className="flex justify-end">
        <p className="capitalize mt-[20px] sm:mt-[30px] text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] w-full sm:w-[450px] md:w-[500px] lg:w-[650px] leading-[1.5rem] font-Poppins text-[#FFFFFF]">
          Once you fly with us, we’ll meticulously document your preferences, including aircraft size and type, as well as any food allergies your family may have for catering.
        </p>
      </div>
      
      <div className="flex justify-end">
        <p className="capitalize mt-[20px] sm:mt-[30px] text-[14px] sm:text-[16px] lg:text-[18px] w-full sm:w-[450px] md:w-[500px] lg:w-[650px] leading-[1.5rem] font-Poppins text-[#FFFFFF]">
          This personalized approach ensures that each subsequent booking is seamless and effortlessly tailored to your needs.
        </p>
      </div>

      {/* Image Section */}
      <div className="flex justify-center mt-[30px]">
        <img src={Screenshoot} className="w-full sm:w-[600px] md:w-[800px] lg:w-[1515px] pt-[15px] hover:shadow-[0px_0px_20px_grey] transition-all duration-500 hover:border-white" alt="Screenshot" />
      </div>

      {/* Our Services Section */}
      <div className="relative z-5 px-[20px] sm:px-[50px] md:px-[100px] mt-[50px]">
        <h1 className="text-[40px] sm:text-[50px] md:text-[60px] font-light text-white mb-[20px] sm:mb-[30px] md:mb-[40px]">Our Services</h1>
      </div>

      {/* Decorative Vector */}
      <div className="relative">
        <img src={Vector} alt="Curved Lines" className="absolute top-[750px] left-[20px] sm:left-[40px] md:left-[92px]" />
      </div>

      {/* Know More Button */}
      <div className="flex justify-end pr-[20px] sm:pr-[40px] md:pr-[60px] lg:pr-[80px] mt-[-50px]">
        <button className="border-[1px] border-white text-white font-Poppins py-[10px] sm:py-[12px] px-[25px] sm:px-[35px] rounded-full hover:shadow-[0px_0px_20px_grey] transition-all duration-500 hover:border-white">
          Know More
        </button>
      </div>

      {/* Ground Transportation Section */}
      <div className="flex flex-col lg:flex-row justify-between items-center px-[20px] sm:px-[50px] md:px-[80px] gap-[30px] sm:gap-[40px] md:gap-[50px] mt-[50px]">
        <div className="relative">
          <img src={Group_61} alt="Ground Transportation" className="w-full sm:w-[300px] md:w-[400px] lg:w-[430px] rounded-[40px] object-cover hover:shadow-[0px_0px_20px_grey] transition-all duration-500 hover:border-white shadow-lg" />
        </div>
        <div className="w-full sm:w-[500px] lg:w-[838px] mb-[100px] md:mb-[200px] lg:mb-[300px] text-white font-Jura">
          <h3 className="text-[18px] sm:text-[20px]">Concierge Services</h3>
          <h2 className="text-[20px] sm:text-[22px] lg:text-[25px] font-bold">Ground Transportation</h2>
          <p className="text-[14px] sm:text-[16px] leading-[1rem] w-full sm:w-[250px] md:w-[300px]">
            Altitude charter is happy to arrange door-to-door ground transportation at cost for any of our clients.
          </p>
        </div>
      </div>

      {/* Catering Section */}
      <div className="flex flex-col lg:flex-row justify-between items-center px-[20px] sm:px-[50px] md:px-[80px] gap-[30px] sm:gap-[40px] md:gap-[50px] mb-[50px]">
        <div className="text-white w-full sm:w-[400px] md:w-[500px] lg:w-[538px] mb-[100px] md:mb-[200px] lg:mb-[300px] px-[10px] sm:px-[100px] md:px-[200px] lg:px-[300px] py-[30px] text-white font-Jura">
          <h3 className="text-[18px] sm:text-[20px]">Concierge Services</h3>
          <h2 className="text-[20px] sm:text-[22px] lg:text-[25px] font-bold">Catering with Care</h2>
          <p className="text-[14px] sm:text-[16px] leading-[1rem] w-full sm:w-[250px] md:w-[300px]">
            Altitude charter is happy to arrange any type of catering requested at cost for any of our clients. This includes catering from specific restaurants whenever possible.
          </p>
        </div>
        <div className="relative">
          <img src={Group_62} alt="Catering" className="w-full sm:w-[300px] md:w-[400px] lg:w-[430px] rounded-[40px] object-cover hover:shadow-[0px_0px_20px_grey] transition-all duration-500 hover:border-white shadow-lg" />
        </div>
      </div>

      {/* Bottom Vector Section */}
      <div className="relative">
        <img src={Vector_1} alt="Curved Lines" className="absolute bottom-[10px] right-[50px] sm:right-[100px] h-[200px] md:h-[250px] lg:h-[308px] w-[250px] md:w-[350px] lg:w-[411px] object-cover" />
      </div>

    </section>
  );
}

export default Project;

