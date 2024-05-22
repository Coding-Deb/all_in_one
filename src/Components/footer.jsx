import React from "react";

export const Footer = () => {
  return (
    <div className=" p-2 flex flex-col ">
      <footer className="bg-gray-800 text-white py-6 shadow-lg shadow-black">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-4">
            <div className="mb-4 md:mb-0">
              <a href="#" className="text-2xl font-bold text-white">
                <span className="font-bold text-orange-500 m-1">CODING</span>
                <span className="font-bold text-green-400 m-1">DEB</span>
              </a>
            </div>
            <div className="flex justify-center mb-4 md:mb-0">
              <a href="#" className="mx-2 text-gray-400 hover:text-white">
                Home
              </a>
              <a href="#" className="mx-2 text-gray-400 hover:text-white">
                About
              </a>
              <a href="#" className="mx-2 text-gray-400 hover:text-white">
                Services
              </a>
              <a href="#" className="mx-2 text-gray-400 hover:text-white">
                Contact
              </a>
            </div>
            <div>
              <a href="#" className="mx-2 text-gray-400 hover:text-white">
                Facebook
              </a>
              <a href="#" className="mx-2 text-gray-400 hover:text-white">
                Twitter
              </a>
              <a href="#" className="mx-2 text-gray-400 hover:text-white">
                Instagram
              </a>
            </div>
          </div>
          <div className="text-center text-gray-400">
            <p>
              &copy; 2024
              <span className="font-bold text-orange-500 m-1">CODING</span>
              <span className="font-bold text-green-400 m-1">DEB</span>. All
              rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};
