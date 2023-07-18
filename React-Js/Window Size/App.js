import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  const changeWidth = () => {
    setWidth(window.innerWidth);
  };
  const changeHeight = () => {
    setHeight(window.innerHeight);
  };
  useEffect(() => {
    window.addEventListener("resize", changeWidth);
    window.addEventListener("resize", changeHeight);
  });
  return (
    <div className="App">
      <div className="main">
        <h1>
          {width} X {height}
        </h1>
        <button
          type="button"
          onClick={() => {
            setCount(count + 1);
          }}
        >
          RATIO
        </button>
      </div>
    </div>
  );
}

export default App;
