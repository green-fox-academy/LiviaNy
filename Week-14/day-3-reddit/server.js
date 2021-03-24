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
app.use(express.json());

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
    return res.status(200).json({ result });
  });
});

app.post(`/post`, (req, res) => {
  const { title, url } = req.body;
  conn.query(`INSERT INTO post SET ?`, { title, url }, (err, result) => {
    if (err) {
      res.sendStatus(500).json({ error: `database error` });
      return;
    }
    if (title === undefined || url === undefined) {
      res.json({ error: `missing data, please feed me some data` });
    } else {
      res.sendStatus(200);
    }
  });
});

app.listen(PORT, () => {
  `app listent on port ${PORT}`;
});
