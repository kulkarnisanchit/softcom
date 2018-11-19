const mongoose = require('mongoose');
const paginate = require('mongoose-paginate')
const users = require('./user.model');
const users = require('./client.model');

const Schema = mongoose.Schema;

const projectSchema = new Schema({
    name:{
        type: String,
        require: true
    },

    client: client.name,

    startedOn:{
        type: Date,
        default: Date.now
    },
    endsOn:{
        type: Date,
        default: Date.now
    },
    workingPeople:{
        users:[user.name]
    }
});

projectSchema.plugin(paginate);
module.exports = User = mongoose.model('projects', projectSchema);