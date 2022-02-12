"use strict";

const Jobposting = require("./jobposting");
const Candidate = require("./candidate");
const sequelizeHandle = require("./sequelize").sequelize;

Candidate.belongsTo(Jobposting, {
  as: "jobposting",
  foreignKey: "jobpostingId",
});

Jobposting.hasMany(Candidate, {
  onDelete: "cascade",
});

module.exports = {
  Jobposting,
  Candidate,
  sequelizeHandle,
};
