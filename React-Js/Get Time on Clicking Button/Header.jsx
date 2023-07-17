import "./Header.css";
import Time from "./Time";
import { useState } from "react";

let currTime = new Date();
let ampm = (currTime.getHours() >= 12) ? "PM" : "AM"
const Header = () => {
  const [stateVariable, updateFunction] = useState(currTime);
  return (
    <div className="header">
      <div className="box">
        <div className="time">
          <Time value={stateVariable.getHours()<10?`0${stateVariable.getHours()}`:stateVariable.getHours()} />
          <pre>:</pre>
          <Time value={stateVariable.getMinutes()<10?`0${stateVariable.getMinutes()}`:stateVariable.getMinutes()} />
          <pre>:</pre>
          <Time value={stateVariable.getSeconds()<10?`0${stateVariable.getSeconds()}`:stateVariable.getSeconds()} />
          <pre> {ampm}</pre>
        </div>
        <button
          type="button"
          onMouseDown={() => {
            updateFunction(new Date());
          }}
        >
          GET TIME
        </button>
      </div>
    </div>
  );
};
export default Header;
