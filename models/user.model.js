const mongoose = require('mongoose');
const paginate = require('mongoose-paginate');

const Schema = mongoose.Schema;

const userSchema = new Schema({
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
    },
    userType:{
        type: String,
        require: false
    }
});

userSchema.plugin(paginate);
module.exports = User = mongoose.model('users', userSchema);