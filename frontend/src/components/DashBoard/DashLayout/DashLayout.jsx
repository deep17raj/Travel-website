import React, { useState } from 'react';
import GuideRequests from '../GuideRequest/GuideRequest';
import CustomerSection from '../CustomerSection/CustomerSection';
import NewGuide from '../NewGuide/NewGuide';
import AddPackageForm from '../Packagess/AddPackageForm';
import ViewAllPackages from '../ViewAllPackages/ViewAllPackages';
import ManageGuide from '../ManageGuide/ManageGuide';

// A simple sidebar item component
const SidebarItem = ({ title, isActive, onClick }) => (
  <div
    className={`px-8 py-4 cursor-pointer font-semibold text-lg transition-all duration-300 ${
      isActive ? 'text-[#5937E0] bg-[#F5F5F5] rounded-l-full relative' : 'text-gray-400 hover:text-white'
    }`}
    onClick={onClick}
  >
    {title}
    {/* Overlap effect for active item */}
    {isActive && <div className="absolute right-0 top-0 bottom-0 w-10 bg-[#F5F5F5] translate-x-1/2"></div>}
  </div>
);

const DashLayout = () => {
  // State to manage the active section
  const [activeSection, setActiveSection] = useState('Guide Request');

  // Function to render content based on active section
  const renderContent = () => {
    switch (activeSection) {
      case 'Guide Request':
        return <GuideRequests />;
      case 'Customer':
        return <CustomerSection/>;
      case 'Add Guide':
        return <NewGuide/>;
      case 'Add Package':
        return <AddPackageForm/>;
      case 'View All Package':
        return <ViewAllPackages/>;
      case 'Manage Guide':
        return <ManageGuide/>;
      // Placeholder for other sections
      default:
        return <div className="p-12 text-3xl font-bold text-gray-400 flex h-full items-center justify-center">{activeSection} Section Coming Soon</div>;
    }
  };

  return (
    <div className="flex h-screen bg-[#121212] font-sans overflow-hidden">
      {/* --- SIDEBAR --- */}
      <div className="w-72 flex flex-col py-12 space-y-4 flex-shrink-0 z-10">
        {/* Logo */}
        <div className="px-8 mb-12">
          <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-[#5937E0] rounded-2xl flex items-center justify-center shadow-lg shadow-purple-900/50">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
              </div>
              <h2 className="text-3xl font-bold text-white tracking-tight">Travelo</h2>
          </div>
        </div>
        
        {/* Menu Items */}
        <nav className='flex-1 flex flex-col space-y-2 mr-[-1px]'>
            {['Customer', 'Guide Request', 'Manage Guide', 'Add Package', 'View All Package', 'Add Guide'].map((item) => (
                <SidebarItem 
                    key={item}
                    title={item} 
                    isActive={activeSection === item} 
                    onClick={() => setActiveSection(item)} 
                />
            ))}
        </nav>
      </div>

      {/* --- MAIN CONTENT AREA --- */}
      <div className="flex-1 bg-[#F5F5F5] rounded-l-[50px] overflow-y-auto relative z-0 shadow-[-20px_0_40px_rgba(0,0,0,0.2)]">
        {renderContent()}
      </div>
    </div>
  );
};

export default DashLayout;