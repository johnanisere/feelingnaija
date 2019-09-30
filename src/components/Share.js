import React from "react";
import htmlToImage from "html-to-image";

class App extends React.Component {
  state = {
    dataUrl: ""
  };

  proceed = () => {
    const { setState, state } = this.props;
    setState({ ...state, step: 3 });
  };

  onShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: "Feeling Naija",
          text: `How do you feel about Naija https://decagon.institute`,
          url: this.state.dataUrl
        })
        .then(() => {
          //   proceed();
        })
        .catch(error => {
          // proceed();
          console.log("Error sharing", error);
        });
    } else {
      //   proceed();
    }
  };

  onProceedToCapture = () => {
    var node = document.getElementById("profile");

    htmlToImage
      .toPng(node)
      .then(dataUrl => {
        console.log({ dataUrl });
        this.setState({ dataUrl });
      })
      .catch(function(error) {
        console.error("oops, something went wrong!", error);
      });
  };

  componentDidMount() {
    this.onProceedToCapture();
  }

  render() {
    return (
      <div className="container__share">
        <button
          type="button"
          className="btn btn-success"
          onClick={this.onShare}
        >
          Share
        </button>
      </div>
    );
  }
}

export default App;
