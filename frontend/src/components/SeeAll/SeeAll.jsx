import React, { useState } from 'react';
// 1. Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// 2. Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// 3. Import required modules
import { Pagination, Navigation } from 'swiper/modules';
import NavBar from '../NavBar/NavBar';

// --- MOCK DATA ---
const adventureData = [
  {
    id: 1,
    title: "Para Gliding",
    desc: "Fly over Rishikesh's valleys and landscapes for an unforgettable thrill.",
    duration: "3 Hours",
    image: "https://images.unsplash.com/photo-1516939884455-1445c8652f83?q=80&w=600&auto=format&fit=crop", 
  },
  {
    id: 2,
    title: "River Rafting",
    desc: "Experience the adrenaline rush of the Ganges rapids with expert guides.",
    duration: "4 Hours",
    image: "https://images.unsplash.com/photo-1530866495561-507c9faab2ed?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Bunji Jumping",
    desc: "Take the leap of faith from India's highest bungee platform.",
    duration: "2 Hours",
    image: "https://images.unsplash.com/photo-1515526978187-b9c1cb843f52?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Camping",
    desc: "Stay overnight under the stars in premium riverside tents.",
    duration: "2 Days",
    image: "https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?q=80&w=600&auto=format&fit=crop",
  }
];

const spiritualData = [
  {
    id: 1,
    title: "Char Dham Yatra",
    desc: "A sacred pilgrimage to the four holy shrines in the Himalayas.",
    duration: "10 Days",
    image: "https://images.unsplash.com/photo-1566808902506-6992d534f40f?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Do Dham Yatra",
    desc: "Visit Kedarnath and Badrinath for spiritual rejuvenation.",
    duration: "5 Days",
    image: "https://images.unsplash.com/photo-1626084478174-8466e339174b?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Ganga Aarti",
    desc: "Witness the divine evening prayer ceremony on the banks of the Ganges.",
    duration: "1 Evening",
    image: "https://images.unsplash.com/photo-1605626245086-45ef92dd886b?q=80&w=600&auto=format&fit=crop",
  },
   {
    id: 1,
    title: "Char Dham Yatra",
    desc: "A sacred pilgrimage to the four holy shrines in the Himalayas.",
    duration: "10 Days",
    image: "https://images.unsplash.com/photo-1566808902506-6992d534f40f?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Do Dham Yatra",
    desc: "Visit Kedarnath and Badrinath for spiritual rejuvenation.",
    duration: "5 Days",
    image: "https://images.unsplash.com/photo-1626084478174-8466e339174b?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Ganga Aarti",
    desc: "Witness the divine evening prayer ceremony on the banks of the Ganges.",
    duration: "1 Evening",
    image: "https://images.unsplash.com/photo-1605626245086-45ef92dd886b?q=80&w=600&auto=format&fit=crop",
  },
];

const trekkingData = [
  {
    id: 1,
    title: "Valley of Flowers",
    desc: "Trek through the UNESCO World Heritage site filled with vibrant blooms.",
    duration: "6 Days",
    image: "https://images.unsplash.com/photo-1586185870020-438eb48a7351?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Kuari Pass Trek",
    desc: "Witness the magnificent views of Nanda Devi and Dronagiri peaks.",
    duration: "5 Days",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Chandrashila Trek",
    desc: "Summit the Chandrashila peak for a panoramic view of the Himalayas.",
    duration: "4 Days",
    image: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 1,
    title: "Valley of Flowers",
    desc: "Trek through the UNESCO World Heritage site filled with vibrant blooms.",
    duration: "6 Days",
    image: "https://images.unsplash.com/photo-1586185870020-438eb48a7351?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Kuari Pass Trek",
    desc: "Witness the magnificent views of Nanda Devi and Dronagiri peaks.",
    duration: "5 Days",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Chandrashila Trek",
    desc: "Summit the Chandrashila peak for a panoramic view of the Himalayas.",
    duration: "4 Days",
    image: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?q=80&w=600&auto=format&fit=crop",
  },
];

// --- CARD COMPONENT (Unchanged) ---
const PackageCard = ({ item }) => (
  <div className="bg-white rounded-[30px] shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col overflow-hidden border border-gray-100 mx-2 mb-10 mt-2">
    {/* Image */}
    <div className="h-56 w-full relative">
      <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-gray-700 shadow-sm">
         FEATURED
      </div>
    </div>
    
    {/* Content */}
    <div className="p-6 flex flex-col flex-grow">
      <h3 className="font-bold text-xl text-gray-900 mb-2">{item.title}</h3>
      <p className="text-gray-500 text-sm mb-4 leading-relaxed line-clamp-2">{item.desc}</p>
      
      <div className="flex-grow"></div>

      <div className="flex items-center gap-2 mb-6 text-gray-400 text-xs font-bold uppercase tracking-wider">
        
        
      </div>

      <div className="flex justify-between items-center pt-4 border-t border-gray-100">
          <span className="text-xs font-bold text-[#8B5CF6] uppercase tracking-wider cursor-pointer hover:text-[#7c3aed]">
             Call for Pricing
          </span>
          <button className="bg-[#8B5CF6] hover:bg-[#7c3aed] text-white text-sm font-semibold py-2.5 px-6 rounded-full transition-colors shadow-lg shadow-purple-100">
             Read More
          </button>
      </div>
    </div>
  </div>
);

// --- SECTION WRAPPER (Swiper Implementation) ---
const PackageSection = ({ categoryTitle, data }) => {
  // We use this state to access the Swiper instance from our custom buttons
  const [swiperRef, setSwiperRef] = useState(null);

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
        onSwiper={setSwiperRef} // Get the instance
        slidesPerView={1}
        spaceBetween={20}
        loop={true}
        pagination={{
          clickable: true,
          // Customizing the pagination bullets (dots)
          modifierClass: 'swiper-pagination-custom-',
          renderBullet: function (index, className) {
             return '<span class="' + className + ' bg-gray-300 w-3 h-3 rounded-full inline-block mx-1 hover:bg-[#8B5CF6] transition-colors cursor-pointer"></span>';
          },
        }}
        modules={[Pagination, Navigation]}
        // RESPONSIVE BREAKPOINTS
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        className="pb-14 px-2" // Add padding bottom for the dots
      >
        {data.map((item) => (
          <SwiperSlide key={item.id} className="h-auto">
             <PackageCard item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};


// --- MAIN COMPONENT ---
function SeeAll() {
  return (
    <div>
      <NavBar/>
      <div className="w-full  pt-16 pb-24 font-sans">
       <div className="max-w-7xl mx-auto px-4 md:px-6">
           
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
       
       {/* Global overrides for Swiper Pagination to match design color (Purple) */}
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