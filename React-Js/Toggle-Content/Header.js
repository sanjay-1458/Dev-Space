import React, { useState } from "react";
import Loading from "./Loading";
import Loaded from "./Loaded";

function Header() {
  const [isLoading, setIsLoading] = useState(false);
  function call() {
    setIsLoading(!isLoading);
  }
  return (
    <div>
      <button type="button" onClick={call}>
        Set loading : {`${isLoading}`}
      </button>
      {isLoading ? <Loading /> : <Loaded />}
    </div>
  );
}
export default Header;
