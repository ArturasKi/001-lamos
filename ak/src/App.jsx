import { useEffect, useState } from 'react';
import './bootstrap.css';
import Create from './components/crud/Create';
import List from './components/crud/List';
import { create, read } from './functions/localStorage';
// import './App.scss';


function App() {

  const [lastUpdate, setLastUpdate] = useState(Date.now());

  const [exes, setExes] = useState(null);

  const [createData, setCreateData] = useState(null); // null, nes pradzioj jokio objekto nera;

  // READ
  useEffect(() => {
    setExes(read());
  }, [lastUpdate]);

  // 1. CREATE
  useEffect(() => {
    if (null === createData) {
      return;
    }
    create(createData);
    setLastUpdate(Date.now());
  // IŠSIUNČIAMAS Į LOCALSTORAGE;
  }, [createData]);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-4">
            <Create setCreateData={setCreateData}></Create>
          </div>
          <div className="col-8">
            <List exes={exes}></List>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

