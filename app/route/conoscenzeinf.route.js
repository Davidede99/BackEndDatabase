var cors = require('cors');

var corsOptions = {
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
}

module.exports = function (app) {
    const conoscenzeinf = require('../controller/conoscenzeinf.controller.js');

    app.post('/api/conoscenzeinf', cors(corsOptions), conoscenzeinf.create);

    app.get('/api/conoscenzeinf', cors(corsOptions), conoscenzeinf.findAll);

    app.get('/api/conoscenzeinf/:id', cors(corsOptions), conoscenzeinf.findById);

    app.put('/api/conoscenzeinf', cors(corsOptions), conoscenzeinf.update);

    app.delete('/api/conoscenzeinf/:id', cors(corsOptions), conoscenzeinf.delete);
}