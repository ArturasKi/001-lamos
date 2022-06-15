import { useEffect, useReducer } from "react";
import "./App.scss";
import axios from "axios";
import bookReducer from "./Reducers/bookReducer";
import bookTypeReducer from "./Reducers/bookTypeReducer";

// BOOKS

function App() {
  const [books, dispatchBooks] = useReducer(bookReducer, []);
  const [bookType, dispatchBookType] = useReducer(bookTypeReducer, []);
  // const [books, setBooks] = useState([]); // pradinis state tuscias masyvas;

  useEffect(() => {
    axios.get("https://in3.dev/knygos/").then((res) => {
      const action = {
        payload: res.data,
        type: "book",
      };
      console.log(action);
      dispatchBooks(action);
    });
  }, []);

  useEffect(() => {
    axios.get("https://in3.dev/knygos/types/").then((res) => {
      const action = {
        payload: res.data,
        type: "book_type",
      };
      console.log(action);
      dispatchBookType(action);
    });
  }, []);

  const sortAbc = () => {
    const action = {
      type: "sort_abc",
    };
    dispatchBooks(action);
  };

  const sortDef = () => {
    const action = {
      type: "sort_def",
    };
    dispatchBooks(action);
  };

  const sortCost = () => {
    const action = {
      type: "sort_cost",
    };
    dispatchBooks(action);
  };

  const sortReset = () => {
    const action = {
      type: "sort_reset",
    };
    dispatchBooks(action);
  };

  const reload = () => {
    axios.get("https://in3.dev/knygos/").then((res) => {
      const action = {
        payload: res.data,
        type: "reload_books",
      };
      console.log(action);
      dispatchBooks(action);
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>KNYGOS</h1>
        <div>
          {books.map((book) =>
            book.show ? (
              <div key={book.id}>
                <b>{book.title}</b> {book.price} EUR{" "}
                <i>
                  {bookType.map((type) =>
                    type.id === book.type ? type.title : null
                  )}
                </i>
              </div>
            ) : null
          )}
        </div>
        <div className="kvc">
          <button onClick={sortAbc}>Sort AZ</button>
          <button onClick={sortDef}>Reset sort</button>
          <button onClick={sortCost}>Cost more than 13eur</button>
          <button onClick={sortReset}>Reset</button>
          <button onClick={reload}>Reload</button>
        </div>
      </header>
    </div>
  );
}

export default App;

// sort pagal abc;
// sort pagal tokia tvarka, kokia buvo;

//1. Mygtukas filtrui rodyti brangesnes nei 13eur knygas;
//2. Mygtukas filtro reset'ui;
//3. Knygu 'reload' mygtukas (is naujo atsiuncia knygas is serverio); -> useEffect
//4. Salia knygos atspausdinti jos kategorija; https://in3.dev/knygos/types/
