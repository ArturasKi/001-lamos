import { useEffect, useState } from 'react';
import './App.scss';
import Books from './components/011/Books';
import axios from 'axios';
import User from './components/011/User';

function App() {

  const [count, setCount] = useState(1);
  const [books, setBooks] = useState([]); // pradinis state tuscias masyvas;
  const [user, setUser] = useState([]);

  useEffect(() => {
    console.log('YES'); // REDY!
    axios.get('http://in3.dev/knygos/')
    .then(res => {
        console.log(res.data);
        setBooks(res.data)
    })
}, []);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users/')
    .then(res => {
        console.log(res.data);
        setUser(res.data)
    })
}, []);
 
    return (
    <div className="App">
      <header className="App-header">
        <h1>{count}</h1>
        <button onClick={() => setCount(count + 1)}>+1</button>
        <br/>
        <button onClick={() => setCount(count - 1)}>-1</button>
        <br/>
        <Books books={books}></Books>
        <User user={user}></User>
      </header>
    </div>
  );
}

export default App;


// JSON pagalba is objekto padarome stringa, veikia kaip vertejas tarp skirtingu programavimo kalbu;