function Vardas({seaPlaners}) {
    seaPlaners.sort((a, b) => a.name > b.name ? 1 : -1);
    return seaPlaners.map(p => <div key={p.id}>NAME:<b>{p.name}</b></div>)
}

export default Vardas;