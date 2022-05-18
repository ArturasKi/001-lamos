import './App.css';
import Hello from './components/009/hello';
import Peleda from './components/009/peleda';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Hello></Hello>
        <Hello/>
        <Peleda></Peleda>
      </header>
    </div>
  );
}

export default App;

// 1. Komponentas - funckija, kuri grazina html. -> function App() {return...}. Funkcijos pav. turi prasideti didziaja raide.
// 2. Propsas
// 3. State'as