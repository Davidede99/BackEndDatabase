const db = require('../config/db.config.js');
const Conoscenzeinf = db.conoscenzeinf;

exports.create = (req, res) => {
    Conoscenzeinf.create(req.body).then(Conoscenzeinf => {
        res.json(Conoscenzeinf);
    }).catch(err => {
        console.log(err);
        res.status(500).json({ msg: "error", details: err });
    });
};

exports.findAll = (req, res) => {
    Conoscenzeinf.findAll().then(Conoscenzeinf => {
        res.json(Conoscenzeinf);
    }).catch(err => {
        console.log(err);
        res.status(500).json({ msg: "error", details: err });
    });
};

exports.findById = (req, res) => {
    Conoscenzeinf.findByPk(req.params.id).then(Conoscenzeinf => {
        res.json(Conoscenzeinf);
    }).catch(err => {
        console.log(err);
        res.status(500).json({ msg: "error", details: err });
    });
};

exports.update = (req, res) => {
    const id = req.body.id;
    Conoscenzeinf.update(req.body, {
        where: { id: id }
    }).then(() => {
        res.status(200).json({ msg: "Updated Succesfully -> Conoscenzeinf Id = " + id });
    }).catch(err => {
        console.log(err);
        res.status(500).json({ msg: "error", details: err });
    });
};

exports.delete = (req, res) => {
    const id = req.params.id;
    Conoscenzeinf.destroy({
        where: { id: id }
    }).then(() => {
        res.status(200).json({ msg: "Deleted Succesfully -> Conoscenzeinf Id = " + id });
    }).catch(err => {
        console.log(err);
        res.status(500).json({ msg: "error", details: err });
    })
};