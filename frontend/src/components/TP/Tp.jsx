import React from "react";
import Comp from "../../assets/TP/Complete2.svg";

function Tp() {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8">
      <div className="TP flex flex-col lg:flex-row w-full gap-6 sm:gap-12 lg:gap-36">
        {/* Left Section - Image */}
        <div className="left flex-1 flex items-center justify-center">
          <div className="w-full h-auto">
            <img 
              className="h-auto w-full max-h-72 sm:max-h-96 lg:max-h-[90vh] object-contain" 
              src={Comp} 
              alt="Travel destination showcase" 
            />
          </div>
        </div>

        {/* Right Section - Content */}
        <div className="right flex flex-1 flex-col gap-4 sm:gap-6 h-auto justify-center">
          {/* Header */}
          <div className="rightEl">
            <h3 className="text-[#317312] text-sm sm:text-base lg:text-[20px] font-bold mt-10 sm:mt-16 lg:mt-20">
              TRAVEL POINT
            </h3>
          </div>

          {/* Title */}
          <div className="rightEl">
            <h5 className="text-[#1C1C1C] text-2xl sm:text-3xl lg:text-4xl font-bold">
              We help you find your
            </h5>
            <h5 className="text-[#1C1C1C] text-2xl sm:text-3xl lg:text-4xl font-bold">
              dream destination
            </h5>
          </div>

          {/* Description */}
          <div className="rightEl space-y-2">
            <p className="text-sm sm:text-base lg:text-[18px] font-medium text-[#A8A8A8]">
              Hey! We're here to help you explore safely with certified local
              guides.
            </p>
            <p className="text-sm sm:text-base lg:text-[18px] font-medium text-[#A8A8A8]">
              Just choose your destination — we'll handle the rest securely.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="rightEl grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 lg:gap-4 w-full sm:w-3/4">
            {/* Stat 1 */}
            <div className="feat bg-white rounded-2xl sm:rounded-3xl lg:rounded-4xl flex flex-col justify-center items-center py-6 sm:py-8 lg:py-10 text-center gap-2 border-[#1918251A] border">
              <h4 className="text-[#317312] font-bold text-2xl sm:text-2xl lg:text-3xl">200+</h4>
              <p className="text-xs sm:text-sm lg:text-[1.1rem] font-medium text-[#A8A8A8]">Holiday Package</p>
            </div>

            {/* Stat 2 */}
            <div className="feat bg-white rounded-2xl sm:rounded-3xl lg:rounded-4xl flex flex-col justify-center items-center py-6 sm:py-8 lg:py-10 gap-2 text-center border-[#1918251A] border">
              <h4 className="text-[#317312] font-bold text-2xl sm:text-2xl lg:text-3xl">450</h4>
              <p className="text-xs sm:text-sm lg:text-[1.1rem] font-medium text-[#A8A8A8]">RedDoorz</p>
            </div>

            {/* Stat 3 */}
            <div className="feat bg-white rounded-2xl sm:rounded-3xl lg:rounded-4xl flex flex-col justify-center items-center py-6 sm:py-8 lg:py-10 gap-2 text-center border-[#1918251A] border">
              <h4 className="text-[#317312] font-bold text-2xl sm:text-2xl lg:text-3xl">10</h4>
              <p className="text-xs sm:text-sm lg:text-[1.1rem] font-medium text-[#A8A8A8]">Premium Airlines</p>
            </div>

            {/* Stat 4 */}
            <div className="feat bg-white rounded-2xl sm:rounded-3xl lg:rounded-4xl flex flex-col justify-center items-center py-6 sm:py-8 lg:py-10 gap-2 text-center border-[#1918251A] border">
              <h4 className="text-[#317312] font-bold text-2xl sm:text-2xl lg:text-3xl">12k+</h4>
              <p className="text-xs sm:text-sm lg:text-[1.1rem] font-medium text-[#A8A8A8]">Happy Customer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tp;