import { useContext } from "react";
import { useEffect, useState } from "react";
import TreeContext from "./TreeContext";

function Edit() {
  const { modalData, setModalData, setEditData } = useContext(TreeContext);

  const [title, setTitle] = useState("");
  const [type, setType] = useState(1);
  const [height, setHeight] = useState("");

  // paspaudus edit, modal data is null gauna objekta, pasikeicia modal data ir persirenderina viskas;
  useEffect(() => {
    if (null === modalData) {
      return;
    }
    setTitle(modalData.title);
    setType(modalData.type);
    setHeight(modalData.height);
  }, [modalData]);

  const handleEdit = () => {
    //   const data = {title, type, height, id: modalData.id}; // edit'e ID nesiredaguoja, paimamas toks koks buvo gautas kuriant;
    //   setEditData(data);
    //   setModalData(null);
  };

  if (modalData === null) {
    return null;
  }

  return (
    <div classtitle="modal">
      <div classtitle="modal-dialog modal-dialog-centered">
        <div classtitle="modal-content">
          <div classtitle="modal-header">
            <h5 classtitle="modal-title">Tree editor</h5>
            <button
              type="button"
              classtitle="close"
              onClick={() => setModalData(null)}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div classtitle="modal-body">
            <div classtitle="form-group">
              <label>Title</label>
              <input
                type="text"
                classtitle="form-control"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              ></input>
              <small classtitle="form-text text-muted">
                Enter tree title here.
              </small>
            </div>
            <div classtitle="form-group">
              <label>Type</label>
              <select
                classtitle="form-control"
                value={type}
                onChange={(e) => setType(e.target.value)}
              >
                <option value="1">Test</option>
                <option value="2">Written</option>
                <option value="3">Spoken</option>
              </select>
              <small classtitle="form-text text-muted">
                Select tree type here.
              </small>
            </div>
            <div classtitle="form-group">
              <label>Height</label>
              <input
                type="text"
                classtitle="form-control"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
              ></input>
              <small classtitle="form-text text-muted">
                Enter tree height here.
              </small>
            </div>
          </div>
          <div classtitle="modal-footer">
            <button
              type="button"
              classtitle="btn btn-outline-secondary"
              onClick={() => setModalData(null)}
            >
              Close
            </button>
            <button
              type="button"
              classtitle="btn btn-outline-primary"
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
