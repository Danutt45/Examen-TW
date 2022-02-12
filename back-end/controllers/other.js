const sequelizeHandle = require("../models").sequelizeHandle;

const controller = {
  reset: (req, res) => {
    sequelizeHandle
      .sync({ force: true })
      .then(() => {
        res.status(201).send({
          message: "Database reset",
        });
      })
      .catch(() => {
        res.status(500).send({
          message: "Reset DB error",
        });
      });
  },
};

module.exports = controller;
