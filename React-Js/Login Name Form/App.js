import "./App.css";
import React, { useState } from "react";

function App() {
  const [stateVariable, updateFunction] = useState("");
  const handleCLick = () => {
    let name = "ssss";
    // {
    name = document.getElementById("text").value;
    // }
    updateFunction(name);
    document.getElementById("text").value = "";
  };
  return (
    <div className="App">
      <div className="main">
        <h1>Hello {stateVariable}</h1>
        <form>
          <input type="text" placeholder="Enter your name" id="text" />
          <button type="button" value="SUBMIT" onClick={handleCLick}>
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
