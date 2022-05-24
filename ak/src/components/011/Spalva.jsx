function Spalva({seaPlaners}) {
    seaPlaners.sort((a, b) => a.color > b.color ? 1 : -1);
    return seaPlaners.map(p => <div key={p.id} style={{color: p.color}}>COLOR:<b>{p.color}</b> {p.name}</div>)
}

export default Spalva;