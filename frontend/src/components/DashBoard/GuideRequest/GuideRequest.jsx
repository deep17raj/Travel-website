import React, { useState, useEffect } from 'react';
import axios from 'axios';
import GuideRequestCard from './GuideRequestCard';

const GuideRequest = () => {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  // --- Fetch Data from Backend ---
  useEffect(() => {
    const fetchRequests = async () => {
      try {
        setLoading(true);
        const response = await axios.get('http://localhost:3000/api/v1/get/allGuideRequest');
        const data = Array.isArray(response.data) ? response.data : response.data.data || [];
        setRequests(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching guide requests:", error);
        setLoading(false);
      }
    };

    fetchRequests();
  }, []);

  // --- Handle Mark Visited (API Call) ---
  const handleMarkVisited = async (id) => {
    try {
        // 1. Send PATCH request
        await axios.patch(`http://localhost:3000/api/v1/guide-request/mark-visited/${id}`);
        
        // 2. Update Local State (Optimistic UI Update)
        setRequests(prevRequests => 
            prevRequests.map(req => 
                req._id === id ? { ...req, IsVisited: true } : req
            )
        );
    } catch (error) {
        console.error("Error marking guide request as visited:", error);
        alert("Failed to update status. Please try again.");
    }
  };

  // --- Filter Logic ---
  const filteredRequests = requests.filter((req) => 
    req.guideName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    req.guideEmail?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 md:p-12 h-full min-h-screen bg-[#F5F5F5]">
      <div className="mb-10 flex flex-col md:flex-row justify-between items-center">
        <div>
            <h1 className="text-4xl font-bold text-gray-800 mb-2">Guide Requests</h1>
            <p className="text-gray-500">View and manage new guide applications.</p>
        </div>
        
        {/* Search Bar */}
        <div className="mt-4 md:mt-0 w-full md:w-auto">
             <input 
               type="text" 
               placeholder="Search requests..." 
               value={searchTerm}
               onChange={(e) => setSearchTerm(e.target.value)}
               className="px-5 py-3 w-full md:w-80 rounded-full border border-gray-300 focus:outline-none focus:border-[#5937E0] shadow-sm" 
             />
        </div>
      </div>

      {/* Content Area */}
      {loading ? (
        <div className="flex justify-center items-center h-64">
           <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#5937E0]"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 xl:gap-10 justify-items-center">
          {filteredRequests.length > 0 ? (
            filteredRequests.map((request) => (
              <GuideRequestCard 
                key={request._id} 
                data={request} 
                onMarkVisited={handleMarkVisited} // Pass handler
              />
            ))
          ) : (
             <div className="col-span-full text-gray-500 text-lg mt-10">
               No guide requests found.
             </div>
          )}
        </div>
      )}
    </div>
  );
};

export default GuideRequest;