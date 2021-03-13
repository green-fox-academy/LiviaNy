`use strict`;

const express = require(`express`);
const path = require(`path`);

const app = express();
const PORT = 3000;

function sum(array) {
  let result = 0;
  for (let i = 0; i < array.length; i++) {
    result += array[i];
  }
  return result;
}

function multiply(array) {
  let result = array[0];
  for (let i = 0; i < array.length; i++) {
    result *= array[i];
  }
  return result;
}

function double(array) {
  let result = [];
  array.forEach((element) => {
    result.push(element * 2);
  });
  return result;
}

app.use(express.json());

app.post(`/arrays/`, (req, res) => {
  const what = req.body.what;
  const numbers = req.body.numbers;

  if (what === `sum`) {
    const result = sum(numbers);
    res.json({
      result: result,
    });
  } else if (what === `multiply`) {
    const result = multiply(numbers);
    res.json({
      result: result,
    });
  } else if (what === `double`) {
    const result = double(numbers);
    res.json({
      result: result,
    });
  } else {
    res.json({
      error: `Please provide what to do with the numbers!`,
    });
  }
});

app.listen(PORT, () => {
  `App listens to port ${PORT}`;
});
