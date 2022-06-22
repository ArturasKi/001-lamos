import { useEffect, useState } from 'react';
import './bootstrap.css';
import './crud.scss'
import Create from './Components/Create';
import List from './Components/List';
import Edit from './Components/Edit';
import TreeContext from './Components/TreeContext';
// import './App.scss';


function App() {

  const [lastUpdate, setLastUpdate] = useState(Date.now());
  const [trees, setTrees] = useState(null);
  
  const [modalData, setModalData] = useState(null);

  const [createData, setCreateData] = useState(null); // null, nes pradzioj jokio objekto nera;
  const [deleteData, setDeleteData] = useState(null);
  const [editData, setEditData] = useState(null);

  // READ
  useEffect(() => {
    setTrees();
  }, [lastUpdate]);

  // CREATE
  useEffect(() => {
    if (null === createData) return;

    setLastUpdate(Date.now());
  // IŠSIUNČIAMAS Į LOCALSTORAGE;
  }, [createData]);

  // DELETE
  useEffect(() => {
    if (null === deleteData) return;
  
    setLastUpdate(Date.now());
  // IŠSIUNČIAMAS Į LOCALSTORAGE;
  }, [deleteData]);

  // EDIT
  useEffect(() => {
    if (null === editData) return;
    
    setLastUpdate(Date.now());
  // IŠSIUNČIAMAS Į LOCALSTORAGE;
  }, [editData]);


  return (
    <TreeContext.Provider value={
      {
        trees
      }
    }>
      <div className="container">
        <div className="row">
          <div className="col-4">
            <Create setCreateData={setCreateData}></Create>
          </div>
          <div className="col-8">
            <List setDeleteData={setDeleteData} trees={trees} setModalData={setModalData}></List>
          </div>
        </div>
      </div>
      <Edit setEditData={setEditData} modalData={modalData} setModalData={setModalData}></Edit>
    </TreeContext.Provider>
  );
}

export default App;


