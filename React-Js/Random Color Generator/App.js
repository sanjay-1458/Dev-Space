import "./App.css";
import React, { useState } from "react";

function App() {
  let clr = "rgb(164, 86, 209)";
  const [color, setColor] = useState(clr);
  const callbackFunction = () => {
    let string = "A67E5FD24C801B39";
    let str = "#";
    for (let i = 0; i < 6; ++i) {
      str += string[Math.floor(Math.random() * 10)];
    }
    setColor(str);
  };
  return (
    <div className="App" style={{ backgroundColor: color }}>
      <div className="main">
        <h1>{color}</h1>
        <button
          type="button"
          onClick={callbackFunction}
          onDoubleClick={callbackFunction}
        >
          CLICK ME
        </button>
      </div>
    </div>
  );
}

export default App;
