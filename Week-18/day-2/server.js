`use strict`;

import { app } from './routes.js';
const port = 3000;
import mysql from 'mysql';

app.listen(port, () => {
  console.log(`app is running on port ${port}`);
});

let conn = mysql.createConnection({
  host: `localhost`,
  user: `root`,
  password: `password`,
  database: `quiz`,
  insecureAuth: `true`,
});

conn.connect((err) => {
  if (err) {
    throw err;
  }
  console.log(`Connected to mysql`);
});
