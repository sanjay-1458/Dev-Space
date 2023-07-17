import "./Header.css";
import {useState} from 'react';
const Header = () => {
  const [stateVariable,updateFunction]=useState(0);
  return (
    <div className="header">
      <div className='box'>
        <h1>{stateVariable}</h1>
        <button type="button" onMouseDown={()=>{
          updateFunction(stateVariable+1);
        }}>CLICK ME</button>
      </div>
    </div>
  );
};
export default Header;
