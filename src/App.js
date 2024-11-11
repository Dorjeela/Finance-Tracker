
import './App.css';
import React, { useState, useEffect } from "react";



function App() {

  const [data, setData] = useState({
    name: "",
    age: 0,
    grad_date: 0,
    date_time: ""
  })

  useEffect(() => {
    fetch("/data").then((res) => {
      res.json().then((data) => {
        setData({
          name: data.name,
          age: data.age,
          grad_date: data.grad_date,
          date_time: data.date_time
        })
      })
    })
  })
  return (
    <div className="App">
            <header className="App-header">
                <h1>React and flask</h1>
                {/* Calling a data from setdata for showing */}
                <p>{data.name}</p>
                <p>{data.age}</p>
                <p>{data.grad_date}</p>
                <p>{data.date_time}</p>

            </header>
        </div>
  );
}

export default App;
