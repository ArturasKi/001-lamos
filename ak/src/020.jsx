import './App.scss';
import { useReducer, useState } from 'react';
import colorReducer from './Reducers/colorReducer';
import numberReducer from './Reducers/numberReducer';
import rand from './Functions/rand';
import kvReducer from './Reducers/kvReducer';


function App() {

  // const [color, setColor] = useState('yellow');
  const [color, dispatchColor] = useReducer(colorReducer, 'yellow');
  const [number, dispatchNumber] = useReducer(numberReducer, '0000');
  const [kvadratas, dispatchKvadratas] = useReducer(kvReducer, []);
  const [formColor, setFormColor] = useState('#484121');
  const [tekstas, setTekstas] = useState('');
  const [h2, setH2] = useState('');
  // const [kv, setKv] = useState([]);


    const goPink = () => {
      const action = {
        type: 'go_pink'
      }
      dispatchColor(action);
  }

    const goYellow = () => {
      const action = {
        type: 'go_yellow'
      }
      dispatchColor(action);
  }

    const changeColor = () => {
      const action = {
        type: 'go_change'
      }
      dispatchColor(action);
  }

  const goRand = () => {
    const action = {
      type: 'go_rand'
    }
    dispatchNumber(action); // paspaudus mygtuką, išsiunčiamas action į funkciją;
  }

  const goRand1 = () => {
    const action = {
      type: 'go_rand1',
      payload: rand(0, 100)
    }
    dispatchNumber(action);
  }

  const background = () => {
    const action = {
      type: 'change_background',
      payload: formColor
    }
    dispatchColor(action);
}

  const textClick = () => {

    setH2(tekstas);
    const action = {
      type: 'change_text',
      payload: tekstas
    }
    dispatchColor(action);
}

const addKv = () => {
  const action = {
    type: 'add_kv',
  }
  dispatchKvadratas(action);
}

  return (
    <div className="App">
      <header className="App-header">
        <h2>{h2}</h2>
        <h1 style={{backgroundColor: color}}>Welcome to useReducer()</h1>
        <span> {number} </span>
        <button onClick={goRand}>Random 1</button>
        <button onClick={goRand1}>Random 2</button>
        <div className='kvc'>
          <button onClick={goPink}>Go Pink</button>
          <button onClick={goYellow}>Go Yellow</button>
          <button onClick={changeColor}>Change Color</button>
          <br/>
          <input onChange={e => setFormColor(e.target.value)} type='color' value={formColor}></input>
          <button onClick={background}>Change background</button>
          <input type='text' onChange={e => setTekstas(e.target.value)} value={tekstas}></input>
          <button onClick={textClick}></button>
        </div>
        <button onClick={addKv}>Add []</button>
        <div className='kvc'>
          {
            kvadratas.map((c, i) => <div className='kv' key={i} style={{backgroundColor: c}}>{i}</div>)
          }
        </div>
      </header>
    </div>
  )
}

export default App;

// 1000, 9999

// Sukurti color input'ą. Kontroliuoti su useState
// Mygtukas, paspaudus pasikeičia background color.
// Input color perduodamas per payload'ą;

// Input kontroliuojamas is state -> payload -> reducer.