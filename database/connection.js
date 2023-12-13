// database/connection.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './DB_Arosaje.db',
});

module.exports = sequelize;
