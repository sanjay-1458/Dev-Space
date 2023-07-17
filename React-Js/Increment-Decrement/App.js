import "./App.css";
import Header from "./components/Header";
import { useState } from "react";

function App() {
  const [initialState, updateState] = useState(0);
  function fun() {
    updateState(initialState - 1);
  }
  return (
    <div className="App">
      <Header />
      <div className="main">
        <div className="head">
          <h1 className="heading">{initialState}</h1>
        </div>
        <div className="btn">
          <button
            className="button"
            onClick={() => {
              updateState(initialState + 1);
            }}
          >
            Increment
          </button>
          <button className="button" onClick={fun}>
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
