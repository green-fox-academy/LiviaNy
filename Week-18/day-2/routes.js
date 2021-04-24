`use strict`;

import express from 'express';
export const app = express();

app.use('/', express.static('public'));
app.use(express.json());

app.get('/game', (req, res) => {
  res.sendFile('index.html');
});
