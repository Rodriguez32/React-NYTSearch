const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const routes = require('./routes');


const app = express();

// Bodyparser Middleware
app.use(bodyParser.json());

// DB config
const db = require('./config/keys').mongoURI;

// Add routes, both api and view
app.use(routes);


//Connect to the Mongo DB
mongoose    
    .connect(db)
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));


const port = process. env.PORT || 3002;

app.listen(port, () => console.log(`Server started on port ${port}`));