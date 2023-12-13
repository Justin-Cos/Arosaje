// models/careSession.js
const { DataTypes } = require('sequelize');
const sequelize = require('../database/connection');

const CareSession = sequelize.define('CareSession', {
    sessionID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    plantID: {
        type: DataTypes.INTEGER,
    },
    caretakerID: {
        type: DataTypes.INTEGER,
    },
    date: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
    photoPath: {
        type: DataTypes.STRING,
    },
    comments: {
        type: DataTypes.TEXT,
    },
}, {
    sequelize, // Pass the sequelize instance explicitly
});

module.exports = CareSession;