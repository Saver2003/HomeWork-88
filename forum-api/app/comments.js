const express = require('express');

const auth = require('../auth');
const User = require('../models/User');
const Comment = require('../models/Comment');

const router = express.Router();

const createRouter = () => {
  router.get('/', (req, res) => {
    if (req.query.post) {
      Comment.find({post: req.query.post})
        .then(results => res.send(results.reverse()))
        .catch(() => res.sendStatus(500))
    }
  });

  router.post('/', auth, async (req, res) => {
    const token = req.get('Token');

    const user = await User.findOne({token});
    if (!user) {
      res.status(401).send({error: 'user not authorised!'})
    } else {
      const commentData = {
        user: user._id,
        title: req.body.title,
        post: req.body.post,
        description: req.body.description,
      };
      const comment = new Post(commentData);
      comment.save()
        .then(comment => res.send(comment))
        .catch(error => res.status(400).send(error));
    }
  });

  return router;
};

module.exports = createRouter;