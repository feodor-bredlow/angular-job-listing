const express = require("express");
const simpleJobs = require("./job-list-simplified-copy");
const jobDetail = require("./job-data-simplified");
const getJobListExternal = require("./get-job-list-external");

const app = express();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});

app.get("/api/getJobs", (req, res) => {
  const jobs = simpleJobs;
  res.status(200).json(jobs);
});

app.get("/api/getJobsReal", async (req, res) => {
  const dataTest = await getJobListExternal();

  res.status(200).json(JSON.parse(dataTest.toString("utf8")));
});

app.get("/api/getJobDetails", (req, res) => {
  const jobs = jobDetail;
  res.status(200).json(jobDetail);
});

module.exports = app;
