function Valtis({seaPlaner}) {
    if (seaPlaner.type === 'man') {
        return <div style={{color: seaPlaner.color}}><i>TYPE:{seaPlaner.type} <b>{seaPlaner.name}</b></i></div>
    }
}

export default Valtis;