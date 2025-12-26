import React from "react";
// Ensure these paths match your project structure
import Location from "../../assets/KF/Location.svg";
import Calender from "../../assets/KF/Calender.svg";
import Discount from "../../assets/KF/Discount.svg";
import Comp from "../../assets/KF/Comp.svg";

function KeyFeature() {
  return (
    <section className="w-full py-16 lg:py-24  overflow-hidden ">

      {/* Main Container: w-[90%] on mobile, w-3/4 on desktop */}
      <div className="w-[90%] lg:w-3/4 mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">

        {/* --- LEFT SECTION: Content --- */}
        <div className="w-full lg:w-1/2 flex flex-col gap-8">

          {/* Header & Title */}
          <div>
            <h3 className="text-[#317312] font-bold tracking-[0.2em] text-sm sm:text-base uppercase mb-3">
              Key Features
            </h3>
            <h2 className="text-[#1C1C1C] text-3xl sm:text-4xl lg:text-[44px] font-extrabold leading-tight">
              We offer best services
            </h2>
            <div className="mt-4 space-y-1">
              <p className="text-[#A8A8A8] text-base sm:text-lg font-medium">
                Hay! Travelo there to help you find your dream holiday.
              </p>
              <p className="text-[#A8A8A8] text-base sm:text-lg font-medium">
                Easy you just find where you want to go and buy the ticket.
              </p>
            </div>
          </div>

          {/* Feature List */}
          <div className="flex flex-col gap-6 mt-2">

            {/* Feature 1: Location */}
            <div className="group flex items-center gap-6 p-4 sm:p-6 rounded-[2rem] bg-white border border-transparent hover:border-gray-100 hover:shadow-xl transition-all duration-300 cursor-default">
              {/* Icon Box */}
              <div className="shrink-0 w-16 h-16 sm:w-20 sm:h-20 bg-[#a838fe] rounded-3xl flex items-center justify-center shadow-lg shadow-[#a838fe75] group-hover:scale-110 transition-transform duration-300">
                <img className="w-8 h-8 sm:w-10 sm:h-10 object-contain " src={Location} alt="Location" />
              </div>
              {/* Text */}
              <div className="flex flex-col">
                <h3 className="text-[#1C1C1C] font-bold text-lg sm:text-xl">Select many location</h3>
                <p className="text-[#A8A8A8] text-sm sm:text-base font-medium mt-1">
                  Choose your favorite location
                </p>
              </div>
            </div>

            {/* Feature 2: Schedule (Highlighted in design) */}
            <div className="group flex items-center gap-6 p-4 sm:p-6 rounded-[2rem] bg-white shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] border border-gray-50 hover:shadow-xl transition-all duration-300 cursor-default">
              {/* Icon Box */}
              <div className="shrink-0 w-16 h-16 sm:w-20 sm:h-20 bg-[#F99B28] rounded-3xl flex items-center justify-center shadow-lg shadow-yellow-200 group-hover:scale-110 transition-transform duration-300">
                <img className="w-8 h-8 sm:w-10 sm:h-10 object-contain " src={Calender} alt="Calendar" />
              </div>
              {/* Text */}
              <div className="flex flex-col">
                <h3 className="text-[#1C1C1C] font-bold text-lg sm:text-xl">Schedule your trip</h3>
                <p className="text-[#A8A8A8] text-sm sm:text-base font-medium mt-1">
                  Set the date you want
                </p>
              </div>
            </div>

            {/* Feature 3: Discount */}
            <div className="group flex items-center gap-6 p-4 sm:p-6 rounded-[2rem] bg-white border border-transparent hover:border-gray-100 hover:shadow-xl transition-all duration-300 cursor-default">
              {/* Icon Box */}
              <div className="shrink-0 w-16 h-16 sm:w-20 sm:h-20 bg-[#F81E6E] rounded-3xl flex items-center justify-center shadow-lg shadow-pink-200 group-hover:scale-110 transition-transform duration-300">
                <img className="w-8 h-8 sm:w-10 sm:h-10 object-contain " src={Discount} alt="Discount" />
              </div>
              {/* Text */}
              <div className="flex flex-col">
                <h3 className="text-[#1C1C1C] font-bold text-lg sm:text-xl">Big discount</h3>
                <p className="text-[#A8A8A8] text-sm sm:text-base font-medium mt-1">
                  Get discount for every service
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* --- RIGHT SECTION: Image --- */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-lg lg:max-w-xl">
            {/* Use the composite image provided */}
            <img
              src={Comp}
              alt="Key Features Collage"
              className="w-full h-auto object-contain drop-shadow-2xl"
            />
          </div>
        </div>

      </div>
    </section>
  );
}

export default KeyFeature;