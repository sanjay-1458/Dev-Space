import React, { useState } from "react";

function Form() {
  const users = [
    { id: 1, name: "user1" },
    { id: 2, name: "user1" },
  ];
  const [user, setUser] = useState(users);
  function handlechange(e) {
    const newobj = {
      id: e.target.id,
      [e.target.name]: e.target.value,
    };
    setUser([...user, newobj]);
  }
  return (
    <div>
      <h3>Form: {JSON.stringify(user)}</h3>
      <form>
        <label for="name">
          Add User :
          <input
            type="text"
            id={user.length + 1}
            name="name"
            onBlur={handlechange}
          />
        </label>
      </form>
    </div>
  );
}
export default Form;
