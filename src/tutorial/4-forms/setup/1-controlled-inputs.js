import React, { useState } from "react";
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const [user, setUser] = useState({ name: "", email: "" });

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(user);
  };

  return (
    <article>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="firstName">Name :</label>
          <input
            type="text"
            name="name"
            id="name"
            value={user.name}
            onChange={({ target }) =>
              setUser((user) => {
                return (user = { ...user, name: target.value });
              })
            }
          />
        </div>
        <div className="form-control">
          <label htmlFor="email">Email :</label>
          <input
            type="text"
            name="email"
            id="email"
            value={user.email}
            onChange={({ target }) =>
              setUser((user) => {
                return (user = { ...user, email: target.value });
              })
            }
          />
        </div>
        <button type="submit">add person</button>
      </form>
    </article>
  );
};

export default ControlledInputs;
