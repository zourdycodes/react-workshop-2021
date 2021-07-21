import React from "react";

export const ErrorExample = () => {
  const [title, setTitle] = React.useState("Hello Bitches!");

  const randomTitle = [
    "AppleJackie",
    "Charlie",
    "Hello World",
    "Pull The Trigger",
    "The Dude",
    "Jesus Quintana",
  ];

  const handleClick = (e) => {
    e.preventDefault();
    return randomTitle.map((titles) => setTitle(titles));
  };

  return (
    <React.Fragment>
      <h2>{title}</h2>
      <button type="button" className="btn" onClick={handleClick}>
        Change Title
      </button>
    </React.Fragment>
  );
};
