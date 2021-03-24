`use strict`;

import express from 'express';
import mysql from 'mysql';

const app = express();
const PORT = 3000;

let conn = mysql.createConnection({
  host: `localhost`,
  user: `root`,
  password: `password`,
  database: `reddit`,
  insecureAuth: `true`,
});

conn.connect((err) => {
  if (err) {
    throw err;
  } else {
    console.log(`Connected to mysql`);
  }
});

app.use(express.static(`public`));

app.get(`/hello`, (req, res) => {
  res.send(`Hello world`);
});

app.get(`/post`, (req, res) => {
  res.set(`Content-type`, `application/json`);
  conn.query(`SELECT * FROM post`, (err, result) => {
    if (err) {
      res.status(500).json({ errror: `database error` });
      return;
    }
    return res.json({ post: result });
  });
});

app.listen(PORT, () => {
  `app listent on port ${PORT}`;
});
