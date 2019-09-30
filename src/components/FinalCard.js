import React from "react";
import captions from "./constants/captions";
import "./card.css";
import "./final.css";

const App = ({ number, state, style }) => {
  const { caption, static: emoji } = captions[number];

  return (
    <div
      id="profile"
      className="card final__card"
      style={{
        ...style
      }}
    >
      <div className="content">
        <div className="caption__container">
          <p className="caption">{caption}</p>
          <div className="emoji__wrapper">{emoji}</div>
        </div>
        <p className="state">{state}</p>
        <p className="site__url">www.feelingnaija.com</p>
      </div>
    </div>
  );
};

export default App;
