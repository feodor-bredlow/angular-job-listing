const express = require("express");
const simpleJobs = require("./job-list-simplified-copy");
const jobDetail = require("./job-data-simplified");
const getExternalData = require("./external-requests/get-external-data");

const app = express();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});

app.get("/api/getJobs", async (req, res) => {
  const jobParm = req.query.job ? req.query.job : "";
  const placeParam = req.query.place ? req.query.place : "";

  const dataTest = await getExternalData(
    `https://www.jobs.ch/api/v1/public/search?location=${placeParam}&query=${jobParm}&rows=20`
  );
  res.status(200).json(JSON.parse(dataTest.toString("utf8")));
});

app.get("/api/getJobDetails", async (req, res) => {
  const jobIdParam = req.query.jobId;

  const dataTest = await getExternalData(
    `https://www.jobs.ch/api/v1/public/search/job/${jobIdParam}`
  );

  res.status(200).json(JSON.parse(dataTest.toString("utf8")));
});

module.exports = app;
