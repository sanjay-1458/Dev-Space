import React, { useState } from "react";

function Form() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div>
      <h3>Form</h3>
      <form>
        <label for="name">
          UserName:
          <input
            type="text"
            id="name"
            value={userName}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
        </label>
        <br />
        <br />
        <label for="pass">
          Password:
          <input
            type="password"
            id="pass"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </label>
      </form>
    </div>
  );
}
export default Form;
