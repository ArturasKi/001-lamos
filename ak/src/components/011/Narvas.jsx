function Narvas({seaPlaner}) {
    if (seaPlaner.type === 'animal') {
        return <div style={{color: seaPlaner.color}}><i>TYPE:{seaPlaner.type} <b>{seaPlaner.name}</b></i></div>
    }
}   

export default Narvas;