const express = require("express");
const router = express.Router();
const candidateController = require("../controllers/candidate");

router.post("/candidate/", candidateController.addCandidate);
router.get("/candidate", candidateController.getAllCandidates);
router.get("/candidate/:id", candidateController.getCandidates);
router.put("/candidate/:id", candidateController.updateCandidates);
router.delete("/candidate/:id", candidateController.deleteCandidate);

module.exports = router;
