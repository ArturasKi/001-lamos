import './App.scss';
import { useRef, useState } from 'react';

function App() {

  const [count, setCount] = useState(0);

  const mano = useRef(0)
  const panda = useRef(); // susikuriam ref={panda} div'e;

  const add = () => {
    setCount(c => c + 1);
    mano.current = mano.current + 3;
    console.log(mano.current);
    const p = panda.current; // querySelector stengtis nenaudot react'e
    console.log(p.dataset.panda);
  }

    return (
    <div className="App">
      <header className="App-header">
        <h1>useRef LocalStorage {count}</h1>
        <button onClick={add}>+1</button>
        <div ref={panda} data-panda='miega'></div>
      </header>
    </div>
  );
}

export default App;

// useRef - leidzia tureti kintamaji ir daryti su juo ka nori, persikrovus react'ui jis nelieciamas, jo reiksme nekeiciama;

// <p data-[super-duper]=22>
// p.dataset.superDuper - grazins 22;