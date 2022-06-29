import CatsCrud from "./Cats/Crud";
import ProductsCrud from "./Products/Crud";
import Nav from "./Nav";
import { useState } from "react";
import BackContext from "./BackContext";

function Back({ show }) {

  const [createCat, setCreateCat] = useState(null); // kategorijos sukūrimas;

  return (
    <BackContext.Provider value={{
        setCreateCat
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
