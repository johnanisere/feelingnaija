import React from "react";
import db from "../utils/config";

class App extends React.Component {
  state = {};
  readData = () => {
    const { state } = this.props;
    db.ref("/states/" + state.state)
      .once("value")
      .then(snapshot => {
        const level = snapshot.val() ? snapshot.val() : "fetching";

        this.setState(level);
      });
  };

  proceed = ({ cb }) => {
    const { state, setState } = this.props;
    const level = `level${state.number + 1}`;
    const newLevel = this.state[level] + 1;
    db.ref("/states/" + state.state)
      .set({ ...this.state, [level]: newLevel })
      .then(() => {
        cb ? cb() : setState({ ...state, step: 2 });
      })
      .catch(error => console.log({ error }));
  };

  componentDidMount() {
    this.readData();
  }
  render() {
    const { setState, state } = this.props;

    const myWidget = window.cloudinary.createUploadWidget(
      {
        cloudName: "defw4xel0",
        uploadPreset: "d9lnb7pd",
        sources: ["url", "camera", "local"],
        multiple: false,
        cropping: true,
        maxFileSize: 3500000,
        defaultSource: "local",
        thumbnailTransformation: [{ width: 300, height: 300, crop: "fill" }]
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          const cb = () =>
            setState({
              ...state,
              step: 2,
              style: { backgroundImage: `url(${result.info.thumbnail_url})` }
            });
          this.proceed({ cb });
        }
      }
    );

    const onOpen = e => {
      e.persist();
      myWidget.open();
    };

    return (
      <div className="container__btn">
        <button className="btn btn-secondary" onClick={this.proceed}>
          Skip
        </button>
        <button type="button" className="btn btn-success" onClick={onOpen}>
          Upload Photo
        </button>
      </div>
    );
  }
}

export default App;
