var cors = require('cors');

var corsOptions = {
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
}

module.exports = function (app) {
    const competenzelingua = require('../controller/competenzelingua.controller.js');

    app.post('/api/competenzelingua', cors(corsOptions), competenzelingua.create);

    app.get('/api/competenzelingua', cors(corsOptions), competenzelingua.findAll);

    app.get('/api/competenzelingua/:id', cors(corsOptions), competenzelingua.findById);

    app.put('/api/competenzelingua', cors(corsOptions), competenzelingua.update);

    app.delete('/api/competenzelingua/:id', cors(corsOptions), competenzelingua.delete);
}