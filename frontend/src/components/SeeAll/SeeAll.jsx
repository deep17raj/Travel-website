import React, { useState, useEffect } from 'react';
import axios from 'axios';
// Swiper imports
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import { useNavigate } from 'react-router-dom'; // 1. Import useNavigate
import NavBar from '../NavBar/NavBar';
import { handleCall } from '../../utils/contactHelper';

// --- CARD COMPONENT ---
// 2. Updated to use navigation hook
const PackageCard = ({ item }) => {
  const navigate = useNavigate(); // Initialize hook

  const handleReadMore = () => {
    // Navigate to blog page with specific ID
    navigate(`/blog/${item.blogId}`);
  };

  return (
    <div className="bg-white rounded-[30px] shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col overflow-hidden border border-gray-100 mx-2 mb-10 mt-2">
      {/* Image */}
      <div className="h-56 w-full relative">
        <img 
          src={item.imageUrl || "https://via.placeholder.com/600x400?text=No+Image"} 
          alt={item.packageName} 
          className="w-full h-full object-cover" 
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-gray-700 shadow-sm">
           FEATURED
        </div>
      </div>
      
      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="font-bold text-xl text-gray-900 mb-2">{item.packageName}</h3>
        <p className="text-gray-500 text-sm mb-4 leading-relaxed line-clamp-2">
          {item.displayText || "Explore this amazing package."}
        </p>
        
        <div className="flex-grow"></div>

        <div className="flex justify-between items-center pt-4 border-t border-gray-100">
            <span 
                onClick={() => handleCall('+971501234567')} 
                className="text-xs font-bold text-[#8B5CF6] uppercase tracking-wider cursor-pointer hover:text-[#7c3aed]"
            >
                Call for Pricing
            </span>
            <button 
                onClick={handleReadMore} // Attach handler here
                className="bg-[#8B5CF6] hover:bg-[#7c3aed] text-white text-sm font-semibold py-2.5 px-6 rounded-full transition-colors shadow-lg shadow-purple-100"
            >
                Read More
            </button>
        </div>
      </div>
    </div>
  );
};

// --- SECTION WRAPPER (Swiper Implementation) ---
const PackageSection = ({ categoryTitle, data }) => {
  const [swiperRef, setSwiperRef] = useState(null);

  // If no data for this category, don't render the section
  if (!data || data.length === 0) return null;

  return (
    <div className="mb-20">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-end mb-8 px-4">
        <div>
           <h6 className="text-[#317312] font-bold text-[20px] uppercase tracking-[0.2em] mb-2">
             Top Destination
           </h6>
           <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
             {categoryTitle}
           </h2>
        </div>
        
        {/* Custom Navigation Buttons */}
        <div className="flex gap-3 mt-4 md:mt-0">
            <button 
                onClick={() => swiperRef?.slidePrev()}
                className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:border-[#8B5CF6] hover:text-[#8B5CF6] hover:bg-purple-50 transition-all duration-300"
            >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"/></svg>
            </button>
            <button 
                onClick={() => swiperRef?.slideNext()}
                className="w-12 h-12 rounded-full bg-[#8B5CF6] text-white flex items-center justify-center hover:bg-[#7c3aed] shadow-lg shadow-purple-200 transition-all duration-300"
            >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
            </button>
        </div>
      </div>

      {/* Swiper Carousel */}
      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={1}
        spaceBetween={20}
        loop={data.length > 3} // Only loop if enough items
        pagination={{
          clickable: true,
          modifierClass: 'swiper-pagination-custom-',
          renderBullet: function (index, className) {
             return '<span class="' + className + ' bg-gray-300 w-3 h-3 rounded-full inline-block mx-1 hover:bg-[#8B5CF6] transition-colors cursor-pointer"></span>';
          },
        }}
        modules={[Pagination, Navigation]}
        breakpoints={{
          640: { slidesPerView: 1, spaceBetween: 20 },
          768: { slidesPerView: 2, spaceBetween: 30 },
          1024: { slidesPerView: 3, spaceBetween: 30 },
        }}
        className="pb-14 px-2"
      >
        {data.map((item) => (
          <SwiperSlide key={item._id} className="h-auto">
             <PackageCard item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

// --- MAIN COMPONENT ---
function SeeAll() {
  const [allPackages, setAllPackages] = useState([]);
  const [loading, setLoading] = useState(true);

  // --- Fetch Data ---
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        // Replace with your actual backend URL
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/v1/get/allpackage`);
        
        // Handle response structure
        const data = Array.isArray(response.data) ? response.data : response.data.data || [];
        setAllPackages(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching packages:", error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // --- Group Data by Category ---
  const adventureData = allPackages.filter(pkg => pkg.packageCategory?.toLowerCase() === 'adventure');
  const spiritualData = allPackages.filter(pkg => pkg.packageCategory?.toLowerCase() === 'spiritual');
  const trekkingData = allPackages.filter(pkg => pkg.packageCategory?.toLowerCase() === 'trekking');
  
  // Optional: Catch-all for others
  const otherData = allPackages.filter(pkg => !['adventure', 'spiritual', 'trekking'].includes(pkg.packageCategory?.toLowerCase()));

  return (
    <div>
      <NavBar/>
      <div className="w-full pt-16 pb-24 font-sans">
       <div className="max-w-7xl mx-auto px-4 md:px-6">
           
           {loading ? (
               <div className="text-center py-20 text-gray-500">Loading packages...</div>
           ) : (
               <>
                   <PackageSection 
                      categoryTitle="Adventure & Rafting Packages" 
                      data={adventureData} 
                   />

                   <PackageSection 
                      categoryTitle="Spiritual & Religious Packages" 
                      data={spiritualData} 
                   />

                   <PackageSection 
                      categoryTitle="Trekking & Hiking Packages" 
                      data={trekkingData} 
                   />
                   
                   {/* Render other categories if they exist */}
                   {otherData.length > 0 && (
                       <PackageSection 
                          categoryTitle="More Experiences & Packages" 
                          data={otherData} 
                       />
                   )}
               </>
           )}

           {/* CTA Section */}
           <div className="mt-12 text-center bg-white rounded-[40px] p-12 shadow-sm border border-gray-100">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                 Looking for something specific?
              </h3>
              <p className="text-gray-500 mb-8 max-w-lg mx-auto">We can customize any experience for you based on your preferences and dates.</p>
              <button className="inline-block border-2 border-[#8B5CF6] text-[#8B5CF6] font-bold text-sm py-3 px-8 rounded-full hover:bg-[#8B5CF6] hover:text-white transition-all duration-300 tracking-wide uppercase">
                 Request Custom Plan
              </button>
           </div>
       </div>
       
       {/* Global styles for Swiper dots */}
       <style jsx global>{`
         .swiper-pagination-bullet-active {
           background-color: #8B5CF6 !important;
           width: 20px !important;
           border-radius: 99px !important;
           transition: all 0.3s ease;
         }
       `}</style>
    </div>
    </div>
  )
}

export default SeeAll;