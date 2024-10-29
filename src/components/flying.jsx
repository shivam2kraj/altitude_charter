
import React from "react";
import altitude from "../assets/altitude.jpeg";

function Flying() {

  return (
    <main className="flex flex-col items-center py-16 px-10">
      {/* Heading */}
      <h1 className="text-5xl font-Italiana text-[#0B070E] text-center mb-16">
        Flying with Altitude
      </h1>

      {/* Outer container with dotted border */}
      <div className="w-full max-w-5xl p-90 flex flex-col items-center">
        
        {/* Central Image */}
        <div className="">
          <img
            src={altitude}
            alt="altitude"
            className="w-[400px] h-[400px] object-cover rounded-[35px] hover:shadow-[0px_0px_20px_grey] transition-all duration-500 hover:border-white"
          />
        </div>

        <div className="grid grid-cols-2 gap-x-80 gap-y-30 mt-[-380px] font-Jura">
          {/* Top Left - Seamless Flexibility */}
          <div className="text-right relative">
            <h3 className="font-semibold text-25px">Seamless Flexibility</h3>
            <p className="mt-2 text-gray-600 text-sm">
              We accommodate and execute last-minute changes effortlessly,
              ensuring a smooth experience.
            </p>
          </div>

          {/* Top Right - Rapid and Reliable */}
          <div className="text-left relative font-Jura">
            <h3 className="font-semibold text-lg">Rapid and Reliable</h3>
            <p className="mt-2 text-gray-600 text-sm">
              Get quotes in 2 hours, 24/7 availability, and book a flight in as
              little as 2 hours with expert international charter guidance.
            </p>
          </div>

          {/* Bottom Left - Exclusive Benefits */}
          <div className="text-right relative mt-12 font-Jura">
            <h3 className="font-semibold text-25">Exclusive Benefits</h3>
            <p className="mt-2 text-gray-600 text-sm">
              Receive a $500 credit towards ground transportation or catering
              with your first flight.
            </p>
          </div>

          {/* Bottom Right - Personalized Service */}
          <div className="text-left relative mt-12 font-Jura">
            <h3 className="font-semibold text-25">Personalized Service</h3>
            <p className="mt-2 text-gray-600 text-sm">
              Enjoy one-on-one concierge-level care, speaking with a live
              consultant each time you call and working with the same expert for
              every booking.
            </p>
          </div>
        </div>
        </div>
        {/* Bottom Center - Decades of Expertise */}
        <div className="text-center mt-[175px] font-Jura">
          <h3 className="font-semibold text-lg">Decades of Expertise</h3>
          <p className="mt-2 text-gray-600 text-sm">
            Over 37 years of private charter experience, setting the standard in
            personalized service.
          </p>
        </div>
     
    </main>
  );
}

export default Flying;
