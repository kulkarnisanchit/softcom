const express = require ('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
//const passport = require('passport');

const users = require('./routes/api/users');
const projects = require('./routes/api/projects');
const clients = require('./routes/api/clients');

const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

const db = require('./config/keys').mongoURI;

mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log('connected to mongodb'))
    .catch(err => console.log('not connected to mongodb', err));

app.use('/api/users', users);
app.use('/api/clients', clients);
app.use('/api/projects', projects);

/* app.use(express.static(__dirname + '/dist/softcom'));
app.get('/*', function(req,res) {
res.sendFile(path.join(__dirname+'/dist/softcom/index.html'));
}); */

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`server is running on ${port}`));
