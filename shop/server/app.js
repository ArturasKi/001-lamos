const express = require("express"); // užkrauna biblioteką;
const app = express(); // pasakom, jog biblioteka vadinasi app;
const port = 3003; // pasako kuriam port'e veiks;
const cors = require("cors");
app.use(cors());
const mysql = require("mysql");

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

const con = mysql.createConnection({
  // daromas connection prie DB
  host: "localhost",
  user: "root",
  password: "",
  database: "la_ma_shop",
});

app.listen(port, () => {
    console.log(`Raccoon is listening to port Nr ${port}`);
  });

//CREATE CATEGORY
// INSERT INTO table_name (column1, column2, column3, ...)
// VALUES (value1, value2, value3, ...);
app.post("/admin/cats", (req, res) => {
  // post - routeris, postinam info i serveri;
  const sql = `
  INSERT INTO cats
  (title)
  VALUES (?)
`;
  con.query(
    sql,
    [req.body.title],
    (err, result) => {
      if (err) throw err;
      res.send({ result, msg: { text: "New category was created!", type: "success" } });
    }
  );
});

//READ CATEGORIES
app.get("/admin/cats", (req, res) => {
  // get - routeris, paimam info is serverio;
  const sql = `
  SELECT
  *
  FROM cats
  ORDER by title
  `;
  con.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

//DELETE CATEGORY
// DELETE FROM table_name WHERE condition;
app.delete("/admin/cats/:id", (req, res) => {
  // delete - routeris, istrinama info is serverio;
  const sql = `
  DELETE FROM cats
  WHERE id = ?
`;
  con.query(sql, [req.params.id], (err, result) => {
    if (err) throw err;
    res.send({ result, msg: { text: "Category was deleted", type: "danger" } });
  });
});

//EDIT CATEGORY
app.put("/admin/cats/:id", (req, res) => {
  // delete - routeris, istrinama info is serverio;
  const sql = `
  UPDATE cats
  SET title = ?
  WHERE id = ?
`;
  con.query(
    sql,
    [req.body.title, req.params.id],
    (err, result) => {
      if (err) throw err;
      res.send({ result, msg: { text: "Category was edited", type: "info" } });
    }
  );
});

//CREATE PRODUCTS
app.post("/admin/products", (req, res) => {
  // post - routeris, postinam info i serveri;
  const sql = `
  INSERT INTO products
  (title, price, in_stock, cats_id)
  VALUES (?, ?, ?, ?)
`;
  con.query(
    sql,
    [req.body.title, req.body.price, req.body.inStock, req.body.cat],
    (err, result) => {
      if (err) throw err;
      res.send({ result, msg: { text: "New product was created!", type: "success" } });
    }
  );
});