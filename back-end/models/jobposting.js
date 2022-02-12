const { sequelize, DataTypes } = require("./sequelize");

const Jobposting = sequelize.define("jobposting", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  descriere: DataTypes.STRING,
  deadline: DataTypes.DATE,
});

module.exports = Jobposting;
