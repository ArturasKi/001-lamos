import { useEffect, useRef, useState } from 'react';
import './App.scss';
import randColor from './functions/randColor';

function App() {

  const [count, setCount] = useState(null);
  const [kv, setKv] = useState(null);

  const mano = useRef(0)
  const panda = useRef(); // susikuriam ref={panda} div'e;

  const addKv = () => {
    setKv(k => [...k, randColor()]);
}

  const remKv = () => {
    setKv(k => k.slice(1));
}

useEffect(() => {
  setKv(JSON.parse(localStorage.getItem('kv') ?? '[]'));
}, []);

  useEffect(() => {
      if (null === kv) {
          return;
      }
      localStorage.setItem('kv', JSON.stringify(kv));
  }, [kv]);


  useEffect(() => {
      setCount(parseInt(localStorage.getItem('count') ?? 0));
  }, []); // pirma karta uzsikrauna

  useEffect(() => {
      if (null === count) {
        return; // neleidzia count'ui pasileist kai paleidziam puslapi;
      }
      localStorage.setItem('count', count);
  }, [count]); // sitas useEffect kaip stebetojas (count'o);


  const add = () => {
    setCount(c => c + 1);
    mano.current = mano.current + 3;
    console.log(mano.current);
    const p = panda.current; // querySelector stengtis nenaudot react'e
    console.log(p.dataset.panda);
  }

  const addCat = () => {
    localStorage.setItem('katinukas', JSON.stringify(['Murka', 'Pilkis'])); // idedam item i storage; 
  }

  const getCat = () => {
    console.log(JSON.parse(localStorage.getItem('katinukas'))); // paima item, atvaizduoja console;
  }

  const remCat = () => {
    localStorage.removeItem('katinukas'); // isimam is local storage;
  }

    return (
    <div className="App">
      <header className="App-header">
        <h1>useRef LocalStorage {count}</h1>
        <button onClick={add}>+1</button>
        <br/>
        <button onClick={addCat}>Add Cat</button>
        <br/>
        <button onClick={getCat}>Get Cat</button>
        <br/>
        <button onClick={remCat}>Remove Cat</button>
        <div ref={panda} data-panda='miega'></div>
        <br/>
        <button onClick={addKv}>Add</button>
        <button onClick={remKv}>Remove</button>
        <div className='kvc'>
                {
                    kv ? kv.map((c, i) => <div className="kv" key={i} style={{backgroundColor:c}}>{i}</div>) : null
                }
        </div>
      </header>
    </div>
  );
}

export default App;

// useRef - leidzia tureti kintamaji ir daryti su juo ka nori, persikrovus react'ui jis nelieciamas, jo reiksme nekeiciama;

// <p data-[super-duper]=22>
// p.dataset.superDuper - grazins 22;

// LocalStorage - narsykles feature.

// JSON.stringify(['Murka', 'Pilkis']) - ideda stringa;

// JSON.parse(localStorage.getItem('katinukas')) - padaro masyva;

// A = B ?? default; jei B=null, default reiksme priskiriama A.


