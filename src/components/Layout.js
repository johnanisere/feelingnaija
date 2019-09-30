import React from "react";

const App = ({ children }) => (
  <div className="container-fluid parent">
    <div className="container">{children}</div>
  </div>
);

export default App;
