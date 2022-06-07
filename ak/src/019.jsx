import './App.scss';
import Counter from './components/019/Counter';


function App() {

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Class</h1>
        <Counter when={'today'}></Counter>
      </header>
    </div>
  )
}

export default App;

