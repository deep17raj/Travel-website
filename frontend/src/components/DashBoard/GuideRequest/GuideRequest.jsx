import React from 'react';
import GuideRequestCard from './GuideRequestCard';

// MOCK DATA - Simulating a backend response with multiple requests
const mockRequests = [
  {
    id: 1,
    name: 'Sujal das',
    phoneNumbers: ['88666262323', '88666262323'],
    email: 'dassujal966@gmail.com',
    experience: '1 yrs.',
  },
  {
    id: 2,
    name: 'Amit Verma',
    phoneNumbers: ['9876543210'],
    email: 'amit.verma@example.com',
    experience: '3 yrs.',
  },
  {
    id: 3,
    name: 'Priya Sharma',
    phoneNumbers: ['1122334455', '9988776655'],
    email: 'priya.sharma@test.co',
    experience: '2 yrs.',
  },
  {
    id: 4,
    name: 'Rahul Singh',
    phoneNumbers: ['7766554433'],
    email: 'rahul.singh@mail.com',
    experience: '5 yrs.',
  },
];

const GuideRequest = () => {
  return (
    <div className="p-6 md:p-12 h-full">
      <div className="mb-10 flex flex-col md:flex-row justify-between items-center">
        <div>
            <h1 className="text-4xl font-bold text-gray-800 mb-2">Guide Requests</h1>
            <p className="text-gray-500">View and manage new guide applications.</p>
        </div>
        
        {/* Optional: A Search/Filter bar could go here */}
        <div className="mt-4 md:mt-0 w-full md:w-auto">
             <input type="text" placeholder="Search requests..." className="px-5 py-3 w-full md:w-80 rounded-full border border-gray-300 focus:outline-none focus:border-[#5937E0]" />
        </div>
      </div>

      {/* RESPONSIVE GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 xl:gap-10 justify-items-center">
        {mockRequests.map((request) => (
          <GuideRequestCard key={request.id} data={request} />
        ))}
      </div>
    </div>
  );
};

export default GuideRequest;