// FeatureCard.jsx
import React from "react";
import Img from "../../assets/Pic1.svg"; // update path if needed

export default function FeatureCard({
  image = Img,
  tag = "Trending",
  title = "Nainital",
  description = "Discover Rishikesh’s spiritual aura, riverfront temples, yoga heritage, and thrilling rafting adventures led by a trusted local guide.",
  onReadMore = () => {},
  onCall = () => { window.location.href = "tel:+911234567890"; }
}) {
  return (
    <div className="w-full">
      <article className="relative rounded-3xl overflow-hidden bg-white shadow-[0_40px_80px_rgba(0,0,0,0.25)]">
        
        {/* IMAGE */}
        <div className="relative">
          <img
            src={image}
            alt={title}
            className="w-full h-56 sm:h-64 md:h-72 lg:h-80 object-cover"
          />

          {/* Tag */}
          <span className="absolute left-4 top-4 inline-block bg-green-600 text-white text-xs sm:text-sm px-3 py-1 rounded-full font-medium shadow-sm">
            {tag}
          </span>

          {/* Title overlay */}
          <h3
            className="absolute left-1/2 -translate-x-1/2 bottom-8 text-white text-3xl sm:text-4xl md:text-5xl font-semibold drop-shadow-lg"
            style={{ textShadow: "0 2px 8px rgba(0,0,0,0.6)" }}
          >
            {title}
          </h3>
        </div>

        {/* CONTENT */}
        <div className="px-5 py-5 bg-white">
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">
            {description}
          </p>

          {/* CTA row */}
          <div className="flex items-center justify-between gap-3">
            <button
              onClick={onCall}
              className="flex items-center gap-2 text-[#166EF3] text-sm sm:text-base font-medium"
            >
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 4.5C2 3.7 2.7 3 3.5 3H6.2C6.7 3 7.1 3.2 7.4 3.6L9.4 6.3C9.6 6.6 9.6 6.9 9.5 7.2L8.9 9.2C8.8 9.6 9 10 9.3 10.2L12 12.3C12.3 12.5 12.7 12.6 13.1 12.5L15.1 12C15.4 11.9 15.8 12 16.1 12.2L18.8 14.2C19.2 14.5 19.4 14.9 19.4 15.4V18.1C19.4 18.9 18.7 19.6 17.9 19.6C11.5 19.6 6.4 14.5 6.4 8.1C6.4 7.3 7.1 6.6 7.9 6.6H10.6C11.1 6.6 11.5 6.2 11.5 5.7V3.5C11.5 2.7 12.2 2 13 2H16.5C17.3 2 18 2.7 18 3.5V6.2"
                  stroke="#166EF3"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Call for Pricing
            </button>

            <button
              onClick={onReadMore}
              className="ml-auto bg-[#166EF3] text-white px-4 py-2 rounded-3xl text-sm sm:text-base font-semibold shadow-md hover:bg-[#145fd8]"
            >
              Read More
            </button>
          </div>
        </div>
      </article>
    </div>
  );
}
