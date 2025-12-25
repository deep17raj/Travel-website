import React, { useRef, useState, useEffect } from 'react';
import axios from 'axios';
import { Phone, ChevronLeft, ChevronRight } from 'lucide-react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import { useNavigate } from 'react-router-dom'; // 1. Import useNavigate
import Pic1 from "../../assets/Pic1.jpg"; // Fallback image
import { handleCall } from '../../utils/contactHelper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function DestinationCarousel() {
  const swiperRef = useRef(null);
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate(); // 2. Initialize navigate hook

  // --- Fetch Data from Backend ---
  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        setLoading(true);
        // Replace with your actual backend URL
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/v1/get/allpackage`);
        
        // Handle response structure
        const data = Array.isArray(response.data) ? response.data : response.data.data || [];
        setDestinations(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching destinations:", error);
        setLoading(false);
      }
    };

    fetchDestinations();
  }, []);

  // 3. Navigation Handler
  const handleReadMore = (id) => {
    navigate(`/blog/${id}`);
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-12 anime">
      
      {/* --- Upper Header Component --- */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        {/* Title Section */}
        <div>
          <h3 className="text-[#427a18] font-bold uppercase tracking-widest text-lg mb-2">
            Top Destination
          </h3>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Explore top destination
          </h1>
        </div>

        {/* Navigation Buttons */}
        <div className="flex gap-4">
          <button 
            onClick={() => swiperRef.current?.slidePrev()}
            className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:border-blue-500 hover:text-blue-500 transition-colors bg-white"
            aria-label="Previous Slide"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={() => swiperRef.current?.slideNext()}
            className="w-12 h-12 rounded-full bg-[#1a73e8] flex items-center justify-center text-white shadow-lg shadow-blue-200 hover:bg-blue-700 transition-colors"
            aria-label="Next Slide"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      {/* --- Carousel Section --- */}
      {loading ? (
        <div className="flex justify-center items-center h-64">
           <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#1a73e8]"></div>
        </div>
      ) : (
        <Swiper
            modules={[Pagination, Navigation, Autoplay]}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            loop={destinations.length > 3} // Only loop if enough slides
            spaceBetween={30}
            pagination={{ clickable: true }}
            className="pb-12"
            breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            }}
        >
            {destinations.map((item) => (
            <SwiperSlide key={item._id} className="py-5">
                <div className="bg-white rounded-[2rem] shadow-lg overflow-hidden border border-gray-100 h-full flex flex-col hover:shadow-xl transition-shadow duration-300">
                
                {/* Image Section */}
                <div className="relative h-80 w-full">
                    <img
                    // Use backend image, fallback to Pic1 if missing
                    src={item.imageUrl || Pic1}
                    alt={item.packageName}
                    className="w-full h-full object-cover"
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                    {/* Trending Badge */}
                    <div className="absolute top-0 left-0 bg-[#427a18] text-white px-6 py-1.5 rounded-br-2xl rounded-tl-[2rem] text-sm font-medium z-10">
                    Trending
                    </div>

                    {/* Title Overlay */}
                    <h2 
                    className="absolute bottom-4 left-0 right-0 text-center text-white text-5xl tracking-wide drop-shadow-md select-none"
                    style={{ fontFamily: '"Brush Script MT", "Comic Sans MS", cursive' }}
                    >
                    {item.packageName}
                    </h2>
                </div>

                {/* Content Section */}
                <div className="p-6 flex flex-col flex-grow">
                    <p className="text-gray-500 text-sm leading-relaxed mb-6 text-center line-clamp-3">
                    {item.displayText || "Explore the beauty of this amazing destination."}
                    </p>

                    {/* Footer Actions */}
                    <div className="mt-auto flex items-center justify-between pt-2">
                    <button onClick={() => handleCall('+971501234567')} className="flex items-center gap-2 text-[#1a73e8] hover:text-blue-700 transition-colors font-semibold text-sm">
                        <Phone size={16} className="fill-current" />
                        <span>Call for Pricing</span>
                    </button>

                    {/* 4. Updated Button with onClick Handler */}
                    <button 
                        onClick={() => handleReadMore(item.blogId)}
                        className="bg-[#1a73e8] hover:bg-blue-700 text-white px-6 py-2 rounded-full text-sm font-medium transition-colors shadow-md shadow-blue-200"
                    >
                        Read More
                    </button>
                    </div>
                </div>

                </div>
            </SwiperSlide>
            ))}
        </Swiper>
      )}
    </div>
  );
}