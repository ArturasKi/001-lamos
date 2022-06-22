import { useContext } from "react";
import Good from "./Good";
import TreeContext from "./TreeContext";


function List() {

    const {goods} = useContext(TreeContext);

    return (
        <div className="card mt-4">
            <div className="card-header">
              <h2>List of trees</h2>
            </div>
            <div className="card-body">
                <ul className="list-group">
                    {
                    goods ? goods.map(good => <Good key={good.id} good={good}></Good>) : null
                    }
                </ul>
            </div>
          </div>
    )
}

export default List;