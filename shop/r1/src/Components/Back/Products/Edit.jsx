import { useEffect, useState, useContext } from "react";
import BackContext from "../BackContext";

function Edit() {

  const { modalProduct, setEditProduct, setModalProduct, cats } = useContext(BackContext);

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [inStock, setInStock] = useState(false);
  const [cat, setCat] = useState('0');

  // paspaudus edit, modal data is null gauna objekta, pasikeicia modal data ir persirenderina viskas;
  useEffect(() => {
    if (null === modalProduct) {
      return;
    }
    console.log(modalProduct);
    setTitle(modalProduct.title);
    setPrice(modalProduct.price);
    setInStock(modalProduct.in_stock ? true : false);
    setCat(cats.filter(c => c.title === modalProduct.cat)[0].id);
  }, [modalProduct, cats]);

  const handleEdit = () => {
    const data = { 
      title, 
      id: modalProduct.id, 
      in_stock: parseInt(inStock), 
      price: parseFloat(),
      cat: parseInt(cat)
    }; // edit'e ID nesiredaguoja, paimamas toks koks buvo gautas kuriant;
    setEditProduct(data);
    setModalProduct(null);
  };

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
        <div className="form-group form-check">
          <input type="checkbox" className="form-check-input" id="in--stock" checked={inStock} onChange={() => setInStock(i => !i)}/>
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
