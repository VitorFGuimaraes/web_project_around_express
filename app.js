const express = require('express');

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/aroundb');

const app = express();
const port = 3000;

const usersRoute = require('./routes/users');

const cardsRoute = require('./routes/cards');

app.use((req, res, next) => {
  req.user = {
    _id: '5d8b8592978f8bd833ca8133',
  };

  next();
});

app.use(express.json());
app.use(usersRoute);
app.use(cardsRoute);
app.use(express.urlencoded({ extended: true }));

app.listen(port);
