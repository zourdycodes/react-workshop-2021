import React, { useState, useReducer, useEffect, useRef } from "react";
import Modal from "./Modal";
import { data } from "../../../data";
// reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case "ADDING_ITEM":
      return {
        ...state,
        people: data,
        isModalOpen: true,
        modalContent: "Hello People!",
      };

    default:
      return state;
  }
};

const defaultState = {
  people: [],
  isModalOpen: false,
  modalContent: "numb",
};

const Index = () => {
  const [name, setName] = useState("");
  const [state, dispatch] = useReducer(reducer, defaultState);

  const refInput = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name) {
      dispatch({ type: "ADDING_ITEM" });
    } else {
    }
  };

  useEffect(() => {
    refInput.current.focus();
  });

  return (
    <>
      {state.isModalOpen && <Modal modalContent={state.modalContent} />}
      <form onSubmit={handleSubmit} className="form">
        <div>
          <input
            ref={refInput}
            type="text"
            value={name}
            onChange={({ target }) => setName(target.value)}
          />
        </div>
        <button type="submit">add</button>
      </form>

      {state.people?.map((person) => (
        <div key={person.id}>
          <p>{person.name}</p>
        </div>
      ))}
    </>
  );
};

export default Index;
