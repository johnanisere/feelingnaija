import React, { useState } from "react";
import Slider from "react-slick";
import Card from "./Card";

import SkipAndUpload from "./SkipAndUpload";
import Share from "./Share";
import Title from "./Title";
import captions from "./constants/captions";
import settings from "./constants/settings";

const App = () => {
  const [state, setState] = useState({
    step: 0,
    state: "",
    style: {}
  });
  const { step, style } = state;

  return (
    <div className="container__card">
      <Title step={step} />
      <Slider {...settings}>
        {captions.map(({ caption, emoji }, key) => (
          <Card
            key={key}
            styles={style}
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
