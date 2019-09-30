import React from "react";
import htmlToImage from "html-to-image";
import "./share.css"

import request from "superagent";
const CLOUDINARY_UPLOAD_PRESET = "d9lnb7pd";
const CLOUDINARY_UPLOAD_URL =
  "https://api.cloudinary.com/v1_1/defw4xel0/image/upload";
const DEFAULT_IMAGE =
  "https://res.cloudinary.com/defw4xel0/image/upload/v1569806891/feelingnaija/sdosxnpbfp1hgan0c4g9.jpg";
class App extends React.Component {
  state = {
    dataUrl: "",
    loading: false
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
    const node = document.getElementById("profile");

    htmlToImage
      .toPng(node, { quality: 0.1 })
      .then(dataUrl => {
        this.setState({ loading: true });
        request
          .post(CLOUDINARY_UPLOAD_URL)
          .field("upload_preset", CLOUDINARY_UPLOAD_PRESET)
          .field("file", dataUrl)
          .then(resp => {
            this.setState({ dataUrl: resp.body.secure_url });
            this.setState({ loading: false });
            return resp;
          })
          .catch(error => {
            console.log({ error });
            this.setState({ loading: false });
          });

        this.setState({ dataUrl });
      })
      .catch(function(error) {
        console.error("oops, something went wrong!", error);
      });
  };

  handleClick = () => {
    const {state, setState} = this.props;
    setState({...state, step: 3});
  }

  render() {
    const { loading, dataUrl } = this.state;
    const image = this.props.image
      ? this.props.image
          .split("url")[1]
          .split("(")[1]
          .split(")")[0]
      : DEFAULT_IMAGE;

    return (
      <>
        <img
          className="hidden"
          src={image}
          onLoad={this.onProceedToCapture}
          alt="Profile"
        />
        <div className="container__share">
          <button
            type="button"
            className="btn btn-success"
            onClick={loading ? () => {} : this.onShare}
          >
            {loading ? "Processing..." : dataUrl ? "Share" : "Initializing..."}
          </button>
          <span onClick={this.handleClick} className="states__table__link">See Metrics</span>
        </div>
      </>
    );
  }
}

export default App;
