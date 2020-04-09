const db = require('../config/db.config.js');
const Customer = db.customers;

exports.create = (req, res) => {
    Customer.create(req.body).then(customer => {
        res.json(customer);
    }).catch(err => {
        console.log(err);
        res.status(500).json({ msg: "error", details: err });
    });
};

exports.findAll = (req, res) => {
    Customer.findAll().then(customers => {
        res.json(customers);
    }).catch(err => {
        console.log(err);
        res.status(500).json({ msg: "error", details: err });
    });
};

exports.findById = (req, res) => {
    Customer.findByPk(req.params.id).then(customer => {
        res.json(customer);
    }).catch(err => {
        console.log(err);
        res.status(500).json({ msg: "error", details: err });
    });
};

exports.update = (req, res) => {
    const id = req.body.id;
    Customer.update(req.body, {
        where: { id: id }
    }).then(() => {
        res.status(200).json({ msg: "Updated Succesfully -> Customer Id = " + id });
    }).catch(err => {
        console.log(err);
        res.status(500).json({ msg: "error", details: err });
    });
};

exports.delete = (req, res) => {
    const id = req.params.id;
    Customer.destroy({
        where: { id: id }
    }).then(() => {
        res.status(200).json({ msg: "Deleted Succesfully -> Customer Id = " + id });
    }).catch(err => {
        console.log(err);
        res.status(500).json({ msg: "error", details: err });
    })
};