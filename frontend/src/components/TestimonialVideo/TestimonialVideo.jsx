import React, { useState } from 'react';
// 1. Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// 2. Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// 3. Import required modules
import { Navigation, Pagination } from 'swiper/modules';

// Import decorative assets
import RightDown from "../../assets/Testimonial/RightDown.svg"; 
import LeftTop from "../../assets/Testimonial/LeftTop.svg";
import RightArrow from "../../assets/Testimonial/RightArrow.svg";
import LeftArrow from "../../assets/Testimonial/LeftArrow.svg";

// Import Videos
import Vid1 from "../../assets/videos/Vid1.mp4"
import Vid2 from "../../assets/videos/Vid2.mp4"
import Vid3 from "../../assets/videos/Vid3.mp4"
import Vid4 from "../../assets/videos/Vid4.mp4"

function TestimonialVideo() {
  // State to control the swiper instance
  const [swiperRef, setSwiperRef] = useState(null);

  // Array of videos for cleaner mapping
  const videoList = [Vid1, Vid2, Vid3, Vid4];

  return (
    <div className='relative w-full py-16 overflow-hidden'>
      
      {/* --- Decorative Background Dots --- */}
      <div className="absolute top-0 left-0 -translate-x-4 translate-y-4 md:translate-x-0 md:translate-y-0 z-0">
         <img src={LeftTop} alt="" className="w-24 h-24 md:w-auto md:h-auto opacity-80" />
      </div>
      <div className="absolute bottom-0 right-0 translate-x-4 -translate-y-4 md:translate-x-0 md:translate-y-0 z-0">
         <img src={RightDown} alt="" className="w-24 h-24 md:w-auto md:h-auto opacity-80" />
      </div>

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
        
        {/* --- Header Section --- */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            
            {/* 1. Empty spacer */}
            <div className="hidden md:block w-1/3"></div> 
            
            {/* 2. Center Text */}
            <div className="text-center w-full md:w-1/3 mb-8 md:mb-0">
                <h4 className="text-[#4CAF50] font-bold tracking-[0.2em] text-sm uppercase mb-3">
                    TESTIMONIALS
                </h4>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                    Video Trust
                </h2>
            </div>

            {/* 3. Navigation Arrows */}
            <div className='flex justify-center md:justify-end gap-4 w-full md:w-1/3'>
                <button 
                    onClick={() => swiperRef?.slidePrev()}
                    className="w-12 h-12 rounded-full border border-blue-500 flex items-center justify-center text-blue-500 hover:bg-blue-50 transition-colors cursor-pointer"
                    aria-label="Previous slide"
                >
                    <img src={LeftArrow} alt="" />
                </button>
                
                <button 
                    onClick={() => swiperRef?.slideNext()}
                    className="w-12 h-12 rounded-full bg-blue-600 border border-blue-600 flex items-center justify-center text-white hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200 cursor-pointer"
                    aria-label="Next slide"
                >
                    <img src={RightArrow} alt="" />
                </button>
            </div>
        </div>

        {/* --- Carousel Section (Swiper) --- */}
        <div> 
          <Swiper
            onSwiper={setSwiperRef}
            slidesPerView={1}
            spaceBetween={24}
            loop={true}
            modules={[Navigation, Pagination]}
            breakpoints={{
              640: {
                slidesPerView: 1, // Mobile
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2, // Tablet
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 3, // Desktop
                spaceBetween: 30,
              },
            }}
            className="pb-10"
          >
            {videoList.map((videoSrc, index) => (
              <SwiperSlide key={index}>
                <div className="h-[450px] bg-black rounded-[30px] w-full flex items-center justify-center relative overflow-hidden transition-transform duration-300 hover:scale-[1.02] shadow-md">
                    <video 
                        src={videoSrc}
                        className="w-full h-full object-cover"
                        muted       // Muted by default
                            // Starts playing automatically
                        loop        // Loops indefinitely
                        playsInline // Better support for mobile browsers
                        controls    // Adds controls so user can unmute
                    />
                </div>
              </SwiperSlide>
            ))}

          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default TestimonialVideo;