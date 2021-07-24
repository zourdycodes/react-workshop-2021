import React, { useState, useEffect } from "react";

// by default runs after every re-render
// cleanup function
// second parameter

const UseEffectBasics = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    console.log("Use Effect rendered!");

    if (value > 0) document.title = `New Messages: ${value}`;
  }, [value]);

  return (
    <React.Fragment>
      <h2>useEffect Basics</h2>
      <button
        type="button"
        className="btn"
        onClick={() => setValue((value) => ++value)}
      >
        Add Message
      </button>
    </React.Fragment>
  );
};

export default UseEffectBasics;
