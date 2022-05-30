import { useEffect, useState } from 'react';
import './bootstrap.css';
import Create from './components/crud/Create';
// import './App.scss';


function App() {

  const [createData, setCreateData] = useState(null); // null, nes pradzioj jokio objekto nera;

  // 1. CREATE
  useEffect(() => {
    if (null === createData) {
      return;
    }
    // IŠSIUNČIAMAS Į LOCALSTORAGE;


  }, [createData])

  return (
    <>
    <div className="container">
      <div className="row">
        <div className="col-4">
          <Create></Create>
        </div>
        <div className="col-8">
          One of three columns
        </div>
      </div>
    </div>
    
    </>
  );
}

export default App;

