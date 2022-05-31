import { useEffect, useState } from 'react';
import './bootstrap.css';
import './crud.scss'
import Create from './components/crud/Create';
import List from './components/crud/List';
import { create, read, remove } from './functions/localStorage';
import Edit from './components/crud/Edit';
// import './App.scss';


function App() {

  const [lastUpdate, setLastUpdate] = useState(Date.now());
  const [exes, setExes] = useState(null);
  const [createData, setCreateData] = useState(null); // null, nes pradzioj jokio objekto nera;
  const [deleteData, setDeleteData] = useState(null);
  const [modalData, setModalData] = useState(null);

  // READ
  useEffect(() => {
    setExes(read());
  }, [lastUpdate]);

  // CREATE
  useEffect(() => {
    if (null === createData) {
      return;
    }
    create(createData);
    setLastUpdate(Date.now());
  // IŠSIUNČIAMAS Į LOCALSTORAGE;
  }, [createData]);

  // DELETE
  useEffect(() => {
    if (null === deleteData) {
      return;
    }
    remove(deleteData);
    setLastUpdate(Date.now());
  // IŠSIUNČIAMAS Į LOCALSTORAGE;
  }, [deleteData]);


  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-4">
            <Create setCreateData={setCreateData}></Create>
          </div>
          <div className="col-8">
            <List setDeleteData={setDeleteData} exes={exes} setModalData={setModalData}></List>
          </div>
        </div>
      </div>
      <Edit modalData={modalData} setModalData={setModalData}></Edit>
    </>
  );
}

export default App;

