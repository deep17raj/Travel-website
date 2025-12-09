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

function App() {

  return (
    <>
    <div className=''>
      <NavBar/>
      {/* <Hero/> */}
      {/* <Features/> */}
      {/* <Destination/> */}
      {/* <TrustTravel/> */}
      {/* <Tp/> */}
      {/* <KeyFeature/> */}
      {/* <TestimonialText/> */}
      {/* <TestimonialVideo/> */}
      {/* <AboutUs/> */}
      <MainAboutUs/>
    </div>
      
    </>
  )
}

export default App
