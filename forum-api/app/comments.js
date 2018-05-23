const express = require('express');

const auth = require('../auth');
const User = require('../models/User');
const Comment = require('../models/Comment');

const router = express.Router();

const createRouter = () => {
  router.get('/', (req, res) => {
    if (req.query.post) {
      Comment.find({post: req.query.post}).populate('user')
        .then(results => res.send(results.reverse()))
        .catch(() => res.sendStatus(500))
    }
  });

  router.post('/', auth, async (req, res) => {
      const commentData = {
        user: req.user._id,
        post: req.body.post,
        comment: req.body.comment,
        dateTime: new Date()
      };
      const comment = new Comment(commentData);
      comment.save()
        .then(comment => res.send(comment))
        .catch(error => res.status(400).send(error));

  });

  return router;
};

module.exports = createRouter;