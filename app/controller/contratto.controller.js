const db = require('../config/db.config.js');
const Contratto = db.contratto;

exports.create = (req, res) => {
    Contratto.create(req.body).then(Contratto => {
        res.json(Contratto);
    }).catch(err => {
        console.log(err);
        res.status(500).json({ msg: "error", details: err });
    });
};

exports.findAll = (req, res) => {
    Contratto.findAll().then(Contratto => {
        res.json(Contratto);
    }).catch(err => {
        console.log(err);
        res.status(500).json({ msg: "error", details: err });
    });
};

exports.findById = (req, res) => {
    Contratto.findByPk(req.params.id).then(Contratto => {
        res.json(Contratto);
    }).catch(err => {
        console.log(err);
        res.status(500).json({ msg: "error", details: err });
    });
};

exports.update = (req, res) => {
    const id = req.body.id;
    Contratto.update(req.body, {
        where: { id: id }
    }).then(() => {
        res.status(200).json({ msg: "Updated Succesfully -> Contratto Id = " + id });
    }).catch(err => {
        console.log(err);
        res.status(500).json({ msg: "error", details: err });
    });
};

exports.delete = (req, res) => {
    const id = req.params.id;
    Contratto.destroy({
        where: { id: id }
    }).then(() => {
        res.status(200).json({ msg: "Deleted Succesfully -> Contratto Id = " + id });
    }).catch(err => {
        console.log(err);
        res.status(500).json({ msg: "error", details: err });
    })
};