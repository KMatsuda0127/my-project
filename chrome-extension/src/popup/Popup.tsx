import React from 'react'

const Popup: React.FC = () => {
  return (
    <div className="w-80 h-96 p-4 bg-white">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Chrome Extension</h1>
      <p className="text-gray-600 mb-4">
        This is a Chrome extension built with React, TypeScript, and Tailwind CSS.
      </p>
      <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
        Click me
      </button>
    </div>
  )
}

export default Popup