import { useState } from 'react';
import './App.scss';

function App() {
 
  const [count, setCount] = useState(1);

  const plus = () => {
    setCount(count + 1);
  }

  const minus = () => {
    setCount(count - 1);
  }

    return (
    <div className="App">
      <header className="App-header">
        <h1>{count}</h1>
        <button onClick={plus}>+1</button>
        <br/>
        <button onClick={minus}>-1</button>
      </header>
    </div>
  );
}

export default App;