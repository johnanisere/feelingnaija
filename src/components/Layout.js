import React from "react";

const App = ({ children }) => (
  <div className="container-fluid parent">
    <div className="container overflow-auto d-flex flex-column justify-content-between ">
      {children}
      <footer className="text-center mb-4">
        Powered by{" "}
        <a
          href="https://decagon.institute"
          rel="noopener noreferrer"
          target="_blank"
        >
          decagon
        </a>{" "}
      </footer>
    </div>
  </div>
);

export default App;
