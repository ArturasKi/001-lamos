import Laivas from "./Laivas";
import Valtis from "./Valtis";
import Sala from "./Sala";

function Jura({seaPlaners}) {
    return (
        <>
            {
                seaPlaners.map(p => <Valtis key={p.id} seaPlaner={p}></Valtis>)
            }
            {
                seaPlaners.map(p => <Laivas key={p.id} seaPlaner={p}></Laivas>)
            }
            {
                seaPlaners.map(p => <Sala key={p.id} seaPlaner={p}></Sala>)
            }
            {
                seaPlaners.map(p => p.type === 'fish' ? <div key={p.id} seaplaner={p} style={{color: p.color}}>TYPE:{p.type}<b> {p.name}</b></div> : null)
            }
        </>
    );
}


export default Jura;