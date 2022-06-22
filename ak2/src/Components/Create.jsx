import { useState } from 'react';


function Create({setCreateData}) {

    const [name, setName] = useState('');
    const [type, setType] = useState(1);
    const [place, setPlace] = useState('');

    const handleCreate = () => {
      const data = {name, type, place};
      setCreateData(data);
      setName('');
      setType('1');
      setPlace('');
    }

    return (
        <div className="card mt-4">
            <div className="card-header">
              <h2>Create new tree</h2>
            </div>
            <div className="card-body">
              <div className="form-group">
                <label>Name</label>
                <input type="text" className="form-control" value={name} onChange={e => setName(e.target.value)}></input>
                <small className="form-text text-muted">Enter tree name here.</small>
              </div>
              <div className="form-group">
                <label>Type</label>
                <select className="form-control" value={type} onChange={e => setType(e.target.value)}>
                    <option value='1'>Test</option>
                    <option value='2'>Written</option>
                    <option value='3'>Spoken</option>
                </select>
                <small className="form-text text-muted">Select tree type.</small>
              </div>
              <div className="form-group">
                <label>Place</label>
                <input type="text" className="form-control" value={place} onChange={e => setPlace(e.target.value)}></input>
                <small className="form-text text-muted">Enter tree height here.</small>
              </div>
              <button type="button" className="btn btn-outline-primary" onClick={handleCreate}>Create</button>
            </div>
          </div>
    )
}

export default Create;