import { useEffect, useState } from 'react';
import './bootstrap.css';
import './crud.scss'
import Create from './components/crud/Create';
import List from './components/crud/List';
import { create, read, remove, edit } from './functions/localStorage';
import Edit from './components/crud/Edit';
// import './App.scss';


function App() {

  const [lastUpdate, setLastUpdate] = useState(Date.now());
  const [exes, setExes] = useState(null);
  
  const [modalData, setModalData] = useState(null);

  const [createData, setCreateData] = useState(null); // null, nes pradzioj jokio objekto nera;
  const [deleteData, setDeleteData] = useState(null);
  const [editData, setEditData] = useState(null);

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

  // EDIT
  useEffect(() => {
    if (null === editData) {
      return;
    }
    edit(editData);
    setLastUpdate(Date.now());
  // IŠSIUNČIAMAS Į LOCALSTORAGE;
  }, [editData]);


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
      <Edit setEditData={setEditData} modalData={modalData} setModalData={setModalData}></Edit>
    </>
  );
}

export default App;

