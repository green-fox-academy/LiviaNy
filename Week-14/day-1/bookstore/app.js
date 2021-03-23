`use strict`;

import cors from 'cors';
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

app.use('/', express.static('public'));
app.use(express.json());
app.use(cors());

app.get(`/`, (req, res) => {
  res.send(`Server works perfectly`);
});

app.get(`/books`, (req, res) => {
  conn.query(
    'SELECT book_mast.book_id, book_mast.book_name, author.aut_name, category.cate_descrip, publisher.pub_name, book_mast.book_price FROM book_mast JOIN author ON author.aut_id=book_mast.aut_id JOIN category ON category.cate_id=book_mast.cate_id JOIN publisher ON publisher.pub_id=book_mast.pub_id;',
    (err, result) => {
      if (err) {
        res.status(500).json({ error: `database error` });
        return;
      }
      let filtered = {};
      if (Object.keys(req.query).length === 0) {
        res.send(result);
        return;
      }

      Object.keys(req.query).forEach((filter) => {
        if (filter === 'category') {
          filtered = result.filter((item) => item.cate_descrip.toLowerCase() === req.query.category.toLowerCase());
        }
        if (filter === 'author') {
          filtered = result.filter(
            (item) =>
              item.aut_name.toLowerCase().replace(/\s/g, '') === req.query.author.toLowerCase().replace(/\s/g, '')
          );
        }
        if (filter === 'title') {
          filtered = result.filter(
            (item) =>
              item.book_name.toLowerCase().replace(/\s/g, '') === req.query.title.toLowerCase().replace(/\s/g, '')
          );
        }
        if (filter === 'publisher') {
          filtered = result.filter(
            (item) =>
              item.pub_name.toLowerCase().replace(/\s/g, '') === req.query.publisher.toLowerCase().replace(/\s/g, '')
          );
        }
        if (filter === 'plt') {
          filtered = result.filter((item) => Number(item.book_price) <= Number(req.query.plt));
        }
        if (filter === 'pgt') {
          filtered = result.filter((item) => Number(item.book_price) >= Number(req.query.pgt));
        }
      });

      res.send(filtered);
    }
  );
});

app.listen(PORT, () => {
  `App listens to port ${PORT}`;
});
