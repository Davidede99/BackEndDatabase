const db = require('../config/db.config.js');
const Lingua = db.lingua;

exports.create = (req, res) => {
    Lingua.create(req.body).then(Lingua => {
        res.json(Lingua);
    }).catch(err => {
        console.log(err);
        res.status(500).json({ msg: "error", details: err });
    });
};

exports.findAll = (req, res) => {
    Lingua.findAll().then(Linguas => {
        res.json(Linguas);
    }).catch(err => {
        console.log(err);
        res.status(500).json({ msg: "error", details: err });
    });
};

exports.findById = (req, res) => {
    Lingua.findByPk(req.params.id).then(Lingua => {
        res.json(Lingua);
    }).catch(err => {
        console.log(err);
        res.status(500).json({ msg: "error", details: err });
    });
};

exports.update = (req, res) => {
    const id = req.body.id;
    Lingua.update(req.body, {
        where: { id: id }
    }).then(() => {
        res.status(200).json({ msg: "Updated Succesfully -> Lingua Id = " + id });
    }).catch(err => {
        console.log(err);
        res.status(500).json({ msg: "error", details: err });
    });
};

exports.delete = (req, res) => {
    const id = req.params.id;
    Lingua.destroy({
        where: { id: id }
    }).then(() => {
        res.status(200).json({ msg: "Deleted Succesfully -> Lingua Id = " + id });
    }).catch(err => {
        console.log(err);
        res.status(500).json({ msg: "error", details: err });
    })
};