function Valtis({seaPlaner}) {
    if (seaPlaner.type === 'man') {
        return <div><i>TYPE:{seaPlaner.type} <b>{seaPlaner.name}</b></i></div>
    }
}

export default Valtis;