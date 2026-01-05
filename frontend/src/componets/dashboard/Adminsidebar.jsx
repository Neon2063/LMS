import React from 'react';
import { NavLink } from 'react-router-dom';
import {  FaTachometerAlt,  FaUsers,  FaBook, FaHandshake, FaUndoAlt,  FaExclamationTriangle,FaTimes} from 'react-icons/fa';



const Adminsidebar = ({ isOpen, setIsOpen }) => {
  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden transition-opacity"
          onClick={() => setIsOpen(false)}
        />
      )}
      
      {/* Sidebar */}
      <aside className={`
        fixed left-0 top-0 h-screen w-64 bg-white border-r border-gray-200 shadow-sm z-50 
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        
        {/* HEADER: Logo Section */}
        <div className="flex items-center justify-between h-16 px-6 border-b border-gray-200">
          <div className="flex items-center gap-2">
            {/* Logo */}
            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
              <FaBook className="w-4 h-4 text-white" />
            </div>
            
            {/* Brand Name */}
            <div>
              <h3 className="text-lg font-bold text-gray-800">Yr Library</h3>
            </div>
          </div>

          {/* Mobile Close Button */}
          <button 
            onClick={() => setIsOpen(false)}
            className="lg:hidden p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Close sidebar"
          >
            <FaTimes className="w-5 h-5" />
          </button>
        </div>

        {/* NAVIGATION MENU */}
        <nav className="flex-1 overflow-y-auto py-6 px-3">
          <div className="space-y-1">
            
            {/* Dashboard */}
            <NavLink 
              to="/admin-dashboard" 
              end
              onClick={() => setIsOpen(false)}
              className={({isActive}) => `
                flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all
                ${isActive 
                  ? "bg-purple-50 text-purple-700 shadow-sm" 
                  : "text-gray-700 hover:bg-gray-50"
                }
              `}
            >
              <FaTachometerAlt className="w-5 h-5 flex-shrink-0" />
              <span>Dashboard</span>
            </NavLink>
            
            {/* Members */}
            <NavLink 
              to="/admin-dashboard/members" 
              onClick={() => setIsOpen(false)}
              className={({isActive}) => `
                flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all
                ${isActive 
                  ? "bg-purple-50 text-purple-700 shadow-sm" 
                  : "text-gray-700 hover:bg-gray-50"
                }
              `}
            >
              <FaUsers className="w-5 h-5 flex-shrink-0" />
              <span>Members</span>
            </NavLink>
            
            {/* Books */}
            <NavLink 
              to="/admin-dashboard/books" 
              onClick={() => setIsOpen(false)}
              className={({isActive}) => `
                flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all
                ${isActive 
                  ? "bg-purple-50 text-purple-700 shadow-sm" 
                  : "text-gray-700 hover:bg-gray-50"
                }
              `}
            >
              <FaBook className="w-5 h-5 flex-shrink-0" />
              <span>Books</span>
            </NavLink>
            
            {/* Issues */}
            <NavLink 
              to="/admin-dashboard/issued" 
              onClick={() => setIsOpen(false)}
              className={({isActive}) => `
                flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all
                ${isActive 
                  ? "bg-purple-50 text-purple-700 shadow-sm" 
                  : "text-gray-700 hover:bg-gray-50"
                }
              `}
            >
              <FaHandshake className="w-5 h-5 flex-shrink-0" />
              <span>Issues</span>
            </NavLink>
            
            {/* Returned */}
            <NavLink 
              to="/admin-dashboard/returned" 
              onClick={() => setIsOpen(false)}
              className={({isActive}) => `
                flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all
                ${isActive 
                  ? "bg-purple-50 text-purple-700 shadow-sm" 
                  : "text-gray-700 hover:bg-gray-50"
                }
              `}
            >
              <FaUndoAlt className="w-5 h-5 flex-shrink-0" />
              <span>Returned</span>
            </NavLink>
            
            {/* Not Returned */}
            <NavLink 
              to="/admin-dashboard/not-returned" 
              onClick={() => setIsOpen(false)}
              className={({isActive}) => `
                flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all
                ${isActive 
                  ? "bg-purple-50 text-purple-700 shadow-sm" 
                  : "text-gray-700 hover:bg-gray-50"
                }
              `}
            >
              <FaExclamationTriangle className="w-5 h-5 flex-shrink-0" />
              <span>Not Returned</span>
            </NavLink>
          </div>
        </nav>

        <div className="border-t border-gray-200 p-4">
          <div className="bg-purple-50 rounded-lg p-3">
            <p className="text-xs font-semibold text-purple-900 mb-1">Need Help?</p>
            <p className="text-xs text-purple-700 mb-2">Check our documentation</p>
            <button className="text-xs font-medium text-purple-600 hover:text-purple-700">
              Learn More →
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Adminsidebar;

