
import axios from 'axios';
import './App.css';
import React, { useState } from "react";



function App() {
  const [inputText, setInputText] = useState("")
  const [sentiment, setSentiment] = useState(null)

  const analyzeSentiment = async () => {
    try {
      const response = await axios.post("http://127.0.0.1:5000/analyze", {
        text: inputText,
      });
      setSentiment(response.data);
    } catch (error) {
      console.error("Error analyzing sentiment:", error);
    }
  };
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(121,9,9,1) 11%, rgba(0,95,255,1) 100%)",
      }}
    >
      <div className="bg-white bg-opacity-75 p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-4">Sentiment Analysis</h1>
        <textarea
          className="w-full p-2 border border-gray-300 rounded mb-4"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Enter text here"
        />
        <button
          className="w-full bg-blue-500 text-white p-2 rounded"
          onClick={analyzeSentiment}
        >
          Analyze Sentiment
        </button>
        {sentiment && (
          <div className="mt-4">
            <h2 className="text-xl font-semibold">Sentiment Result:</h2>
            <p className="mt-2">
              <strong>Label:</strong> {sentiment.label}
            </p>
            <p>
              <strong>Confidence:</strong> {sentiment.score.toFixed(2)}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
