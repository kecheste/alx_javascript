const request = require("request");
const args = process.argv.slice(2);
// slice(2) === [2:] in python

request(
  "https://swapi-api.alx-tools.com/api/films/" + args[0],
  (error, response, body) => {
    // Convert the string to JSON
    const jsonObject = JSON.parse(body);

    console.log(jsonObject.title);
  }
);
