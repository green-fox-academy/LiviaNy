`use strict`;

import express from 'express';
export const app = express();
const port = 3000;

const actualCargo = {
  caliber25: 0,
  caliber30: 0,
  caliber50: 0,
  shipstatus: 'empty',
  ready: false,
};

app.get('/rocket', (req, res) => {
  res.status(200).send(ship);
});

app.get('/rocket/fill', () => {
  const caliber = req.query.caliber;
  const amount = req.query.amount;
});

app.listen(port, () => {
  console.log(`app is running on port ${port}`);
});
