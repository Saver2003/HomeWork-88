const express = require('express');
const mongoose = require('mongoose');
const config = require('./config');
const cors = require('cors');

const users = require('./app/users');
const posts = require('./app/posts');
const comments = require('./app/comments');

const app = express();

const port = 8000;

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

mongoose.connect(config.db.url + '/' + config.db.name);

const db = mongoose.connection;

db.once('open', () => {
  console.log('Mongoose connected!');

  app.use('/posts', posts());
  app.use('/users', users());
  app.use('/comments', comments());


  app.listen(port, () => {
    console.log(`Server started on ${port} port!`);
  })
});

