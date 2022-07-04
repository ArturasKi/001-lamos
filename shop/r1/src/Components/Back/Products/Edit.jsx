import { useEffect, useState, useContext } from "react";
import BackContext from "../BackContext";

function Edit() {

  const { modalProduct, setEditProduct, setModalProduct, cats } = useContext(BackContext);

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [inStock, setInStock] = useState(false);
  const [cat, setCat] = useState('0');
  const [lu, setLu] = useState('');

  const setDateFormat = d => {
    //yyyy-MM-ddThh:mm
    const date = new Date(Date.parse(d));
    const y = date.getFullYear();
    const m = ('' + (date.getMonth() + 1)).padStart(2, '0');
    const day = ('' + date.getDate()).padStart(2, '0');
    const h = ('' + date.getHours()).padStart(2, '0');
    const min = ('' + date.getMinutes()).padStart(2, '0');
    const out = y + '-' + m + '-' + day + 'T' + h + ':' + min;
    return out;
}

useEffect(() => {
    if (null === modalProduct) {
        return;
    }
    setTitle(modalProduct.title);
    setPrice(modalProduct.price);
    setLu(setDateFormat(modalProduct.lu));
    setInStock(modalProduct.in_stock ? true : false);
    setCat(cats.filter(c => c.title === modalProduct.cat)[0].id);
}, [modalProduct, cats]);

const handleEdit = () => {
    const data = {
        title,
        id: modalProduct.id,
        in_stock: inStock,
        price: parseFloat(price),
        cat: parseInt(cat),
        lu: lu
    };
    console.log(data);
    setEditProduct(data);
    setModalProduct(null);
}

  if (modalProduct === null) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Product changer</h5>
            <button
              type="button"
              className="close"
              onClick={() => setModalProduct(null)}
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
        <div className="form-group">
          <label>Date</label>
          <input
            type="datetime-local"
            className="form-control"
            value={lu}
            onChange={(e) => setLu(e.target.value)}
          ></input>
        </div>
        <div className="form-group form-check">
          <input type="checkbox" className="form-check-input" id="in--stock--modal" checked={inStock} onChange={() => setInStock(i => !i)}/>
          <label className="form-check-label" htmlFor="in--stock--modal">Check me out</label>
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
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-outline-secondary" onClick={() => setModalProduct(null)}>Close</button>
            <button type="button" className="btn btn-outline-primary" onClick={handleEdit}>Save changes</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Edit;