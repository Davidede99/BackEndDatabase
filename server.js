var cors = require('cors');

var corsOptions = {
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
}

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json())
const db = require('./app/config/db.config.js');

//drop all and sync

// db.sequelize.sync({ force: true }).then(() => {
//     console.log('Drop and Resync with {force: true}');
// });

//only sync (remain data)

db.sequelize.sync().then(() => {
    console.log('OPERATIVE')
});

require('./app/route/customer.route.js')(app);
require('./app/route/lingua.route.js')(app);
require('./app/route/contratto.route.js')(app);
require('./app/route/titolostudio.route.js')(app);
require('./app/route/competenzelingua.route.js')(app);
require('./app/route/conoscenzeinf.route.js')(app);


// const corsOptions = {
//     origin: 'http://localhost:4200',
//     optionsSuccessStatus: 200
// }

app.use(cors(corsOptions))

var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("App listening at http://localhost:8081", host, port)
})