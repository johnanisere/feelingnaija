import React, { useState } from "react";
import Slider from "react-slick";
import Card from "./Card";
import Angry from "./Angry";
import SkipAndUpload from "./SkipAndUpload";
import Share from "./Share";

const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};

const captions = [
  { caption: "Naija 4 life 😍" },
  { caption: "Naija don cast 😉" },
  { caption: "Naija go dey alright 😏" },
  { caption: "Naija just dey there 🙄" },
  { caption: "Naija dey fall hand", emoji: <Angry /> }
];

const App = () => {
  const [state, setState] = useState({
    step: 0,
    state: ""
  });
  const { step } = state;

  return (
    <div className="container__card">
      <Slider {...settings}>
        {captions.map(({ caption, emoji }, key) => (
          <Card
            key={key}
            state={state.state}
            emoji={emoji}
            caption={caption}
            setState={setState}
          />
        ))}
      </Slider>
      {step === 1 && <SkipAndUpload setState={setState} />}
      {step === 2 && <Share setState={setState} />}
    </div>
  );
};

export default App;
