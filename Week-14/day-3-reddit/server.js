`use strict`;

import express from 'express';
// import mysql from "mysql";

const app = express();
const PORT = 3000;

app.use(express.static(`public`));

app.get(`/hello`, (req, res) => {
  res.send(`Hello world`);
});

app.listen(PORT, () => {
  `app listent on port ${PORT}`;
});
