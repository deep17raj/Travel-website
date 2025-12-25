import React, { useState } from "react";
import TG from "../../assets/TourGuide.svg";
import { Link, useLocation } from 'react-router-dom';
import { X } from 'lucide-react';
// Import BOTH forms
import CustomerInquiryForm from "../CustomerEnquiryForm/CustomerEnquiryForm"; 
import GuideForm from "../GuideForm/GuideForm"; // Ensure path is correct

function NavBar() {
    const [open, setOpen] = useState(false); // Mobile Menu State
    const [isContactOpen, setIsContactOpen] = useState(false); // Contact Modal State
    const [isGuideFormOpen, setIsGuideFormOpen] = useState(false); // Guide Form Modal State [NEW]
    
    const location = useLocation();

    // Define menu items
    const menuItems = [
        { name: "Home", path: "/" },
        { name: "About Us", path: "/about" },
        { name: "Discover", path: "/packages" },
        { name: "Contact us", path: "#" },
    ];

    // Handle Contact Click
    const handleContactClick = (e) => {
        e.preventDefault();
        setIsContactOpen(true);
        setOpen(false);
    };

    // Handle Become Guide Click [NEW]
    const handleBecomeGuideClick = (e) => {
        e.preventDefault(); // Prevent navigation if wrapped in Link (removed Link below)
        setIsGuideFormOpen(true);
        setOpen(false);
    };

    return (
        <>
            <header className="w-full mt-4 relative z-50">
                <nav className="w-[90%] md:w-3/4 mx-auto flex items-center justify-between py-4">
                    
                    {/* Left: Brand */}
                    <div className="flex items-center gap-2">
                        <Link to="/" aria-label="Homepage" className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center text-white">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                            </div>
                            <span className="font-bold text-[22px] text-[#1C1C1C]">Satotra</span>
                        </Link>
                    </div>

                    {/* Center: Menu (Desktop) */}
                    <div className="hidden lg:flex gap-10 items-center">
                        {menuItems.map((item) => (
                            item.name === "Contact us" ? (
                                <button 
                                    key={item.name}
                                    onClick={handleContactClick}
                                    className="text-[16px] font-medium text-[#1C1C1C] hover:text-[#166EF3] transition-colors cursor-pointer bg-transparent border-none p-0"
                                >
                                    {item.name}
                                </button>
                            ) : (
                                <Link 
                                    key={item.name} 
                                    to={item.path}
                                    className={`text-[16px] font-medium transition-colors ${
                                        location.pathname === item.path ? "text-[#166EF3]" : "text-[#1C1C1C] hover:text-[#166EF3]"
                                    }`}
                                >
                                    {item.name}
                                </Link>
                            )
                        ))}
                    </div>

                    {/* Right: Become Guide & Mobile Toggle */}
                    <div className="flex items-center gap-4">
                        {/* Desktop Become Guide Button */}
                        <div className="hidden lg:block">
                            {/* Removed <Link> wrapper, added onClick */}
                            <button 
                                onClick={handleBecomeGuideClick}
                                className="bg-[#166EF3] hover:bg-blue-700 transition-colors text-white rounded-full px-5 py-2.5 flex items-center gap-2 shadow-lg shadow-blue-200 cursor-pointer"
                            >
                                <img src={TG} alt="" className="w-5 h-5 object-contain" />
                                <span className="font-medium text-sm">Become Guide</span>
                            </button>
                        </div>

                        {/* Mobile Hamburger */}
                        <div className="lg:hidden">
                            <button onClick={() => setOpen(!open)} className="p-2 text-[#1C1C1C] focus:outline-none">
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
                <div className={`lg:hidden absolute left-0 w-full bg-white shadow-xl z-40 transition-all duration-300 ease-in-out overflow-hidden ${open ? "max-h-96 opacity-100 top-20" : "max-h-0 opacity-0 top-20"}`}>
                    <div className="flex flex-col w-[90%] mx-auto py-6 gap-4">
                        {menuItems.map((item) => (
                            item.name === "Contact us" ? (
                                <button 
                                    key={item.name}
                                    onClick={handleContactClick}
                                    className="text-left text-[#1C1C1C] font-semibold text-lg border-b border-gray-100 pb-2 hover:text-[#166EF3]"
                                >
                                    {item.name}
                                </button>
                            ) : (
                                <Link 
                                    key={item.name} 
                                    to={item.path}
                                    onClick={() => setOpen(false)}
                                    className="text-left text-[#1C1C1C] font-semibold text-lg border-b border-gray-100 pb-2 hover:text-[#166EF3]"
                                >
                                    {item.name}
                                </Link>
                            )
                        ))}
                        
                        {/* Mobile Become Guide Button */}
                        <button 
                            onClick={handleBecomeGuideClick}
                            className="w-full bg-[#166EF3] text-white rounded-full p-3 flex justify-center items-center gap-2 mt-2"
                        >
                            <img src={TG} alt="" className="w-5 h-5 brightness-0 invert" />
                            <span>Become Guide</span>
                        </button>
                    </div>
                </div>
            </header>

            {/* --- CUSTOMER CONTACT MODAL --- */}
            {isContactOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fadeIn">
                    <div className="relative w-full max-w-lg bg-transparent">
                        <button 
                            onClick={() => setIsContactOpen(false)}
                            className="absolute -top-10 right-0 md:-right-10 text-white hover:text-gray-200 transition-colors bg-black/20 p-2 rounded-full backdrop-blur-md"
                        >
                            <X size={24} />
                        </button>
                        <CustomerInquiryForm onClose={() => setIsContactOpen(false)} />
                    </div>
                </div>
            )}

            {/* --- GUIDE FORM MODAL [NEW] --- */}
            {/* GuideForm has its own internal modal UI logic (overlay, close button, etc.) based on your previous code */}
            <GuideForm 
                isOpen={isGuideFormOpen} 
                onClose={() => setIsGuideFormOpen(false)} 
            />
        </>
    );
}

export default NavBar;