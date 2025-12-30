import React from 'react';
import Facebook from "../../assets/AboutUs/Facebook.svg";
import Twitter from "../../assets/AboutUs/Twitter.svg";
import Insta from "../../assets/AboutUs/Instagram.svg";
import Logo from "../../assets/Logo/Satotra.svg"

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
                        <div className="w-10 h-10  rounded-lg flex items-center justify-center relative">
                            <img src={Logo} alt="logo" />
                        </div>
                        <h2 className="text-2xl font-bold text-black tracking-tight">Satotra</h2>
                    </div>

                    {/* Description */}
                    <div className="max-w-sm">
                        <p className="text-gray-400 text-lg leading-relaxed">
                            Satotra is India’s travel and lifestyle app for discovering and booking all your travel needs in one place.
                        </p>
                    </div>
                </div>

                {/* Right Column: About Links */}
                <div className="flex flex-col md:w-auto">
                    <h2 className="text-xl font-bold text-black mb-6 md:mb-8">About</h2>
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