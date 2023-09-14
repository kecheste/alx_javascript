const request = require("request");
const args = process.argv.slice(2);
// slice(2) === [2:] in python
request(args[0], (error, response, body) => {
  console.log("code:", response.statusCode);
});
