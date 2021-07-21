import React, { useState } from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  const [people, setPeople] = useState(data);

  const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };

  return (
    <>
      <h2>useState array example</h2>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <>
            <div key={id} className="item">
              <h4>
                {id}. {name}
              </h4>
              <button type="button" onClick={() => removeItem(id)}>
                remove
              </button>
            </div>
          </>
        );
      })}
      <button type="button" className="btn" onClick={() => setPeople([])}>
        Clear Items
      </button>
    </>
  );
};

export default UseStateArray;
