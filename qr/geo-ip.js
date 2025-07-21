const ipinfo = require("ipinfo");

ipinfo("8.8.8.8", (err, cLoc) => {
  if (err) {
    console.error(err);
  } else {
    console.log(cLoc.city, cLoc.region, cLoc.country, cLoc.loc); // e.g., "Mountain View", "California", "US", "37.3860,-122.0838"
  }
});