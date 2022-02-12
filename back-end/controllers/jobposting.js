const JobpostingDB = require("../models").Jobposting;

const express = require("express");

const controller = {
  addJobPosting: async (req, res) => {
    const jobposting = {
      descriere: req.body.descriere,
      deadline: req.body.deadline,
    };
    let err = false;
    let errArr = [];

    if (jobposting.descriere.length < 3) {
      errArr.push("Description must be at least 3 characters long\n");
      err = true;
    }
    if (!err) {
      try {
        const newJobposting = await JobpostingDB.create(jobposting);
        res.status(200).send("Job added");
      } catch (error) {
        console.log("Error:", error);
        res.status(500).send("Error creating new job!");
      }
    } else {
      res.status(400).send({ message: errArr });
    }
  },
  getAllJobposting: async (req, res) => {
    try {
      let jobpostings = await JobpostingDB.findAll();
      res.status(200).send(jobpostings);
    } catch (err) {
      res.status(500).send({
        message: "Error selecting all Jobposting!",
      });
    }
  },
  getOneJobposting: async (req, res) => {
    try {
      let jobpostingId = req.params["id"];
      const jobposting = await JobpostingDB.findOne({
        where: { id: jobpostingId },
      });
      res.status(200).send(jobposting);
    } catch (err) {
      res.status(500).send({
        message: "Error selecting JobPosting!",
      });
    }
  },

  updateJobposting: async (req, res) => {
    let jobpostingId = req.params["id"];
    const jobposting = await JobpostingDB.findOne({
      where: { id: jobpostingId },
    });
    jobposting
      .update({
        descriere: req.body.descriere,
        deadline: req.body.deadline,
      })
      .then(() => {
        res.status(200).send({ message: "Edited JobPosting" });
      })
      .catch(() => {
        res.status(500).send({ message: "Error" });
      });
  },
  deleteJobposting: async (req, res) => {
    try {
      let JobpostingId = req.params["id"];
      const jobposting = await JobpostingDB.destroy({
        where: {
          id: JobpostingId,
        },
      });
      res.status(200).send({
        message: "JOB " + jobposting + " deleted.",
      });
    } catch (error) {
      console.log("Error:", error);
      res.status(500).send({
        message: "Error deleting JobPosting!",
      });
    }
  },
};

module.exports = controller;
