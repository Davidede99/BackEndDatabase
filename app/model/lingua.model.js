module.exports = (sequelize, Sequelize) => {
    const lingua = sequelize.define('lingua', {
        des_lin : {
            type: Sequelize.STRING
        }
    });
    return lingua;
}