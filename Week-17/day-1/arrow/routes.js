`use strict`;

import express from 'express';
const app = express();

app.get('/yondu/', (req, res) => {
  if (!req.query.distance && !req.query.time) {
    res.status(400).send({ error: 'distance and time required' });
  } else {
    const distance = req.query.distance;
    const time = req.query.time;
    const speed = distance / time;
    const response = {
      distance: distance,
      time: time,
      speed: speed,
    };
    res.status(200).send(response);
  }
});
