module.exports = (sequelize, Sequelize) => {
    const competenzelingua = sequelize.define('competenzelingua', {
        liv_cli: {
            type: Sequelize.STRING
        }
    });
    return competenzelingua;
}