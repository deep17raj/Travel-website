import React from 'react';
import Facebook from "../../assets/AboutUs/Facebook.svg";
import Twitter from "../../assets/AboutUs/Twitter.svg";
import Insta from "../../assets/AboutUs/Instagram.svg";

function AboutUs() {
  return (
    <div className="w-full  font-sans">
        
        {/* --- Main Content Section --- */}
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
            <div className="flex flex-col md:flex-row justify-between items-start gap-12">
                
                {/* Left Column: Logo & Description */}
                <div className="flex flex-col md:w-1/2">
                    {/* Logo Section */}
                    <div className="flex items-center gap-3 mb-6">
                        {/* CSS-only placeholder for the Suitcase Logo */}
                        <div className="w-10 h-10 bg-[#A020F0] rounded-lg flex items-center justify-center relative">
                            <div className="w-6 h-4 border-2 border-white rounded-sm mb-1"></div>
                            <div className="absolute top-1 w-3 h-2 border-2 border-white border-b-0 rounded-t-full"></div>
                            <div className="absolute w-1 h-1 bg-white rounded-full"></div>
                        </div>
                        <h2 className="text-2xl font-bold text-black tracking-tight">Satotra</h2>
                    </div>

                    {/* Description */}
                    <div className="max-w-sm">
                        <p className="text-gray-400 text-lg leading-relaxed">
                            Travelo is Southeast Asia’s travel and lifestyle app, we provide you with access to discover and purchase different type of travel needs.
                        </p>
                    </div>
                </div>

                {/* Right Column: About Links */}
                <div className="flex flex-col md:w-auto">
                    <h4 className="text-xl font-bold text-black mb-6 md:mb-8">About</h4>
                    <div className="flex flex-col gap-4">
                        <a href="#" className="text-gray-400 text-lg hover:text-[#A020F0] transition-colors">Explore</a>
                        <a href="#" className="text-gray-400 text-lg hover:text-[#A020F0] transition-colors">Contact Us</a>
                        <a href="#" className="text-gray-400 text-lg hover:text-[#A020F0] transition-colors">About Us</a>
                        <a href="#" className="text-gray-400 text-lg hover:text-[#A020F0] transition-colors">Career</a>
                    </div>
                </div>

            </div>
        </div>

        {/* --- Footer Social Bar --- */}
        <div className="bg-[#F3F3F3] w-full py-6">
            <div className="max-w-7xl mx-auto px-6 flex gap-6">
                <a href="#" className="hover:opacity-80 transition-opacity">
                    <img src={Facebook} alt="Facebook" className="w-8 h-8" />
                </a>
                <a href="#" className="hover:opacity-80 transition-opacity">
                    <img src={Twitter} alt="Twitter" className="w-8 h-8" />
                </a>
                <a href="#" className="hover:opacity-80 transition-opacity">
                    <img src={Insta} alt="Instagram" className="w-8 h-8" />
                </a>
            </div>
        </div>

    </div>
  )
}

export default AboutUs