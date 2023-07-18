import "./App.css";
import React, { useState } from "react";

function App() {
  let currTime = new Date().toLocaleTimeString();
  const [stateVariable, updateFunction] = useState(currTime);
  setInterval(() => {
    let time = new Date().toLocaleTimeString();
    updateFunction(time);
  }, 1000);
  return (
    <div className="App">
      <h1>{stateVariable}</h1>
    </div>
  );
}

export default App;
