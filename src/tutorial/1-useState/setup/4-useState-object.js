import React, { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "Jesus Quintana",
    age: 34,
    message: "Nobody fucks with The Jesus!",
  });

  const changeMessage = () =>
    setPerson({
      ...person,
      name: "The Dude",
      message: "what's this bullshit!",
    });

  return (
    <>
      <h2
        style={{
          fontSize: "18px",
        }}
      >
        useState object example
      </h2>
      <h2
        style={{
          marginTop: "60px",
        }}
      >
        {person.name}
      </h2>
      <h3>{person.age}</h3>
      <p style={{ fontSize: "20px" }}>{person.message}</p>
      <button type="button" className="btn" onClick={changeMessage}>
        change person
      </button>
    </>
  );
};

export default UseStateObject;
