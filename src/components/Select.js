import React from "react";
import "./select.css";

const states = [
  "Abia",
  "Adamawa",
  "Anambra",
  "Akwa Ibom",
  "Bauchi",
  "Bayelsa",
  "Benue",
  "Borno",
  "Cross River",
  "Delta",
  "Ebonyi",
  "Enugu",
  "Edo",
  "Ekiti",
  "FCT - Abuja",
  "Gombe",
  "Imo",
  "Jigawa",
  "Kaduna",
  "Kano",
  "Katsina",
  "Kebbi",
  "Kogi",
  "Kwara",
  "Lagos",
  "Nasarawa",
  "Niger",
  "Ogun",
  "Ondo",
  "Osun",
  "Oyo",
  "Plateau",
  "Rivers",
  "Sokoto",
  "Taraba",
  "Yobe",
  "Zamfara"
];

const App = ({ setState, state, number }) => {
  const onHandleChange = ({ target: { value } }) => {
    setState({ step: 1, state: value, number });
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
