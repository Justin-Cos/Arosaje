// models/botanistTip.js
const { DataTypes } = require('sequelize');
const sequelize = require('../database/connection');

const BotanistTip = sequelize.define('BotanistTip', {
    tipID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    plantID: {
        type: DataTypes.INTEGER,
    },
    botanistID: {
        type: DataTypes.INTEGER,
    },
    tip: {
        type: DataTypes.TEXT,
    },
}, {
    sequelize, // Pass the sequelize instance explicitly
});

module.exports = BotanistTip;