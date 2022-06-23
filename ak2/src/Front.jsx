import axios from 'axios';
import {useState, useEffect} from 'react';
import FrontContext from './Components/front/FrontContext';
import FrontList from './Components/front/List';

function Front() {

  const [goods, setGoods] = useState(null);

  // READ
  useEffect(() => {
    axios.get("http://localhost:3003/front/gerybes").then(res => {
      console.log(res.data);
      setGoods(res.data);
    });
  }, []);

  return (
    <FrontContext.Provider value={
      {
        goods
      }
    }>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <FrontList/>
          </div>
        </div>
      </div>
    </FrontContext.Provider>
  )
}

export default Front;
