import React from 'react'

const StuCards = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Student Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold mb-2">Books Borrowed</h3>
          <p className="text-3xl font-bold text-blue-600">0</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold mb-2">Pending Returns</h3>
          <p className="text-3xl font-bold text-orange-600">0</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold mb-2">Returned Books</h3>
          <p className="text-3xl font-bold text-green-600">0</p>
        </div>
      </div>
    </div>
  )
}

export default StuCards
