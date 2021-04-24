`use strict`;

export const app = express();
import express from 'express';
import { conn } from './server.js';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

app.use(express.static('public'));
app.use(express.json());

app.get('/game', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'));
});

app.get('/questions', (req, res) => {
  res.sendFile(path.join(__dirname, './public/settings.html'));
});

app.get('/api/game', (req, res) => {
  const randomNumber = Math.floor(Math.random() * 12) + 1;
  conn.query(
    `SELECT * FROM questions questions INNER JOIN answers ON questions.ID = answers.question_id WHERE question_id = ${randomNumber}; `,
    (err, row) => {
      if (err) {
        res.status(500).json({ error: `database error` });
        return;
      }
      const result = {
        id: row[0].ID,
        question: row[0].question,
        answer: [
          {
            question_id: row[0].question_id,
            id: row[0].id,
            answer_1: row[0].answer,
            is_correct: row[0].is_correct,
          },
          {
            question_id: row[1].question_id,
            id: row[1].id,
            answer_2: row[1].answer,
            is_correct: row[1].is_correct,
          },
          {
            question_id: row[2].question_id,
            id: row[2].id,
            answer_3: row[2].answer,
            is_correct: row[2].is_correct,
          },
          {
            question_id: row[3].question_id,
            id: row[3].id,
            answer_4: row[3].answer,
            is_correct: row[3].is_correct,
          },
        ],
      };
      res.send(result);
      return;
    }
  );
});

app.get(`/api/questions`, (req, res) => {
  conn.query('SELECT * FROM questions', (err, row) => {
    if (err) {
      res.status(500).json({ error: `database error` });
      return;
    }
    res.send(row);
  });
});
