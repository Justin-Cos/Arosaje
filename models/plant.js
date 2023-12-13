// plant.js
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const Plant = sequelize.define('Plant', {
        plantID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        ownerID: {
            type: DataTypes.INTEGER,
            allowNull: true, 
        },
        plantName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        location: {
            type: DataTypes.STRING,
        },
    });

    return Plant;
};
