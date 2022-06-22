function Tree({tree}) {

    const handleDelete = () => {
        // setDeleteData(tree);
    }
    
    const handleEdit = () => {
        // setModalData(tree);
    }

    return (
        <li className="list-group-item">
            <div className="item">
                <div className="content">
                    <b>ID: {tree.id}</b>
                    <b>{tree.name}</b>
                    <span>{['Test', 'Written', 'Spoken'][tree.type - 1]}</span>
                    <i>{tree.place}</i>
                </div>
                <div className="buttons">
                    <button type="button" className="btn btn-outline-success ml-2" onClick={handleEdit}>Edit</button>
                    <button type="button" className="btn btn-outline-danger ml-2" onClick={handleDelete}>Delete</button>
                </div>
            </div>
        </li>
    )
}

export default Tree;



// Create click => Create data => UseEffect() => localStorage => perkrovus puslapį update useEffect (List) => localStorage Read => List Ex.map

// Ex kolkas nustatytas ant useEffect, kuris veikia tada kai update'inasi puslapis;
// 