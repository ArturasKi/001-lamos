function Ex({ex}) {

    return (
        <li className="list-group-item">{ex.name}</li>
    )
}

export default Ex;



// Create click => Create data => UseEffect() => localStorage => perkrovus puslapį update useEffect (List) => localStorage Read => List Ex.map

// Ex kolkas nustatytas ant useEffect, kuris veikia tada kai update'inasi puslapis;
// 