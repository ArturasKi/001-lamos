import { useState } from 'react';
import './App.scss';


function App() {

  const [text, setText] = useState(''); //kontroliuojamoji forma: text => input value={text}; setText kontroliuoja text value;

  const [select, setSelect] = useState('');

  const inputText = e => {
    setText(e.target.value); // setText(e.target.value + '*');
  } // kontroliuojamos formos funkcija, kontroliuojamas ivedamas tekstas;

  return (
    <div className="App">
      <header className="App-header">
        <h1>FORMOS</h1>

        <input type='text' onChange={inputText} value={text}></input>
        <select value={select} onChange={e => setSelect(e.target.value)}>
          <option value='one'>Vienas</option>
          <option value='two'>Du</option>
          <option value='three'>Three</option>
          <option value='ten'>Ten</option>
        </select>

      </header>
    </div>
  );
}

export default App;

