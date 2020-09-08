const mongoose = require('mongoose');

const URI =
  'mongodb+srv://babu2228:babu2228@post-vue.a3cba.mongodb.net/test?retryWrites=true&w=majority';

const connectDB = async () => {
  await mongoose.connect(URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
};

module.exports = connectDB;
