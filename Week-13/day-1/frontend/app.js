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

app.get(`/greeter`, (req, res) => {
  const { name, title } = req.query;

  if (!name && !title) {
    res.status(400).json({
      error: `Please provide a name and a title!`,
    });
  } else if (!title) {
    res.status(400).json({
      error: `Please provide a title!`,
    });
  } else if (!name) {
    res.status(400).json({
      error: `Please provide a name!`,
    });
  } else {
    const responseObject = {
      welcome_message: `Oh, hi there ${name}, my dear ${title}!`,
    };
    res.json(responseObject);
  }
});

app.listen(PORT, () => {
  `Server now listens to PORT 3000`;
});
