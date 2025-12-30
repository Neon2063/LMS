import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaCheck, FaTachometerAlt, FaUsers, FaBook, FaThumbsUp, FaThumbsDown, FaTimes } from 'react-icons/fa';

const Adminsidebar = ({ isOpen, setIsOpen }) => {
  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
      
      {/* Sidebar */}
      <div className={`
        fixed left-0 top-0 h-screen w-64 bg-gray-800 text-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="p-6 border-b border-gray-700 flex items-center justify-between">
          <h3 className="text-2xl font-bold">Library MS</h3>
          <button 
            onClick={() => setIsOpen(false)}
            className="lg:hidden text-white hover:text-gray-300 transition-colors"
          >
            <FaTimes className="w-6 h-6" />
          </button>
        </div>
        
        <nav className="py-4">
          <NavLink 
            to="/admin-dashboard" 
            end
            onClick={() => setIsOpen(false)}
            className={({isActive}) => `flex items-center gap-3 px-6 py-3 hover:bg-gray-700 transition-colors duration-200 ${isActive ? "bg-teal-500" : ""}`}
          >
            <FaTachometerAlt className="text-lg" />
            <span>Dashboard</span>
          </NavLink>
          
          <NavLink 
            to="/admin-dashboard/members" 
            onClick={() => setIsOpen(false)}
            className={({isActive}) => `flex items-center gap-3 px-6 py-3 hover:bg-gray-700 transition-colors duration-200 ${isActive ? "bg-teal-500" : ""}`}
          >
            <FaUsers className="text-lg" />
            <span>Members</span>
          </NavLink>
          
          <NavLink 
            to="/admin-dashboard/books" 
            onClick={() => setIsOpen(false)}
            className={({isActive}) => `flex items-center gap-3 px-6 py-3 hover:bg-gray-700 transition-colors duration-200 ${isActive ? "bg-teal-500" : ""}`}
          >
            <FaBook className="text-lg" />
            <span>Books</span>
          </NavLink>
          
          <NavLink 
            to="/admin-dashboard/issued" 
            onClick={() => setIsOpen(false)}
            className={({isActive}) => `flex items-center gap-3 px-6 py-3 hover:bg-gray-700 transition-colors duration-200 ${isActive ? "bg-teal-500" : ""}`}
          >
            <FaCheck className="text-lg" />
            <span>Issued</span>
          </NavLink>
          
          <NavLink 
            to="/admin-dashboard/returned" 
            onClick={() => setIsOpen(false)}
            className={({isActive}) => `flex items-center gap-3 px-6 py-3 hover:bg-gray-700 transition-colors duration-200 ${isActive ? "bg-teal-500" : ""}`}
          >
            <FaThumbsUp className="text-lg" />
            <span>Returned</span>
          </NavLink>
          
          <NavLink 
            to="/admin-dashboard/not-returned" 
            onClick={() => setIsOpen(false)}
            className={({isActive}) => `flex items-center gap-3 px-6 py-3 hover:bg-gray-700 transition-colors duration-200 ${isActive ? "bg-teal-500" : ""}`}
          >
            <FaThumbsDown className="text-lg" />
            <span>Not Returned</span>
          </NavLink>
        </nav>
      </div>
    </>
  );
};

export default Adminsidebar;