import { useState } from 'react'
import NavBar from './components/NavBar/NavBar'
import Hero from './components/Hero/Hero'
import Features from './components/Features/Features'
import TrustTravel from './components/TrustTravel/TrustTravel'
import Tp from './components/TP/Tp'
import KeyFeature from './components/KeyFeature/KeyFeature'
import TestimonialText from './components/TestimonialText/TestimonialText'
import TestimonialVideo from './components/TestimonialVideo/TestimonialVideo'
import AboutUs from './components/AboutUs/AboutUs'
import Destination from './components/Destination/Destination'
import MainAboutUs from './components/MainAboutUs/MainAboutUs'
import Blog from './components/Blog/Blog'
import GuideForm from './components/GuideForm/GuideForm.jsx'
import FeatureCard from './components/Sample/Sample.jsx'
import SeeAll from './components/SeeAll/SeeAll.jsx'
import Reveal from './components/Reveal/Reveal.jsx'
import NewGuide from './components/DashBoard/NewGuide/NewGuide.jsx'
import DashLayout from './components/DashBoard/DashLayout/DashLayout.jsx'

function App() {

  return (
    <>
    <div className="relative w-full min-h-screen overflow-x-hidden">
      
      {/* --- BACKGROUND GRADIENT BLOBS --- */}
      <div className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none overflow-hidden">
        
        {/* 1. Left Green Orb (Top Left) */}
        <div className="absolute deep top-[-50px] left-[-50px] md:top-[-10%] md:left-[-10%] w-64 h-64 md:w-[500px] md:h-[500px] bg-[#4aa421] rounded-full mix-blend-multiply filter blur-[60px] md:blur-[100px] opacity-30 md:opacity-40 animate-blob"></div>
        
        {/* 2. Left Green Orb (Offset) */}
        <div className="absolute deep top-[-20px] left-[20px] md:top-[-10%] md:left-[10%] w-64 h-64 md:w-[500px] md:h-[500px] bg-[#4d942d] rounded-full mix-blend-multiply filter blur-[60px] md:blur-[100px] opacity-30 md:opacity-40 animate-blob animation-delay-2000"></div>


        {/* 3. Right Purple Orb (Top Right) */}
        <div className="absolute deep top-[-50px] right-[-50px] md:top-[-10%] md:right-[-10%] w-64 h-64 md:w-[500px] md:h-[500px] bg-purple-400 rounded-full mix-blend-multiply filter blur-[60px] md:blur-[100px] opacity-30 md:opacity-40 animate-blob"></div>
        
        {/* 4. Right Purple Orb (Offset) */}
        <div className="absolute deep top-[-20px] right-[20px] md:top-[-10%] md:right-[10%] w-64 h-64 md:w-[500px] md:h-[500px] bg-purple-400 rounded-full mix-blend-multiply filter blur-[60px] md:blur-[100px] opacity-30 md:opacity-40 animate-blob animation-delay-2000"></div>
        
        {/* 5. White/Light Background base */}
        <div className="absolute inset-0 bg-white/60"></div>
        
      </div>

      {/* --- YOUR MAIN CONTENT --- */}
      <div className="relative z-0">
         <div className=''>
          {/* <NavBar/>
          <Hero/>
          <Reveal>
            <Features/>
          </Reveal>
          <Reveal><Destination/></Reveal>
          <Reveal><TrustTravel/></Reveal>
          <Reveal><Tp/></Reveal>
          <Reveal><KeyFeature/></Reveal>
          <Reveal><TestimonialText/></Reveal>
          <Reveal><TestimonialVideo/></Reveal>
          <Reveal><AboutUs/></Reveal>
          <MainAboutUs/>
          <Blog/>
          <GuideForm/>
          <SeeAll/> */}
          <NewGuide/>
          <DashLayout/>
        </div>
      </div>

    </div>
      
    </>
  )
}

export default App