import React, { useState } from "react";
import { TopBar } from "../../Components/topbar";
import "../../CSS/web.css";

export const Language_Translate_Homepage = () => {
  const [rotated, setRotated] = useState(false);
  const [input, setInput] = useState('');

  const handleClick = () => {
    setRotated(!rotated);
  };

  const inputtext = (event) => {
    setInput(event.target.value);
  };

  const refresh = () => {
    setInput('');
  };

  return (
    <div className="flex flex-col p-4 bg-gradient-to-r from-slate-800 to-slate-900">
      <TopBar />
      <div className="m-2 p-4 flex rounded-lg text-white font-bold text-2xl shadow-lg shadow-black mt-6 bg-slate-700">
        <h1 className="font-sans">Translate Any Language Instantly</h1>
      </div>
      <div className="border-2 border-gray-700 shadow-lg shadow-black p-6 m-4 bg-slate-800 rounded-lg flex flex-col space-y-4">
        <input
          type="text"
          name="lang1"
          id="lang1"
          placeholder="Enter text to translate"
          value={input}
          onChange={inputtext}
          className="m-2 px-4 py-3 shadow-lg shadow-black rounded-md border-none font-bold text-gray-900 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <div className=" p-3 m-3 justify-center items-center flex">
          <div className="border-2 border-black px-4 py-2 m-3 rounded-2xl bg-white w-fit justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              width="50"
              height="50"
              x="0"
              y="0"
              viewBox="0 0 16 16"
              style={{
                enableBackground: "new 0 0 25 50",
                transition: "transform 0.3s ease",
              }}
              xmlSpace="preserve"
              className={`arrow ${rotated ? "rotated" : ""}`}
              onClick={handleClick}
            >
              <g>
                <path
                  d="M.7 11.4h14.5v1H.7z"
                  fill="#000000"
                  opacity="1"
                  data-original="#000000"
                ></path>
                <path
                  d="M3.8 15.6 0 11.9l3.8-3.8.7.7-3.1 3.1 3.1 3zM.7 3.6h14.5v1H.7z"
                  fill="#000000"
                  opacity="1"
                  data-original="#000000"
                ></path>
                <path
                  d="m12.2 7.9-.7-.7 3.1-3.1-3.1-3 .7-.7L16 4.1z"
                  fill="#000000"
                  opacity="1"
                  data-original="#000000"
                ></path>
              </g>
            </svg>
          </div>
        </div>
        <input
          type="text"
          name="lang2"
          id="lang2"
          placeholder="Translated text"
          className="m-2 px-4 py-3 shadow-lg shadow-black rounded-md border-none font-bold text-gray-900 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <div className=" p-3 m-3 justify-center items-center flex">
          <div
            className="border-2 border-black px-4 py-2 m-3 rounded-2xl bg-white w-[250px] justify-between items-center flex flex-row"
            onClick={refresh}
          >
            <h2 className="text-wrap text-2xl font-sans text-black font-bold">
              Refresh
            </h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              width="50"
              height="50"
              x="0"
              y="0"
              viewBox="0 0 16 16"
              style={{
                enableBackground: "new 0 0 25 50",
                transition: "transform 0.3s ease",
              }}
              xmlSpace="preserve"
              className={`arrow`}
              // Removed the onClick={handleClick} from here
            >
              <g>
                <path
                  d="M.7 11.4h14.5v1H.7z"
                  fill="#000000"
                  opacity="1"
                  data-original="#000000"
                ></path>
                <path
                  d="M3.8 15.6 0 11.9l3.8-3.8.7.7-3.1 3.1 3.1 3zM.7 3.6h14.5v1H.7z"
                  fill="#000000"
                  opacity="1"
                  data-original="#000000"
                ></path>
                <path
                  d="m12.2 7.9-.7-.7 3.1-3.1-3.1-3 .7-.7L16 4.1z"
                  fill="#000000"
                  opacity="1"
                  data-original="#000000"
                ></path>
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};
