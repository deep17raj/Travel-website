import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CustomerRequestCard from './CustomerRequestCard';

const CustomerSection = () => {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  // --- Fetch Data from Backend ---
  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        setLoading(true);
        const response = await axios.get("http://localhost:3000/api/v1/get/all-customer");
        const data = Array.isArray(response.data) ? response.data : response.data.data || [];
        setCustomers(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching customers:", error);
        setLoading(false);
      }
    };

    fetchCustomers();
  }, []);

  // --- Handle Mark Visited (API Call) ---
  const handleMarkVisited = async (id) => {
    try {
        // 1. Send PATCH request to backend
        await axios.patch(`http://localhost:3000/api/v1/customer-request/mark-visited/${id}`);
        
        // 2. Update Local State (Optimistic UI update)
        setCustomers(prevCustomers => 
            prevCustomers.map(cust => 
                cust._id === id ? { ...cust, IsVisited: true } : cust
            )
        );
    } catch (error) {
        console.error("Error marking as visited:", error);
        alert("Failed to update status. Please try again.");
    }
  };

  // --- Search Filter ---
  const filteredCustomers = customers.filter((customer) => 
    customer.customerName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.customerEmail?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 md:p-10 h-full w-full min-h-screen bg-[#FAFAFA]">
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
                placeholder="Search by name or email..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full md:w-80 px-6 py-3 rounded-full border border-gray-200 focus:border-[#5937E0] focus:ring-2 focus:ring-purple-100 outline-none transition-all shadow-sm text-gray-700 bg-white"
            />
            <div className="absolute right-4 top-1/2 -translate-y-1/2 text-[#5937E0]">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            </div>
        </div>
      </div>

      {/* Content Area */}
      {loading ? (
        <div className="flex justify-center items-center h-64">
           <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#5937E0]"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8 justify-items-center md:justify-items-stretch">
            {filteredCustomers.length > 0 ? (
                filteredCustomers.map((customer) => (
                    <CustomerRequestCard 
                        key={customer._id} 
                        data={customer}
                        // Pass the handler down to the card
                        onMarkVisited={handleMarkVisited}
                    />
                ))
            ) : (
                <div className="col-span-full text-center text-gray-400 mt-10">
                    No customers found.
                </div>
            )}
        </div>
      )}
    </div>
  );
};

export default CustomerSection;