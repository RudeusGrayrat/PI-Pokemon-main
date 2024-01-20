const { DataTypes } = require("sequelize")
module.exports = (sequelize) => {
    sequelize.define("Type", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allownNull: false,
        }
    },
        {
            timestamps: false
        }
    )
}