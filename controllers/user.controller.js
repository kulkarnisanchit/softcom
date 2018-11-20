const UserModel = require('../models/user.model');
let offset = 0;
let limit = 5;

exports.test = function (req, res) {
    res.send('For the Test!');
};

exports.getUser = (req, res) => {
    UserModel.findById(req.params.id, (err, user) =>{
        if (err) return res.send(err);
        res.send(user);
    })
};

exports.getAll = (req, res) => {
    UserModel.paginate({}, { offset: offset, limit: limit }, (err, users) => {
        if (err) return res.send(err);
        res.send(users);
    });
}; 

exports.add = function (req, res) {
    const newUser = new UserModel({
        _id: new mongoose.Types.ObjectId,
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
    });
    newUser.save(function (err) {
        if (err) return res.send(err);
        res.send('User added successfully!');
      });
};

exports.update = function (req, res) {
    UserModel.findByIdAndUpdate(req.params.id, {$set: req.body}, (err, user) => {
        if (err) return res.send(err);
        res.send('User udpated successfully!');
    });
};

exports.delete = (req, res) => {
    UserModel.findByIdAndDelete(req.params.id, function (err) {
        if (err) return res.send(err);
        res.send('User deleted successfully!');
    })
};