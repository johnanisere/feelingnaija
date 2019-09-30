import React from "react";

const App = ({ setState, state }) => {
  const proceed = () => {
    console.log({state})
    setState({ ...state, step: 2, });
  };
  const myWidget = window.cloudinary.createUploadWidget(
    {
      cloudName: "defw4xel0",
      uploadPreset: "d9lnb7pd",
      sources: ["url", "camera", "local"],
      multiple: false,
      cropping: true,
      maxFileSize: 3500000,
      defaultSource: "local",
      thumbnailTransformation: [{ width: 150, height: 150, crop: "fill" }]
    },
    (error, result) => {
      if (!error && result && result.event === "success") {
        setState({
          ...state,
          step: 2,
          style: { backgroundImage: `url(${result.info.secure_url})` }
        });
      }
    }
  );

  const onOpen = e => {
    e.persist();
    myWidget.open();
  };
  return (
    <div className="container__btn">
      <button className="btn btn-secondary" onClick={proceed}>
        Skip
      </button>
      <button type="button" className="btn btn-success" onClick={onOpen}>
        Upload Photo
      </button>
    </div>
  );
};

export default App;
