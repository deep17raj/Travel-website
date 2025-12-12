import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PackageCard from './PackageCard';
import { Search } from 'lucide-react';

const ViewAllPackages = () => {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  // --- Mock Data for Initial Display (Replace with backend fetch) ---
  useEffect(() => {
    // Simulator for backend call
    const fetchPackages = async () => {
      try {
        // UNCOMMENT THIS TO USE REAL BACKEND:
        // const response = await axios.get('https://your-api.com/api/packages');
        // setPackages(response.data);
        
        // Mock Data simulation
        const mockData = [
          {
            id: 1,
            title: 'Nainital',
            image: 'https://images.unsplash.com/photo-1572883454114-1cf0031a029e?q=80&w=1000&auto=format&fit=crop',
            description: "Discover Nainital's spiritual aura, riverfront temples, heritage sites, and thrilling boating adventures led by a trusted local guide."
          },
          {
            id: 2,
            title: 'Rishikesh',
            image: 'https://images.unsplash.com/photo-1596021688656-35fdc9ed0274?q=80&w=1000&auto=format&fit=crop',
            description: "Experience the Yoga Capital of the World with exclusive rafting sessions, Ganga Aarti viewing, and meditation retreats."
          },
          {
            id: 3,
            title: 'Manali',
            image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=1000&auto=format&fit=crop',
            description: "Explore snow-capped peaks, Solang Valley adventures, and cozy cottage stays in the heart of Himachal."
          },
          {
            id: 4,
            title: 'Goa',
            image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=1000&auto=format&fit=crop',
            description: "Sun, sand, and sea. Enjoy the vibrant nightlife, Portuguese heritage, and pristine beaches of North and South Goa."
          },
          {
            id: 5,
            title: 'Jaipur',
            image: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=1000&auto=format&fit=crop',
            description: "Walk through the Pink City, visit the Hawa Mahal, Amer Fort, and experience royal Rajasthani hospitality."
          }
        ];
        
        setPackages(mockData);
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
          {filteredPackages.map((pkg) => (
            <PackageCard 
              key={pkg.id} 
              data={pkg} 
              onManage={handleManage} 
            />
          ))}
        </div>
      )}
      
      {!loading && filteredPackages.length === 0 && (
          <div className="text-center py-20 text-gray-400">
              No packages found matching "{searchTerm}"
          </div>
      )}
    </div>
  );
};

export default ViewAllPackages;