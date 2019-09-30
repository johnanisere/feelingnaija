import React from "react";
import "./table.css";
import Title from "./Title";
import Love from "./Love";
import Wink from "./Wink";
import Smirk from "./Smirk";
import RollingEyes from "./RollingEyes";

const App = ({ level1, level2, level3, level4, level5 }) => (
  <div className="card">
    <Title step={3} />
    <table className="table table-bordered">
      <thead>
        <tr>
          <th scope="col " className="border-right-white">
            Lagos
          </th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>
            <Love />
          </th>
          <th>{level1}</th>
        </tr>
        <tr>
          <th>
            <Wink />
          </th>
          <th>{level2}</th>
        </tr>
        <tr>
          <th>
            <Smirk />
          </th>
          <th>{level3}</th>
        </tr>
        <tr>
          <th>
            <RollingEyes />
          </th>
          <th>{level4}</th>
        </tr>
        <tr>
          <th>
            <span role="img" aria-label="Heart eyes" className="emoji__img">
              😡
            </span>
          </th>
          <th>{level5}</th>
        </tr>
      </tbody>
    </table>
  </div>
);
App.defaultProps = {
  level1: "00,000",
  level2: "00,000",
  level3: "00,000",
  level4: "00,000",
  level5: "00,000"
};
export default App;
