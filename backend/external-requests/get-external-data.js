const https = require("https");

const getExternalData = (extPath) => {
  // return new Promise(function (resolve, reject) {

  return new Promise(function (resolve, reject) {
    const options = {
      hostname: "jobs.ch",
      port: 443,
      path: extPath,
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

module.exports = getExternalData;
