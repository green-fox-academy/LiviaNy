`use strict`;

import express from 'express';
import mysql from 'mysql';
import cors from 'cors';

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

app.use(cors());
app.use(express.static(`public`));
app.use(express.json());
app.use(express.urlencoded());

app.get(`/hello`, (req, res) => {
  res.send(`Hello world`);
});

app.get(`/posts`, (req, res) => {
  req.accepts('application/json');
  req.header(`Content-type`, `application/json`);
  conn.query(`SELECT * FROM post WHERE is_active = true`, (err, result) => {
    if (err) {
      res.status(500).json({ error: `database error` });
      return;
    }
    return res.status(200).contentType(`application/json`).json({ posts: result });
  });
});

app.post(`/posts`, (req, res) => {
  req.accepts('application/json');
  req.header(`Content-type`, `application/json`);
  const { title, url } = req.body;

  conn.query(`INSERT INTO post SET ?`, { title, url }, (err, result) => {
    if (err) {
      res.status(500).json({ error: `database error` });
      return;
    }
    if (title === undefined || url === undefined) {
      res.json({ error: `missing data, please feed me some data` });
    } else {
      conn.query(`SELECT * FROM post WHERE id = ?`, result.insertId, (err, row) => {
        if (err) {
          res.json({ error: `database error` });
          return;
        }
        res.status(200).json({ row });
      });
    }
  });
});

app.put(`/posts/:id/upvote`, (req, res) => {
  req.accepts('application/json');
  req.header(`Content-type`, `application/json`);
  const { id } = req.params;
  conn.query(`SELECT * FROM post WHERE id = ? ;`, id, (err, result) => {
    if (err) {
      res.status(500).json({ error: `database error` });
      return;
    }
    conn.query(
      `UPDATE post SET score = ?, vote= ? WHERE id = ?;`,
      [result[0].score + 1, result[0].vote + 1, id],
      (err, row) => {
        if (err) {
          res.status(500).json({ error: `database error` });
          return;
        }
        conn.query(`SELECT * FROM post WHERE id =?`, id, (err, row) => {
          if (err) {
            res.json({ error: `database error` });
            return;
          }
          return res.json({ row });
        });
      }
    );
  });
});

app.put(`/posts/:id/downvote`, (req, res) => {
  req.accepts('application/json');
  req.header(`Content-type`, `application/json`);
  const { id } = req.params;
  conn.query(`SELECT * FROM post WHERE id = ? ;`, id, (err, result) => {
    if (err) {
      res.status(500).json({ error: `database error` });
      return;
    }
    conn.query(
      `UPDATE post SET score =?, vote= ? WHERE id = ?;`,
      [result[0].score - 1, result[0].vote - 1, id],
      (err, row) => {
        if (err) {
          res.status(500).json({ error: `database error` });
          return;
        }
        conn.query(`SELECT * FROM post WHERE id =?`, id, (err, row) => {
          if (err) {
            res.json({ error: `database error` });
            return;
          }
          return res.json({ row });
        });
      }
    );
  });
});

app.delete(`/posts/:id`, (req, res) => {
  req.accepts('application/json');
  req.header(`Content-type`, `application/json`);
  const { id } = req.params;
  console.log(id);
  conn.query(`SELECT * FROM post WHERE id = ?;`, id, (err, result) => {
    if (err) {
      res.status(500).json({ error: `database error` });
      return;
    }
    conn.query(`UPDATE post SET is_active = false WHERE id =?`, id, (err, row) => {
      if (err) {
        res.json({ error: `database error` });
        return;
      }
      conn.query(`SELECT * FROM post WHERE id =?`, id, (err, row) => {
        if (err) {
          res.json({ error: `database error` });
        }
        return res.status(201).json({ result });
      });
    });
  });
});

app.put(`/posts/:id`, (req, res) => {
  req.accepts('application/json');
  req.header(`Content-type`, `application/json`);
  const { title, url } = req.body;
  const { id } = req.params;
  conn.query(`SELECT * FROM post WHERE id = ?`, id, (err, result) => {
    if (err) {
      res.json({ error: `database error1` });
      return;
    }
    conn.query(`UPDATE post SET title = ?, url = ? WHERE id = ?`, [title, url, id], (err, row) => {
      if (err) {
        res.json({ error: `database error2` });
        return;
      }
      res.json({ result });
    });
  });
});

app.listen(PORT, () => {
  `app listent on port ${PORT}`;
});
