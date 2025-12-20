import React, { useState } from "react";
import TG from "../../assets/TourGuide.svg"; // Ensure this path is correct
import { Link } from 'react-router-dom'

function NavBar() {
    const [open, setOpen] = useState(false);

    return (
        // Outer wrapper can be full width if you want a background color, 
        // but here it's transparent as per design.
        <header className="w-full mt-4">
            
            {/* Main Container: w-3/4 on large screens, wider on mobile for readability */}
            <nav className="w-[90%] md:w-3/4 mx-auto flex items-center justify-between py-4">
                
                {/* Left: Brand */}
                <div className="flex items-center gap-2">
                    <button aria-label="Homepage" className="flex items-center gap-2">
                         {/* Placeholder for Logo Icon if image is missing */}
                         <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center text-white">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                        </div>
                        <span className="font-bold text-[22px] text-[#1C1C1C]">Travelo</span>
                    </button>
                </div>

                {/* Center: Menu (Hidden on Mobile) */}
                <div className="hidden lg:flex gap-10 items-center">
                    {["Home", "About Us", "Discover", "Support"].map((item) => (
                        <button key={item} className="text-[#1C1C1C] text-[16px] font-medium hover:text-[#166EF3] transition-colors">
                            {item}
                        </button>
                    ))}
                </div>

                {/* Right: Become Guide & Mobile Toggle */}
                <div className="flex items-center gap-4">
                    {/* Desktop Button */}
                    <div className="hidden lg:block">
                        <button className="bg-[#166EF3] hover:bg-blue-700 transition-colors text-white rounded-full px-5 py-2.5 flex items-center gap-2 shadow-lg shadow-blue-200">
                            <img src={TG} alt="" className="w-5 h-5 object-contain" />
                            <span className="font-medium text-sm">Become Guide</span>
                        </button>
                    </div>

                    {/* Mobile Hamburger */}
                    <div className="lg:hidden">
                        <button
                            onClick={() => setOpen(!open)}
                            className="p-2 text-[#1C1C1C] focus:outline-none"
                        >
                            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                {open ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Dropdown Menu */}
            <div className={`lg:hidden absolute left-0 w-full bg-white shadow-xl z-50 transition-all duration-300 ease-in-out overflow-hidden ${open ? "max-h-96 opacity-100 top-20" : "max-h-0 opacity-0 top-20"}`}>
                <div className="flex flex-col w-[90%] mx-auto py-6 gap-4">
                    {["Home", "About Us", "Discover", "Support"].map((item) => (
                        <button key={item} onClick={() => setOpen(false)} className="text-left text-[#1C1C1C] font-semibold text-lg border-b border-gray-100 pb-2">
                            {item}
                        </button>
                    ))}
                    <button onClick={()=>{

                    }} className="bg-[#166EF3] text-white rounded-full p-3 flex justify-center items-center gap-2 mt-2">
                         <img src={TG} alt="" className="w-5 h-5 brightness-0 invert" />
                        <span>Become Guide</span>
                    </button>
                </div>
            </div>
        </header>
    );
}

export default NavBar;