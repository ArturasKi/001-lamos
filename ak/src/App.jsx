import './App.scss';
import { useReducer } from 'react';
import colorReducer from './Reducers/colorReducer';
import numberReducer from './Reducers/numberReducer';
import rand from './Functions/rand';


function App() {

  // const [color, setColor] = useState('yellow');
  const [color, dispatchColor] = useReducer(colorReducer, 'yellow');
  const [number, dispatchNumber] = useReducer(numberReducer, '0000');


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

  return (
    <div className="App">
      <header className="App-header">
        <h1 style={{backgroundColor: color}}>Welcome to useReducer()</h1>
        <span> {number} </span>
        <button onClick={goRand}>Random 1</button>
        <button onClick={goRand1}>Random 2</button>
        <div className='kvc'>
          <button onClick={goPink}>Go Pink</button>
          <button onClick={goYellow}>Go Yellow</button>
          <button onClick={changeColor}>Change Color</button>
        </div>
      </header>
    </div>
  )
}

export default App;

// 1000, 9999

