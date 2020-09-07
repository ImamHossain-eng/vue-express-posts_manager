const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
//initiate app
const app = express();

//middleware
app.use(bodyParser.json());

app.use(cors());

//connect routes
const posts = require('./routes/api/posts');

app.use('/api/posts', posts);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started at port ${port}`));
