import React from "react";
import "./states.css";

const App = () => {
  return (
    <div className="card map__card">
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">
              State
            </th>
            <th scope="col">Highest Feeling</th>
          </tr>
        </thead>
        <tbody>
          <tr onClick={() => console.log('clicked!')}>
            <th>Lagos</th>
            <th>Love</th>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default App;
