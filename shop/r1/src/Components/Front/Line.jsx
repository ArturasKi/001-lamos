import { useContext } from "react";
import FrontContext from "./FrontContext";

function Line({line}) {

    const { doFilter } = useContext(FrontContext);  

    return (
        <li className="list-group-item">
            <div className="item">
                <div className="content">
                    <b>{line.title}</b>
                    <i>{line.price.toFixed(2)} EUR</i>
                    <div className="box" style={line.in_stock ? {backgroundColor: 'coral'} : null}>{}</div>
                    <span>{new Date(Date.parse(line.lu)).toLocaleString()}</span>
                    <div className="cat" onClick={() => doFilter(line.cid)}>{line.cat}</div>
                    {
                        line.photo ? <div className="photo-bin"><img src={line.photo} alt='nice'/></div> : null
                    }
                </div>
            </div>
        </li>
    );
}

export default Line;



// Create click => Create data => UseEffect() => localStorage => perkrovus puslapį update useEffect (List) => localStorage Read => List Ex.map

// Ex kolkas nustatytas ant useEffect, kuris veikia tada kai update'inasi puslapis;
// 