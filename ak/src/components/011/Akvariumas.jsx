function Akvariumas({seaPlaner}) {
    if (seaPlaner.type === 'fish') {
        return <div style={{color: seaPlaner.color}}><i>TYPE:{seaPlaner.type} <b>{seaPlaner.name}</b></i></div>
    }
}   

export default Akvariumas;