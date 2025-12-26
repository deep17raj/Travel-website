import React, { useState } from "react";

// Keeping your original imports
import RightArrow from "../../assets/Testimonial/RightArrow.svg";
import LeftArrow from "../../assets/Testimonial/LeftArrow.svg";
import Face from "../../assets/Testimonial/Face.svg";
import LeftTop from "../../assets/Testimonial/LeftTop.svg"; // Background decoration

// Dummy data for the carousel
const testimonials = [
  {
    id: 1,
    name: "Irfan Rahmat",
    role: "Travel Enthusiast",
    image: Face,
    text: "I love Travelo, this is the best place to buy ticket and help you find your dream holiday.",
    stars: 5,
  },
  {
    id: 2,
    name: "Sarah Jenkins",
    role: "Photographer",
    image: Face,
    text: "The booking process was incredibly smooth and the support team was very helpful.",
    stars: 5,
  },
  {
    id: 3,
    name: "Michael Chen",
    role: "Business Traveler",
    image: Face,
    text: "Reliable and fast. I use Travelo for all my business trips now. Highly recommended!",
    stars: 4,
  },
];

function TestimonialText() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentData = testimonials[currentIndex];

  return (
    <div className="relative w-full py-16 px-4  overflow-hidden flex flex-col items-center ">
      
      {/* Background Decoration (LeftTop) - Optional positioning */}
      <div className="absolute top-10 left-0 opacity-50 pointer-events-none hidden lg:block">
        <img src={LeftTop} alt="" className="w-24" />
      </div>

      {/* Header */}
      <div className="flex flex-col justify-center items-center mb-12 text-center z-10">
        <h2 className="text-[#317312] text-[20px] font-bold tracking-widest text-sm uppercase mb-2">
          TESTIMONIALS
        </h2>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 font-serif">
          Trust our clients
        </h2>
      </div>

      {/* Main Carousel Container */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 w-full max-w-6xl z-10">
        
        {/* LEFT ARROW (Hidden on mobile, shown on desktop) */}
        <div 
            onClick={handlePrev}
            className="cursor-pointer hidden md:flex items-center justify-center w-16 h-16 rounded-full   transition-all duration-300"
        >
            <img src={LeftArrow} alt="Previous" className="w-16 h-16" />
        </div>

        {/* TESTIMONIAL CARD */}
        <div className="bg-white rounded-[2.5rem] shadow-2xl p-8 md:p-12 w-full max-w-2xl text-center min-h-[350px] flex flex-col items-center justify-center relative">
            
            {/* Avatar */}
            <div className="w-24 h-24 rounded-full overflow-hidden mb-4 relative z-10">
                <img src={currentData.image} alt="User" className="w-full h-full object-cover" />
            </div>

            {/* Name & Role */}
            <h3 className="text-xl font-bold text-gray-800">{currentData.name}</h3>
            <p className="text-gray-500 text-sm mb-5">{currentData.role}</p>

            {/* Stars */}
            <div className="flex gap-1 mb-6 justify-center">
                {[...Array(5)].map((_, i) => (
                    <svg key={i} className={`w-6 h-6 ${i < currentData.stars ? "text-yellow-400" : "text-gray-200"}`} fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                ))}
            </div>

            {/* Text */}
            <div className="text-gray-600 text-lg leading-relaxed md:px-8">
                <p>"{currentData.text}"</p>
            </div>
        </div>

        {/* RIGHT ARROW (Hidden on mobile, shown on desktop) */}
        <div 
            onClick={handleNext}
            className="cursor-pointer hidden md:flex items-center justify-center w-16 h-16 rounded-full   transition-all duration-300 transform hover:scale-105 "
        >
            {/* Note: I added 'brightness-0 invert' to make the arrow white if the SVG is black. Remove those classes if your SVG is already white. */}
            <img src={RightArrow} alt="Next" className="w-6 h-6 md:w-16 md:h-16" />
        </div>
      </div>

      {/* MOBILE CONTROLS (Arrows appear below card on small screens) */}
      <div className="flex md:hidden gap-6 mt-8">
          <div onClick={handlePrev} className="cursor-pointer w-10 h-10 rounded-full   flex items-center justify-center">
             <img src={LeftArrow} alt="Previous" className="w-10 h-10 md:w-16 md:h-16" />
          </div>
          <div onClick={handleNext} className="cursor-pointer w-10 h-10 rounded-full b flex items-center justify-center shadow-lg">
             <img src={RightArrow} alt="Next" className="w-10 h-10 " />
          </div>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center gap-3 mt-10">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "w-3 h-3 bg-blue-600"
                  : "w-3 h-3 bg-gray-200 hover:bg-gray-300"
              }`}
            />
          ))}
      </div>

    </div>
  );
}

export default TestimonialText;