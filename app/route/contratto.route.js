var cors = require('cors');

var corsOptions = {
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
}

module.exports = function (app) {
    const contratto = require('../controller/contratto.controller.js');

    app.post('/api/contratto', cors(corsOptions), contratto.create);

    app.get('/api/contratto', cors(corsOptions), contratto.findAll);

    app.get('/api/contratto/:id', cors(corsOptions), contratto.findById);

    app.put('/api/contratto', cors(corsOptions), contratto.update);

    app.delete('/api/contratto/:id', cors(corsOptions), contratto.delete);
}