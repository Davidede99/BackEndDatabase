const env = require('./env.js');
const Sequelize = require('sequelize');
const sequelize = new Sequelize(env.database,env.username,env.password, {
    host: env.host,
    dialect: env.dialect,
    operatorsAliases: false,
    pool: {
        max: env.max,
        min: env.pool.min,
        acquire: env.pool.acquire,
        idle: env.pool.idle
    }
});
const db =  {}
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.customers = require('../model/customer.model.js')(sequelize,Sequelize);
db.contratto = require('../model/contratto.model.js')(sequelize,Sequelize);
db.titolostudio = require('../model/titolostudio.model.js')(sequelize,Sequelize);
db.lingua = require('../model/lingua.model.js')(sequelize,Sequelize);
db.competenzelingua = require('../model/competenzelingua.model.js')(sequelize,Sequelize);
db.conoscenzeinf = require('../model/conoscenzeinf.model.js')(sequelize,Sequelize);

module.exports = db;