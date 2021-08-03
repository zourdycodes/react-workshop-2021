import React, { useState } from "react";
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange
// dynamic object keys

const ControlledInputs = () => {
  // const [firstName, setFirstName] = useState("");
  // const [email, setEmail] = useState("");
  // const [age, setAge] = useState("");

  const [user, setUser] = useState({ firstName: "", email: "", age: "" });

  const [people, setPeople] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.firstName && user.email && user.age) {
      const person = {
        id: new Date().getTime().toString(),
        ...user,
      };

      console.log(person);
      setPeople((people) => {
        return [...people, person];
      });

      setUser({ firstName: "", email: "", age: "" });
    } else {
      console.log("empty values");
    }
  };
  return (
    <>
      <article>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="firstName">Name : </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={user.firstName}
              onChange={(e) =>
                setUser((user) => {
                  return (user = { firstName: e.target.value, ...user });
                })
              }
            />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email : </label>
            <input
              type="email"
              id="email"
              name="email"
              value={user.email}
              onChange={({ target }) =>
                setUser((user) => {
                  return (user = { email: target.value, ...user });
                })
              }
            />
          </div>
          <div className="form-control">
            <label htmlFor="age">Age : </label>
            <input
              type="age"
              id="age"
              name="age"
              value={user.age}
              onChange={(e) =>
                setUser((user) => {
                  return (user = { age: e.target.value, ...user });
                })
              }
            />
          </div>
          <button type="submit">add person</button>
        </form>
        {people.map((person, index) => {
          const { id, firstName, email } = person;
          return (
            <div className="item" key={id}>
              <h4>{firstName}</h4>
              <p>{email}</p>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default ControlledInputs;
