import React from "react";
import Select from "./Select";
import "./card.css";

const App = ({ caption, emoji }) => {
  return (
    <div className="card">
      <p className="caption">{caption}</p>
      {emoji}
      <Select />
    </div>
  );
};

export default App;
