const express = require('express'); // užkrauna biblioteką;
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
  
  const con = mysql.createConnection({ // daromas connection prie DB
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
app.get("/trees", (req, res) => {
    const sql = `
    SELECT
    *
    FROM trees
  `;
    con.query(sql, (err, result) => {
      if (err) throw err;
      res.send(result);
    });
  });

app.listen(port, () => {
  console.log(`Bebras klauso porto Nr ${port}`)
})

//CREATE 
// INSERT INTO table_name (column1, column2, column3, ...)
// VALUES (value1, value2, value3, ...);
app.post("/trees", (req, res) => {
  const sql = `
  INSERT INTO trees
  (type, title, height)
  VALUES (?, ?, ?)
`;
  con.query(sql, [req.body.type, req.body.title, req.body.height], (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

// VALUES turi buti irasomi kintamieji, kurie atitinka stulpeli;
// post duomenys eina body'je;