import React from 'react';

export const TopBar = () => {
  return (
    <nav className="bg-gray-900 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img src="../Images/3593965-removebg-preview.png" alt="Logo" className="h-10 w-10 mr-3" />
          <span className="text-white text-xl font-semibold">MyCompany</span>
        </div>
        
        {/* Search Bar */}
        <div className="flex items-center flex-1 mx-4">
          <input
            type="text"
            placeholder="Search..."
            className="w-full p-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="p-2 bg-blue-600 text-white rounded-r-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
            Search
          </button>
        </div>
        
        {/* Navbar Links */}
        <div className="flex items-center space-x-4">
          <a href="#services" className="text-white hover:text-gray-400 transition duration-200">Services</a>
          <a href="#contact" className="text-white hover:text-gray-400 transition duration-200">Contact Us</a>
        </div>
      </div>
    </nav>
  );
};
