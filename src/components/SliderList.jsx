import React, {useState} from 'react';
import Slider from './Slider';
import './sliderlist.css';

function SliderList() {
    const [sliders, setSliders] = useState([
      { coefficient: -2, question: "Procédurale" },
      { coefficient: 5, question: "Orienté Object" },
      { coefficient: -2, question: "Fonctionnelle" },
      { coefficient: 4, question: "Web (HTML, CSS , PHP , CMS)" },
      { coefficient: 3, question: "Cloud (Azure, AWS,GCP)" },
      { coefficient: -5, question: "Logiciels embarqués" },
      { coefficient: 2, question: "Développement mobile" },
      { coefficient: 5, question: "Réalité virtuelle" },
      { coefficient: 3, question: "Matières S5", min:0 },
      { coefficient: -4, question: "LabView" },
      { coefficient: 1, question: "Excel" },
      { coefficient: 4, question: "Blender" },
      { coefficient: 4, question: "Unity" },
      { coefficient: 4, question: "Figma" },
      { coefficient: -5, question: "Cisco Packet Tracer" },
      { coefficient: -5, question: "SolidWorks" },
      { coefficient: -5, question: "AutoCAD" },
      { coefficient: 1, question: "K[art]el" },
      { coefficient: 3, question: "Ensimersion" },
      { coefficient: -4, question: "Ensim'elec" },
      { coefficient: 2, question: "Palette couleur", min:0 },
      { coefficient: 5, question: "Panne ordinnateur", min:0 },
      { coefficient: 2, question: "Système d'exploitation", min:0 },
    ]);
  
    function handleChange(index, event) {
      const newSliders = [...sliders];
      newSliders[index].coefficient = event.target.value;
      setSliders(newSliders);
    }

    function handleCalculate(){
      console.log('Calculating...')
   }

  
    return (
      <div className='sliderlist'>
      <div className='slider-grid'>
        {sliders.map((slider, index) => (
          <Slider 
            key={index}
            question={slider.question}
            coefficient={slider.coefficient}
            min={slider.min}
            onChange={(event) => handleChange(index, event)}
          />
        ))}
      </div>
      <button onClick={handleCalculate} className="calculate-button">Calculate</button>
      </div>
    );
}


export default SliderList;