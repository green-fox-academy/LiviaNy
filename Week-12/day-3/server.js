const express = require(`express`);

const app = express();

app.get(`/`, function (req, res) {
  res.send(`This is the homepage`);
});
app.listen(3000);

app.get(`/contact`, function (req, res) {
  res.send(`this is the contact page`);
});
