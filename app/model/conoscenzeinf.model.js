module.exports = (sequelize, Sequelize) => {
    const conoscenzeinf = sequelize.define('conoscenzeinf', {
        liv_cli: {
            type: Sequelize.STRING
        }
    });
    return conoscenzeinf;
}