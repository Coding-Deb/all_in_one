import React, { useState } from "react";
import { TopBar } from "../../Components/topbar";
import "../../CSS/web.css";
import axios from "axios";

export const Language_Translate_Homepage = () => {
  const [rotated, setRotated] = useState(false);
  const [input, setInput] = useState('');
  const [translated, setTranslated] = useState('');
  const [sourceLang, setSourceLang] = useState('');
  const [targetLang, setTargetLang] = useState('');

  const apiKey = process.env.REACT_APP_GOOGLE_TRANSLATE_API_KEY;


  const languages =
  [
    { code: "en", name: "English" },
    { code: "es", name: "Spanish" },
    { code: "fr", name: "French" },
    { code: "bn", name: "Bengali" },
    // Add more languages as needed
  ];

  const handleClick = () => {
    setRotated(!rotated);
    const tempLang = sourceLang;
    setSourceLang(targetLang);
    setTargetLang(tempLang);
  };

  const inputText = (event) => {
    setInput(event.target.value);
  };

  const refresh = () => {
    setInput('');
    setTranslated('');
  };

  const translate = () => {
    // Placeholder translation logic
    setTranslated(`Translated text from ${sourceLang} to ${targetLang}: ${input}`);
  };

  async function generate_text() {
    console.log("loading....");
    setTranslated('Loading....');
    try {
      const response = await axios.post(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${apiKey}`,
        {
          contents: [
            {
              parts: [{ text: `Translate ${input} from ${sourceLang} to ${targetLang}` }]
            },
          ],
        }
      );
      const data = response.data.candidates[0].content.parts[0].text;
      console.log(data);
      setTranslated(data);
      // Process the response as needed
    } catch (error) {
      console.error("Error generating text:", error);
      setTranslated("Error generating text");
    }
  }

  return (
    <div className="flex flex-col p-4 bg-gradient-to-r from-slate-800 to-slate-900 min-h-screen">
      <TopBar />
      <div className="m-2 p-4 flex rounded-lg text-white font-bold text-2xl shadow-lg shadow-black mt-6 bg-slate-700">
        <h1 className="font-sans">Translate Any Language Instantly</h1>
      </div>
      <div className="border-2 border-gray-700 shadow-lg shadow-black p-6 m-4 bg-slate-800 rounded-lg flex flex-col space-y-4">
        <div className="m-3 p-3 flex flex-col space-y-4">
          <div className="flex flex-col md:flex-row justify-between">
            <select
              value={sourceLang}
              onChange={(e) => setSourceLang(e.target.value)}
              className="m-2 px-4 py-3 shadow-lg shadow-black rounded-md border-none font-bold text-gray-900 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="" disabled>Select source language</option>
              {languages.map((lang) => (
                <option key={lang.code} value={lang.code}>
                  {lang.name}
                </option>
              ))}
            </select>
            <div className="p-3 m-3 flex items-center justify-center">
              <div className="border-2 border-black px-4 py-2 m-3 rounded-2xl bg-white w-fit flex justify-center items-center cursor-pointer">
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
            <select
              value={targetLang}
              onChange={(e) => setTargetLang(e.target.value)}
              className="m-2 px-4 py-3 shadow-lg shadow-black rounded-md border-none font-bold text-gray-900 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="" disabled>Select target language</option>
              {languages.map((lang) => (
                <option key={lang.code} value={lang.code}>
                  {lang.name}
                </option>
              ))}
            </select>
          </div>
          <input
            type="text"
            placeholder="Enter text to translate"
            value={input}
            onChange={inputText}
            className="m-2 px-4 py-3 shadow-lg shadow-black rounded-md border-none font-bold text-gray-900 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <div
            className="m-2 px-4 py-3 shadow-lg shadow-black rounded-md border-none font-bold text-gray-900 bg-white placeholder-gray-500 min-h-[4rem] flex items-center"
          >
            {translated || "Translated text will appear here"}
          </div>
        </div>
        <div className="p-3 m-3 flex justify-center space-x-4">
          <button
            onClick={() => {
              translate();
              generate_text();
            }}
            className="border-2 border-black px-4 py-2 rounded-2xl hover:bg-orange-600 hover:text-white font-sans bg-white text-black font-bold text-2xl shadow-lg shadow-black transition-transform duration-300 hover:scale-105"
          >
            Translate
          </button>
          <button
            onClick={refresh}
            className="border-2 border-black px-4 py-2 rounded-2xl hover:bg-green-600 hover:text-white font-sans bg-white text-black font-bold text-2xl shadow-lg shadow-black transition-transform duration-300 hover:scale-105"
          >
            Refresh
          </button>
        </div>
      </div>
    </div>
  );
};
