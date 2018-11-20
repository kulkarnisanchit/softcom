const mongoose = require('mongoose');
const paginate = require('mongoose-paginate')

const Schema = mongoose.Schema;

const clientSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name:{ type: String, require: true },
    email:{ type: String, require: false },
    phoneNumber:{ type: String, require: true }
});

clientSchema.plugin(paginate);
module.exports = Client = mongoose.model('clients', clientSchema);