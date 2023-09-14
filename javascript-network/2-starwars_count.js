const request = require("request");
const args = process.argv.slice(2);
// slice(2) === [2:] in python

request(args[0], (error, response, body) => {
  // Convert the string to JSON
  const jsonObject = JSON.parse(body);
  var count = 0;
  const ls = jsonObject.results;
  const char = "Wedge Antilles";
  ls.forEach((element) => {
    // console.log(element)
    const chars = element.characters;
    chars.forEach((ele) => {
      const id = ele.split("/")[5];
      id === "18" && count++;
    });
  });
  // characters
  console.log(count);
});
