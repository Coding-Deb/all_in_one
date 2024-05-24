import React from "react";
import { TopBar } from "../../Components/topbar";

export const Chat_With_Ai = () => {
  return (
    <div className="flex flex-col p-4 bg-gradient-to-r from-slate-800 to-slate-900 min-h-screen">
      <TopBar />
      <div className="flex flex-col md:flex-row p-4 border-2 border-slate-300 flex-grow">
        <div className="w-full md:w-1/4 flex flex-col space-y-4 mb-4 md:mb-0">
          <div className="flex items-center space-x-2 p-2 border-b border-slate-400 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              width="32"
              height="32"
              viewBox="0 0 512 512"
              style={{ enableBackground: "new 0 0 512 512" }}
              xmlSpace="preserve"
            >
              <g>
                <path
                  fill="#dad5e0"
                  d="M512 201.7H310.3V0H201.7v201.7H0v108.6h201.7V512h108.6V310.3H512z"
                  opacity="1"
                  data-original="#a867fb"
                ></path>
              </g>
            </svg>
            <span className="text-white mx-2">New Chat</span>
          </div>
          <div className="p-2">
            <h2 className="text-white">History</h2>
            {/* Add your history items here */}
          </div>
        </div>
        <div className="w-full md:w-3/4 flex flex-col p-4 space-y-4">
          <div className="flex-grow bg-slate-700 p-4 rounded">
            {/* Chat content will go here */}
          </div>
          <div className="flex flex-col sm:flex-row">
            <input
              type="text"
              className="flex-grow p-3 rounded-l bg-slate-600 text-white mb-2 sm:mb-0 sm:rounded-r-none"
              placeholder="Type your message..."
            />
            <button className="p-2 bg-blue-600 text-white rounded-lg sm:rounded-none sm:rounded-r-lg sm:ml-2">
              Generate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
