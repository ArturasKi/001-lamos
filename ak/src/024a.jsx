import "./App.scss";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  
  const [trees, setTrees] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3003/trees") // imam info is serverio
      .then((res) => {
        setTrees(res.data);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Medžiai</h1>
        {trees.map((tree) => (
          <div key={tree.id}>{tree.title}</div>
        ))}
      </header>
    </div>
  );
}

export default App;
