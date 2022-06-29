import { useState, useEffect } from "react";
import axios from 'axios';
import CatsCrud from "./Cats/Crud";
import ProductsCrud from "./Products/Crud";
import Nav from "./Nav";
import BackContext from "./BackContext";

function Back({ show }) {

    const [lastUpdate, setLastUpdate] = useState(Date.now());

    const [cats, setCats] = useState(null);
    const [createCat, setCreateCat] = useState(null); // kategorijos sukūrimas;
    

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


    


      const showMessage = () => {

      }

  return (
    <BackContext.Provider value={{
        setCreateCat,
        cats
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
