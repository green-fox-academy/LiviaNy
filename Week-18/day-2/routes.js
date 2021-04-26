`use strict`;

export const app = express();
import express from 'express';
import { conn } from './server.js';
import * as path from 'path';
import { fileURLToPath } from 'url';
// import cors from 'cors';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cors());

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

app.delete(`api/questions/:id`, (req, res) => {
  const { id } = req.params;

  conn.query(`DELETE FROM questions WHERE ID = ?`, { id }, (err, row) => {
    if (err) {
      res.status(500).json({ error: `database error` });
      return;
    }
  });

  conn.query(`DELETE FROM answers WHERE question_id = ?`, { id }, (err, row) => {
    if (err) {
      res.status(500).json({ error: `database error` });
      return;
    }
  });
});

app.post('/api/questions', (req, res) => {
  const { question, answer_1, answer_2, answer_3, answer_4 } = req.body;
  const answer1IsTrue = isTrue(answer_1);
  const answer2IsTrue = isTrue(answer_2);
  const answer3IsTrue = isTrue(answer_3);
  const answer4IsTrue = isTrue(answer_4);
  const answer1 = answer(answer_1);
  const answer2 = answer(answer_2);
  const answer3 = answer(answer_3);
  const answer4 = answer(answer_4);

  conn.query('INSERT INTO questions (question) VALUE (?)', [question], (err, row) => {
    if (err) {
      res.status(500).json({ error: 'database error' });
      return;
    }
    const id = row.insertId;
    conn.query(
      'INSERT INTO answers (question_id, answer, is_correct) VALUES (?, ?, ?)',
      [id, answer1, answer1IsTrue],
      (err, res) => {
        if (err) {
          res.status(500).json({ error: 'database error' });
          return;
        }
      }
    );

    conn.query(
      'INSERT INTO answers (question_id, answer, is_correct) VALUES (?, ?, ?)',
      [id, answer2, answer2IsTrue],
      (err, res) => {
        if (err) {
          res.status(500).json({ error: 'database error' });
          return;
        }
      }
    );

    conn.query(
      'INSERT INTO answers (question_id, answer, is_correct) VALUES (?, ?, ?)',
      [id, answer3, answer3IsTrue],
      (err, res) => {
        if (err) {
          res.status(500).json({ error: 'database error' });
          return;
        }
      }
    );

    conn.query(
      'INSERT INTO answers (question_id, answer, is_correct) VALUES (?, ?, ?)',
      [id, answer4, answer4IsTrue],
      (err, res) => {
        if (err) {
          res.status(500).json({ error: 'database error' });
          return;
        }
      }
    );
  });
});

function isTrue(answer) {
  if (answer[1] === 'on') {
    return 1;
  } else {
    return 0;
  }
}

function answer(answer) {
  if (answer[1] === 'on') {
    return answer[0];
  } else {
    return answer;
  }
}
