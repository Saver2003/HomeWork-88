const express = require('express');
const multer = require('multer');
const nanoid = require('nanoid');
const path = require('path');

const Post = require('../models/Post');
const auth = require('../auth');
const config = require('../config');
const User = require('../models/User');


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
      .then(results => res.send(results.reverse()))
      .catch(() => res.sendStatus(500))
  });

  router.post('/', [auth, upload.single('image')], async (req, res) => {
    const token = req.get('Token');

    const user = await User.findOne({token});
    const data = req.body;
    if (!user) {
      res.status(401).send({error: 'user not authorised!'})
    } else {

      if (req.file) {
        data.image = req.file.filename;
      } else {
        data.image = null;
      }

      if (data.image || data.description) {
        console.log(req.body)
        const postData = {
          user: user._id,
          title: req.body.title,
          description: req.body.description,
          image: data.image
        }
        const post = new Post(postData);
        post.save()
          .then(post => res.send(post))
          .catch(error => res.status(400).send(error));
      } else {
        res.status(400).send({error: 'description or image is required!'})
      }
    }
  });

  return router;
};

module.exports = createRouter;