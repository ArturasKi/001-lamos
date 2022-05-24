import './App.scss';
import Bala from './components/011/Bala';
import Jura from './components/011/Jura';
import Pasaulis from './components/011/Pasaulis';
import Tvenkinys from './components/011/Tvenkinys';
import Vandenynas from './components/011/Vandenynas';

const seaPlaners = [
    {id: 1, type: 'man', name: 'Lina', color: 'blue'},
    {id: 2, type: 'car', name: 'Opel', color: 'red'},
    {id: 3, type: 'animal', name: 'Vilkas', color: 'green'},
    {id: 4, type: 'fish', name: 'Ungurys', color: 'yellow'},
    {id: 5, type: 'man', name: 'Tomas', color: 'green'},
    {id: 6, type: 'animal', name: 'Bebras', color: 'red'},
    {id: 7, type: 'animal', name: 'Barsukas', color: 'green'},
    {id: 8, type: 'car', name: 'MB', color: 'blue'},
    {id: 9, type: 'car', name: 'ZIL', color: 'red'},
    {id: 10, type: 'man', name: 'Teta Toma', color: 'yellow'},
    ];

function App() {
 
    return (
    <div className="App">
      <header className="App-header">
        <span>1.</span>
        <Bala seaPlaners={seaPlaners}></Bala>
        <br/>
        <span>2.</span>
        <Tvenkinys seaPlaners={seaPlaners}></Tvenkinys>
        <br/>
        <span>3.</span>
        <Jura seaPlaners={seaPlaners}></Jura>
        <br/>
        <span>4.</span>
        <Vandenynas seaPlaners={seaPlaners}></Vandenynas>
        <br/>
        <span>5.</span>
        <Pasaulis seaPlaners={seaPlaners}></Pasaulis>
      </header>
    </div>
  );
}

export default App;