`use strict`;

const express = require(`express`);
const path = require(`path`);

const app = express();
const PORT = 3000;

app.use(express.static(`assets`));

app.get(`/`, (req, res) => {
  res.sendFile(path.join(__dirname, `index.html`));
});

app.listen(PORT, () => {
  `Server now listens to PORT 3000`;
});
