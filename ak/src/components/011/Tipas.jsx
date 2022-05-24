function Tipas({seaPlaners}) {
    seaPlaners.sort((a, b) => a.type > b.type ? 1 : -1);
    return seaPlaners.map(p => <div key={p.id}>TYPE:<b>{p.type}</b> {p.name}</div>)
}

export default Tipas;