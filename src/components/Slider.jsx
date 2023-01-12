import React from 'react';
import './slider.css';

function Slider(props) {
  let {coefficient, question, onChange, min} = props;
  let sliderClass = 'slider';
  if(min === undefined)min = -5;
  else sliderClass += ' zero';
  return (
    <div>
      <div className="question">{question}</div>
      <input
        type="range"
        min={min}
        max={5}
        value={coefficient}
        onChange={onChange}
        className={sliderClass}
      />
      <div className="value">{coefficient}</div>
    </div>
  );
}


export default Slider;