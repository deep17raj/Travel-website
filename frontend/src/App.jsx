import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// --- Existing Imports ---
import MainAboutUs from './components/MainAboutUs/MainAboutUs'
import Blog from './components/Blog/Blog'
import SeeAll from './components/SeeAll/SeeAll.jsx'
import DashLayout from './components/DashBoard/DashLayout/DashLayout.jsx'
import HomePage from './components/HomePage/HomePage.jsx'

// --- Dashboard Component Imports (YOU WERE MISSING THESE) ---
import CustomerSection from './components/DashBoard/CustomerSection/CustomerSection'; // Check path
import GuideRequests from './components/DashBoard/GuideRequest/GuideRequest'; // Check path
import ManageGuide from './components/DashBoard/ManageGuide/ManageGuide'; // Check path
import NewGuide from './components/DashBoard/NewGuide/NewGuide'; // Check path
import ViewAllPackages from './components/DashBoard/ViewAllPackages/ViewAllPackages'; // Check path
import AddPackageForm from './components/DashBoard/Packagess/AddPackageForm'; // Check path

// --- Update Forms ---
import UpdateGuide from './components/DashBoard/UpdateGuide/UpdateGuide.jsx'
import UpdatePackageForm from './components/DashBoard/UpdatePackageForm/UpdatePackageForm.jsx'

// --- Auth Imports ---
import AdminLogin from './components/AdminLogin/AdminLogin.jsx';
import ProtectedRoute from './components/DashBoard/ProtectedRoute/ProtectedRoute.jsx';

function App() {

  return (
    <>
    <BrowserRouter>
    <div className="relative w-full min-h-screen overflow-x-hidden">
      
      {/* Background */}
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

      <div className="relative z-0">
         <Routes>
          {/* Public Routes */}
          <Route path='/' element={<HomePage/>}/>
          <Route path='/about' element={<MainAboutUs/>}/>
          <Route path='/packages' element={<SeeAll/>}/>
          <Route path='/blog/:id' element={<Blog/>}/>
          
          {/* Admin Login */}
          <Route path='/admin/login' element={<AdminLogin/>}/>

          {/* Protected Dashboard Routes */}
          <Route element={<ProtectedRoute />}>
             
             {/* PARENT ROUTE: /dashboard 
                 (Renders DashLayout, which contains the Sidebar and <Outlet />)
             */}
             <Route path="/dashboard" element={<DashLayout />}>
                
                {/* Index matches exactly "/dashboard" */}
                <Route index element={<CustomerSection />} />
                
                {/* Child Routes (Render inside the Outlet of DashLayout) */}
                <Route path="guide-requests" element={<GuideRequests />} />
                <Route path="manage-guide" element={<ManageGuide />} />
                <Route path="add-guide" element={<NewGuide />} />
                <Route path="add-package" element={<AddPackageForm />} />
                <Route path="view-packages" element={<ViewAllPackages />} />
                
                {/* Dynamic Routes */}
                <Route path="update-package/:id" element={<UpdatePackageForm />} />
                <Route path="edit-guide/:id" element={<UpdateGuide />} />
             
             </Route>
          
          </Route>
          
        </Routes>
      </div>

    </div>
    </BrowserRouter>
    </>
  )
}

export default App