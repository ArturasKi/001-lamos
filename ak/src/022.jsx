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

// JSON pagalba is objekto padarome stringa, veikia kaip vertejas tarp skirtingu programavimo kalbu;