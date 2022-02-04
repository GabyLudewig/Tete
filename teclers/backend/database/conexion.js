const Sequelize = require('sequelize');

const sequelize = new Sequelize('tete_tecla', 'root', null, {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = sequelize;