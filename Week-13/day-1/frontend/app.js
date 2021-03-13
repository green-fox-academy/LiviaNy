`use strict`;

const express = require(`express`);
const path = require(`path`);

const app = express();
const PORT = 3000;

app.use(express.static(`assets`));
app.use(express.json());

app.get(`/`, (req, res) => {
  res.sendFile(path.join(__dirname, `index.html`));
});

//doubling
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

//greeter
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

//appendA
app.get(`/appenda/:appendable`, (req, res) => {
  const { appendable } = req.params;

  if (!appendable) {
    res.status(404);
  } else {
    const appendedWithA = appendable + `a`;
    const appendedResposnse = {
      appended: appendedWithA,
    };
    res.json(appendedResposnse);
  }
});

//doUntil
function sum(number) {
  if (number <= 1) {
    return 1;
  } else {
    return number + sum(number - 1);
  }
}

function factor(number) {
  if (number <= 1) {
    return 1;
  } else {
    return number * factor(number - 1);
  }
}

app.post(`/dountil/:action`, (req, res) => {
  const number = req.body.until;
  const { action } = req.params;
  if (action === `sum`) {
    let result = sum(number);
    res.json({ result: result });
  } else if (action === `factor`) {
    let result = factor(number);
    res.json({ result: result });
  } else {
    res.json({
      error: `Please provide a number!`,
    });
  }
});

app.listen(PORT, () => {
  `Server now listens to PORT ${PORT}`;
});
