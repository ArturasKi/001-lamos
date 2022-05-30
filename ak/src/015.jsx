import { useState } from 'react';
import getId from './functions/getId';
import './App.scss';


function App() {

  const [kv, setKv] = useState([]);

  const addKv = () => {
    setKv(k => [...k, {id: getId('KV'), name: 'Jonas'}]);
}

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={addKv}>Add</button>
        <div className='kvc'>
          {
            kv.map(k => <div className="kv" key={k.id}>{k.id}</div>)
          }
        </div>
      </header>
    </div>
  );
}

export default App;

