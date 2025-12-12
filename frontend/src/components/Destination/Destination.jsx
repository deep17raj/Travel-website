import React, { useRef } from 'react';
import { Phone, ChevronLeft, ChevronRight } from 'lucide-react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import Pic1 from "../../assets/Pic1.svg"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const cardData = [
  {
    id: 1,
    title: "Nainital",
    desc: "Discover Nainital's spiritual aura, riverfront temples, yoga heritage, and thrilling rafting adventures led by a trusted local guide.",
  },
  {
    id: 2,
    title: "Rishikesh",
    desc: "Discover Rishikesh's spiritual aura, riverfront temples, yoga heritage, and thrilling rafting adventures led by a trusted local guide.",
  },
  {
    id: 3,
    title: "Dehradun",
    desc: "Discover Dehradun's spiritual aura, riverfront temples, yoga heritage, and thrilling rafting adventures led by a trusted local guide.",
  },
  {
    id: 4,
    title: "Mussoorie",
    desc: "Discover Mussoorie's spiritual aura, riverfront temples, yoga heritage, and thrilling rafting adventures led by a trusted local guide.",
  },
  {
    id: 5,
    title: "Manali",
    desc: "Discover Manali's spiritual aura, riverfront temples, yoga heritage, and thrilling rafting adventures led by a trusted local guide.",
  },
];

export default function DestinationCarousel() {
  // Reference to control swiper from external buttons
  const swiperRef = useRef(null);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-12 anime">
      
      {/* --- Upper Header Component --- */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        {/* Title Section */}
        <div>
          <h3 className="text-[#427a18] font-bold uppercase tracking-widest text-sm mb-2">
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
      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        onSwiper={(swiper) => (swiperRef.current = swiper)} // Capture swiper instance
        loop={true} // Infinite Loop
        spaceBetween={30}
        pagination={{ clickable: true }}
        className="pb-12"
        breakpoints={{
          // Small screens (mobile): 1 slide
          0: {
            slidesPerView: 1,
          },
          // Medium screens (tablets): 2 slides
          768: {
            slidesPerView: 2,
          },
          // Large screens (desktop): 3 slides
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {cardData.map((card) => (
          <SwiperSlide key={card.id} className="py-5">
            <div className="bg-white rounded-[2rem] shadow-lg overflow-hidden border border-gray-100 h-full flex flex-col hover:shadow-xl transition-shadow duration-300">
              
              {/* Image Section */}
              <div className="relative h-64 w-full">
                <img
                  src={Pic1}
                  alt={card.title}
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
                  {card.title}
                </h2>
              </div>

              {/* Content Section */}
              <div className="p-6 flex flex-col flex-grow">
                <p className="text-gray-500 text-sm leading-relaxed mb-6 text-center">
                  {card.desc}
                </p>

                {/* Footer Actions */}
                <div className="mt-auto flex items-center justify-between pt-2">
                  <button className="flex items-center gap-2 text-[#1a73e8] hover:text-blue-700 transition-colors font-semibold text-sm">
                    <Phone size={16} className="fill-current" />
                    <span>Call for Pricing</span>
                  </button>

                  <button className="bg-[#1a73e8] hover:bg-blue-700 text-white px-6 py-2 rounded-full text-sm font-medium transition-colors shadow-md shadow-blue-200">
                    Read More
                  </button>
                </div>
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}