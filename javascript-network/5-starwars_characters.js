const request = require("request");
const args = process.argv.slice(2);
// slice(2) === [2:] in python
const url = "https://swapi-api.alx-tools.com/api/films/";
request(url + args[0], (error, response, body) => {
  // Convert the string to JSON
  const jsonObject = JSON.parse(body);
  const ls = jsonObject.characters;
  // console.log(ls)
  ls.forEach((element) => {
    request(element, (error, response, body) => {
      const jsonObject = JSON.parse(body);
      console.log(jsonObject.name);
    });
  });
});
