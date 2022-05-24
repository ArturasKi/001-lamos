import Spalva from "./Spalva";
import Tipas from "./Tipas";
import Vardas from "./Vardas";

function Vandenynas({seaPlaners}) {

    return (
        <>
            <Tipas seaPlaners={seaPlaners}></Tipas>
            <br/>
            <Vardas seaPlaners={seaPlaners}></Vardas>
            <br/>
            <Spalva seaPlaners={seaPlaners}></Spalva>
        </>
    )
}

export default Vandenynas;