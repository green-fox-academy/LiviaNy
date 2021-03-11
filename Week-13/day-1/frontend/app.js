`use strict`;

const express = require(`express`);
const path = require(`path`);

const app = express();
const PORT = 3000;

app.use(express.static(`assets`));

app.get(`/`, (req, res) => {
  res.sendFile(path.join(__dirname, `index.html`));
});

app.get(`/doubling/`, (req, res) => {
  const { input } = req.query;

  if (input === undefined) {
    const resObject = {
      error: `Please provide an input!`,
    };
    res.json(resObject);
  } else {
    const intInput = parseInt(input);
    const inputDouble = intInput * 2;
    res.json({
      received: intInput,
      result: inputDouble,
    });
  }
});

app.listen(PORT, () => {
  `Server now listens to PORT 3000`;
});
