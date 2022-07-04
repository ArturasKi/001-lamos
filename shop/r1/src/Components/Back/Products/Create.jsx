import { useContext, useState } from "react";
import BackContext from "../BackContext";

function Create() {
  const { cats, setCreateProduct, showMessage } = useContext(BackContext);

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [inStock, setInStock] = useState(false);
  const [cat, setCat] = useState('0');

  const handleCreate = () => {

    if (cat === '0') {
      showMessage({text: 'Please select category!', type: 'danger'});
      return;
    }

    const data = { title, price: parseFloat(price), inStock: inStock ? 1 : 0, cat: parseInt(cat)}; // parseFloat -> gauname skaiciu;
    setCreateProduct(data);
    setTitle('');
    setPrice('');
    setInStock(false);
    setCat('0');
  };

  return (
    <div className="card mt-4">
      <div className="card-header">
        <h2>Create new Product</h2>
      </div>
      <div className="card-body">
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          ></input>
          <small className="form-text text-muted">Enter product title here.</small>
        </div>
        <div className="form-group">
          <label>Price</label>
          <input
            type="text"
            className="form-control"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          ></input>
          <small className="form-text text-muted">Enter price value here.</small>
        </div>
        <div className="form-group form-check">
          <input type="checkbox" className="form-check-input" id="in--stock" checked={inStock} onChange={() => setInStock(i => !i)}/>
          <label className="form-check-label" htmlFor="in--stock">Check me out</label>
        </div>
        <div className="form-group">
          <label>Categories</label>
            <select
                className="form-control"
                value={cat}
                onChange={(e) => setCat(e.target.value)}
              >
              <option value="0">Select category</option>
                {
                  cats ? cats.map(c => <option key={c.id} value={c.id}>{c.title}</option>) : null
                }
            </select>
            <small className="form-text text-muted">Select category here.</small>
        </div>





        <button
          type="button"
          className="btn btn-outline-primary with-loader"
          onClick={handleCreate}>Create</button>
      </div>
    </div>
  );
}

export default Create;
