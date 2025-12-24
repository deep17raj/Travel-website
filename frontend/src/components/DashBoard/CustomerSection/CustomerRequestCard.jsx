import React, { useState } from 'react';
import { User, Phone, Mail, MapPin, Calendar, Users, CheckCircle, Check } from 'lucide-react';

const CustomerRequestCard = ({ data, onMarkVisited }) => {
  const [isUpdating, setIsUpdating] = useState(false);

  const { 
    _id, // Need ID for the API call
    customerName, 
    customerPhoneNo, 
    customerEmail, 
    travelDestination, 
    travelDate, 
    totalNoOfPersons,
    IsVisited 
  } = data;

  const formattedDate = new Date(travelDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });

  const handleButtonClick = async () => {
    if (IsVisited) return; // Prevent clicking if already visited
    
    setIsUpdating(true);
    await onMarkVisited(_id);
    setIsUpdating(false);
  };

  return (
    <div className={`bg-white rounded-[24px] p-6 shadow-[0_8px_30px_rgba(0,0,0,0.04)] border ${IsVisited ? 'border-green-200' : 'border-gray-100'} flex flex-col w-full max-w-sm hover:shadow-[0_8px_30px_rgba(89,55,224,0.1)] transition-all duration-300 relative overflow-hidden`}>
      
      {/* Visual indicator if visited */}
      {IsVisited && (
          <div className="absolute top-0 right-0 bg-green-100 text-green-600 px-4 py-1 rounded-bl-xl text-xs font-bold uppercase tracking-wider">
              Visited
          </div>
      )}

      {/* Header: Name & Status */}
      <div className="flex justify-between items-start mb-6">
        <div className="flex items-center gap-3">
          <div className={`w-12 h-12 rounded-full flex items-center justify-center ${IsVisited ? 'bg-green-50 text-green-600' : 'bg-purple-50 text-[#5937E0]'}`}>
            <User size={20} />
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-900 line-clamp-1">{customerName}</h3>
            <span className="text-xs text-gray-400 font-medium">New Request</span>
          </div>
        </div>
      </div>

      {/* Details List */}
      <div className="space-y-4 mb-8">
        {/* Destination */}
        <div className="flex items-center gap-3">
          <MapPin size={18} className="text-gray-400 min-w-[18px]" />
          <span className="text-gray-700 font-medium">{travelDestination}</span>
        </div>

        {/* Date & Persons */}
        <div className="flex items-center gap-6">
            <div className="flex items-center gap-3">
                <Calendar size={18} className="text-gray-400 min-w-[18px]" />
                <span className="text-gray-700 text-sm">{formattedDate}</span>
            </div>
            <div className="flex items-center gap-2 bg-gray-50 px-2 py-1 rounded-md">
                <Users size={14} className="text-gray-500" />
                <span className="text-gray-700 text-sm font-semibold">{totalNoOfPersons}</span>
            </div>
        </div>

        <div className="h-px bg-gray-100 my-2"></div>

        {/* Contact Info */}
        <div className="flex items-center gap-3">
          <Phone size={18} className="text-gray-400 min-w-[18px]" />
          <span className="text-gray-600 text-sm">{customerPhoneNo}</span>
        </div>

        <div className="flex items-center gap-3">
          <Mail size={18} className="text-gray-400 min-w-[18px]" />
          <span className="text-gray-600 text-sm line-clamp-1" title={customerEmail}>
            {customerEmail}
          </span>
        </div>
      </div>

      {/* Action Button */}
      <button 
        onClick={handleButtonClick}
        disabled={IsVisited || isUpdating}
        className={`mt-auto w-full font-semibold py-3 rounded-xl transition-all shadow-lg flex items-center justify-center gap-2
            ${IsVisited 
                ? 'bg-green-100 text-green-700 cursor-default shadow-none' 
                : 'bg-[#5937E0] hover:bg-[#4a2bc2] text-white shadow-purple-100'
            }
            ${isUpdating ? 'opacity-70 cursor-not-allowed' : ''}
        `}
      >
        {isUpdating ? (
            "Updating..."
        ) : IsVisited ? (
            <>
                <Check size={18} /> Visited
            </>
        ) : (
            "Mark Visited"
        )}
      </button>
    </div>
  );
};

export default CustomerRequestCard;