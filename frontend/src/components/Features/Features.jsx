import React from "react";
import FeatureCard from "./FeatureCard";

// Ensure these paths are correct in your project
import Feat1 from "../../assets/Feat1.svg";
import Feat2 from "../../assets/Feat2.svg";
import Feat3 from "../../assets/Feat3.svg";
import Feat4 from "../../assets/Feat4.svg";
import Feat5 from "../../assets/Feat5.svg";
import Feat6 from "../../assets/Feat6.svg";

function Features() {
  const features = [
    {
      src: Feat1,
      title: "Certified Guides",
      desc: "Every guide in our network is certified by UAE authorities, ensuring professionalism and reliability.",
    },
    {
      src: Feat2,
      title: "24/7 Support Line",
      desc: "Instant access to our support team. Report any concerns immediately and we'll take swift action.",
    },
    {
      src: Feat3,
      title: "Secure Payment",
      desc: "Pay directly to our agency, not the guide. Your money is protected until your journey is complete.",
    },
    {
      src: Feat4,
      title: "Zero Fraud Guarantee",
      desc: "Our centralized model eliminates fraud risk. Full refund if any guide misbehaves or fails to deliver.",
    },
    {
      src: Feat5,
      title: "Vetted & Trained",
      desc: "Rigorous background checks and ongoing training ensure only the best guides represent us.",
    },
    {
      src: Feat6,
      title: "Traveler Reviews",
      desc: "Discover authentic traveler reviews highlighting their journey, satisfaction, and confidence in our guided tours and services.",
    },
  ];

  return (
    <section className="w-full py-16 ">
      {/* Main Container: w-[90%] on mobile, w-3/4 on large screens */}
      <div className="w-[90%] lg:w-3/4 mx-auto">
        
        {/* Header Section */}
        <div className="mb-12 md:mb-16">
          <h3 className="text-[#317312] font-bold tracking-[0.2em] text-sm sm:text-base uppercase mb-3">
            Why Trust Us.
          </h3>
          <h2 className="text-[#1C1C1C] text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Your Safety is Our Top Priority
          </h2>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-12">
          {features.map((item, index) => (
            <FeatureCard
              key={index}
              Src={item.src}
              Title={item.title}
              Desc={item.desc}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;