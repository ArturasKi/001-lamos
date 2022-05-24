function Garazas({seaPlaner}) {
    if (seaPlaner.type === 'car') {
        return <div style={{color: seaPlaner.color}}><i>TYPE:{seaPlaner.type} <b>{seaPlaner.name}</b></i></div>
    }
}   

export default Garazas;