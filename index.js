const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const nunjucks = require('nunjucks');

const app = express();

nunjucks.configure(path.resolve('app', 'views'), {
  autoescape: true,
  express: app,
});

app.set('view engine', 'njk');
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send('Hello Wrold!');
});

app.listen(3000);
