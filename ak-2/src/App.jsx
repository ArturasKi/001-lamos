import { useEffect, useState } from 'react';
import './bootstrap.css';
import './crud.scss'
import Create from './Components/Create';
import List from './Components/List';
import Edit from './Components/Edit';
import TreeContext from './Components/TreeContext';
import axios from 'axios';
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
    axios.get('http://localhost:3003/trees')
    .then(res => setTrees(res.data));
  }, [lastUpdate]);

  // CREATE
  useEffect(() => {
    if (null === createData) return;
    axios.post('http://localhost:3003/trees', createData)
    .then(_ => {
      setLastUpdate(Date.now()); // vyksta naujas irasymas, ir update'inama info
    }); 
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
        trees,
        setCreateData
      }
    }>
      <div className="container">
        <div className="row">
          <div className="col-4">
            <Create/>
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

