import React from 'react';
import { FaBook, FaUsers, FaHandshake, FaUndoAlt, FaExclamationTriangle, FaSpinner, FaArrowUp, FaArrowDown } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { useDashboardStats } from '../hooks/useDashboardStats';


const Cards = () => {
  const { stats, loading, error } = useDashboardStats();

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <FaSpinner className="w-12 h-12 text-purple-600 animate-spin mx-auto mb-4" />
          <p className="text-gray-600 text-lg">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-xl p-6 text-center">
        <FaExclamationTriangle className="w-12 h-12 text-red-500 mx-auto mb-4" />
        <h3 className="text-lg font-semibold text-red-800 mb-2">Error Loading Statistics</h3>
        <p className="text-red-600">{error}</p>
        <button 
          onClick={() => window.location.reload()}
          className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
        >
          Retry
        </button>
      </div>
    );
  }

  // Mock trend data (can be fetched from backend in future)
  const trends = {
    members: { value: '+12%', isPositive: true },
    books: { value: '+5%', isPositive: true },
    issued: { value: '+8%', isPositive: true },
    returned: { value: '+15%', isPositive: true },
    overdue: { value: '-3%', isPositive: true }
  };

  const cardData = [
    {
      title: 'Total Members',
      value: stats.totalMembers,
      icon: FaUsers,
      color: 'blue',
      link: 'members',
      trend: trends.members
    },
    {
      title: 'Total Books',
      value: stats.totalBooks,
      icon: FaBook,
      color: 'purple',
      link: 'books',
      trend: trends.books
    },
    {
      title: 'Books Issued',
      value: stats.booksIssued,
      icon: FaHandshake,
      color: 'amber',
      link: 'issued',
      trend: trends.issued
    },
    {
      title: 'Books Returned',
      value: stats.booksReturned,
      icon: FaUndoAlt,
      color: 'green',
      link: 'returned',
      trend: trends.returned
    },
    {
      title: 'Books Overdue',
      value: stats.booksNotReturned,
      icon: FaExclamationTriangle,
      color: 'red',
      link: 'not-returned',
      trend: trends.overdue
    }
  ];

  const colorClasses = {
    blue: {
      border: 'border-l-blue-500',
      icon: 'bg-blue-50 text-blue-600',
      trend: 'text-blue-600'
    },
    purple: {
      border: 'border-l-purple-500',
      icon: 'bg-purple-50 text-purple-600',
      trend: 'text-purple-600'
    },
    amber: {
      border: 'border-l-amber-500',
      icon: 'bg-amber-50 text-amber-600',
      trend: 'text-amber-600'
    },
    green: {
      border: 'border-l-green-500',
      icon: 'bg-green-50 text-green-600',
      trend: 'text-green-600'
    },
    red: {
      border: 'border-l-red-500',
      icon: 'bg-red-50 text-red-600',
      trend: 'text-red-600'
    }
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
        <p className="text-sm text-gray-600 mt-1">Welcome back! Here's what's happening with your library.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {cardData.map((card) => {
          const Icon = card.icon;
          const colors = colorClasses[card.color];
          
          return (
            <NavLink 
              key={card.title}
              to={card.link}
              className="group"
            >
              <div className={`
                bg-white rounded-xl border-l-4 ${colors.border} shadow-sm
                hover:shadow-md transition-all duration-200 cursor-pointer
                p-5
              `}>
                
                {/* Header: Icon + Trend */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-lg ${colors.icon}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  
                  {/* Trend Badge */}
                  <div className={`flex items-center gap-1 text-xs font-medium ${card.trend.isPositive ? 'text-green-600' : 'text-red-600'}`}>
                    {card.trend.isPositive ? <FaArrowUp className="w-3 h-3" /> : <FaArrowDown className="w-3 h-3" />}
                    <span>{card.trend.value}</span>
                  </div>
                </div>

                {/* Content */}
                <div>
                  <p className="text-3xl font-bold text-gray-800 mb-1">
                    {card.value.toLocaleString()}
                  </p>
                  <p className="text-sm text-gray-600">
                    {card.title}
                  </p>
                </div>

                {/* Hover Indicator */}
                <div className="mt-4 flex items-center text-xs font-medium text-gray-400 group-hover:text-purple-600 transition-colors">
                  View Details →
                </div>
              </div>
            </NavLink>
          );
        })}
      </div>

      {/* Quick Actions Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
        
        {/* Recent Activity Card */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-800">Recent Activity</h3>
            <button className="text-sm text-purple-600 hover:text-purple-700 font-medium">
              View All
            </button>
          </div>
          
          <div className="space-y-3">
            {[1, 2, 3].map((_, i) => (
              <div key={i} className="flex items-center gap-3 pb-3 border-b border-gray-100 last:border-0">
                <div className="w-8 h-8 bg-purple-50 rounded-full flex items-center justify-center">
                  <FaBook className="w-4 h-4 text-purple-600" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-700">Book issued to student</p>
                  <p className="text-xs text-gray-500">2 hours ago</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Stats Card */}
        <div className="bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl shadow-sm p-6 text-white">
          <h3 className="text-lg font-semibold mb-4">Library Performance</h3>
          
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-purple-100">Total Circulation</span>
              <span className="text-lg font-bold">{stats.booksIssued + stats.booksReturned}</span>
            </div>
            
            <div className="w-full bg-white bg-opacity-20 rounded-full h-2">
              <div className="bg-white rounded-full h-2 w-3/4"></div>
            </div>
            
            <div className="flex items-center justify-between text-sm">
              <span className="text-purple-100">Active Rate</span>
              <span className="font-semibold">75%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;


 