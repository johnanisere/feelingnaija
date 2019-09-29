import React from "react";
import Select from "./Select";
import "./card.css";

const App = ({ caption, emoji, setState, state }) => {
  return (
    <div className="card">
      <p className="caption">{caption}</p>
      {emoji}
      <Select setState={setState} state={state} />
    </div>
  );
};

export default App;
