`use strict`;

import express from 'express';
import mysql from 'mysql';

const app = express();
const PORT = 3000;

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

app.use(express.static(`public`));
app.use(express.json());

app.get(`/`, (req, res) => {
  res.send(`Server works perfectly`);
});

app.get(`/titles`, (req, res) => {
  conn.query(`SELECT book_name FROM book_mast;`, (err, result) => {
    if (err) {
      res.status(500).json({ error: `database error` });
      return;
    }
    res.json(result);
  });
});

app.listen(PORT, () => {
  `App listens to port ${PORT}`;
});
