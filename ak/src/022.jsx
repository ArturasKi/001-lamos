import { useEffect, useReducer } from 'react';
import './App.scss';
import axios from 'axios';
import bookReducer from './Reducers/bookReducer';

// BOOKS

function App() {

  const [books, dispatchBooks] = useReducer(bookReducer, []);
  // const [books, setBooks] = useState([]); // pradinis state tuscias masyvas;

  useEffect(() => {
    axios.get('https://in3.dev/knygos/')
    .then(res => {
      const action = {
        payload: res.data,
        type: 'book'
      }
      console.log(action)
      dispatchBooks(action);
    })
  }, []);

  const sortAbc = () => {

    const action = {
      type: 'sort_abc',
    }
    dispatchBooks(action);
  }

  const sortDef = () => {

    const action = {
      type: 'sort_def',
    }
    dispatchBooks(action);
  }

    return (
    <div className="App">
      <header className="App-header">
        <h1>PAVADINIMAI</h1>
        <div className='kvc'>
          {
            books.map(b => <div key={b.id}>{b.title} {b.price} EUR</div>)
          }
        </div>
        <div className='kvc'>
          <button onClick={sortAbc}>Sort AZ</button>
          <button onClick={sortDef}>Reset sort</button>
        </div>
      </header>
    </div>
  );
}

export default App;


// sort pagal abc;
// sort pagal tokia tvarka, kokia buvo;

//1. Mygtukas filtrui rodyti brangesnes nei 13eur knygas;
//2. Mygtukas filtro reset'ui;
//3. Knygu 'reload' mygtukas (is naujo atsiuncia knygas is serverio); -> useEffect
//4. Salia knygos atspausdinti jos kategorija; https://in3.dev/knygos/types/