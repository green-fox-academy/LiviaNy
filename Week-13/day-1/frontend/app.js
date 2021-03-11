`use strict`;

const express = require(`express`);

const app = express();
const PORT = 3000;

app.get(`/`, (req, res) => {
  res.send(`OK!`);
});

app.listen(PORT, () => {
  `Server now listens to PORT 3000`;
});
