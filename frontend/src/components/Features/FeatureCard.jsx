import React from 'react';

function FeatureCard({ Src, Title, Desc }) {
  return (
    <div className="w-full h-full flex flex-col items-center text-center p-8 bg-white rounded-[2rem] shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_4px_25px_rgba(0,0,0,0.08)] transition-shadow duration-300 border border-gray-50">
      
      {/* Icon Container with Purple Background */}
      <div className="w-16 h-16 rounded-full bg-[#F3E8FF] flex items-center justify-center mb-6 shrink-0">
        {Src && (
          <img 
            src={Src} 
            alt={Title || "Feature Icon"} 
            className="w-8 h-8 object-contain"
          />
        )}
      </div>

      {/* Title */}
      <h3 className="text-[#1C1C1C] text-xl font-bold mb-4">
        {Title}
      </h3>

      {/* Description */}
      <p className="text-gray-500 text-[15px] leading-relaxed font-normal">
        {Desc}
      </p>
    </div>
  );
}

export default FeatureCard;