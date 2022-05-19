import { useState } from 'react';
import './App.css';
import randColor from './functions/randColor';

const katinukai = ['Pilkis', 'Murkis', 'Rainis'];

function App() {

    const [spalva, setSpalva] = useState('yellow');
    const [skaicius, setSkaicius] = useState(1);
    const [kv, setKv] = useState([]);

    // const mygtukas = () => {
    //     console.log('Aš gražus mygtukas');
    //     return mygtukoBrolis;
    // }

    // const mygtukoBrolis = () => {
    //     console.log('Aš gražus mygtuko brolis');
    // }

    const beArgumentu = () => {
        console.log('beArgumentu');
    }

    const suArgumentu = ka => {
        console.log('suArgumentu: ' + ka);
    }

    const keistiSpalva = () => {

        // const nauja = spalva === 'yellow' ? 'pink' : 'yellow'; BLOGAI!!!

        setSpalva(old => old === 'yellow' ? 'pink' : 'yellow');

        // console.log(nauja);
        // console.log(spalva);
    }

    
    const skaiciuotuvas = ka => setSkaicius(s => s + ka);

    const addKv = () => {
        setKv(k => [...k, randColor()]);
    }

    const remKv = () => {
        setKv(k => k.slice(1));
    }

    return (
    <div className="App">
      <header className="App-header">
        <h1 style={{color: spalva}}>State {skaicius}</h1>
        {
            katinukai.map((k, i) => <div key={i}>{k}</div>) // key={i} pašalina react error'us, uždeda unikalius key;
        }
        <div className='kvc'>
            {
                kv.map((c, i) => <div className='kv' key={i} style={{backgroundColor: c}}>{i}</div>)
            }
        </div>
        

        <button onClick={() => skaiciuotuvas(+1)}>+1</button>
        <button onClick={() => skaiciuotuvas(-1)}>-1</button>
        <button onClick={beArgumentu}>BE</button>
        <button onClick={() => suArgumentu('labas')}>SU</button> 
        <button onClick={keistiSpalva}>Kita spalva</button>
        <button onClick={addKv}>ADD []</button>
        <button onClick={remKv}>REMOVE []</button>
      </header>
    </div>
  );
}

export default App;

// () - paleidinėja funkciją. Mygtukas paleidžia nepaleistą funkciją (uždeda '()').
// su argumentu -> onClick={() => suArgumentu('labas')}

// State'as - yra props'as, kuris atsiranda komponento viduje. Atvaizduoja komponento būseną.

// const [A, B] = [1, 2] =>>> const A = [1, 2][0]; const B = [1, 2][1]

// hook grąžina masyvą, kur pirmas el. state reikšmė, antras - funkcija, kuri keičia state reikšmę.

// <button onClick={() => setSkaicius(skaicius + 1)}>+1</button>
// <button onClick={() => setSkaicius(skaicius - 1)}>-1</button>