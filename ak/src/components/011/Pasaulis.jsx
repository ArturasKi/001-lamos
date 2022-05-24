import Namas from "./Namas";
import Narvas from "./Narvas";
import Garazas from "./Garazas";
import Akvariumas from "./Akvariumas";

function Pasaulis({seaPlaners}) {

    return (
        <>
            {
                seaPlaners.map(p => <Namas key={p.id} seaPlaner={p}></Namas>)
            }
            {
                seaPlaners.map(p => <Narvas key={p.id} seaPlaner={p}></Narvas>)
            }
            {
                seaPlaners.map(p => <Garazas key={p.id} seaPlaner={p}></Garazas>)
            }
            {
                seaPlaners.map(p => <Akvariumas key={p.id} seaPlaner={p}></Akvariumas>)
            }
        </>
    )
}

export default Pasaulis;