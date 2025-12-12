import React from 'react';
import { FiUser, FiPhone, FiMail, FiAward } from 'react-icons/fi';

const GuideRequestCard = ({ data }) => {
  // Destructure data from the prop
  const { name, phoneNumbers, email, experience } = data;

  return (
    <div className="bg-white rounded-[30px] p-8 shadow-[0_10px_30px_rgba(0,0,0,0.05)] flex flex-col items-center w-full max-w-[380px] mx-auto transition-all hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)]">
      <h3 className="text-3xl font-bold mb-10 text-gray-900">New Guide Request</h3>

      <div className="w-full space-y-6 mb-10">
        {/* Name Row */}
        <div className="flex items-center space-x-5">
          <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center text-[#5937E0]">
            <FiUser size={28} className="stroke-[1.5]" />
          </div>
          <span className="font-medium text-gray-800 text-xl">{name}</span>
        </div>

        {/* Phone Row */}
        <div className="flex items-start space-x-5">
          <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center text-[#5937E0]">
            <FiPhone size={28} className="stroke-[1.5]" />
          </div>
          <div className="flex flex-col space-y-1">
            {phoneNumbers.map((num, index) => (
              <span key={index} className="text-gray-800 text-xl font-medium">{num}</span>
            ))}
          </div>
        </div>

        {/* Email Row */}
        <div className="flex items-center space-x-5">
          <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center text-[#5937E0]">
            <FiMail size={28} className="stroke-[1.5]" />
          </div>
          <span className="text-gray-800 text-xl font-medium break-all line-clamp-1">{email}</span>
        </div>

        {/* Experience Row */}
        <div className="flex items-center space-x-5">
          <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center text-[#5937E0]">
            <FiAward size={28} className="stroke-[1.5]" />
          </div>
          <span className="text-gray-800 text-xl font-medium">{experience}</span>
        </div>
      </div>

      <button className="bg-[#5937E0] text-white text-xl font-bold py-4 px-16 rounded-full hover:bg-[#4a2cc0] transition-colors w-full sm:w-auto shadow-lg shadow-purple-200">
        Complete
      </button>
    </div>
  );
};

export default GuideRequestCard;