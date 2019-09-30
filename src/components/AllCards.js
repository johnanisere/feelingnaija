import React, { useState } from "react";
import Slider from "react-slick";
import Card from "./Card";
import FinalCard from "./FinalCard";
import Table from "./Table";
import AllStates from "./AllStates";

import Share from "./Share";
import Title from "./Title";
import SkipAndUpload from "./SkipAndUpload";
import captions from "./constants/captions";
import settings from "./constants/settings";

const App = () => {
  const [state, setState] = useState({
    step: 0,
    state: "",
    style: {},
    number: 0
  });
  const { step, style } = state;
  return (
    <div className="container__card">
      <Title step={step} />
      {step < 2 && (
        <Slider {...settings}>
          {captions.map(({ caption, emoji }, key) => (
            <Card
              key={key}
              number={key}
              styles={style}
              state={state.state}
              emoji={emoji}
              caption={caption}
              setState={setState}
            />
          ))}
        </Slider>
      )}
      {step === 1 && <SkipAndUpload setState={setState}  state={state}/>}
      {step === 2 && (
        <>
          <FinalCard {...state} />
          <Share state={state} setState={setState} />
        </>
      )}
      {step === 3 && <AllStates state={state} setState={setState} />}
      {step === 4 && <Table />}
    </div>
  );
};

export default App;
