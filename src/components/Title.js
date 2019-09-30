import React from "react";

const App = ({ step }) => {
  const text =
    step === 0
      ? "How do you feel about Nigeria today?"
      : step === 1
      ? "This is how you feel about Nigeria today."
      : step === 2
      ? "Share your feelings with the world because you are not alone!"
      : step === 3
      ? "See how everyone else is feeling today"
      : "";
  return <h1 className="title">{text}</h1>;
};

export default App;
