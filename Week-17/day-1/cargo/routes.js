`use strict`;

import express from 'express';
export const app = express();

const actualCargo = {
  caliber25: 0,
  caliber30: 0,
  caliber50: 0,
  shipstatus: 'empty',
  ready: false,
};

app.get('/rocket', (req, res) => {
  res.status(200).send(actualCargo);
});

app.get('/rocket/fill', (req, res) => {
  const caliber = req.query.caliber;
  const amount = parseInt(req.query.amount);
  if (!caliber || !amount) {
    res.status(400).send({ error: 'Please feed me some data' });
  } else {
  }
  const actualAmmo = actualCargo.caliber25 + actualCargo.caliber30 + actualCargo.caliber50;
  loadShip(caliber, actualAmmo, amount);
  res.send({
    received: caliber,
    amount: amount,
    shipStatus: actualCargo.shipstatus,
    ready: actualCargo.ready,
  });
});

function loadShip(caliber, actualAmmo, ammoToFill) {
  const ammo = actualAmmo + ammoToFill;
  if (caliber === '.25') {
    if (ammo === 0) {
      shipStatus('empty', false);
      actualCargo.caliber25 += ammoToFill;
    } else if (ammo === 12500) {
      shipStatus('full', true);
      actualCargo.caliber25 += ammoToFill;
    } else if (ammo > 12500) {
      shipStatus('overloaded', false);
      actualCargo.caliber25 += ammoToFill;
    } else {
      actualCargo.caliber25 += ammoToFill;
      shipStatus(`${(ammo / 12500) * 100}%`, false);
    }
  } else if (caliber === '.30') {
    if (ammo === 0) {
      shipStatus('empty', false);
      actualCargo.caliber30 += ammoToFill;
    } else if (ammo === 12500) {
      shipStatus('full', true);
      actualCargo.caliber30 += ammoToFill;
    } else if (ammo > 12500) {
      shipStatus('overloaded', false);
      actualCargo.caliber30 += ammoToFill;
    } else {
      shipStatus(`${(ammo / 12500) * 100}%`, false);
      actualCargo.caliber30 += ammoToFill;
    }
  } else if (caliber === '.50') {
    if (ammo === 0) {
      shipStatus('empty', false);
      actualCargo.caliber50 += ammoToFill;
    } else if (ammo === 12500) {
      shipStatus('full', true);
      actualCargo.caliber50 += ammoToFill;
    } else if (ammo > 12500) {
      shipStatus('overloaded', false);
      actualCargo.caliber50 += ammoToFill;
    } else {
      actualCargo.caliber50 += ammoToFill;
      shipStatus(`${(ammo / 12500) * 100}%`, false);
    }
  }
}

function shipStatus(status, ready) {
  actualCargo.shipstatus = status;
  actualCargo.ready = ready;
}
