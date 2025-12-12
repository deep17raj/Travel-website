import React from 'react';

const PackageCard = ({ data, onManage }) => {
  const { id, title, image, description } = data;

  return (
    <div className="bg-white rounded-[35px] shadow-[0_10px_40px_rgba(0,0,0,0.08)] overflow-hidden flex flex-col w-full max-w-[350px] mx-auto hover:-translate-y-2 transition-transform duration-300">
      
      {/* --- Image Section --- */}
      <div className="relative h-64 w-full">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay for Text Visibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        
        {/* Title Overlay */}
        <div className="absolute bottom-4 w-full text-center">
          {/* Using a distinct font style to match the 'Nainital' look */}
          <h2 className="text-white text-5xl font-bold tracking-wide drop-shadow-md font-serif italic">
            {title}
          </h2>
        </div>
      </div>

      {/* --- Content Section --- */}
      <div className="p-8 pt-6 flex flex-col items-center flex-grow">
        <p className="text-gray-500 text-center text-md leading-relaxed mb-8 line-clamp-4">
          {description}
        </p>

        {/* --- Manage Button --- */}
        <div className="mt-auto">
          <button 
            onClick={() => onManage(id)}
            className="bg-[#1877F2] hover:bg-[#1465d2] text-white font-semibold py-3 px-10 rounded-full shadow-[0_4px_14px_rgba(24,119,242,0.4)] transition-all active:scale-95"
          >
            Manage Package
          </button>
        </div>
      </div>
    </div>
  );
};

export default PackageCard;