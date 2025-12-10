import React from 'react'
import Adminsidebar from '../componets/dashboard/Adminsidebar'
import Navbar from '../componets/dashboard/Navbar'
import Content from '../componets/dashboard/Content'

const AdminDashboard = () => {
  return (
    <div className='flex'>
      <Adminsidebar />
      <div className='flex-1 ml-64 bg-gray-100 min-h-screen'>
        <Navbar/> 
        <div className='p-6'>
          <Content />
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard