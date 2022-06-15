import { useState } from "react";
import { useEffect } from "react";
import { useReducer } from "react";
import "./App.scss";
import ld from "./Reducers/ld";

const masyvas = [
  { id: 3, name: "Peter", bid: 487.77, date: "2022-06-01T10:37" },

  { id: 7, name: "Mary", bid: 125.33, date: "2022-06-01T11:37" },

  { id: 8, name: "Ąžuolas", bid: 78.25, date: "2022-06-01T09:22" },

  { id: 9, name: "Petras Dainorius", bid: 1087.77, date: "2022-06-01T08:13" },
];

function App() {

  const [list, dispatchList] = useReducer(ld, masyvas);
  const [select, setSelect] = useState('bid_asc');

  useEffect(() => {
    dispatchList({type: select}); // dispatchina selectu numatyta action objekta (action.type);
  }, [select]); // useEffect suveikia, kai pasikeicia [select];

  return (
    <div className="App">
      <header className="App-header">
        <h1>SORT WITH REDUCER</h1>
        <div className="kvc1">
          <select value={select} onChange={e => setSelect(e.target.value)}>
            <option value="date_asc">DATE ASC</option>
            <option value="date_desc">DATE DESC</option>
            <option value="bid_asc">BID ASC</option>
            <option value="bid_desc">BID DESC</option>
            <option value="name_asc">NAME ASC</option>
            <option value="name_desc">NAME DESC</option>
            <option value="name_asc_local">NAME ASC LOCAL</option>
            <option value="random">RANDOM</option>
          </select>
        </div>
        <div>
          {list.map((bider) => (
            <div className="kvc1" key={bider.id}>
              <span>ID: {bider.id}</span>
              <span> Name: {bider.name}</span>
              <span> Bid: {bider.bid}</span>
              <span> Date: {bider.date}</span>
            </div>
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
