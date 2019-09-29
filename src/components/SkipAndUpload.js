import React from "react";

const App = ({ setState, state }) => {
  const proceed = () => {
    setState({ ...state, step: 2 });
  };

  return (
    <div className="container__btn">
      <button className="btn btn-secondary" onClick={proceed}>
        Skip
      </button>
      <button type="button" className="btn btn-success" onClick={proceed}>
        Upload Photo
      </button>
    </div>
  );
};

export default App;
