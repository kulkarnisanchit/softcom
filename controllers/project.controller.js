const ProjectModel = require('../models/project.model');
let offset = 0;
let limit = 5;

exports.test = function (req, res) {
    res.send('For the Test!');
};

exports.getProject = (req, res) => {
    ProjectModel.findById(req.params.id, (err, project) => {
        if (err) return res.send(err);
        res.send(project);
    })
};

exports.getAll = (req, res) => {
    ProjectModel.paginate({}, { offset: offset, limit: limit }, (err, projects) => {
        if (err) return res.send(err);
        res.send(projects);
    });
};

exports.add = function (req, res) {
    const newProject = new ProjectModel({
        _id: new mongoose.Types.ObjectId,
        name: req.body.name,
        phoneNumber: req.body.phoneNumber,
        email: req.body.email
    });
    newProject.save(function (err) {
        if (err) return res.send(err);
        res.send('project added successfully!');
    });
};

exports.update = function (req, res) {
    ProjectModel.findByIdAndUpdate(req.params.id, { $set: req.body }, (err, project) => {
        if (err) return res.send(err);
        res.send('project udpated successfully!');
    });
};

exports.delete = (req, res) => {
    ProjectModel.findByIdAndDelete(req.params.id, function (err) {
        if (err) return res.send(err);
        res.send('project deleted successfully!');
    })
};