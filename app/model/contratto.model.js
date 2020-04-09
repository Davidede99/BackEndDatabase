module.exports = (sequelize, Sequelize) => {
    const contratto = sequelize.define('contratto', {
        des_con: {
            type: Sequelize.STRING
        }
    });
    return contratto;
}