import { useState } from 'react';
import './App.scss';
import randColor from './functions/randColor';
import { v4 as uuidv4 } from 'uuid'; // standartinis random string'as;


function App() {

  const [avys, setAvys] = useState([]);

  const newA = () => {
    const avis = {id: uuidv4(), color: randColor(), where: 'ganykla'};
    setAvys(a => [...a, avis]);
  }

  const go = id => {
    setAvys (a => {
      const avis = a.filter(av => av.id === id)[0];
      avis.where = 'kirpykla';
      const kitos = a.filter(av => av.id !== id);
      return [...kitos, avis];
    }) // avis pridedama i gala;


    // setAvys(a => a.map(avis => avis.id === id ? {...avis, where: 'kirpykla'} : avis)); // nekeicia avies vietos, pereina i ta pacia vieta is kurios paimama;
  }
 
  return (
    <div className="App">
      <header className="App-header">
        <div className='kvc' style={{background: 'blue'}}>
          {
            avys.filter(a => a.where === 'kirpykla').map(a => <div onClick={() => go(a.id)}  className="kv" key={a.id} style={{background: a.color}}>{a.id}</div>)
          }
        </div>
        <h1>AVYS</h1>
        <div className='kvc' style={{background: 'blue'}}>
          {
            avys.filter(a => a.where === 'ganykla').map(a => <div onClick={() => go(a.id)} className="kv" key={a.id} style={{background: a.color}}>{a.id}</div>)
          }
        </div>
        <button onClick={newA}>Naujas Avinas</button>
      </header>
    </div>
  );
}

export default App;

