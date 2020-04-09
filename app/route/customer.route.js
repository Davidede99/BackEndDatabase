var cors = require('cors');

var corsOptions = {
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
}

module.exports = function (app) {
    const customers = require('../controller/customer.controller.js');

    app.post('/api/customers', cors(corsOptions), customers.create);

    app.get('/api/customers', cors(corsOptions), customers.findAll);

    app.get('/api/customers/:id', cors(corsOptions), customers.findById);

    app.put('/api/customers', cors(corsOptions), customers.update);

    app.delete('/api/customers/:id', cors(corsOptions), customers.delete);
}