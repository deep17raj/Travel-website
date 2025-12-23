import React from 'react';
import { FiUser, FiPhone, FiMail, FiAward, FiMapPin } from 'react-icons/fi';

const GuideRequestCard = ({ data }) => {
  // Destructure using your specific Schema keys
  const { 
    guideName, 
    guidePhoneNo, 
    guidePhoneNo2, 
    guideEmail, 
    guideExperience, 
    guideAddress 
  } = data;

  return (
    <div className="bg-white rounded-[30px] p-8 shadow-[0_10px_30px_rgba(0,0,0,0.05)] flex flex-col items-center w-full max-w-[380px] mx-auto transition-all hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)]">
      <h3 className="text-3xl font-bold mb-8 text-gray-900">New Request</h3>

      <div className="w-full space-y-6 mb-10">
        
        {/* Name */}
        <div className="flex items-center space-x-5">
          <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center text-[#5937E0] bg-purple-50 rounded-full">
            <FiUser size={24} className="stroke-[2]" />
          </div>
          <span className="font-semibold text-gray-800 text-xl">{guideName}</span>
        </div>

        {/* Phone Numbers */}
        <div className="flex items-start space-x-5">
          <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center text-[#5937E0] bg-purple-50 rounded-full">
            <FiPhone size={24} className="stroke-[2]" />
          </div>
          <div className="flex flex-col space-y-1">
            <span className="text-gray-800 text-lg font-medium">{guidePhoneNo}</span>
            {/* Only show secondary phone if it exists */}
            {guidePhoneNo2 && (
               <span className="text-gray-500 text-lg">{guidePhoneNo2}</span>
            )}
          </div>
        </div>

        {/* Email */}
        <div className="flex items-center space-x-5">
          <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center text-[#5937E0] bg-purple-50 rounded-full">
            <FiMail size={24} className="stroke-[2]" />
          </div>
          <span className="text-gray-800 text-lg font-medium break-all line-clamp-1" title={guideEmail}>
            {guideEmail}
          </span>
        </div>

        {/* Experience */}
        <div className="flex items-center space-x-5">
          <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center text-[#5937E0] bg-purple-50 rounded-full">
            <FiAward size={24} className="stroke-[2]" />
          </div>
          <span className="text-gray-800 text-lg font-medium">{guideExperience} Years Exp.</span>
        </div>

        {/* Address */}
        <div className="flex items-start space-x-5">
          <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center text-[#5937E0] bg-purple-50 rounded-full">
            <FiMapPin size={24} className="stroke-[2]" />
          </div>
          <span className="text-gray-800 text-lg font-medium line-clamp-2">
            {guideAddress}
          </span>
        </div>

      </div>

      <button className="bg-[#5937E0] text-white text-xl font-bold py-4 px-16 rounded-full hover:bg-[#4a2cc0] transition-colors w-full sm:w-auto shadow-lg shadow-purple-200">
        Complete
      </button>
    </div>
  );
};

export default GuideRequestCard;