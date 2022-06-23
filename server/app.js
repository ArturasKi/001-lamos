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
  database: "la_ma",
});

// Routes
// app.get('/', (req, res) => {
//   res.send('Fo Shizl Manizl')
// }) // kelias, kuris ('/' pradinis linkas)

// app.get('/zuikis', (req, res) => {
//   res.send('Labas, Zuiki!')
// }) // routingas

//READ kai skaitom 'select'
app.get("/medziai", (req, res) => {
  // get - routeris, paimam info is serverio;
  const sql = `
  SELECT
  t.title, g.title AS good, height, type, t.id
  FROM trees AS t
  LEFT JOIN goods AS g
  ON t.goods_id = g.id

  `;
  con.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});
app.get("/gerybes", (req, res) => {
  // get - routeris, paimam info is serverio;
  const sql = `
    SELECT
    g.title, g.id, COUNT(t.id) AS trees_count
    FROM trees AS t
    RIGHT JOIN goods AS g
    ON t.goods_id = g.id
    GROUP BY g.id
    ORDER BY COUNT(t.id) DESC
  `;
  con.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

app.listen(port, () => {
  console.log(`Bebras klauso porto Nr ${port}`);
});

//CREATE
// INSERT INTO table_name (column1, column2, column3, ...)
// VALUES (value1, value2, value3, ...);
app.post("/medziai", (req, res) => {
  // post - routeris, postinam info i serveri;
  const sql = `
  INSERT INTO trees
  (type, title, height, goods_id)
  VALUES (?, ?, ?, ?)
`;
  con.query(
    sql,
    [req.body.type, req.body.title, req.body.height ? req.body.height : 0 , req.body.good !== '0' ? req.body.good : null],
    (err, result) => {
      if (err) throw err;
      res.send({ result, msg: { text: "Ok, Zuiki", type: "success" } });
    }
  );
});
app.post("/gerybes", (req, res) => {
  // post - routeris, postinam info i serveri;
  const sql = `
  INSERT INTO goods
  (title)
  VALUES (?)
`;
  con.query(sql, [req.body.title], (err, result) => {
    if (err) throw err;
    res.send({ result, msg: { text: "Ok, Zuiki", type: "success" } });
  });
});

//DELETE
// DELETE FROM table_name WHERE condition;
app.delete("/medziai/:treeId", (req, res) => {
  // delete - routeris, istrinama info is serverio;
  const sql = `
  DELETE FROM trees
  WHERE id = ?
`;
  con.query(sql, [req.params.treeId], (err, result) => {
    if (err) throw err;
    res.send({ result, msg: { text: "Ok, Bebras", type: "success" } });
  });
});
app.delete("/gerybes/:goodId", (req, res) => {
  // delete - routeris, istrinama info is serverio;
  const sql = `
  DELETE FROM goods
  WHERE id = ?
`;
  con.query(sql, [req.params.goodId], (err, result) => {
    if (err) throw err;
    res.send({ result, msg: { text: "Ok, Bebras", type: "success" } });
  });
});

// EDIT
// UPDATE table name
// SET column1 = value1, column2 = value2, ...
// WHERE condition;

app.put("/medziai/:treeId", (req, res) => {
  // delete - routeris, istrinama info is serverio;
  const sql = `
  UPDATE trees
  SET title = ?, type = ?, height = ?, goods_id = ?
  WHERE id = ?
`;
  con.query(
    sql,
    [req.body.title, req.body.type, req.body.height, req.body.good, req.params.treeId],
    (err, result) => {
      if (err) throw err;
      res.send({ result, msg: { text: "Ok, Barsukai", type: "success" } });
    }
  );
});

// VALUES turi buti irasomi kintamieji, kurie atitinka stulpeli;
// post duomenys eina body'je;

// kai paspaudziam mygtuka, useEffect paleidzia axios, axios per interneta nueina i serveri, serveris pagal routeri paziuri, ka daryti pagal duomenis, pasikreipia i duomenu baze ir kazka padaro;

// null - neegzistuojantis objektas;
// undefined - niekas nieko nezino;
