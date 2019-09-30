import React from "react";
import htmlToImage from "html-to-image";
import "./share.css";

import request from "superagent";
const CLOUDINARY_UPLOAD_PRESET = "d9lnb7pd";
const CLOUDINARY_UPLOAD_URL =
  "https://api.cloudinary.com/v1_1/defw4xel0/image/upload";
const DEFAULT_IMAGE =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASYAAACsCAMAAADhRvHiAAAAQlBMVEX////8/Pz4+Pj09PTx8fH29vb///3p6en///v49/r98rz9/Prq5uHz8OyxsbHt7PDi5uv37vL1+vz9/+zV1Nf7+OH4MhMRAAAC20lEQVR4nO3d3VrbMAyAYZyWjg4YDOj93+pONiDLn53Ilix97wEP0KepLNtymibp3V1gP9cfTm2iMOlb2y96UYRG3jNcHh8XHjE+e4cfQhvKa+fTs9DLNTb80o6gD8ZHOwz3kN3IvrxoB7BFPol7tngVjwJwo4dKV8RdgwAUMVoDjoZltFlmkB8A8EqowveyUPQSp5hwDd5nI01kUdq9g5QmPj3NMbwWPsHB0Gjh1Pj1dLuFQVGAZAHKmITFfmsHgF6ozq4qLz7U2Kg/Jbk/BazBtZscMKWtpPvdT30TDKOBpDSK3qaHbGZyHn6IzxzYKs5J68MTJmRnKYVe7bMbr1UnsGHaL417qteBkSa/wCu6GDJYB7EpLfyONUwtTDAmEEjAgxEPD9oRAEAA7E5pqJP1RG/GZbXrrcYFiEpn7QjqYRIjJkZ+RSQ3BKl7nX5Jnz8gy8aNDPU3nbn9KhHEPgNxovOPgeWrHzBif4IUR1j2BPsJsMDzEYqaZpfjykNOpKuYFsB/huxZEbpcnk1eJRa6S3BM7sTn7TcWWD0WsRaWyZDtBcWs74K9gSPEbcNWRGxzhwRL479NWV1Ij5hrksNmKuk0k+xWZOq0f0sEaOIq5kIZ8gWgGIXDmOgrP7CAqYEC/u4unmP/7YedEMm8/1Ij2cKBvcgcG6ek2D5jZW28ND0BqOVY818GRJAmABZZq03W4lFnKCGGQgEArLrw9d053rUDqEfqonm+CD7LtdY+UuFpnuyq5SFPWQTTRMabWCzX0fM/bv+zUhTfGLg8eGZMjP+1ufjnXwt+xO7vOpaJrnArap/67XlhvbIQrSA5vGDHYZME8Kn/LpejN8zQXlDbTAYO7WyiKu3TSd5YdbIUZslrUk22K63+ib/GeeGuvhhh2igi+eFca7318LVH9+GjNbebdgS2LPRqxSz1OI4WpvJC5RBvYY8pA5DrpH2YV0DdKlXhbTJlVdAfcqQC5niL5u4AAAAASUVORK5CYII=";
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
          text: `How do you feel about Naija? let the world know https://feelingnaija.com/`,
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
    const { state, setState } = this.props;
    setState({ ...state, step: 3 });
  };

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
          <span onClick={this.handleClick} className="states__table__link">
            See Metrics
          </span>
        </div>
      </>
    );
  }
}

export default App;
