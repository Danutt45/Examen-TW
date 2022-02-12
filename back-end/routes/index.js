const express = require("express");
const router = express.Router();
const otherRouter = require("./other");
const jobpostingRouter = require("./jobposting");
const candidateRouter = require("./candidate");

// if (process.env.NODE_ENV !== "production") {

// }
router.use("/", otherRouter);
router.use("/", jobpostingRouter);
router.use("/", candidateRouter);

module.exports = router;
