const express = require ('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
//const passport = require('passport');

const users = require('./routes/api/users');

const app = express();
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

const db = require('./config/keys').mongoURI;

mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log('connected to mongodb'))
    .catch(err => console.log('not connected to mongodb', err));


app.use('/api/users', users);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`server is running on ${port}`));
