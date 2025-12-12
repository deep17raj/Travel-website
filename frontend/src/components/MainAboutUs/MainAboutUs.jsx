import React, { useState } from "react";
// Removed react-slick imports since we are switching to a static grid
import Trek from "../../assets/Trek.svg"; 

function MainAboutUs() {
  // --- FAQ State Logic ---
  const [openFAQ, setOpenFAQ] = useState(0); 

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqData = [
    {
      question: "How does it work?",
      answer: "Travelo acts as a bridge between you and premium travel providers. Simply search for your needs, compare options, and book directly through our secure platform. We handle the coordination so you can focus on the journey."
    },
    {
      question: "Can I rent a car without a credit card?",
      answer: "Yes, select providers offer debit card rentals. Please check the specific terms and conditions of the vehicle listing for payment requirements."
    },
    {
      question: "What are the requirements for renting a car?",
      answer: "Generally, you need a valid driver's license held for at least 1 year, a valid ID/Passport, and a payment method in the driver's name. Age restrictions may apply."
    },
    {
      question: "Does Car Rental allow me to tow with or attach a hitch to the rental vehicle?",
      answer: "Most standard rentals do not permit towing. However, we have specific utility vehicle categories where this may be allowed. Check the vehicle features filter."
    },
    {
      question: "Does Car Rental offer coverage products for purchase with my rental?",
      answer: "Yes, we offer various protection packages including Collision Damage Waiver (CDW) and Theft Protection during the checkout process."
    },
  ];

  // Dummy data for the 3 Team Members
  const teamMembers = [
    { id: 1, name: "Member 1", role: "Role 1" },
    { id: 2, name: "Member 2", role: "Role 2" },
    { id: 3, name: "Member 3", role: "Role 3" },
  ];

  return (
    <div className="w-full  font-sans pb-20">
      
      {/* 1. Header & Video Section */}
      <div className="flex flex-col mt-10 md:mt-16">
        <div className="text-center mb-8">
          <h2 className="font-bold text-black text-4xl md:text-5xl">About Us</h2>
        </div>
        
        {/* Video Placeholder */}
        <div className="w-[90%] md:w-3/4 mx-auto h-[300px] md:h-[500px] rounded-[30px] relative overflow-hidden bg-gray-300 shadow-lg group cursor-pointer">
           <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
           {/* Play Button */}
           <div className="absolute inset-0 flex items-center justify-center">
             <div className="w-16 h-16 bg-[#5937E0] rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
               <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
             </div>
           </div>
           <video src="" className="w-full h-full object-cover"></video>
        </div>

        {/* 2. Stats Section */}
        <div className="flex flex-col md:flex-row w-[90%] md:w-3/4 mx-auto justify-around gap-8 my-12">
          <StatBox number="20k+" label="Happy Customers" />
          <StatBox number="540+" label="Count of Cars" />
          <StatBox number="25+" label="Years of Experience" />
        </div>

        {/* 3. Intro Text */}
        <div className="w-[90%] md:w-3/4 mx-auto mb-16">
          <p className="text-lg md:text-xl text-gray-600 text-center leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            nec efficitur turpis. Praesent bibendum euismod lorem, at tincidunt
            neque posuere id. Vivamus at massa eget velit tristique tempor.
            Integer vestibulum hendrerit libero.
          </p>
        </div>

        {/* 4. Our Vision Section */}
        <div className="w-[90%] md:w-3/4 mx-auto">
          <div className="text-center mb-8">
            <h4 className="font-bold text-black text-3xl md:text-4xl">Our Vision</h4>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-10 lg:gap-16">
            {/* Text */}
            <div className="md:w-1/2">
              <p className="text-gray-600 text-lg leading-relaxed text-justify md:text-left">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse nec efficitur turpis. Praesent bibendum euismod
                lorem, at tincidunt neque posuere id. Vivamus at massa eget
                velit tristique tempor. Integer vestibulum hendrerit libero, sit
                amet venenatis velit dictum et. Etiam finibus, odio vitae luctus
                vulputate.
              </p>
            </div>
            {/* Image */}
            <div className="md:w-1/2 flex justify-center">
               <img src={Trek} alt="Vision Trek" className="rounded-xl shadow-lg w-full max-w-md object-cover" />
            </div>
          </div>
        </div>
      </div>

      {/* 5. Meet The Team (STATIC 3 COLUMNS) */}
      <div className="relative w-full mt-24 mb-20">
         {/* Decorative Dots Pattern (Left) */}
         <div className="absolute top-0 left-0 hidden md:block opacity-50">
            <svg width="100" height="150" fill="#FF5722"><pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="2"></circle></pattern><rect width="100" height="150" fill="url(#dots)"></rect></svg>
         </div>

         <div className="text-center mb-10">
            <h4 className="font-bold text-black text-4xl">Meet The Team</h4>
         </div>

         {/* Grid Container for 3 People */}
         <div className="w-[90%] md:w-3/4 mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
                {teamMembers.map((member) => (
                    <div key={member.id} className="w-full">
                        <div className="h-[350px] bg-gray-200 rounded-[20px] w-full hover:bg-gray-300 transition-colors cursor-pointer flex items-center justify-center relative overflow-hidden group">
                             {/* Optional: Add content inside card */}
                             <span className="text-gray-400 group-hover:text-gray-500 font-medium">Team Member Image</span>
                        </div>
                    </div>
                ))}
            </div>
         </div>
          
         {/* Decorative Dots Pattern (Right) */}
         <div className="absolute bottom-0 right-0 hidden md:block opacity-50 translate-y-10">
            <svg width="100" height="150" fill="#FF5722"><pattern id="dots2" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="2"></circle></pattern><rect width="100" height="150" fill="url(#dots2)"></rect></svg>
         </div>
      </div>

      {/* 6. Frequently Asked Questions */}
      <div className="w-[90%] md:w-3/4 mx-auto mt-20">
        <div className="text-center mb-12">
            <h4 className="font-bold text-black text-4xl">Frequently asked Questions</h4>
        </div>
        
        <div className="flex flex-col gap-4">
            {faqData.map((item, index) => (
                <div key={index} className="border border-gray-200 rounded-2xl overflow-hidden transition-all duration-300">
                    <button 
                        onClick={() => toggleFAQ(index)}
                        className="w-full flex justify-between items-center p-6 bg-white hover:bg-gray-50 text-left focus:outline-none"
                    >
                        <span className="font-bold text-black text-lg md:text-xl pr-4">
                            {item.question}
                        </span>
                        <span className={`transform transition-transform duration-300 text-gray-400 ${openFAQ === index ? 'rotate-180' : ''}`}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                        </span>
                    </button>
                    
                    <div 
                        className={`transition-all duration-300 ease-in-out overflow-hidden ${openFAQ === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                    >
                        <div className="p-6 pt-0 text-gray-600 leading-relaxed border-t border-transparent">
                            {item.answer}
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>

    </div>
  );
}

// Sub-component for clean code
const StatBox = ({ number, label }) => (
    <div className="flex flex-col px-4 justify-center items-center text-center">
        <h4 className="text-[#5937E0] font-bold text-4xl lg:text-5xl mb-2">
            {number}
        </h4>
        <p className="text-sm md:text-lg font-bold text-black">
            {label}
        </p>
    </div>
);

export default MainAboutUs;