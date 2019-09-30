import React from "react";

const App = ({ setState, state }) => {
  const proceed = () => {
    setState({ ...state, step: 3 });
  };

  const onShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: "Feeling Naija",
          text: `How do you feel about Naija`,
          url: "https://decagon.institute"
        })
        .then(() => {
          proceed();
        })
        .catch(error => {
          proceed();
          console.log("Error sharing", error);
        });
    } else {
      proceed();
    }
  };

  return (
    <div className="container__share">
      <button type="button" className="btn btn-success" onClick={onShare}>
        Share
      </button>
    </div>
  );
};

export default App;
