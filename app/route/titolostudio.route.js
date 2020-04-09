var cors = require('cors');

var corsOptions = {
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
}

module.exports = function (app) {
    const titolostudio = require('../controller/titolostudio.controller.js');

    app.post('/api/titolostudio', cors(corsOptions), titolostudio.create);

    app.get('/api/titolostudio', cors(corsOptions), titolostudio.findAll);

    app.get('/api/titolostudio/:id', cors(corsOptions), titolostudio.findById);

    app.put('/api/titolostudio', cors(corsOptions), titolostudio.update);

    app.delete('/api/titolostudio/:id', cors(corsOptions), titolostudio.delete);
}