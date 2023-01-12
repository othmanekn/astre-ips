import React, { useState } from 'react';
import './slider.css';

function Slider(props) {
  let {coefficient, question, onChange, min} = props;
  if(min === undefined) min = -5;
  return (
    <div>
      <div className="question">{question}</div>
      <input
        type="range"
        min={min}
        max={5}
        value={coefficient}
        onChange={onChange}
        className="slider"
      />
      <div className="value">{coefficient}</div>
    </div>
  );
}


export default Slider;