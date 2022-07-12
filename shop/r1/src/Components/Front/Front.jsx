import { useState, useEffect } from "react";
import List from "./List";
import Nav from "./Nav";
import { authConfig } from "../../Functions/auth";
import axios from "axios";
import FrontContext from "./FrontContext";
import SortFilter from "./SortFilter";

function Front() {
  const [products, setProducts] = useState(null);
  const [cats, setCats] = useState(null);
  const [filter, setFilter] = useState(0); // value='0'

  const [cat, setCat] = useState(0);
  const [search, setSearch] = useState('');

  const doFilter = cid => {
    setCat(cid);
    setFilter(parseInt(cid));
  }

  // READ PRUDUCT
  useEffect(() => {

    let query;
    if (filter === 0 && !search) {
      query = ''; // jei filtras yra 0, tai query yra tuščias string'as, nieko jame nėra;
    } else if (filter) {
      query = '?cat-id=' + filter // ? reiškia, kad perduodam kintamąjį per klaustuką;
    } else if (search) {
      query = '?s=' + search
    }
    axios
      .get("http://localhost:3003/products/" + query, authConfig())
      .then((res) => setProducts(res.data.map((p, i) => ({ ...p, row: i }))));
  }, [filter, search]);

  // READ CATEGORIES
  useEffect(() => {
    axios
      .get("http://localhost:3003/cats", authConfig())
      .then((res) => setCats(res.data));
  }, []);

  return (
    <FrontContext.Provider
      value={{
        products,
        setProducts,
        cats,
        setFilter,
        cat,
        setCat,
        doFilter,
        setSearch
      }}
    >
      <Nav />
      <div className="container">
        <div className="row">
          <div className="col-12">
            <SortFilter />
          </div>
          <div className="col-12">
            <List />
          </div>
        </div>
      </div>
    </FrontContext.Provider>
  );
}

export default Front;
