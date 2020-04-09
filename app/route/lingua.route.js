var cors = require('cors');

var corsOptions = {
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
}

module.exports = function (app) {
    const lingua = require('../controller/lingua.controller.js');

    app.post('/api/lingua', cors(corsOptions), lingua.create);

    app.get('/api/lingua', cors(corsOptions), lingua.findAll);

    app.get('/api/lingua/:id', cors(corsOptions), lingua.findById);

    app.put('/api/lingua', cors(corsOptions), lingua.update);

    app.delete('/api/lingua/:id', cors(corsOptions), lingua.delete);
}