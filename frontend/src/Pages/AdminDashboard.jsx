import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Adminsidebar from '../componets/dashboard/Adminsidebar';
import Navbar from '../componets/dashboard/Navbar';

function AdminDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-100">
      
      <Adminsidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
      <div className="flex-1 flex flex-col ml-0 ">
        <Navbar toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
        <main className="flex-1 p-4 lg:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AdminDashboard;