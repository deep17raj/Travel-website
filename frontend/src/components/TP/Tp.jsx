import React, { useState, useEffect, useRef } from "react";
// Ensure these paths match your project structure
import Comp from "../../assets/TP/Complete2.svg";
import Dis from "../../assets/TP/Dis.svg";

// --- Internal Helper for Number Animation (Scroll-Triggered) ---
const CountUp = ({ end, duration = 2000, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const [hasStarted, setHasStarted] = useState(false);

  // 1. Setup Intersection Observer to detect when element is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        // If element is visible, start animation and stop observing
        if (entry.isIntersecting) {
          setHasStarted(true);
          observer.disconnect(); 
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the element is visible
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // 2. Animation Logic (Only runs if hasStarted is true)
  useEffect(() => {
    if (!hasStarted) return;

    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [hasStarted, end, duration]);

  return <span ref={countRef}>{count}{suffix}</span>;
};

function Tp() {
  return (
    <section className="w-full py-10 lg:py-20  overflow-hidden anime">
      
      <div className="w-full px-4 sm:px-6 lg:px-12 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
        
        {/* --- LEFT SECTION: Image --- */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start relative">
          <div className="relative w-full max-w-lg lg:max-w-full">
             <img 
              className="w-full h-auto object-contain" 
              src={Comp} 
              alt="Travel Point" 
            />
          </div>
        </div>

        {/* --- RIGHT SECTION: Content --- */}
        <div className="w-full lg:w-1/2 flex flex-col gap-8">
          
          {/* Header & Title */}
          <div className="flex flex-col gap-2">
            <h3 className="text-[#317312] font-bold tracking-[0.2em] text-sm sm:text-base uppercase">
              Travel Point
            </h3>
            <h2 className="text-[#1C1C1C] text-3xl sm:text-4xl lg:text-[44px] font-extrabold leading-tight">
              We help you find your <br className="hidden lg:block" />
              dream destination
            </h2>
          </div>

          {/* Description */}
          <p className="text-[#A8A8A8] text-base sm:text-lg font-medium leading-relaxed max-w-lg">
            Hey! We're here to help you explore safely with certified local guides. 
            Just choose your destination — we'll handle the rest securely.
          </p>

          {/* Stats Grid Container */}
          <div className="relative w-full mt-4">
            
            {/* Floating Ticket Icon */}
            <div className="absolute -top-12 -right-6 sm:-right-10 z-10 animate-bounce-slow">
              <img src={Dis} alt="Discount Ticket" className="w-16 sm:w-20" />
            </div>

            {/* Grid with Animated Cards */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              
              {/* Card 1 */}
              <div className="bg-white border border-[#1918251A] rounded-[2rem] p-6 flex flex-col items-center justify-center text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <h3 className="text-[#317312] font-bold text-3xl lg:text-4xl mb-1">
                  {/* Using the updated CountUp component */}
                  <CountUp end={200} suffix="+" />
                </h3>
                <p className="text-[#1C1C1C] text-sm font-medium">Holiday Package</p>
              </div>

              {/* Card 2 */}
              <div className="bg-white border border-[#1918251A] rounded-[2rem] p-6 flex flex-col items-center justify-center text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <h3 className="text-[#317312] font-bold text-3xl lg:text-4xl mb-1">
                  <CountUp end={450} />
                </h3>
                <p className="text-[#1C1C1C] text-sm font-medium">RedDoorz</p>
              </div>

              {/* Card 3 */}
              <div className="bg-white border border-[#1918251A] rounded-[2rem] p-6 flex flex-col items-center justify-center text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <h3 className="text-[#317312] font-bold text-3xl lg:text-4xl mb-1">
                  <CountUp end={10} />
                </h3>
                <p className="text-[#1C1C1C] text-sm font-medium">Premium Airlines</p>
              </div>

              {/* Card 4 */}
              <div className="bg-white border border-[#1918251A] rounded-[2rem] p-6 flex flex-col items-center justify-center text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <h3 className="text-[#317312] font-bold text-3xl lg:text-4xl mb-1">
                  <CountUp end={12} suffix="k+" />
                </h3>
                <p className="text-[#1C1C1C] text-sm font-medium">Happy Customer</p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Tp;