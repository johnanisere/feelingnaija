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
          text: `How do you feel about Naija https://decagon.institute`,
          url:
            "https://res.cloudinary.com/defw4xel0/image/upload/v1569806891/feelingnaija/sdosxnpbfp1hgan0c4g9.jpg"
        })
        .then(() => {
          proceed();
        })
        .catch(error => {
          // proceed();
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
