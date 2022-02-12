const Sequelize = require("sequelize");

const sequelize = new Sequelize("jobposting", "root", "", {
  dialect: "mysql",
  host: "localhost",
  define: {
    timestamps: true,
  },
});

module.exports = sequelize;
