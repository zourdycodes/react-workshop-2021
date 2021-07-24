import React, { useState } from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  const [people, setPeople] = useState(data);
  const [counter, setCounter] = useState(0);

  const removeItem = (id) => {
    // REFACTOR
    setPeople((oldPeople) => {
      let newPeople = oldPeople.filter((person) => person.id !== id);
      return newPeople;
    });
  };

  const increaseNum = () => setCounter((counter) => ++counter);
  const decreaseNum = () => setCounter((counter) => --counter);

  return (
    <>
      <h2>useState array example</h2>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>
              {id}. {name}
            </h4>
            <button type="button" onClick={() => removeItem(id)}>
              remove
            </button>
          </div>
        );
      })}
      <button type="button" className="btn" onClick={() => setPeople([])}>
        Clear Items
      </button>
      <h1
        style={{
          marginTop: "25px",
        }}
      >
        {counter}
      </h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "45px",
        }}
      >
        <button type="button" className="btn" onClick={decreaseNum}>
          Decrease
        </button>
        <button type="button" className="btn" onClick={increaseNum}>
          Increase
        </button>
      </div>
    </>
  );
};

export default UseStateArray;
