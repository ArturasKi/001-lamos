function Bala({seaPlaners}) {
    
    return (
            seaPlaners.map(p => <div><i>ID:{p.id} TYPE:{p.type} NAME:{p.name} COLOR:{p.color}</i></div>)
    );
}

export default Bala;