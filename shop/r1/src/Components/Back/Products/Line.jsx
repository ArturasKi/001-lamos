import { useContext } from "react";
import BackContext from "../BackContext";

function Line({line}) {

    const {setDeleteProduct, setModalProduct} = useContext(BackContext);

    const handleDelete = () => {
        setDeleteProduct(line);
    }
    
    const handleEdit = () => {
        setModalProduct(line);
    }

    return (
        <li className="list-group-item">
            <div className="item">
                <div className="content">
                    <b>{line.title}</b>
                    <i>{line.price.toFixed(2)} EUR</i>
                    <div className="box" style={line.in_stock ? {backgroundColor: 'coral'} : null}>{}</div>
                    <div className="cat">{line.cat}</div>
                </div>
                <div className="buttons">
                    <button type="button" className="btn btn-outline-success ml-2" onClick={handleEdit}>Edit</button>
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