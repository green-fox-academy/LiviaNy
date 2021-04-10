`use strict`;

import express from 'express';

const app = express();
const PORT = 3000;

app.use(express.static(`public`));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/signup', function (req, res) {
  const username = req.body.username;
  const email = req.body.email;
  if (username === undefined || email === undefined) {
    res.json(`Please feed me some data`);
  } else {
    res.send(
      `<body style="background-image:linear-gradient(to top right, #ef6373, #d18e43)">
      <h1>
        Thanks ${username}, we will send updates to ${email}
      </h1>
      </body>`
    );
  }
});

app.listen(PORT, () => {
  console.log(`App listens on port ${PORT}`);
});
