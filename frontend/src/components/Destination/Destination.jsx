import React from "react";
import DestinationCard from "./DestinationCard";
import Pic1 from "../../assets/KF/Pic1.svg";
function Destination() {
    const features = [
        {
            src: Pic1,
            title: "Certified Guides",
            desc: "Every guide in our network is certified by UAE authorities, ensuring professionalism and reliability.",
        },
        {
            src: Pic1,
            title: "24/7 Support Line",
            desc: "Instant access to our support team. Report any concerns immediately and we'll take swift action.",
        },
        {
            src: Pic1,
            title: "Secure Payment",
            desc: "From flights, stays, to sights, just count on our complete products.",
        },
        {
            src: Pic1,
            title: "Zero Fraud Guarantee",
            desc: "Our centralized model eliminates fraud risk. Full refund if any guide misbehaves or fails to deliver.",
        },
        {
            src: Pic1,
            title: "Vetted & Trained",
            desc: "Rigorous background checks and ongoing training ensure only the best guides represent us.",
        },
        {
            src: Pic1,
            title: "Traveler Reviews",
            desc: "Discover authentic traveler reviews highlighting their journey, satisfaction, and confidence in our services.",
        },
    ];
    return (
        <div className="grid grid-cols-3 ">
            {features.map((item, index) => (
                <DestinationCard key={index} src={item.src || null} desc={item.desc} />
            ))}
        </div>
    );
}

export default Destination;
