import React, { useState } from "react";
// Removed react-slick imports since we are switching to a static grid
import Trek from "../../assets/Trek.svg";
import NavBar from "../NavBar/NavBar";

function MainAboutUs() {
  // --- FAQ State Logic ---
  const [openFAQ, setOpenFAQ] = useState(0);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqData = [
    {
      question: "How does Satotra work?",
      answer:
        "Satotra is a Dehradun-based travel service that helps you plan your trip seamlessly. We connect you with trusted local guides, reliable car rental services, and verified partner hotels to ensure a smooth and comfortable travel experience.",
    },
    {
  question: "What services does Satotra provide?",
  answer:
    "Satotra offers car rental services in Dehradun for both local and outstation travel, trusted local tour guides, hotel bookings through verified partner hotels, and customized travel packages based on your needs.",
},
    {
      question: "Does Satotra provide hotel bookings?",
      answer:
        "Yes. Satotra works with carefully selected partner hotels in and around Dehradun, offering options across budget, mid-range, and premium categories",
    },
    {
      question:
        "Can I rent a car in Dehradun through Satotra?",
      answer:
        "Yes. We provide reliable car rental services in Dehradun for sightseeing, airport transfers, and outstation trips such as Mussoorie, Rishikesh, and Haridwar.",
    },
    {
  question: "What documents are required for car rental?",
  answer:
    "Generally, you may need a valid government-issued ID, a valid driving license for self-drive bookings, and additional documents may be required for certain vehicles.",
},
    ,
    {
      question:
        "Are Satotra’s local guides verified?",
      answer:
        "Yes. All our local guides are experienced, verified, and familiar with local culture, history, and hidden attractions in and around Dehradun.",
    },
    ,
    {
      question:
        "Can I book a complete package with hotel, car, and guide?",
      answer:
        "Yes. Satotra offers all-in-one travel packages, so you don’t need to coordinate with multiple service providers.",
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
      <NavBar />
      {/* 1. Header & Video Section */}
      <div className="flex flex-col mt-10 md:mt-16">
        <div className="text-center mb-8">
          <h2 className="font-bold text-black text-4xl md:text-5xl">
            About Us
          </h2>
        </div>

        {/* Video Placeholder */}
        <div className="w-[90%] md:w-3/4 mx-auto h-[300px] md:h-[500px] rounded-[30px] relative overflow-hidden bg-gray-300 shadow-lg group cursor-pointer">
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
          {/* Play Button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 bg-[#5937E0] rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
              <svg
                className="w-6 h-6 text-white ml-1"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
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
            Satotra is a Dehradun-based travel company focused on creating
            smooth, reliable, and local-first travel experiences across
            Uttarakhand. We work closely with trusted local guides, verified
            partner hotels, and professional car rental providers to ensure
            every trip is comfortable, safe, and well-planned. Whether you’re
            visiting for leisure, adventure, or a short getaway, Satotra helps
            you explore Dehradun and nearby destinations without the usual
            travel hassles.
          </p>
        </div>

        {/* 4. Our Vision Section */}
        <div className="w-[90%] md:w-3/4 mx-auto">
          <div className="text-center mb-8">
            <h4 className="font-bold text-black text-3xl md:text-4xl">
              Our Vision
            </h4>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-10 lg:gap-16">
            {/* Text */}
            <div className="md:w-1/2">
              <p className="text-gray-600 text-lg leading-relaxed text-justify md:text-left">
                Our vision is to make travel in Dehradun and Uttarakhand simple,
                trustworthy, and locally enriched. We aim to connect travelers
                with authentic local experiences by working with trusted guides,
                reliable car rental partners, and carefully selected
                hotels—ensuring comfort, safety, and transparency at every step.
                Satotra envisions becoming a go-to travel partner for those who
                value local knowledge, personalized journeys, and stress-free
                planning, while supporting local communities and responsible
                tourism.
              </p>
            </div>
            {/* Image */}
            <div className="md:w-1/2 flex justify-center">
              <img
                src={Trek}
                alt="Vision Trek"
                className="rounded-xl shadow-lg w-full max-w-md object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* 5. Meet The Team (STATIC 3 COLUMNS) */}
      <div className="relative w-full mt-24 mb-20">
        {/* Decorative Dots Pattern (Left) */}
        <div className="absolute top-0 left-0 hidden md:block opacity-50">
          <svg width="100" height="150" fill="#FF5722">
            <pattern
              id="dots"
              x="0"
              y="0"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="2" cy="2" r="2"></circle>
            </pattern>
            <rect width="100" height="150" fill="url(#dots)"></rect>
          </svg>
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
                  <span className="text-gray-400 group-hover:text-gray-500 font-medium">
                    Team Member Image
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Decorative Dots Pattern (Right) */}
        <div className="absolute bottom-0 right-0 hidden md:block opacity-50 translate-y-10">
          <svg width="100" height="150" fill="#FF5722">
            <pattern
              id="dots2"
              x="0"
              y="0"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="2" cy="2" r="2"></circle>
            </pattern>
            <rect width="100" height="150" fill="url(#dots2)"></rect>
          </svg>
        </div>
      </div>

      {/* 6. Frequently Asked Questions */}
      <div className="w-[90%] md:w-3/4 mx-auto mt-20">
        <div className="text-center mb-12">
          <h4 className="font-bold text-black text-4xl">
            Frequently asked Questions
          </h4>
        </div>

        <div className="flex flex-col gap-4">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-2xl overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-6 bg-white hover:bg-gray-50 text-left focus:outline-none"
              >
                <span className="font-bold text-black text-lg md:text-xl pr-4">
                  {item.question}
                </span>
                <span
                  className={`transform transition-transform duration-300 text-gray-400 ${
                    openFAQ === index ? "rotate-180" : ""
                  }`}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </span>
              </button>

              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openFAQ === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
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
    <p className="text-sm md:text-lg font-bold text-black">{label}</p>
  </div>
);

export default MainAboutUs;
