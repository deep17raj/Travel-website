import React from "react";
import Reveal from "../Reveal/Reveal";
import NavBar from "../NavBar/NavBar";
import Hero from "../Hero/Hero";
import Features from "../Features/Features";
import Destination from "../Destination/Destination";
import TrustTravel from "../TrustTravel/TrustTravel";
import Tp from "../TP/Tp";
import KeyFeature from "../KeyFeature/KeyFeature";
import TestimonialText from "../TestimonialText/TestimonialText";
import TestimonialVideo from "../TestimonialVideo/TestimonialVideo";
import AboutUs from "../AboutUs/AboutUs";
import VehicleRental from "../VehicleRental/VehicleRental";
import SEO from "../Seo/Seo";
function HomePage() {
  return (
    <div>
      <>
      <SEO
  title="Dehradun Tour & Travel Packages with Trusted Guides & Rentals | Satotra"
  description="Explore Dehradun with trusted local guides, affordable tour packages, and reliable car rentals. Discover top places, adventures, and Uttarakhand experiences with Satotra."
  keywords="Dehradun tour packages, trusted guides Dehradun, car rental in Dehradun, Uttarakhand tours, Dehradun sightseeing"
  canonical="https://satotra.com/"
/>
        <NavBar />
        <Hero />
        <Reveal>
          <VehicleRental />
        </Reveal>
        <Reveal>
          <Features />
        </Reveal>
        <Reveal>
          <Destination />
        </Reveal>
        <Reveal>
          <TrustTravel />
        </Reveal>
        <Reveal>
          <Tp />
        </Reveal>
        <Reveal>
          <KeyFeature />
        </Reveal>
        <Reveal>
          <TestimonialText />
        </Reveal>
        <Reveal>
          <TestimonialVideo />
        </Reveal>
        <Reveal>
          <AboutUs />
        </Reveal>
      </>
    </div>
  );
}

export default HomePage;
