import { useEffect, useState } from 'react';

function Edit ({modalData, setModalData, setEditData}) {

    const [name, setName] = useState('');
    const [type, setType] = useState(1);
    const [place, setPlace] = useState('');

    // paspaudus edit, modal data is null gauna objekta, pasikeicia modal data ir persirenderina viskas;
    useEffect (() => {
        if (null === modalData) {
            return;
        }
        setName(modalData.name);
        setType(modalData.type);
        setPlace(modalData.place);
    }, [modalData]);

    const handleEdit = () => {
      const data = {name, type, place, id: modalData.id}; // edit'e ID nesiredaguoja, paimamas toks koks buvo gautas kuriant;
      setEditData(data);
      setModalData(null);
    }

    if (modalData === null) {
        return null;
    }

    return (
        <div className="modal">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">Ex editor</h5>
                    <button type="button" className="close" onClick={() => setModalData(null)}>
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" className="form-control" value={name} onChange={e => setName(e.target.value)}></input>
                        <small className="form-text text-muted">Enter Ex name here.</small>
                    </div>
                    <div className="form-group">
                        <label>Type</label>
                        <select className="form-control" value={type} onChange={e => setType(e.target.value)}>
                            <option value='1'>Test</option>
                            <option value='2'>Written</option>
                            <option value='3'>Spoken</option>
                        </select>
                        <small className="form-text text-muted">Enter Ex name here.</small>
                    </div>
                    <div className="form-group">
                        <label>Place</label>
                        <input type="text" className="form-control" value={place} onChange={e => setPlace(e.target.value)}></input>
                        <small className="form-text text-muted">Enter Ex place here.</small>
                    </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-outline-secondary" onClick={() => setModalData(null)}>Close</button>
                    <button type="button" className="btn btn-outline-primary" onClick={handleEdit}>Save changes</button>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Edit;