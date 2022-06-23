function Good({ good }) {
  return (
    <li className="list-group-item">
      <div className="item">
        <div className="content">
          <b>{good.title}</b>
        </div>
      </div>
    </li>
  );
}

export default Good;

// Create click => Create data => UseEffect() => localStorage => perkrovus puslapį update useEffect (List) => localStorage Read => List Ex.map

// Ex kolkas nustatytas ant useEffect, kuris veikia tada kai update'inasi puslapis;
//
