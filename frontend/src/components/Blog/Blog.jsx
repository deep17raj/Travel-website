import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Phone } from "lucide-react";
import NavBar from "../NavBar/NavBar";
import { handleCall } from "../../utils/contactHelper";

// Import the new Reusable Component
import CustomerInquiryForm from "../CustomerEnquiryForm/CustomerEnquiryForm"; // Update path as needed

function Blog() {
  const { id } = useParams();
  const [packageData, setPackageData] = useState(null);
  const [loadingData, setLoadingData] = useState(true);

  // --- Fetch Specific Package Data ---
  useEffect(() => {
    const fetchPackageDetail = async () => {
      if (!id) return;
      try {
        setLoadingData(true);
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/v1/get/detail/${id}`);
        const data = res.data.data || res.data;
        setPackageData(data);
        setLoadingData(false);
      } catch (err) {
        console.error("Error fetching package details:", err);
        setLoadingData(false);
      }
    };

    fetchPackageDetail();
  }, [id]);

  if (loadingData) {
    return (
      <div className="w-full h-screen flex justify-center items-center text-[#5C15B8] text-xl font-bold">
        Loading Package Details...
      </div>
    );
  }

  if (!packageData) {
    return (
      <div className="w-full h-screen flex justify-center items-center text-red-500">
        Package not found.
      </div>
    );
  }

  return (
    <section className="w-full pb-20 pt-4">
      <NavBar />
      <div className="my-4"></div>
      
      {/* --- HERO IMAGE SECTION --- */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full h-[300px] md:h-[400px] lg:h-[500px] rounded-[2rem] overflow-hidden shadow-lg mb-8">
          <img
            src={packageData.imageUrl || "https://via.placeholder.com/1200x500?text=No+Image"}
            alt={packageData.packageName}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Action Buttons Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-12">
          {/* Call Button */}
          <button onClick={() => handleCall('+971501234567')} className="flex items-center gap-3 text-[#5C15B8] hover:text-[#4a1094] transition-colors group">
            <div className="p-2 bg-purple-50 rounded-full group-hover:bg-purple-100 transition-colors">
              <Phone size={20} className="stroke-current" />
            </div>
            <span className="text-lg font-semibold">Call for Pricing</span>
          </button>

          {/* Contact Button */}
          <button onClick={() => handleCall('+971501234567')} className="bg-[#5C15B8] hover:bg-[#4a1094] text-white px-8 py-3 rounded-full font-medium shadow-lg shadow-purple-200 transition-all hover:scale-105">
            Contact Now
          </button>
        </div>

        {/* --- CONTENT & FORM GRID --- */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          
          {/* LEFT: Dynamic Text Content */}
          <div className="w-full lg:w-[55%] flex flex-col gap-10 text-[#1C1C1C]">
            
            {/* Package Header */}
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{packageData.packageName}</h1>
              <p className="text-gray-600 text-lg leading-relaxed">
                {packageData.displayText}
              </p>
            </div>

            {/* Dynamic Sections Loop */}
            {packageData.sections && packageData.sections.length > 0 ? (
              packageData.sections.map((section, index) => (
                <div key={index}>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">{section.heading}</h2>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {section.description}
                  </p>
                  {section.imageUrl && (
                    <img
                      src={section.imageUrl}
                      alt={section.heading}
                      className="mt-4 rounded-xl w-full h-64 object-cover shadow-sm"
                    />
                  )}
                </div>
              ))
            ) : (
              <p>No itinerary details available.</p>
            )}
          </div>

          {/* RIGHT: Reusable Form Component */}
          <div className="w-full lg:w-[45%] sticky top-8">
             {/* Pass the package name to pre-fill the destination */}
             <CustomerInquiryForm defaultDestination={packageData.packageName} />
          </div>

        </div>
      </div>
    </section>
  );
}

export default Blog;