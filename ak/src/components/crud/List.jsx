import Ex from "./Ex";


function List({exes, setDeleteData, setModalData}) {

    return (
        <div className="card mt-4">
            <div className="card-header">
              <h2>List of Exams</h2>
            </div>
            <div className="card-body">
                <ul className="list-group">
                    {
                    exes ? exes.map(ex => <Ex key={ex.id} ex={ex} setDeleteData={setDeleteData} setModalData={setModalData}></Ex>) : null
                    }
                </ul>
            </div>
          </div>
    )
}

export default List;