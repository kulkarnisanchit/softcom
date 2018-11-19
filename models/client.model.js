const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const clientSchema = new Schema({
    name:{
        type: String,
        require: true
    },
    email:{
        type: String,
        require: true
    },
    password:{
        type: String,
        require: true
    },
    phoneNumber:{
        type: Number,
        require: false
    }
});

module.exports = User = mongoose.model('clients', clientSchema);