import React from "react";
import Select from "./Select";
import "./card.css";

const App = ({ caption, emoji, setState, state, styles }) => {
  return (
    <div
      className="card"
      style={{
        ...styles
      }}
    >
      <p className="caption">{caption}</p>
      {emoji}
      <Select setState={setState} state={state} />
    </div>
  );
};

export default App;
