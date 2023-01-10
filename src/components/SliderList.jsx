import React, {useState} from 'react';
import Slider from './Slider';
import './sliderlist.css';

function SliderList() {
    const [sliders, setSliders] = useState([
      { coefficient: 1, question: "How happy are you?" },
      { coefficient: 2, question: "How confident are you?" },
      { coefficient: 3, question: "How anxious are you?" },
    ]);
  
    function handleChange(index, event) {
      const newSliders = [...sliders];
      newSliders[index].value = event.target.value;
      setSliders(newSliders);
    }

    
  
    return (
      <div className='sliderlist'>
        {sliders.map((slider, index) => (
          <Slider 
            key={index}
            question={slider.question}
            coefficient={slider.coefficient}
            onChange={(event) => handleChange(index, event)}
          />
        ))}
      </div>
    );
}


export default SliderList;