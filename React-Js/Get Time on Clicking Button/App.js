import "./App.css";
import React ,{ useState } from "react";

function App() {
  let newTime=new Date().toLocaleTimeString();
  const [stateVariable,updateFunction]=useState(newTime);
  return (
    <div className="App">
      <div className="main">
        <h1>{stateVariable}</h1>
        <button onClick={()=>{updateFunction(new Date().toLocaleTimeString())}}>GET TIME</button>
      </div>
    </div>
  );
}

export default App;
