import React from 'react';
import CustomerRequestCard from './CustomerRequestCard';

// MOCK DATA: Simulating backend response
const mockCustomerData = [
  {
    id: 1,
    name: 'Anjali Gupta',
    phone: '9876543210',
    email: 'anjali.travels@gmail.com',
    location: 'Mumbai, Maharashtra',
  },
  {
    id: 2,
    name: 'Rohan Mehta',
    phone: '8899776655',
    email: 'rohan.m@yahoo.com',
    location: 'Delhi, India',
  },
  {
    id: 3,
    name: 'Sarah Jenkins',
    phone: '+1 415-555-0123',
    email: 'sarah.j@travelo.com',
    location: 'San Francisco',
  },
  {
    id: 4,
    name: 'Vikram Singh',
    phone: '7766554433',
    email: 'vikram.singh@outlook.com',
    location: 'Jaipur, Rajasthan',
  },
  {
    id: 5,
    name: 'Emily Chen',
    phone: '+65 9123 4567',
    email: 'emily.c@gmail.com',
    location: 'Singapore',
  },
  {
    id: 6,
    name: 'Arjun Reddy',
    phone: '9988001122',
    email: 'arjun.r@techmail.com',
    location: 'Hyderabad, Telangana',
  },
];

const CustomerSection = () => {
  return (
    <div className="p-6 md:p-10 h-full w-full">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
        <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                New Customers
            </h1>
            <p className="text-gray-500 mt-2 text-lg">
                Manage incoming customer registrations.
            </p>
        </div>

        {/* Search Bar */}
        <div className="relative w-full md:w-auto">
            <input 
                type="text" 
                placeholder="Search by name or ID..." 
                className="w-full md:w-80 px-6 py-3 rounded-full border border-gray-200 focus:border-[#5937E0] focus:ring-2 focus:ring-purple-100 outline-none transition-all shadow-sm text-gray-700 bg-white"
            />
            <div className="absolute right-4 top-1/2 -translate-y-1/2 text-[#5937E0]">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            </div>
        </div>
      </div>

      {/* Grid Layout for Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8 justify-items-center md:justify-items-stretch">
        {mockCustomerData.map((customer) => (
          <CustomerRequestCard key={customer.id} data={customer} />
        ))}
      </div>
    </div>
  );
};

export default CustomerSection;