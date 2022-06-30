import { useState, useEffect } from "react";
import axios from "axios";
import CatsCrud from "./Cats/Crud";
import ProductsCrud from "./Products/Crud";
import Nav from "./Nav";
import BackContext from "./BackContext";
import { v4 as uuidv4 } from "uuid";

function Back({ show }) {
  const [lastUpdate, setLastUpdate] = useState(Date.now());

  const [messages, setMessages] = useState([]);

  const [cats, setCats] = useState(null);
  const [createCat, setCreateCat] = useState(null); // kategorijos sukūrimas;
  const [deleteCat, setDeleteCat] = useState(null); // kategorijos sukūrimas;
  const [editCat, setEditCat] = useState(null);
  const [modalCat, setModalCat] = useState(null);

  const [createProduct, setCreateProduct] = useState(null); // kategorijos sukūrimas;

  // READ CATEGORY
  useEffect(() => {
    axios
      .get("http://localhost:3003/admin/cats")
      .then((res) => setCats(res.data));
  }, [lastUpdate]);

  // CREATE CATEGORY
  useEffect(() => {
    if (null === createCat) return;
    axios
      .post("http://localhost:3003/admin/cats", createCat)
      .then((res) => {
        showMessage(res.data.msg);
        setLastUpdate(Date.now()); // irasymas, update;
      })
      .catch((error) => {
        showMessage({ text: error.message, type: "success" });
      });
  }, [createCat]);

  // DELETE CATEGORY
  useEffect(() => {
    if (null === deleteCat) return;
    axios
      .delete("http://localhost:3003/admin/cats/" + deleteCat.id)
      .then((res) => {
        showMessage(res.data.msg);
        setLastUpdate(Date.now()); // irasymas, update;
      })
      .catch((error) => {
        showMessage({ text: error.message, type: "danger" });
      });
  }, [deleteCat]);

  // EDIT CATEGORY
  useEffect(() => {
    if (null === editCat) return;
    axios
      .put("http://localhost:3003/admin/cats/" + editCat.id, editCat)
      .then((res) => {
        showMessage(res.data.msg);
        setLastUpdate(Date.now()); // irasymas, update;
      })
      .catch((error) => {
        showMessage({ text: error.message, type: "info" });
      });
  }, [editCat]);

  // CREATE PRODUCT
  useEffect(() => {
    if (null === createProduct) return;
    axios
      .post("http://localhost:3003/admin/products", createProduct)
      .then((res) => {
        showMessage(res.data.msg);
        setLastUpdate(Date.now()); // irasymas, update;
      })
      .catch((error) => {
        showMessage({ text: error.message, type: "success" });
      });
  }, [createProduct]);

  const showMessage = (m) => {
    // ateina su text ir type
    const id = uuidv4();
    m.id = id; // pridedamas id i message;
    setMessages((msg) => [...msg, m]);
    setTimeout(() => {
      setMessages((mess) => mess.filter((ms) => ms.id !== id)); // tie kurie nelygus palieka, kurie lygus false;
    }, 5000);
  };

  return (
    <BackContext.Provider
      value={{
        setCreateCat,
        cats,
        setDeleteCat,
        messages,
        setEditCat,
        setModalCat,
        modalCat,
        createProduct,
        setCreateProduct,
      }}
    >
      {show === "admin" ? (
        <>
          <Nav />
          <h1>WELCOME TO THE ADMINS CRIB</h1>
        </>
      ) : show === "cats" ? (
        <CatsCrud />
      ) : show === "products" ? (
        <ProductsCrud />
      ) : null}
    </BackContext.Provider>
  );
}

export default Back;

// {id: 46464, text: 'valio', type: 'danger'},
// {id: 4646, text: 'katinai ateina gert', type: 'info'},
// {id: 464, text: 'rytoj lis', type: 'success'}
