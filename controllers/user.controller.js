const UserModel = require('../models/user.model');

exports.test = function (req, res) {
    res.send('From the Test controller!');
};

exports.getUser = function (req, res) {
    UserModel.findById(req.params.id, (err, user) =>{
        if (err) return handleError(err);
        res.send(user);
    })
};

exports.getAll = function (req, res) {
    res.send('From the Test controller!');
};

exports.add = function (req, res) {
    const newUser = new UserModel({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
    });
    newUser.save(function (err) {
        if (err) return handleError(err);
        console.log('User saved to database');
      });
};

exports.update = function (req, res) {
    UserModel.findByIdAndUpdate(req.params.id, {$set: req.body}, (err, user) => {
        if (err) return next(err);
        res.send('User udpated.');
    });
};

exports.delete = (req, res) => {
    UserModel.findByIdAndDelete(req.params.id, function (err) {
        if (err) return next(err);
        res.send('User deleted successfully!');
    })
};