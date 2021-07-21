import React, { useState } from "react";

//! RULES
// starts with use
// component must be uppercase
// invoke inside function/component body
// don't call hooks conditonally

export const UseStateBasics = () => {
  const [title, setTitle] = useState("Hello Bitches!");
  // const [counter, setCounter] = useState(0);

  const handleClick = () => {
    switch (title) {
      case "Hello Bitches!":
        return setTitle("Jackie Burn!");

      case "Jackie Burn!":
        return setTitle("Jesus Quintana");

      default:
        return setTitle("Hello Bitches!");
    }
  };

  // const handleCounter = () => setCounter((counter) => ++counter);

  return (
    <React.Fragment>
      <h2>{title}</h2>
      <button
        style={{ marginBottom: "20px" }}
        type="button"
        className="btn"
        onClick={handleClick}
      >
        Change Title
      </button>
      <pre>{JSON.stringify(title, null, 2)}</pre>
    </React.Fragment>
  );
};
