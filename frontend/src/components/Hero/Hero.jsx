import React from "react";
// Ensure these paths match your project structure
import Pic1 from "../../assets/Pic1.jpg";
import Pic2 from "../../assets/Pic2.jpg";
import Pic3 from "../../assets/Pic3.jpg";
import Pic4 from "../../assets/Pic4.jpg";
import Tel from "../../assets/Tel.svg";
import Map from "../../assets/Maps.svg";
import Plane1 from "../../assets/Plane1.svg";
import Plane2 from "../../assets/Plane2.svg";
import { handleCall } from "../../utils/contactHelper";

function Hero() {
  return (
    <div className="w-full mt-8 mb-20">
      {/* Main Container:
         - w-[90%] on mobile (so it doesn't touch edges)
         - w-3/4 on large screens (as requested)
         - mx-auto centers it
      */}
      <div className="w-[90%] lg:w-3/4 mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-4 relative">
        
        {/* --- LEFT TEXT SECTION --- */}
        <div className="w-full lg:w-[45%] flex flex-col items-start gap-6 z-10">
          
          {/* Trust Badge */}
          <div className="bg-white rounded-full px-5 py-2.5 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)] border border-gray-100 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            <p className="text-[#317312] text-xs sm:text-sm font-bold tracking-wide">
              Your Most Reliable Travel Partner
            </p>
          </div>

          {/* Headline */}
          <div className="flex flex-col leading-[1.1]">
            <h1 className="text-[#1C1C1C] font-extrabold text-5xl sm:text-6xl lg:text-[4.5rem] tracking-tight">
              Travel with
            </h1>
            <h1 className="text-[#317312] font-extrabold text-5xl sm:text-6xl lg:text-[4.5rem] tracking-tight">
              Complete Trust
            </h1>
          </div>

          {/* Description */}
          <p className="text-gray-500 text-base sm:text-lg leading-relaxed max-w-md">
            Experience the UAE with certified, trustworthy guides. Pay directly to us, 
            travel worry free. Your safety and satisfaction are our guarantee.
          </p>

          {/* CTA Button */}
          <button onClick={() => handleCall('+971501234567')} className="bg-[#166EF3] hover:bg-blue-700 transition-all text-white font-semibold rounded-full px-8 py-3.5 shadow-lg shadow-blue-200 mt-2">
            Contact Now
          </button>
        </div>

        {/* --- RIGHT IMAGE GRID SECTION --- */}
        <div className="w-full lg:w-[50%] relative mt-10 lg:mt-0">
          
          {/* Decorative Background Elements */}
          <img src={Plane2} alt="" className="absolute -top-10 -left-10 w-40 opacity-60 hidden lg:block pointer-events-none" />
          <img src={Plane1} alt="" className="absolute bottom-10 -right-10 w-32 opacity-60 hidden lg:block pointer-events-none" />
          <img src={Tel} alt="" className="absolute -top-6 right-20 w-12 z-20 animate-bounce delay-700 hidden lg:block" />
          <img src={Map} alt="" className="absolute bottom-8 left-8 w-12 z-20 hidden lg:block" />

          {/* Masonry Grid Layout */}
          <div className="grid grid-cols-2 gap-4">
             
             {/* Column 1 (Offset down) */}
             <div className="flex flex-col gap-4 mt-8 lg:mt-12">
                <div className="w-full h-48 sm:h-56 rounded-[2rem] overflow-hidden shadow-lg transform hover:scale-[1.02] transition-transform">
                   <img src={Pic1} alt="Scenic 1" className="w-full h-full object-cover" />
                </div>
                <div className="w-full h-40 sm:h-44 rounded-[2rem] overflow-hidden shadow-lg transform hover:scale-[1.02] transition-transform">
                   <img src={Pic2} alt="Scenic 2" className="w-full h-full object-cover" />
                </div>
             </div>

             {/* Column 2 (Offset up) */}
             <div className="flex flex-col gap-4 -mt-4 lg:-mt-0">
                <div className="w-full h-40 sm:h-44 rounded-[2rem] overflow-hidden shadow-lg transform hover:scale-[1.02] transition-transform">
                   <img src={Pic3} alt="Scenic 3" className="w-full h-full object-cover" />
                </div>
                <div className="w-full h-56 sm:h-64 rounded-[2rem] overflow-hidden shadow-lg transform hover:scale-[1.02] transition-transform">
                   <img src={Pic4} alt="Scenic 4" className="w-full h-full object-cover" />
                </div>
             </div>

          </div>
        </div>

      </div>
    </div>
  );
}

export default Hero;