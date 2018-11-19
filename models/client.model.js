const mongoose = require('mongoose');
const paginate = require('mongoose-paginate')

const Schema = mongoose.Schema;

const clientSchema = new Schema({
    name:{ type: String, require: true },
    email:{ type: String, require: true },
    password:{ type: String, require: true },
    phoneNumber:{ type: Number, require: false }
});

clientSchema.plugin(paginate);
module.exports = Client = mongoose.model('clients', clientSchema);