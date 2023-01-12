import React, {useState, useEffect} from 'react';
import Papa from 'papaparse';
import Slider from './Slider';
import './sliderlist.css';

function SliderList() {
    const [sliders, setSliders] = useState([
      { coefficient: -2, question: "Programmation Procédurale" },
      { coefficient: 5, question: "Programmation Orienté Object" },
      { coefficient: -2, question: "Programmation Fonctionnelle" },
      { coefficient: 4, question: "Développement WEB" },
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
      { coefficient: 5, question: "Panne ordinateur", min:0 },
      { coefficient: 2, question: "Système d'exploitation", min:0 },
    ]);

    const [csvData, setCsvData] = useState("");
    

    
    function handleChange(index, event) {
      const newSliders = [...sliders];
      newSliders[index].coefficient = event.target.value;
      setSliders(newSliders);
    }

    async function readCsv(pathToCsv){
      const response = await fetch('CorpusFinal.csv');
      const reader = response.body.getReader()
      const result = await reader.read() // raw array
      const decoder = new TextDecoder('utf-8')
      const csv = decoder.decode(result.value) // the csv text
      const results = Papa.parse(csv, { header: true, dynamicTyping:true }) // object with { data, errors, meta }
      return results.data // array of objects
    }

    async function writeToCsv(output){
      const csv = Papa.unparse(output);
      setCsvData(csv);
    }

    function handleDownload(){
      setCsvData("");
    }

    async function handleCalculate(){
      console.log('Calculating...');
      const rows = await readCsv('CorpusFinal.csv');
      const output = [];

      for(const row of rows){
        let total = 0;
        let index = 0;  
        const keys = Object.keys(row);
          for(const key of keys.slice(1, keys.length)){
            total += row[key] * sliders[index++].coefficient;
          }
          console.log(`Total: ${total} for ${row[keys[0]]}`)
          if(total > 0)total="IPS"
          else if (total === 0)total="Indéterminé"
          else total="ASTRE"

          output.push({identifiant: row[keys[0]], prédition: total});    
      }
      writeToCsv(output);
    
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
      {csvData && 
        <a className='download-link' href={`data:text/csv;charset=utf-8,${csvData}`} download="result.csv" onClick={handleDownload}>
          Download Result
        </a>
      }
      </div>
    );
}


export default SliderList;