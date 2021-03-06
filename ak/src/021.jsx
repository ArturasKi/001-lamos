import './App.scss';
import { useEffect, useReducer, useState, useRef } from 'react';
import randNumberReducer from './Reducers/randNumberReducer';

function App() {

  const [list, dispatchList] = useReducer(randNumberReducer, []);
  const [delKv, setDelKv] = useState('');
  const [range, setRange] = useState('0');
  const doRange = useRef(true); // range const priskirta true, gali veikt;

  
  const addList = () => {

    const action = {
      type: 'add_list',
    }
    dispatchList(action);
  }
  
  const sortList = () => {

    const action = {
      type: 'sort_list',
    }
    dispatchList(action);
  }
  
  const daugiauList = () => {

    const action = {
      type: 'daugiau_list',
    }
    dispatchList(action);
  }
  
  const maziauList = () => {

    const action = {
      type: 'maziau_list',
    }
    dispatchList(action);
  }
  
  const grazintiList = () => {

    const action = {
      type: 'grazinti_list',
    }
    dispatchList(action);
  }
  
  const defList = () => {

    const action = {
      type: 'def_list',
    }
    dispatchList(action);
  }
  
  const addKv = () => {

    const action = {
      type: 'addkv_list',
    }
    dispatchList(action);
  }
  
  const opa = e => {

    const action = {
      type: 'removekv',
      payload: e //parodo nr kuri paslepsim
    }
    dispatchList(action);
  }
  
  const trinti = () => {
    // setDelKv(delKv);
    const action = {
      type: 'removekv',
      payload: delKv
    }
    setDelKv(''); // grazina tuscia inputa po ivestos reiksmes;
    dispatchList(action);
  }
  
  useEffect(() => {
    if (!doRange.current) {
        return;
    }
    doRange.current = false;
    setTimeout(() => doRange.current = true, 20);

    const action = {
        type: 'range',
        payload: range.padStart(4, 0)
    }
    dispatchList(action);
}, [range])


  return (
    <div className="App">
      <header className="App-header">
        <div className='kvc'>
          <h1>Reducer</h1>
        </div>
        <div className='kvc'>
          {
            list.map((o, i) => o.show ? <div key={i} className="kv" style={{backgroundColor: o.color}} onClick={() => opa(o.number)}><i>{o.number}</i></div> : null)
          }
        </div>
        <div className='kvc'>
          <button onClick={addList}>10</button>
          <button onClick={sortList}>Sort</button>
          <button onClick={daugiauList}>5000</button>
          <button onClick={maziauList}>4000</button>
          <button onClick={grazintiList}>Grazinti</button>
          <button onClick={defList}>DefSort</button>
          <button onClick={addKv}>Add</button>
        </div>
        <div className='kvc'>
          <input type='number' onChange={e => setDelKv(e.target.value)} value={delKv}></input>
          <button onClick={trinti}>Delete kv</button>
        </div>
        <div className='kvc'>
          <h1>Kvadrat?? filtracija {range.padStart(4, 0)}</h1>
        </div>
        <div className='kvc'>
          <input type="range" min="0" max="9999" onChange={e => setRange(e.target.value)} value={range}></input>
        </div>
      </header>
    </div>
  )
}

export default App;

// 1. (useReducer) Mygtukas, kai j?? paspaud??iam atsiranda list'as i?? 10 random skai??i??. Reducer'io viduje sugeneruojamas masyvas i?? 10 skai??i??.
// {number: '0025', color: #9494df};

// Du mygtukai: vienas tur??t?? rodyti didesnius nei 5000, kitas - ma??esnius nei 4000.

// ND
// 1) Paspaudus kv jis dingsta, paspaudus reset filter (gr????inti) jis v??l atsiranda.
// 2) Padaryti input laukel??, ?? kur?? ??ra??ius kv skai??i?? ir paspaudus dar vien?? sukurt?? mygtuk??, kv su tuo skai??ium i??nyks. (useState)
// 3) Padaryti gyv?? filtracij??. Prid??ti input tipo range nuo 0 iki 9999. Slankiojant range turi i?? karto filtruotis kvadratukai. Range rodo maksimal?? rodom?? kv skai??i??. (useState)