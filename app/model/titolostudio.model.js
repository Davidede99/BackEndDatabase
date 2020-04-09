module.exports = (sequelize, Sequelize) => {
    const titolostudio = sequelize.define('titolostudio', {
        des_tit: {
            type: Sequelize.STRING
        }
    });
    return titolostudio;
}