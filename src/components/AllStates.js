import React from "react";
import db from "../utils/config";
import "./states.css";

import getHighest from "../helper/getHighest";

class App extends React.Component {

  state = {states:{}};
  readData = () => {
    db.ref("/states")
    .once("value")
    .then(snapshot => {
      const states = snapshot.val() ? snapshot.val() : "fetching";
      this.setState({states});
    });
  }

  componentDidMount() {
    this.readData();
  }

  handleState = () => {
    let { state, setState } = this.props;
    setState({...state, step: 4});
  }
  
  render() {
    const allStates = this.state.states;
    return (
      <div className="card map__card">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">State</th>
              <th scope="col">Highest Feeling</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(allStates).map((state, key) => (
              <tr key={key} onClick={this.handleState}>
                <th>{state}</th>
                <th>{getHighest(allStates[state])}</th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
