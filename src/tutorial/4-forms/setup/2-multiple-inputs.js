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

  const handleChange = ({ target }) => {
    const name = target.name;
    const value = target.value;

    console.log([name]);

    // different approach
    setUser((user) => {
      return { ...user, [name]: value };
    });

    // READABLE APPROACH
    if (name === "firstName") {
      setUser((user) => {
        return { ...user, firstName: value };
      });
    }

    if (name === "email") {
      setUser((user) => {
        return { ...user, email: value };
      });
    }

    if (name === "age") {
      setUser((user) => {
        return { ...user, age: value };
      });
    }
  };

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
        <form className="form">
          <div className="form-control">
            <label htmlFor="firstName">Name : </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={user.firstName}
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email : </label>
            <input
              type="email"
              id="email"
              name="email"
              value={user.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="age">Age : </label>
            <input
              type="age"
              id="age"
              name="age"
              value={user.age}
              onChange={handleChange}
            />
          </div>
          <button onClick={handleSubmit} type="submit">
            add person
          </button>
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
