const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const nunjucks = require('nunjucks');

const app = express();

const { User } = require('./app/models');

User.create({ name: 'Bruno', email: 'brunogcarpinellip@gmail.com', password: '123456' });

nunjucks.configure(path.resolve('app', 'views'), {
  autoescape: true,
  express: app,
});

app.set('view engine', 'njk');
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.render('index');
});

app.listen(3000);
