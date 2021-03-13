`use strict`;

import express from 'express';

const app = express();
const PORT = 3000;

function jodaSpeaker(text) {
  const textArray = text.split(` `);
}

app.use(express.json());

app.post(`/sith`, (req, res) => {
  const text = req.body.text;
  if (text === undefined) {
    res.json({
      error: `Feed me some text you have to, padawan young you are. Hmmm.`,
    });
  } else {
  }
});

app.listen(PORT, () => {
  `App now listens to port ${PORT}`;
});
