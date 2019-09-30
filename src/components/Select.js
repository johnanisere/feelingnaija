import React from "react";
import "./select.css";
import states from "./constants/nigerianState";

const App = ({ setState, state }) => {
  const onHandleChange = ({ target: { value } }) => {
    setState({ step: 1, state: value });
  };
  return (
    <select className="select" onChange={onHandleChange} value={state}>
      <option>Select your state of origin</option>
      {states.map((state, key) => (
        <option value={state} key={key}>
          {state}
        </option>
      ))}
    </select>
  );
};

export default App;
