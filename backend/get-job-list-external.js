const https = require("https");

const getJobListExternal = () => {
  // return new Promise(function (resolve, reject) {

  return new Promise(function (resolve, reject) {
    const options = {
      hostname: "jobs.ch",
      port: 443,
      path: "https://www.jobs.ch/api/v1/public/search?location=Bern&query=Monteur&rows=20",
      method: "GET",
    };

    var data = [];

    const externalReq = https.request(options, (extRes) => {
      extRes
        .on("data", function (chunk) {
          data.push(chunk);
        })
        .on("end", function () {
          var buffer = Buffer.concat(data);
          resolve(buffer);
        });
    });

    externalReq.on("error", (error) => {
      console.error(error);
    });

    externalReq.end();
  });
};

module.exports = getJobListExternal;
