import React, { useState } from 'react';
import data from './data';
import './css/appStyle.css';
const App = () => {

  const [text, setText] = useState(data);
  const [index, setIndex] = useState(0);
  const [inputValue, setInputValue] = useState(1);
  const [cuurentTextList, setCurrentTextList] = useState([])
  console.log(text);

  const handleInputValue = (event) => {
   const newIndex = event.target.value
   setInputValue(newIndex)
   setIndex(newIndex - 1)
  }

  console.log(index);
  const changeText = () => {
    const newText = text.slice(0, index + 1);
    // const newText = text[index];
    setCurrentTextList(newText);
  }

  return (
    <div className='mainDiv'>
      <h2>TRIED OF BORING LOREM IPSUM?</h2>
      <div className='chooseDiv'>
        <h3>Paragraphs:</h3>
        <div className='inputButton'>
          <input type='number' value={inputValue} min={1} max={8} step={1} onChange={handleInputValue}  />
          <button onClick={changeText} className='chooseDivButton'>Generate</button>
        </div>
      </div>
      <div className='paragraphs'>
          {cuurentTextList.map((item) => {
            return(<div className='paragraph-item'>
              <p>{item}</p>
            </div>)
          })}
      </div>
    </div>
  )
}

export default App
