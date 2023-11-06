
import { useState } from "react";

function InputButton() {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleButtonClick = () => {
    setOutputText(inputText);
    console.log(inputText);
  };

  return (
    <div>
      <input type="text" value={inputText} onChange={handleInputChange} />
      <button onClick={handleButtonClick}>Afișează în consolă</button>
      <div>{outputText}</div>
    </div>
  );
}

export default InputButton;
