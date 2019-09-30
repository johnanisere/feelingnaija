import React from "react";
import "./table.css";
import Title from "./Title";
import Love from "./Love";
import Wink from "./Wink";
import Smirk from "./Smirk";
import RollingEyes from "./RollingEyes";
import Angry from "./Angry";

const App = ({ state }) => {
  const stateName = Object.keys(state)[0];
  return (
    <div className="card">
      <Title step={3} />
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col " className="border-right-white">
              {stateName}
            </th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>
              <Love />
            </th>
            <th>{state[stateName].level1}</th>
          </tr>
          <tr>
            <th>
              <Wink />
            </th>
            <th>{state[stateName].level2}</th>
          </tr>
          <tr>
            <th>
              <Smirk />
            </th>
            <th>{state[stateName].level3}</th>
          </tr>
          <tr>
            <th>
              <RollingEyes />
            </th>
            <th>{state[stateName].level4}</th>
          </tr>
          <tr>
            <th>
              <Angry />
            </th>
            <th>{state[stateName].level5}</th>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default App;
