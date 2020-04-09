const db = require('../config/db.config.js');
const Competenzelingua = db.competenzelingua;

exports.create = (req, res) => {
    Competenzelingua.create(req.body).then(Competenzelingua => {
        res.json(Competenzelingua);
    }).catch(err => {
        console.log(err);
        res.status(500).json({ msg: "error", details: err });
    });
};

exports.findAll = (req, res) => {
    Competenzelingua.findAll().then(Competenzelingua => {
        res.json(Competenzelingua);
    }).catch(err => {
        console.log(err);
        res.status(500).json({ msg: "error", details: err });
    });
};

exports.findById = (req, res) => {
    Competenzelingua.findByPk(req.params.id).then(Competenzelingua => {
        res.json(Competenzelingua);
    }).catch(err => {
        console.log(err);
        res.status(500).json({ msg: "error", details: err });
    });
};

exports.update = (req, res) => {
    const id = req.body.id;
    Competenzelingua.update(req.body, {
        where: { id: id }
    }).then(() => {
        res.status(200).json({ msg: "Updated Succesfully -> Competenzelingua Id = " + id });
    }).catch(err => {
        console.log(err);
        res.status(500).json({ msg: "error", details: err });
    });
};

exports.delete = (req, res) => {
    const id = req.params.id;
    Competenzelingua.destroy({
        where: { id: id }
    }).then(() => {
        res.status(200).json({ msg: "Deleted Succesfully -> Competenzelingua Id = " + id });
    }).catch(err => {
        console.log(err);
        res.status(500).json({ msg: "error", details: err });
    })
};