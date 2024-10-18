
import React from "react";
import flying from "../assets/flying.jpg";

function Flying() {
  return (
    <main className="flex flex-col items-center py-16 px-10">
      {/* Heading */}
      <h1 className="text-5xl font-semibold text-center mb-16">
        Flying with Altitude
      </h1>

      {/* Outer container with dotted border */}
      <div className="relative w-full max-w-5xl border border-dashed border-gray-400 rounded-lg p-10 flex flex-col items-center">
        
        {/* Central Image */}
        <div className="relative">
          <img
            src={flying}
            alt="Flying"
            className="w-[400px] h-[400px] object-cover rounded-[35px] hover:shadow-[0px_0px_20px_grey] transition-all duration-500 hover:border-white"
          />
        </div>

        {/* Dotted connecting lines */}
        <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-between items-center">
          {/* Left Line */}
          <div className="absolute top-1/3 left-0 w-[100px] border-dashed border-gray-400 border-t"></div>
          {/* Right Line */}
          <div className="absolute top-1/3 right-0 w-[100px] border-dashed border-gray-400 border-t"></div>
          {/* Bottom Left Line */}
          <div className="absolute bottom-0 left-0 w-[100px] border-dashed border-gray-400 border-t"></div>
          {/* Bottom Right Line */}
          <div className="absolute bottom-0 right-0 w-[100px] border-dashed border-gray-400 border-t"></div>
        </div>

        {/* Text Sections */}
        <div className="grid grid-cols-2 gap-x-40 gap-y-10 mt-16 w-full">
          {/* Top Left - Seamless Flexibility */}
          <div className="text-left relative">
            <div className="absolute left-[-40px] top-[50%] transform -translate-y-1/2 w-4 h-4 bg-black rounded-full"></div>
            <h3 className="font-semibold text-lg">Seamless Flexibility</h3>
            <p className="mt-2 text-gray-600 text-sm">
              We accommodate and execute last-minute changes effortlessly,
              ensuring a smooth experience.
            </p>
          </div>

          {/* Top Right - Rapid and Reliable */}
          <div className="text-left relative">
            <div className="absolute right-[-40px] top-[50%] transform -translate-y-1/2 w-4 h-4 bg-black rounded-full"></div>
            <h3 className="font-semibold text-lg">Rapid and Reliable</h3>
            <p className="mt-2 text-gray-600 text-sm">
              Get quotes in 2 hours, 24/7 availability, and book a flight in as
              little as 2 hours with expert international charter guidance.
            </p>
          </div>

          {/* Bottom Left - Exclusive Benefits */}
          <div className="text-left relative">
            <div className="absolute left-[-40px] top-[50%] transform -translate-y-1/2 w-4 h-4 bg-black rounded-full"></div>
            <h3 className="font-semibold text-lg">Exclusive Benefits</h3>
            <p className="mt-2 text-gray-600 text-sm">
              Receive a $500 credit towards ground transportation or catering
              with your first flight.
            </p>
          </div>

          {/* Bottom Right - Personalized Service */}
          <div className="text-left relative">
            <div className="absolute right-[-40px] top-[50%] transform -translate-y-1/2 w-4 h-4 bg-black rounded-full"></div>
            <h3 className="font-semibold text-lg">Personalized Service</h3>
            <p className="mt-2 text-gray-600 text-sm">
              Enjoy one-on-one concierge-level care, speaking with a live
              consultant each time you call and working with the same expert for
              every booking.
            </p>
          </div>
        </div>

        {/* Bottom Center - Decades of Expertise */}
        <div className="mt-12 text-center">
          <div className="w-4 h-4 bg-black rounded-full mx-auto mb-4"></div>
          <h3 className="font-semibold text-lg">Decades of Expertise</h3>
          <p className="mt-2 text-gray-600 text-sm">
            Over 37 years of private charter experience, setting the standard in
            personalized service.
          </p>
        </div>
      </div>
    </main>
  );
}

export default Flying;
