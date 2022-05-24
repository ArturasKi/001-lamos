function Laivas({seaPlaner}) {
    if (seaPlaner.type === 'car') {
        return <div><i>TYPE:{seaPlaner.type} <b>{seaPlaner.name}</b></i></div>
    }
}

export default Laivas;