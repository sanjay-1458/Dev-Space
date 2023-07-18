import "./App.css";
import { useState } from "react";

function App() {
  const color = "#A456D1";
  const [stateVariable, updateFunction] = useState(color);
  const [name, setName] = useState("CLICK ME");
  const handleChange = () => {
    setName("EVENT");
    let newColor = "#34495e";
    updateFunction(newColor);
  };
  const hangleBackground = () => {
    let newColor = "#A456D1";
    updateFunction(newColor);
    setName("CLICK ME");
  };
  return (
    <div className="App" style={{ backgroundColor: stateVariable }}>
      <button onClick={handleChange} onDoubleClick={hangleBackground}>
        {name}
      </button>
    </div>
  );
}

export default App;
