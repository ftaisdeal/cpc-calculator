const ipinfo = require("ipinfo");

function getLocationInfo(ipAddress) {
  return new Promise((resolve, reject) => {
    ipinfo(ipAddress, (err, cLoc) => {
      if (err) {
        reject(err);
      } else {
        // Return array of location information
        resolve([cLoc.city, cLoc.region, cLoc.country, cLoc.loc]);
      }
    });
  });
}

module.exports = getLocationInfo;