const express = require('express');
const mongodb = require('mongodb');
const mongoose = rewuire('mongoose');


const router = express.Router();

//get posts
router.get('/', (req, res) => {
  const posts =loadPost();
  res.send( posts.find({}).toArray());
});


//add post

//delete post


//Load all post from database
async function loadPost() {
  const client = await mongoose.connect('mongodb+srv://babu2228:babu2228@post-vue.a3cba.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology:true
  });
  mongoose.connection();
}

module.exports = router;
