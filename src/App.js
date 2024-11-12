
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
    <div>
      <h1>Sentiment Analysis</h1>
      <textarea
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Enter text here"
      />
      <button onClick={analyzeSentiment}>Analyze Sentiment</button>
      {sentiment && (
        <div>
          <h2>Sentiment Result:</h2>
          <p>Label: {sentiment.label}</p>
          <p>Confidence: {sentiment.score}</p>
        </div>
      )}
    </div>
  );
}

export default App;
