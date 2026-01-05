import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaTachometerAlt, FaBook, FaHandshake, FaUndoAlt, FaTimes } from 'react-icons/fa';



const StudentSidebar = ({ isOpen, setIsOpen }) => {
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
              to="/student-dashboard" 
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
            
            {/* Browse Books */}
            <NavLink 
              to="/student-dashboard/books" 
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
              <span>Browse Books</span>
            </NavLink>
            
            {/* My Borrowed Books */}
            <NavLink 
              to="/student-dashboard/issue" 
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
              <span>My Borrowed Books</span>
            </NavLink>
            
            {/* Return History */}
            <NavLink 
              to="/student-dashboard/returned" 
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
              <span>Return History</span>
            </NavLink>
          </div>
        </nav>

        
        <div className="border-t border-gray-200 p-4">
          <div className="bg-blue-50 rounded-lg p-3">
            <p className="text-xs font-semibold text-blue-900 mb-1">Library Hours</p>
            <p className="text-xs text-blue-700">Mon-Fri: 8AM - 8PM</p>
            <p className="text-xs text-blue-700">Sat-Sun: 10AM - 6PM</p>
          </div>
        </div>
      </aside>
    </>
  );
};

export default StudentSidebar;

