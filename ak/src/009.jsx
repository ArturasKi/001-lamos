import './App.css';
import Hello from './components/009/hello';
import Peleda from './components/009/peleda';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Hello spalva='green' bg='yellow'></Hello>
        <Hello spalva='black' bg='white'></Hello>
        <Hello spalva='grey' bg='pink'/>
        <Peleda skaicius={4}></Peleda>
      </header>
    </div>
  );
}

export default App;

// 1. Komponentas - funckija, kuri grazina html. -> function App() {return...}. Funkcijos pav. turi prasideti didziaja raide.
// 2. Props'as - funkcijos kintamasis argumentas.
// 3. State'as - yra vidinis props'as, funkcijoje atsirandantis kintamasis.