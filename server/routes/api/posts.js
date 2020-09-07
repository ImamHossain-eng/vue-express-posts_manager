const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();

//get posts
router.get('/', async (req, res) => {
  const posts = await loadPostsCollection();
  res.send(
    await posts
      .find({}, function (err, posts) {
        if (err) {
          console.log(err);
        } else {
          console.log('Success');
        }
      })
      .toArray()
  );
});

//add post

//delete post

const URI =
  'mongodb+srv://babu2228:babu2228@post-vue.a3cba.mongodb.net/test?retryWrites=true&w=majority';

async function loadPostsCollection() {
  await mongoose.connect(URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
  console.log('mongoDB connected');
}

module.exports = router;
