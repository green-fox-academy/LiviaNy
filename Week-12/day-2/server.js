`use strict`;

const express = require(`express`);
const app = express();
const path = require(`path`);

app.use(`/`, function (req, res) {
  res.sendFile(path.join(__dirname, `index.html`));
});

app.use(`/hu`, function (req, res) {
  res.sendFile(path.join(__dirname, `index.hu.html`));
});

app.listen(3000);
