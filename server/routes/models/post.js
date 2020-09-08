const mongoose = require('mongoose');

//Post Schema
let postSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  updated: {
    type: Date,
    default: Date.now
  }
});

let Post = (module.exports = mongoose.model('Post', postSchema));
