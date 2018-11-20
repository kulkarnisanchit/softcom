const mongoose = require('mongoose');

const ClientModel = require('../models/client.model');
let offset = 0;
let limit = 5;

exports.test = function (req, res) {
    res.send('For the Test!');
};

exports.getClient = (req, res) => {
    ClientModel.findById(req.params.id)
    .then((err, client) => {
        if (err) return res.send(err);
        res.send(client);
    })
};

exports.getAll = (req, res) => {
    ClientModel.paginate({}, { offset: offset, limit: limit }, (err, clients) => {
        if (err) return res.send(err);
        res.send(clients);
    });
};

exports.add = function (req, res) {
    const newClient = new ClientModel({
        _id: new mongoose.Types.ObjectId,
        name: req.body.name,
        phoneNumber: req.body.phoneNumber,
        email: req.body.email
    });
    newClient.save(function (err) {
        if (err) return res.send(err);
        res.send('client added successfully!');
    });
};

exports.update = function (req, res) {
    ClientModel.findByIdAndUpdate(req.params.id, { $set: req.body }, (err, client) => {
        if (err) return res.send(err);
        res.send('client udpated successfully!');
    });
};

exports.delete = (req, res) => {
    ClientModel.findByIdAndDelete(req.params.id, function (err) {
        if (err) return res.send(err);
        res.send('client deleted successfully!');
    })
};