import React from 'react';
import { FiUser, FiPhone, FiMail, FiMapPin } from 'react-icons/fi';

const CustomerRequestCard = ({ data }) => {
  // Destructure customer data
  const { name, phone, email, location } = data;

  return (
    <div className="bg-white rounded-[30px] p-8 shadow-[0_10px_30px_rgba(0,0,0,0.05)] flex flex-col items-center w-full max-w-[380px] mx-auto transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] border border-transparent hover:border-purple-100">
      
      <h3 className="text-2xl md:text-3xl font-bold mb-10 text-gray-900 text-center">
        New Customer
      </h3>

      <div className="w-full space-y-6 mb-10">
        {/* Name Row */}
        <div className="flex items-center space-x-5">
          <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center text-[#5937E0] bg-purple-50 rounded-full">
            <FiUser size={24} className="stroke-[2]" />
          </div>
          <span className="font-semibold text-gray-800 text-lg md:text-xl">{name}</span>
        </div>

        {/* Phone Row */}
        <div className="flex items-center space-x-5">
          <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center text-[#5937E0] bg-purple-50 rounded-full">
            <FiPhone size={24} className="stroke-[2]" />
          </div>
          <div className="flex flex-col">
            <span className="text-gray-800 text-lg md:text-xl font-medium">{phone}</span>
          </div>
        </div>

        {/* Email Row */}
        <div className="flex items-center space-x-5">
          <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center text-[#5937E0] bg-purple-50 rounded-full">
            <FiMail size={24} className="stroke-[2]" />
          </div>
          <span className="text-gray-800 text-lg md:text-xl font-medium break-all line-clamp-1">
            {email}
          </span>
        </div>

        {/* Location Row (Replaces Experience) */}
        <div className="flex items-center space-x-5">
          <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center text-[#5937E0] bg-purple-50 rounded-full">
            <FiMapPin size={24} className="stroke-[2]" />
          </div>
          <span className="text-gray-800 text-lg md:text-xl font-medium">
            {location}
          </span>
        </div>
      </div>

      {/* Action Button */}
      <button className="bg-[#5937E0] hover:bg-[#4a2cc0] text-white text-xl font-bold py-4 px-12 rounded-full transition-all duration-300 w-full shadow-lg shadow-purple-200 active:scale-95">
        View Profile
      </button>
    </div>
  );
};

export default CustomerRequestCard;