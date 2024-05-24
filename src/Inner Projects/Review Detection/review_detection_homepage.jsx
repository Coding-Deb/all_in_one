import React, { useState } from "react";
import { TopBar } from "../../Components/topbar";

export const Review_Detection_Homepage = () => {
  const [review, setReview] = useState("");
  const [result, setResult] = useState(null);

  const handleSubmit = () => {
    // Placeholder for review detection logic
    const isPositive = review.toLowerCase().includes("good"); // Example logic
    setResult(isPositive ? "Positive" : "Negative");
  };

  const handleRefresh = () => {
    setReview("");
    setResult(null);
  };

  return (
    <div className="flex flex-col p-4 bg-slate-900 min-h-screen">
      <TopBar />
      <div className="text-white p-4 m-3 flex justify-center items-center shadow-md shadow-black">
        <h2 className="font-sans text-2xl font-bold text-center">
          Testing Review ( Positive / Negative )
        </h2>
      </div>
      <div className="m-3">
        <textarea
          className="w-full p-3 border border-slate-300 rounded bg-slate-800 text-white font-sans"
          rows="5"
          placeholder="Enter your review here..."
          value={review}
          onChange={(e) => setReview(e.target.value)}
        />
      </div>
      <div className="flex flex-col md:flex-row justify-center md:justify-between items-center md:items-start p-2 m-3">
        <button
          onClick={handleSubmit}
          className="border-green-600 border-2 text-white px-7 py-3 rounded m-3 hover:bg-green-600 shadow-lg shadow-black"
        >
          Submit
        </button>
        <button
          onClick={handleRefresh}
          className="border-orange-600 border-2 text-white px-7 py-3 rounded m-3 hover:bg-orange-600 shadow-lg shadow-black"
        >
          Refresh
        </button>
      </div>
      {result && (
        <div
          className={`mt-4 p-4 rounded ${
            result === "Positive" ? "bg-green-500" : "bg-red-500"
          } text-white`}
        >
          <div className="flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2"
            >
              {result === "Positive" ? (
                <path d="M20 6L9 17l-5-5" />
              ) : (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              )}
            </svg>
            <span>{result === "Positive" ? "Positive" : "Negative"} Review</span>
          </div>
        </div>
      )}
    </div>
  );
};
