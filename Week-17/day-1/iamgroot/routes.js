import express from 'express';
export const app = express();

app.get('/groot/', (req, res) => {
  // TODO: implement this method
  if (!req.query.message) {
    res.status(400).send({ error: 'I am Groot' });
  } else {
    const response = {
      received: req.query.message,
      translated: 'I am Groot!',
    };
    res.status(200).send(response);
  }
});
