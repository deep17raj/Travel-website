import React from "react";
import FeatureCard from "./FeatureCard";

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
      desc: "From flights, stays, to sights, just count on our complete products.",
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
      desc: "Discover authentic traveler reviews highlighting their journey, satisfaction, and confidence in our services.",
    },
  ];

  return (
  <div className="grid 
  grid-cols-1 
  sm:grid-cols-2 
  lg:grid-cols-3 
  gap-10 max-w-3/4 mx-auto
  p-10 
  w-full place-items-center justify-center  bg-gray-100">
    {features.map((item, index) => (
      <FeatureCard
        key={index}
        Src={item.src}
        Title={item.title}
        Desc={item.desc}
      />
    ))}
  </div>
);

}

export default Features;
