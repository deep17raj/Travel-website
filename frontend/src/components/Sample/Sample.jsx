import React from "react";
import Img from "../../assets/Pic1.svg"; // update path if needed
import Tele from "../../assets/Tele.svg"

export default function FeatureCard({
  image = Img,
  tag = "Trending",
  title = "Nainital",
  description = "Discover Rishikesh’s spiritual aura, riverfront temples, yoga heritage, and thrilling rafting adventures led by a trusted local guide.",
  onReadMore = () => {},
  onCall = () => { window.location.href = "tel:+911234567890"; }
}) {
  return (
    <div className="w-full max-w-sm mx-auto">
      <article className="relative rounded-3xl overflow-hidden bg-white shadow-[0_40px_80px_rgba(0,0,0,0.25)]">
        {/* IMAGE (covers top two-thirds) */}
        <div className="relative">
          <img src={image} alt={title} className="w-full h-56 sm:h-64 md:h-72 lg:h-80 object-cover" />
          {/* Trending pill */}
          <span className="absolute left-4 top-4 inline-block bg-green-600 text-white text-xs sm:text-sm px-3 py-1 rounded-full font-medium shadow-sm">
            {tag}
          </span>
          {/* Title overlay (centered horizontally near bottom of image) */}
          <h3 className="absolute left-1/2 -translate-x-1/2 bottom-8 text-white text-3xl sm:text-4xl md:text-5xl font-semibold tracking-wide drop-shadow-lg"
              style={{ textShadow: "0 2px 8px rgba(0,0,0,0.6)" }}>
            {title}
          </h3>
        </div>

        {/* CONTENT BOX */}
        <div className="px-5 py-5 bg-white">
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">
            {description}
          </p>

          {/* CTA row */}
          <div className="flex items-center justify-between gap-3">
            <button
              onClick={onCall}
              className="flex items-center gap-2 text-[#166EF3] text-sm sm:text-base font-medium"
              aria-label="Call for pricing"
            >
              {/* phone icon (inline svg) */}
             <div><img src={Tele} alt="" /></div>

              <span>Call for Pricing</span>
            </button>

            <button
              onClick={onReadMore}
              className="ml-auto bg-[#166EF3] text-white px-4 py-2 rounded-3xl text-sm sm:text-base font-semibold shadow-md hover:bg-[#145fd8] transition"
            >
              Read More
            </button>
          </div>
        </div>
      </article>
    </div>
  );
}
