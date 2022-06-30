import { useEffect, useState, useContext } from "react";
import BackContext from "../BackContext";

function Edit() {
  const { modalCat, setEditCat, setModalCat } = useContext(BackContext);

  const [title, setTitle] = useState("");

  // paspaudus edit, modal data is null gauna objekta, pasikeicia modal data ir persirenderina viskas;
  useEffect(() => {
    if (null === modalCat) {
      return;
    }
    setTitle(modalCat.title);
  }, [modalCat]);

  const handleEdit = () => {
    const data = { title, id: modalCat.id }; // edit'e ID nesiredaguoja, paimamas toks koks buvo gautas kuriant;
    setEditCat(data);
    setModalCat(null);
  };

  if (modalCat === null) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Category changer</h5>
            <button
              type="button"
              className="close"
              onClick={() => setModalCat(null)}
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
                Enter category title here.
              </small>
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-outline-secondary" onClick={() => setModalCat(null)}>Close</button>
            <button type="button" className="btn btn-outline-primary" onClick={handleEdit}>Save changes</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Edit;
