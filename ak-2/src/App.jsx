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
      setLastUpdate(Date.now()); // vyksta naujas irasymas, ir update'inama info serveryje;
    }); 
  }, [createData]);

  // DELETE
  useEffect(() => {
    if (null === deleteData) return;
    axios.delete('http://localhost:3003/trees/' + deleteData.id) // delete reikia perduoti kaip parametra (id);
    .then(_ => {
      setLastUpdate(Date.now()); // vyksta naujas irasymas, ir update'inama info
    }); 
  }, [deleteData]);

  // EDIT
  useEffect(() => {
    if (null === editData) return;
    axios.put('http://localhost:3003/trees/' + editData.id, editData) // delete reikia perduoti kaip parametra (id);
    .then(_ => {
      setLastUpdate(Date.now());
    }); 
  }, [editData]);


  return (
    <TreeContext.Provider value={
      {
        trees,
        setCreateData,
        setDeleteData,
        setModalData,
        modalData
      }
    }>
      <div className="container">
        <div className="row">
          <div className="col-4">
            <Create/>
          </div>
          <div className="col-8">
            <List/>
          </div>
        </div>
      </div>
      <Edit/>
    </TreeContext.Provider>
  );
}

export default App;

