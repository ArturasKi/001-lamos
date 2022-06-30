import { useState, useEffect } from "react";
import axios from 'axios';
import CatsCrud from "./Cats/Crud";
import ProductsCrud from "./Products/Crud";
import Nav from "./Nav";
import BackContext from "./BackContext";

function Back({ show }) {

    const [lastUpdate, setLastUpdate] = useState(Date.now());

    const [messages, setMessages] = useState(
      [
      {id: 46464, text: 'valio', type: 'danger'},
      {id: 4646, text: 'katinai ateina gert', type: 'info'},
      {id: 464, text: 'rytoj lis', type: 'success'}
      ]
    ); 

    const [cats, setCats] = useState(null);
    const [createCat, setCreateCat] = useState(null); // kategorijos sukūrimas;
    const [deleteCat, setDeleteCat] = useState(null); // kategorijos sukūrimas;
    

    // READ CATEGORY
    useEffect(() => {
        axios
        .get("http://localhost:3003/admin/cats")
        .then((res) => setCats(res.data));
    }, [lastUpdate]);

    // CREATE CATEGORY
    useEffect(() => {
        if (null === createCat) return;
        axios.post("http://localhost:3003/admin/cats", createCat)
          .then((res) => {
            showMessage(res.data.msg);
            setLastUpdate(Date.now()); // irasymas, update;
          })
          .catch((error) => {
            showMessage({ text: error.message, type: "danger" });
          })
      }, [createCat]);

       // DELETE CATEGORY
    useEffect(() => {
      if (null === deleteCat) return;
      axios.delete("http://localhost:3003/admin/cats/" + deleteCat.id)
        .then((res) => {
          showMessage(res.data.msg);
          setLastUpdate(Date.now()); // irasymas, update;
        })
        .catch((error) => {
          showMessage({ text: error.message, type: "danger" });
        })
    }, [deleteCat]);


    


      const showMessage = () => {

      }

  return (
    <BackContext.Provider value={{
        setCreateCat,
        cats,
        setDeleteCat,
        messages
    }}>
      {show === "admin" ? (
        <>
          <Nav />
          <h1>BACK</h1>
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
