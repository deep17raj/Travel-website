import React from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import { LogOut } from 'lucide-react'; // Import an icon for better UI

// Sidebar Item Component
const SidebarItem = ({ title, isActive, onClick }) => (
  <div
    className={`px-8 py-4 cursor-pointer font-semibold text-lg transition-all duration-300 ${
      isActive ? 'text-[#5937E0] bg-[#F5F5F5] rounded-l-full relative' : 'text-gray-400 hover:text-white'
    }`}
    onClick={onClick}
  >
    {title}
    {isActive && <div className="absolute right-0 top-0 bottom-0 w-10 bg-[#F5F5F5] translate-x-1/2"></div>}
  </div>
);

const DashLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Map your menu labels to specific routes
  const menuItems = [
    { label: 'Customer', path: '/dashboard' },
    { label: 'Guide Request', path: '/dashboard/guide-requests' },
    { label: 'Manage Guide', path: '/dashboard/manage-guide' },
    { label: 'Add Guide', path: '/dashboard/add-guide' },
    { label: 'Add Package', path: '/dashboard/add-package' },
    { label: 'View All Package', path: '/dashboard/view-packages' }
  ];

  // --- LOGOUT HANDLER ---
  const handleLogout = async () => {
    try {
      // 1. Call Backend to destroy session
      // Adjust URL if your logout route is different (e.g., /api/v1/admin/logout)
      await axios.post(`${import.meta.env.VITE_API_URL}/api/v1/logout`, {}, {
        withCredentials: true // IMPORTANT: Sends the cookie so backend can clear it
      });
      
    } catch (error) {
      console.error("Logout failed on server:", error);
      // We continue to redirect even if server fails, to ensure user is "logged out" locally
    } finally {
      // 2. Clear Local Storage Flags
      localStorage.removeItem("isAdminLoggedIn");
      localStorage.removeItem("token"); // If you used tokens previously

      // 3. Redirect to Login
      navigate('/admin/login');
    }
  };

  return (
    <div className="flex h-screen bg-[#121212] font-sans overflow-hidden">
      
      {/* --- SIDEBAR --- */}
      <div className="w-72 flex flex-col py-12 space-y-4 flex-shrink-0 z-10 h-full">
        
        {/* Logo */}
        <div className="px-8 mb-8">
          <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-[#5937E0] rounded-2xl flex items-center justify-center shadow-lg shadow-purple-900/50">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
              </div>
              <h2 className="text-3xl font-bold text-white tracking-tight">Satotra</h2>
          </div>
        </div>
        
        {/* Menu Items (Flex-1 takes available space) */}
        <nav className='flex-1 flex flex-col space-y-2 mr-[-1px] '>
            {menuItems.map((item) => {
                const isActive = item.path === '/dashboard' 
                    ? location.pathname === '/dashboard'
                    : location.pathname.includes(item.path);

                return (
                  <SidebarItem 
                      key={item.label}
                      title={item.label} 
                      isActive={isActive} 
                      onClick={() => navigate(item.path)}
                  />
                );
            })}
        </nav>

        {/* --- LOGOUT BUTTON (Pushed to bottom) --- */}
        <div className="px-8 mt-auto pt-4 border-t border-gray-800">
            <button 
                onClick={handleLogout}
                className="flex items-center gap-3 text-red-400 hover:text-red-300 transition-colors font-semibold text-lg w-full py-2"
            >
                <LogOut size={22} />
                Logout
            </button>
        </div>

      </div>

      {/* --- MAIN CONTENT AREA --- */}
      <div className="flex-1 bg-[#F5F5F5] rounded-l-[50px] overflow-y-auto relative z-0 shadow-[-20px_0_40px_rgba(0,0,0,0.2)]">
        <Outlet />
      </div>
    </div>
  );
};

export default DashLayout;