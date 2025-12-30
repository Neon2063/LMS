import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import axios from 'axios';

const Navbar = ({ toggleSidebar }) => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState('User');

  useEffect(() => {
    // Fetch user data if you have an endpoint
    // For now using placeholder
    setUserName('Admin'); // or 'Student' based on role
  }, []);

  const handleLogout = async () => {
    try {
      await axios.post(
        "http://localhost:8000/api/v1/library/logout",
        {},
        { withCredentials: true }
      );
      navigate('/login');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <div className='flex items-center justify-between h-16 bg-teal-600 px-4 lg:px-6 text-white shadow-md'>
      <div className="flex items-center gap-4">
        <button 
          onClick={toggleSidebar}
          className="lg:hidden text-white hover:text-gray-200 transition-colors"
        >
          <FaBars className="w-6 h-6" />
        </button>
        <p className='text-lg font-semibold'>Welcome, {userName}</p>
      </div>

      <button 
        onClick={handleLogout}
        className='bg-teal-700 hover:bg-teal-800 px-4 py-2 rounded-md transition-colors duration-200 font-medium'
      >
        Logout
      </button>
    </div>
  );
};

export default Navbar;