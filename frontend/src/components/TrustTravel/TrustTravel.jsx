import React from "react";
// Ensure these paths match your project structure
import Shield from "../../assets/TT/shield.svg";
import Tele from "../../assets/TT/telephone (1) 1.svg";
import { handleCall } from "../../utils/contactHelper";

function TrustTravel() {
  return (
    // Outer section wrapper
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8  anime">
      
      {/* Main Card Container:
        - Light green background (#cfffc3 is a close approximation to the image)
        - Rounded corners (rounded-[3rem] for large, soft corners)
        - Centered content
      */}
      <div className="w-full max-w-6xl mx-auto bg-[#D0FDC5] rounded-[2rem] md:rounded-[3.5rem] p-8 sm:p-12 lg:p-20 flex flex-col items-center justify-center text-center gap-6 sm:gap-8">
        
        {/* Icon */}
        <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 flex items-center justify-center mb-2">
           {/* If you don't have the exact blue shield SVG, you might need to tint it or use a specific asset */}
           <img 
             src={Shield} 
             alt="Trust Shield" 
             className="w-full h-full object-contain"
           />
        </div>

        {/* Title */}
        <h2 className="text-[#052e16] font-serif text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight">
          The TrustTravel Promise
        </h2>

        {/* Description Text */}
        <div className="max-w-4xl space-y-1">
          <p className="text-black text-base sm:text-lg lg:text-[20px] font-medium leading-relaxed sm:leading-normal">
            If any guide fails to meet our standards or behaves inappropriately, report it immediately. We guarantee a full investigation within 24 hours and complete refund if warranted.
          </p>
        </div>

        {/* Helpline Button */}
        <div className="mt-4">
          <button onClick={() => handleCall('+971501234567')} className="bg-[#1a73e8] hover:bg-blue-700 transition-colors text-white rounded-full px-6 py-3 sm:px-10 sm:py-4 flex items-center gap-3 sm:gap-4 shadow-lg shadow-blue-200/50">
            {/* Phone Icon */}
            <img 
              src={Tele} 
              alt="Phone" 
              className="w-5 h-5 sm:w-6 sm:h-6 brightness-0 invert" 
            />
            
            {/* Button Text */}
            <span className="font-semibold text-sm sm:text-lg tracking-wide">
              Help Line No +91 94890809
            </span>
          </button>
        </div>

      </div>
    </section>
  );
}

export default TrustTravel;