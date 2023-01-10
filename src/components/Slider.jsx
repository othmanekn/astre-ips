import React, { useState } from 'react';
import './slider.css';

function Slider(props) {
  const {coefficient, question, onChange} = props;

  return (
    <div>
      <div className="question">{question}</div>
      <input
        type="range"
        min={-5}
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