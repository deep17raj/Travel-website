import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PackageCard from './PackageCard';
import { Search } from 'lucide-react';

const ViewAllPackages = () => {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  // --- Fetch Data from Backend ---
  useEffect(() => {
    const fetchPackages = async () => {
      try {
        setLoading(true);
        // Replace with your actual backend URL
        const response = await axios.get('http://localhost:3000/api/v1/get/allpackage');
        
        // Check structure: response.data could be the array or { data: [...] }
        const rawData = Array.isArray(response.data) ? response.data : response.data.data || [];

        // MAP Backend Schema to UI Component Props
        // Schema: packageName, imageUrl, displayText, _id
        // Component Expects: title, image, description, id
        const formattedData = rawData.map((pkg) => ({
            id: pkg._id,
            title: pkg.packageName,
            image: pkg.imageUrl || 'https://via.placeholder.com/400x300?text=No+Image', // Fallback image
            description: pkg.displayText || 'No description available.'
        }));

        setPackages(formattedData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching packages:", error);
        setLoading(false);
      }
    };

    fetchPackages();
  }, []);

  // Handle Manage Click
  const handleManage = (id) => {
    console.log(`Maps to edit page for package ID: ${id}`);
    // navigation.navigate(`/admin/edit-package/${id}`);
  };

  // Search Filter Logic
  const filteredPackages = packages.filter(pkg => 
    pkg.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 md:p-10 min-h-screen bg-gray-50/50">
      
      {/* --- Header Section --- */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">All Packages</h1>
          <p className="text-gray-500 mt-2">View and manage your travel destinations.</p>
        </div>

        {/* Search Bar */}
        <div className="relative w-full md:w-96">
          <input 
            type="text"
            placeholder="Search destination..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3 rounded-full border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all shadow-sm"
          />
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
        </div>
      </div>

      {/* --- Grid Layout --- */}
      {loading ? (
        <div className="flex justify-center items-center h-64">
           <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center">
          {filteredPackages.length > 0 ? (
            filteredPackages.map((pkg) => (
              <PackageCard 
                key={pkg.id} 
                data={pkg} 
                onManage={handleManage} 
              />
            ))
          ) : (
             // Handle case where fetch worked but returned empty list
             <div className="col-span-full text-center py-20 text-gray-400">
                 No packages found.
             </div>
          )}
        </div>
      )}
      
      {!loading && packages.length > 0 && filteredPackages.length === 0 && (
          <div className="text-center py-20 text-gray-400">
              No packages found matching "{searchTerm}"
          </div>
      )}
    </div>
  );
};

export default ViewAllPackages;