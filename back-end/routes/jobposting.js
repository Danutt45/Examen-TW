const express = require("express");
const router = express.Router();
const jobpostingController = require("../controllers/jobposting");

router.post("/jobposting", jobpostingController.addJobPosting);
router.get("/jobposting", jobpostingController.getAllJobposting);
router.get("/jobposting/:id", jobpostingController.getOneJobposting);
router.put("/jobposting/:id", jobpostingController.updateJobposting);
router.delete("/jobposting/:id", jobpostingController.deleteJobposting);

module.exports = router;
