const { sequelize, DataTypes } = require("./sequelize");

const Candidate = sequelize.define("candidate", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  name: DataTypes.STRING,
  cv: DataTypes.STRING,
  email: DataTypes.STRING,
  jobpostingId: DataTypes.INTEGER,
});

module.exports = Candidate;
