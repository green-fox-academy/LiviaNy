`use strict`;

import express from 'express';
export const app = express();

let calorieTable = [
  { name: 'worm', amount: '1', calories: '100' },
  { name: 'leech', amount: '1', calories: '300' },
  { name: 'insect', amount: '1', calories: '50' },
  { name: 'cockroach', amount: '1', calories: '250' },
];

app.use(express.json());

app.get('/drax', (req, res) => {
  res.status(200).send(calorieTable);
});

app.post(`/drax/`, (req, res) => {
  const { name } = req.body;
  const { amount } = req.body;
  const { calorie } = req.body;
  if (!name || !amount || !calorie) {
    res.status(400).send({ error: 'Please feed me some data' });
  } else {
    addToList(name, amount, calorie);
    res.status(200).send(calorieTable);
  }
});

app.delete('/drax/:index', (req, res) => {
  const { index } = req.params;

  if (!index) {
    res.status(400).send({ error: 'Please feed me some data' });
  } else {
    deleteList(index - 1);
    console.log(calorieTable);
    res.status(200).send(calorieTable);
  }
});

app.put(`/drax/:index`, (req, res) => {
  const { amount } = req.body;
  const { index } = req.params;
  if (!index) {
    res.status(400).send({ error: `Please feed me some datas` });
  } else {
    changeAmount(index, amount);
    res.send(calorieTable);
  }
});

function addToList(newName, newAmount, newCalorie) {
  const newList = { name: newName, amount: newAmount, calorie: newCalorie };
  calorieTable.push(newList);
}

function deleteList(index) {
  calorieTable.splice(index, 1);
}

function changeAmount(index, newAmount) {
  calorieTable[index - 1].amount = newAmount;
  console.log(calorieTable[index].amount);
}
