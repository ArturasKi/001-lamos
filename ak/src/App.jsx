import { useState } from 'react';
import './App.scss';


function App() {

  const [text, setText] = useState(''); //kontroliuojamoji forma: text => input value={text}; setText kontroliuoja text value;

  const [select, setSelect] = useState('');
  const [cb, setCb] = useState({a: false, b: false, c: true, d:true});

  const inputText = e => {
    setText(e.target.value); // setText(e.target.value + '*');
  } // kontroliuojamos formos funkcija, kontroliuojamas ivedamas tekstas;

  const cbClick = c => {
    setCb(checkBox => ({...checkBox, [c] : !checkBox[c]})); // () funkcijos viduje {} objektas, uz : overwrite'inama savybe;
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>FORMOS</h1>
        <fieldset>
          <legend>INPUT</legend>
        <input type='text' onChange={inputText} value={text}></input>
        </fieldset>
        <fieldset>
          <legend>SELECT</legend>
          <select value={select} onChange={e => setSelect(e.target.value)}>
          <option value='one'>Vienas</option>
          <option value='two'>Du</option>
          <option value='three'>Three</option>
          <option value='ten'>Ten</option>
          </select>
        </fieldset>
        <fieldset>
          <legend>CHECKBOX</legend>
          A<input type='checkbox' onChange={() => cbClick('a')} checked={cb.a}></input>
          B<input type='checkbox' onChange={() => cbClick('b')} checked={cb.b}></input>
          C<input type='checkbox' onChange={() => cbClick('c')} checked={cb.c}></input>
          D<input type='checkbox' onChange={() => cbClick('d')} checked={cb.d}></input>
        </fieldset>


      </header>
    </div>
  );
}

export default App;

