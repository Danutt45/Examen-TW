const CandidateDB = require("../models").Candidate;

const express = require("express");

const controller = {
  addCandidate: async (req, res) => {
    const candidate = {
      name: req.body.name,
      cv: req.body.cv,
      email: req.body.email,
      jobpostingId: req.body.jobpostingId,
    };
    let err = false;
    let errArr = [];

    if (candidate.name.length < 5) {
      err = true;
      errArr.push("Name must be at least 6 characters long\n");
    }
    if (candidate.cv.length < 100) {
      err = true;
      errArr.push("CV must be at least 100 characters long\n");
    }
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(candidate.email)) {
      console.log("mail bun");
    } else {
      err = true;
      errArr.push("Invalid email\n");
    }

    if (!err) {
      try {
        const newCandidate = await CandidateDB.create(candidate);
        res.status(200).send("Candidate added");
      } catch (error) {
        console.log("Error:", error);
        res.status(500).send("Error creating new Candidate!");
      }
    } else {
      res.status(400).send({ message: errArr });
    }
  },
  getAllCandidates: async (req, res) => {
    try {
      let candidates = await CandidateDB.findAll();
      res.status(200).send(candidates);
    } catch (err) {
      res.status(500).send({
        message: "Error selecting all candidates!",
      });
    }
  },
  getCandidates: async (req, res) => {
    try {
      let candidateId = req.params["id"];
      const candidates = await CandidateDB.findAll({
        where: { jobpostingId: candidateId },
      });
      res.status(200).send(candidates);
    } catch (err) {
      res.status(500).send({
        message: "Error selecting Candidate!",
      });
    }
  },

  updateCandidates: async (req, res) => {
    let candidateId = req.params["id"];
    const candidate = await CandidateDB.findOne({
      where: { id: candidateId },
    });
    candidate
      .update({
        name: req.body.name,
        cv: req.body.cv,
        email: req.body.email,
        jobpostingId: req.body.jobpostingId,
      })
      .then(() => {
        res.status(200).send({ message: "Edited candidat" });
      })
      .catch(() => {
        res.status(500).send({ message: "Error" });
      });
  },
  deleteCandidate: async (req, res) => {
    try {
      let candidateId = req.params["id"];
      const candidate = await CandidateDB.destroy({
        where: {
          id: candidateId,
        },
      });
      res.status(200).send({
        message: "Candidate" + candidateId + " deleted.",
      });
    } catch (error) {
      res.status(500).send({
        message: "Error deleting Candidate!",
      });
    }
  },
};

module.exports = controller;
