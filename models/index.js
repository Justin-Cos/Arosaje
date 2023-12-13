// models/index.js
const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './DB_Arosaje.db'
});

const User = require('./user')(sequelize, DataTypes);
const Plant = require('./plant')(sequelize, DataTypes);

const syncModels = async () => {
    try {
        await User.sync();
        await Plant.sync();
        console.log('Models synchronized successfully');
    } catch (error) {
        console.error('Error synchronizing models:', error);
        throw error;
    }
};

module.exports = {
    User,
    Plant,
    sequelize,
    syncModels,
};