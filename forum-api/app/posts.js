const express = require('express');
const multer = require('multer');
const nanoid = require('nanoid');
const path = require('path');

const Post = require('../models/Post');

const config = require('../config');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, config.uploadPath);
  },
  filename: (req, file, cb) => {
    cb(null, nanoid() + path.extname(file.originalname));
  }
});

const upload = multer({storage});

const router = express.Router();


const createRouter = () => {
  router.get('/', (req, res) => {
    Post.find()
      .then(posts => res.send(posts))
      .catch(() => res.sendStatus(500))
  });

  router.post('/', upload.single('image'), (req, res) => {
    const postData = req.body;

    if (req.file) {
      postData.photo = req.file.filename;
    } else {
      postData.photo = null;
    }

    const post = new Post(req.body);

    post.save()
      .then(post => res.send(post))
      .catch(error => res.status(400).send(error))
  });

  return router;
};

module.exports = createRouter;