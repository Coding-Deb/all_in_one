import React, { useState } from "react";
import { TopBar } from "../../Components/topbar";
import axios from "axios";

export const Chat_With_Ai = () => {
  const apiKey = process.env.REACT_APP_GOOGLE_TRANSLATE_API_KEY;
  const [input, setInput] = useState('');
  const [chatHistory, setChatHistory] = useState([]);

  const inputText = (event) => {
    setInput(event.target.value);
  };

  async function generate_text() {
    console.log("loading....");
    try {
      const userMessage = { sender: 'user', text: input };
      setChatHistory([...chatHistory, userMessage]);

      const response = await axios.post(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${apiKey}`,
        {
          contents: [
            {
              parts: [{ text: input }]
            },
          ],
        }
      );
      const data = response.data.candidates[0].content.parts[0].text;
      console.log(data);
      const aiMessage = { sender: 'ai', text: data };
      setChatHistory([...chatHistory, userMessage, aiMessage]);
      setInput('');
    } catch (error) {
      console.error("Error generating text:", error);
      const errorMessage = { sender: 'ai', text: 'Error generating text.' };
      setChatHistory([...chatHistory, { sender: 'user', text: input }, errorMessage]);
      setInput('');
    }
  }

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
        <div className="w-full md:w-3/4 flex flex-col p-5 space-y-4 border-2 border-black">
          <div className="flex-grow bg-slate-700 p-4 rounded border-2 border-black overflow-y-auto">
            {chatHistory.map((message, index) => (
              <div
                key={index}
                className={`flex ${
                  message.sender === 'user' ? 'justify-end' : 'justify-start'
                } mb-2`}
              >
                <div
                  className={`p-2 rounded-lg ${
                    message.sender === 'user'
                      ? 'bg-green-500 text-white shadow-lg shadow-black my-5'
                      : 'bg-gray-300 text-black shadow-lg shadow-black my-5'
                  }`}
                  style={{ maxWidth: '70%' }}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row fixed bottom-0 left-0 w-full p-4 bg-slate-900 border-t border-slate-700">
            <input
              type="text"
              className="flex-grow p-3 rounded-xl bg-slate-600 text-white mb-2 sm:mb-0 sm:rounded-r-none"
              placeholder="Type your message..."
              value={input}
              onChange={inputText}
            />
            <button 
              className="p-2 bg-green-800 text-white rounded-lg sm:rounded-none sm:rounded-r-lg sm:ml-2"
              onClick={generate_text}
            >
              Generate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
