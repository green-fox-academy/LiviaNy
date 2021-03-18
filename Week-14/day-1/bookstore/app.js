`use strict`;

import express from 'express';
import mysql from 'mysql';

const app = express();
const PORT = 3000;

app.use(express.static(`public`));

let conn = mysql.createConnection({
  host: `localhost`,
  user: `root`,
  password: `password`,
  database: `bookinfo`,
  insecureAuth: `true`,
});

conn.connect((err) => {
  if (err) {
    throw err;
  }
  console.log(`Connected to mysql`);
});

app.get(`/`, (req, res) => {
  res.send(`Server works perfectly`);
});

app.get(`/titles`, (req, res) => {
  conn.query(`SELECT book_name FROM book_mast;`, (err, result) => {
    console.log(result);
    if (err) {
      console.log(err);
      res.status(500).json({ error: `database error` });
      return;
    }
    res.json(result);
  });
});

app.listen(PORT, () => {
  `App listens to port ${PORT}`;
});
