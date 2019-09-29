import React from "react";
import Slider from "react-slick";
import Card from "./Card";
import Angry from "./Angry";

const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};

const state = [
  { caption: "Naija 4 life 😍" },
  { caption: "Naija don cast 😉" },
  { caption: "Naija go dey alright 😏" },
  { caption: "Naija just dey there 🙄" },
  { caption: "Naija dey fall hand", emoji: <Angry /> }
];

const App = () => {
  return (
    <div className="container__card">
      <Slider {...settings}>
        {state.map(({ caption, emoji }, key) => (
          <Card key={key} caption={caption} emoji={emoji} />
        ))}
      </Slider>
      <div className="container__btn">
        <button className="btn btn-secondary">Skip</button>
        <button type="button" class="btn btn-success">
          Upload Photo
        </button>
      </div>
      <div>
        <div className="container__share">
          <button type="button" class="btn btn-success">
            Share
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
