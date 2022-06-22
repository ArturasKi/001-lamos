import Tree from "./Tree";


function List({trees, setDeleteData, setModalData}) {

    return (
        <div className="card mt-4">
            <div className="card-header">
              <h2>List of trees</h2>
            </div>
            <div className="card-body">
                <ul className="list-group">
                    {
                    trees ? trees.map(tree => <Tree key={tree.id} tree={tree} setDeleteData={setDeleteData} setModalData={setModalData}></Tree>) : null
                    }
                </ul>
            </div>
          </div>
    )
}

export default List;