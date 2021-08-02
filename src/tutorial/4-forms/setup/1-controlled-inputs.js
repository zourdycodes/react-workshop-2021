import React, { useState } from "react";
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  // 1.
  // const [user, setUser] = useState({ name: "", email: "" });

  //2.
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [users, setUsers] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();

    setUsers([{ firstName, email }]);
  };

  console.log(users);

  return (
    <article>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="firstName">Name :</label>
          <input
            type="text"
            name="name"
            id="name"
            value={firstName}
            // onChange={({ target }) =>
            //   setUser((user) => {
            //     return (user = { ...user, name: target.value });
            //   })
            // }

            onChange={({ target }) => setFirstName(target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="email">Email :</label>
          <input
            type="text"
            name="email"
            id="email"
            value={email}
            // onChange={({ target }) =>
            //   setUser((user) => {
            //     return (user = { ...user, email: target.value });
            //   })
            // }
            onChange={({ target }) => setEmail(target.value)}
          />
        </div>
        <button type="submit">add person</button>
      </form>
    </article>
  );
};

export default ControlledInputs;
