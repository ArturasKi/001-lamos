import './App.scss';
import { useReducer, useState } from 'react';
import randNumberReducer from './Reducers/randNumberReducer';

function App() {

  const [list, dispatchList] = useReducer(randNumberReducer, []);
  const [listNr, setListNr] = useState([]);

  
  const addList = () => {
    setListNr(listNr)
    const action = {
      type: 'add_list',
    }
    dispatchList(action);
  }
  
  const sortList = () => {
    setListNr(listNr)
    const action = {
      type: 'sort_list',
    }
    dispatchList(action);
  }
  
  const daugiauList = () => {
    setListNr(listNr)
    const action = {
      type: 'daugiau_list',
    }
    dispatchList(action);
  }
  
  const maziauList = () => {
    setListNr(listNr)
    const action = {
      type: 'maziau_list',
    }
    dispatchList(action);
  }
  
  const grazintiList = () => {
    setListNr(listNr)
    const action = {
      type: 'grazinti_list',
    }
    dispatchList(action);
  }
  
  const defList = () => {
    setListNr(listNr)
    const action = {
      type: 'def_list',
    }
    dispatchList(action);
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className='kvc'>
          <h1>Reducer</h1>
        </div>
        <div className='kvc'>
          {
            list.map((o, i) => o.show ? <div key={i} className="kv"><i>{o.number}</i></div> : null)
          }
        </div>
        <div className='kvc'>
          <button onClick={addList}>10</button>
          <button onClick={sortList}>Sort</button>
          <button onClick={daugiauList}>5000</button>
          <button onClick={maziauList}>4000</button>
          <button onClick={grazintiList}>Grazinti</button>
          <button onClick={defList}>DefSort</button>
        </div>
      </header>
    </div>
  )
}

export default App;

// 1. (useReducer) Mygtukas, kai jį paspaudžiam atsiranda list'as iš 10 random skaičių. Reducer'io viduje sugeneruojamas masyvas iš 10 skaičių.
// {number: '0025', color: #9494df};

// Du mygtukai: vienas turėtų rodyti didesnius nei 5000, kitas - mažesnius nei 4000.