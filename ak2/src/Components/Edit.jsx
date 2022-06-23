import { useEffect, useState, useContext } from "react";
import TreeContext from "./TreeContext";

function Edit() {
  const { modalData, setModalData, setEditData, goods } = useContext(TreeContext);

  const [title, setTitle] = useState("");
  const [type, setType] = useState(1);
  const [height, setHeight] = useState("");
  const [good, setGood] = useState("0"); 

  // paspaudus edit, modal data is null gauna objekta, pasikeicia modal data ir persirenderina viskas;
  useEffect(() => {
    if (null === modalData) {
      return;
    }
    console.log(modalData);
    setTitle(modalData.title);
    setType(modalData.type);
    setHeight(modalData.height);
    setGood(modalData.good ?? 0);
  }, [modalData]);

  const handleEdit = () => {
    const data = { title, type, height, good, id: modalData.id }; // edit'e ID nesiredaguoja, paimamas toks koks buvo gautas kuriant;
    setEditData(data);
    setModalData(null);
  };

  if (modalData === null) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Ex editor</h5>
            <button
              type="button"
              className="close"
              onClick={() => setModalData(null)}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="form-group">
              <label>Title</label>
              <input
                type="text"
                className="form-control"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              ></input>
              <small className="form-text text-muted">
                Enter tree title here.
              </small>
            </div>
            <div className="form-group">
              <label>Type</label>
              <select
                className="form-control"
                value={type}
                onChange={(e) => setType(e.target.value)}
              >
                <option value="1">Leaf</option>
                <option value="2">Spike</option>
                <option value="3">Palm</option>
              </select>
              <small className="form-text text-muted">
                Select tree type here.
              </small>
            </div>
            <div className="form-group">
              <label>Goods</label>
              <select
                className="form-control"
                value={good}
                onChange={(e) => setGood(e.target.value)}
              >
                <option value="0">Select Good</option>
                {goods
                  ? goods.map((g) => (
                      <option key={g.id} value={g.id}>
                        {g.title}
                      </option>
                    ))
                  : null}
              </select>
              <small className="form-text text-muted">
                Select nice goodie.
              </small>
            </div>
            <div className="form-group">
              <label>Height</label>
              <input
                type="text"
                className="form-control"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
              ></input>
              <small className="form-text text-muted">
                Enter tree height here.
              </small>
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-outline-secondary"
              onClick={() => setModalData(null)}
            >
              Close
            </button>
            <button
              type="button"
              className="btn btn-outline-primary"
              onClick={handleEdit}
            >
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Edit;
