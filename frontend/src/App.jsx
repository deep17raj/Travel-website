import { useState } from 'react'
import MainAboutUs from './components/MainAboutUs/MainAboutUs'
import Blog from './components/Blog/Blog'
import GuideForm from './components/GuideForm/GuideForm.jsx'
import SeeAll from './components/SeeAll/SeeAll.jsx'
import NewGuide from './components/DashBoard/NewGuide/NewGuide.jsx'
import DashLayout from './components/DashBoard/DashLayout/DashLayout.jsx'
import HomePage from './components/HomePage/HomePage.jsx'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import UpdateGuide from './components/DashBoard/UpdateGuide/UpdateGuide.jsx'

function App() {

  return (
    <>
    <BrowserRouter>
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
         <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/about' element={<MainAboutUs/>}/>
          <Route path='/packages' element={<SeeAll/>}/>
          <Route path='/requestGuide' element={<GuideForm/>}/>
          <Route path='/blog' element={<Blog/>}/>
          <Route path='/dashboard' element={<DashLayout/>}/>
          <Route path="/dashboard/edit-guide/:id" element={<UpdateGuide/>} />
          
        </Routes>
      </div>

    </div>
      </BrowserRouter>
    </>
  )
}

export default App