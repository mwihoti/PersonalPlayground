import React, { useState } from 'react';
import { TabLaundry } from './Header';

function HealthBot() {
  const [symptoms, setSymptoms] = useState('');
  const [result, setResult] = useState('');

  const handleInputChange = (e) => {
    setSymptoms(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate bot response based on symptoms
    const disease = suggestDisease(symptoms);
    setResult(disease);
  };

  const suggestDisease = (symptoms) => {
    // Split the input string into an array of individual symptoms
    const symptomList = symptoms.toLowerCase().split(/[ ,]+/);
    let suggestedDiseases = [];
  
    // Map each symptom to its corresponding disease
    symptomList.forEach((symptom) => {
      switch (symptom) {
        case 'fever':
          suggestedDiseases.push('flu');
          break;
        case 'stomach':
          suggestedDiseases.push('food poisoning');
          break;
          case 'headache':
            suggestedDiseases.push('Lack of rest'); 
            break;
            case 'fever':
              suggestedDiseases.push('flu');
              break;
        // Add more cases as needed
        default:
          break;
      }
    });
  
    // Combine suggested diseases into a single message
    let resultMessage;
    if (suggestedDiseases.length > 0) {
      resultMessage = `Based on your symptoms, you might be suffering from ${suggestedDiseases.join(' or ')}.`;
    } else {
      resultMessage = 'Sorry, I couldn\'t determine the disease based on the provided symptoms.';
    }
  
    return resultMessage;
  };
  return (
    <div className=''>
        <TabLaundry  />
        <div className='border border-black p-2 bg-black text-white'>
            <h1>Doctor Bot</h1>
        </div>
      <h1 className='p-2'>Talk to Dr Bot. Type your Symptoms and know what you are suffering from</h1>
      <form className='m-4 border' onSubmit={handleSubmit}>
        <div className='m-2'>
          <label>Patient Symptoms</label><br />
          <input
            type='text'
            placeholder='Your symptoms'
            className='h-20 '
            value={symptoms}
            onChange={handleInputChange}
          />
        </div>
        <button type='submit' className='bg-blue-700 border rounded p-2'>
          Enter
        </button>
      </form>
      <h1 className='text-sm'>
        Hello! I am Doctor Bot. Thanks for contacting.
      </h1>
      <div>
        <textarea
          placeholder='You might be suffering from...'
          className='rounded h-40'
          value={result}
          readOnly
        />
      </div>
    </div>
  );
}

export default HealthBot;
