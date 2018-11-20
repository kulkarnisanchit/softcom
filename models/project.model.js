const mongoose = require('mongoose');
const paginate = require('mongoose-paginate')
//const Users = require('./user.model');
//const Client = require('./client.model');

const Schema = mongoose.Schema;

const projectSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name:{ type: String, require: true }, 
    client: {type: Schema.Types.ObjectId, ref: 'clients'},
    startedOn:{ type: Date },
    endsOn:{ type: Date },
    workingPeople:{ users:[{type: Schema.Types.ObjectId, ref: 'users'}] },
    type:{ type: String }
});

projectSchema.plugin(paginate);
module.exports = Project = mongoose.model('projects', projectSchema);