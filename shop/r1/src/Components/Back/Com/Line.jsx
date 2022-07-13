import { useContext } from "react";
import BackContext from "../BackContext";

function Line({line}) {

    const { setDeleteCom } = useContext(BackContext);

    const handleDelete = () => {
        setDeleteCom(line);
    }
    
    return (
        <li className="list-group-item">
            <div className="item">
                <div className="content">
                    <b>{line.com}</b>
                </div>
                <div className="buttons">
                    <button type="button" className="btn btn-outline-danger ml-2" onClick={handleDelete}>Delete</button>
                </div>
            </div>
        </li>
    );
}

export default Line;



// Create click => Create data => UseEffect() => localStorage => perkrovus puslapį update useEffect (List) => localStorage Read => List Ex.map

// Ex kolkas nustatytas ant useEffect, kuris veikia tada kai update'inasi puslapis;
// 