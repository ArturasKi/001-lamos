import { useEffect, useState } from "react";
import "./bootstrap.css";
import "./crud.scss";
import Create from "./Components/Create";
import List from "./Components/List";
import Edit from "./Components/Edit";
import TreeContext from "./Components/TreeContext";
import Message from "./Components/Message";
import axios from "axios";
import GoodContext from "./Components/goods/GoodContext";
// import './App.scss';
import CreateGoods from "./Components/goods/Create";
import ListGoods from './Components/goods/List';

function Back() {
  const [lastUpdate, setLastUpdate] = useState(Date.now());

  //TREES
  const [trees, setTrees] = useState(null);
  const [modalData, setModalData] = useState(null);
  const [createData, setCreateData] = useState(null); // null, nes pradzioj jokio objekto nera;
  const [deleteData, setDeleteData] = useState(null);
  const [editData, setEditData] = useState(null);

  //GOODS
  const [goods, setGoods] = useState(null);
  const [createDataGoods, setCreateDataGoods] = useState(null);
  const [deleteDataGoods, setDeleteDataGoods] = useState(null);

  const [message, setMessage] = useState(null);
  const [disableCreate, setDisableCreate] = useState(false);

  useEffect(() => {
    setInterval(() => setLastUpdate(Date.now()), 3000); // kas 3s parsiunčiama info iš serverio;
  }, [])

  // TREES //
  // READ
  useEffect(() => {
    axios
      .get("http://localhost:3003/medziai")
      .then((res) => setTrees(res.data));
  }, [lastUpdate]);

  // CREATE
  useEffect(() => {
    if (null === createData) return;
    axios.post("http://localhost:3003/medziai", createData)
      .then((res) => {
        showMessage(res.data.msg);
        setLastUpdate(Date.now()); // irasymas, update;
      })
      .catch((error) => {
        showMessage({ text: error.message, type: "danger" });
      })
      .then(() => {
        setDisableCreate(false);
      });
  }, [createData]);

  // DELETE
  useEffect(() => {
    if (null === deleteData) return;
    axios.delete("http://localhost:3003/medziai/" + deleteData.id)
      .then((res) => {
        showMessage(res.data.msg);
        setLastUpdate(Date.now()); // irasymas, update;
      });
  }, [deleteData]);

  // EDIT
  useEffect(() => {
    if (null === editData) return;
    axios.put("http://localhost:3003/medziai/" + editData.id, editData)
      .then((res) => {
        showMessage(res.data.msg);
        setLastUpdate(Date.now()); // irasymas, update;
      });
  }, [editData]);

  // GOODS //

  // CREATE
  useEffect(() => {
    if (null === createDataGoods) return;
    axios.post("http://localhost:3003/gerybes", createDataGoods).then(_ => {
      setLastUpdate(Date.now()); // irasymas, update;
    });
  }, [createDataGoods]);

  // READ
  useEffect(() => {
    axios.get("http://localhost:3003/gerybes")
      .then(res => {
        console.log(res.data);
        setGoods(res.data);
      });
  }, [lastUpdate]);

  const showMessage = (msg) => {
    setMessage(msg);
    setTimeout(() => setMessage(null), 5000);
  };

    // DELETE
    useEffect(() => {
      if (null === deleteDataGoods) return;
      axios.delete("http://localhost:3003/gerybes/" + deleteDataGoods.id)
        .then((res) => {
          showMessage(res.data.msg);
          setLastUpdate(Date.now()); // irasymas, update;
        });
    }, [deleteDataGoods]);

    // DELETE COMMENT
    const handleDeleteComment = id => {
      axios.delete("http://localhost:3003/komentarai/" + id)
      .then((res) => {
        showMessage(res.data.msg);
        setLastUpdate(Date.now()); // irasymas, update;
      });
  }

  return (
    <TreeContext.Provider
      value={{
        trees,
        setCreateData,
        setDeleteData,
        setModalData,
        modalData,
        setEditData,
        message,
        disableCreate,
        setDisableCreate,
        goods,
        handleDeleteComment
      }}
    >
      <GoodContext.Provider
        value={{
          setCreateData: setCreateDataGoods,
          goods,
          setDeleteData: setDeleteDataGoods
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-4">
              <Create />
              <CreateGoods />
              <ListGoods/>
            </div>
            <div className="col-8">
              <List trees={trees}></List>
            </div>
          </div>
        </div>
        <Edit />
        <Message />
      </GoodContext.Provider>
    </TreeContext.Provider>
  );
}

export default Back;
